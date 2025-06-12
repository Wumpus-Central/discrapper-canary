n.d(t, {
    fz: () => x,
    ge: () => B,
    r5: () => V,
    rk: () => M,
    wV: () => G
}),
    n(388685),
    n(415506),
    n(457542);
var r = n(512722),
    i = n.n(r),
    a = n(392711),
    o = n(259443),
    s = n(544891),
    l = n(46973),
    c = n(283693),
    u = n(570140),
    d = n(314897),
    _ = n(131951),
    f = n(626135),
    p = n(460366),
    h = n(358085),
    m = n(960048),
    g = n(998502),
    E = n(743498),
    b = n(111677),
    y = n(709706),
    O = n(750180),
    v = n(547614),
    I = n(999224),
    T = n(981631);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = new o.Yd('VoiceFilterActionCreators'),
    P = 1000,
    w = (0, a.debounce)(
        () => {
            u.Z.dispatch({ type: 'VOICE_FILTER_LAGGING' });
        },
        P,
        { leading: !0 }
    ),
    D = !1,
    L = new Map();
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        { url: n, modelId: r, fileName: i } = e,
        a = y.Z.getModelState(r),
        o = L.get(r);
    if (null != o) return o;
    if ((null == a ? void 0 : a.status) === O.L.DOWNLOADED) return Promise.resolve();
    if ((null == a ? void 0 : a.status) === O.L.DOWNLOADING) return Promise.reject(Error('Voice filter model is downloading but not in active downloads map'));
    u.Z.dispatch(A({ type: 'VOICE_FILTER_DOWNLOAD_STARTED' }, e));
    let s = g.ZP.downloadVoiceFilterFile(n, i, (t) => {
        let { downloadedBytes: n, totalBytes: r } = t;
        u.Z.dispatch(
            C(A({ type: 'VOICE_FILTER_DOWNLOAD_PROGRESS' }, e), {
                downloadedBytes: n,
                totalBytes: r
            })
        );
    })
        .then((n) => {
            if (n.fetchedFromNetwork) {
                var i, a;
                f.default.track(T.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                    active_voice_filter_id: null != (i = _.Z.getActiveVoiceFilter()) ? i : null,
                    success: !0,
                    voice_filter_id: e.voiceFilterId,
                    model_id: r,
                    reason: null != (a = null == t ? void 0 : t.reason) ? a : null
                });
            }
            u.Z.dispatch(C(A({ type: 'VOICE_FILTER_FILE_READY' }, e), { analyticsContext: t }));
        })
        .catch((t) => {
            if (null == t ? void 0 : t.USER_CANCELED_DOWNLOAD) R.info('User canceled the download for Voice Filter dependency', e);
            else {
                let n = 'Failed to download voice filter dependency';
                R.error(n, A({ reason: t }, e)),
                    f.default.track(T.rMx.VOICE_FILTER_ERROR, {
                        error_message: n,
                        cause: (0, p.X)(Error(t))
                    }),
                    m.Z.captureException(Error(n, { cause: t }), {
                        tags: { modelId: r },
                        extra: { reason: t }
                    });
            }
            u.Z.dispatch(C(A({ type: 'VOICE_FILTER_DOWNLOAD_FAILED' }, e), { error: t }));
        })
        .finally(() => {
            L.delete(r);
        });
    return L.set(r, s), s;
}
async function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    await V();
    let n = performance.now();
    try {
        let r = g.ZP.getVoiceFilters();
        R.info('Setting voice filter in native module:', e),
            await r.setVoiceFilter({ name: e }),
            u.Z.dispatch({
                type: 'VOICE_FILTER_APPLIED',
                voiceFilterId: e,
                analyticsContext: t,
                activationDurationMs: performance.now() - n
            });
    } catch (t) {
        R.error('failed to set voice filter', t),
            u.Z.dispatch({
                type: 'VOICE_FILTER_APPLY_FAILED',
                voiceFilterId: e,
                error: t
            });
    }
}
async function k(e) {
    if (null == e.getCatalogNonce || null == e.getModuleVersion || null == e.getRequestedModelIds || null == e.setCatalog) throw Error('Voice filters signed catalog is not supported');
    let t = e.getCatalogNonce(),
        n = await s.tn.get({
            url: T.ANM.VOICE_FILTERS_CATALOG,
            query: {
                vfm_version: e.getModuleVersion(),
                models: e.getRequestedModelIds().join(','),
                nonce: t
            },
            rejectWithError: !0
        }),
        r = n.text,
        i = n.body,
        a = n.headers['x-discord-catalog-signature'];
    if (null == i.models) throw Error('Voice filters catalog response is empty');
    if (null == a) throw Error('Voice filters catalog signature is missing');
    return await e.setCatalog(r, a), i;
}
async function j(e) {
    let t = d.default.getToken(),
        n = f.default.getSuperPropertiesBase64();
    i()(null != t, 'Authentication token must be available'), i()(null != n, 'Analytics superProperties must be available');
    let r = JSON.parse(await e.fetchCatalog(t, n));
    if (!r.models) throw Error('Voice filters catalog response is empty');
    return r;
}
async function U(e) {
    if (!g.ZP.canCheckVoiceFilterFilesExist()) return;
    let t = Object.keys(e.models).map((e) => ({
            id: e,
            fileName: (0, I.i)(e)
        })),
        n = await g.ZP.checkVoiceFilterFilesExist(t),
        r = {};
    for (let { id: e, exists: t } of n) r[e] = { status: t ? O.L.DOWNLOADED : O.L.MISSING };
    let i = t.map((e) => e.fileName);
    return (0, c.dZ)(i) && (await (0, v.A)(i)), r;
}
async function G() {
    if (!y.Z.isNativeModuleLoaded()) return void R.info('Voice Filter catalog refresh ignored, module not loaded.');
    if (!D)
        try {
            let e;
            D = !0;
            let t = g.ZP.getVoiceFilters(),
                n = null != t.getCatalogNonce && null != t.getModuleVersion && null != t.getRequestedModelIds && null != t.setCatalog;
            e = (0, b.t)({
                location: 'refreshVoiceFiltersCatalog',
                autoTrackExposure: !0,
                disable: !n
            })
                ? await k(t)
                : await j(t);
            let r = null == y.Z.getCatalogLastFetchTime() ? await U(e) : void 0;
            await u.Z.dispatch({
                type: 'VOICE_FILTER_CATALOG_FETCH_SUCCESS',
                catalog: e,
                initialModelState: r
            });
        } catch (e) {
            R.warn('Failed to refresh voice filters catalog: '.concat(e.message)),
                f.default.track(T.rMx.VOICE_FILTER_ERROR, {
                    error_message: 'Failed to refresh voice filters catalog',
                    cause: (0, p.X)(e)
                }),
                m.Z.captureException(e),
                await u.Z.dispatch({ type: 'VOICE_FILTER_CATALOG_FETCH_FAILED' });
        } finally {
            D = !1;
        }
}
function B() {
    u.Z.dispatch({ type: 'VOICE_FILTER_DOWNLOAD_CANCELED' });
}
async function V() {
    if (!(y.Z.isNativeModuleLoaded() || y.Z.isNativeModuleLoading()) && !__OVERLAY__) {
        if (!(0, h.isWindows)() && !(0, h.isMac)())
            return void u.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: O.O.UNSUPPORTED
            });
        try {
            u.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: O.O.LOADING
            }),
                await g.ZP.ensureModule('discord_voice_filters');
            let t = g.ZP.getVoiceFilters();
            await t.setupResources(),
                void 0 !== t.setVoiceFilterLaggingCallback && (await t.setVoiceFilterLaggingCallback(w)),
                void 0 !== t.setVoiceFilterReadyCallback &&
                    (await t.setVoiceFilterReadyCallback((e) => {
                        u.Z.dispatch({
                            type: 'VOICE_FILTER_READY',
                            name: e
                        });
                    })),
                await u.Z.dispatch({
                    type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                    state: O.O.LOADED
                }),
                await G();
            let n = _.Z.getMostRecentlyRequestedVoiceFilter();
            if (null != n) {
                var e;
                (null == (e = y.Z.getVoiceFilter(n)) ? void 0 : e.available) !== !0 ? (0, E.v6)(null) : (0, E.v6)(n);
            }
            _.Z.getMediaEngine().on(l.aB.VoiceFiltersFailed, (e) => {
                R.warn('Voice Filters failed in process: '.concat(e)),
                    f.default.track(T.rMx.VOICE_FILTER_ERROR, {
                        error_message: 'Voice Filters failed in process',
                        cause: (0, p.X)(Error(e))
                    }),
                    m.Z.captureException(Error('Voice Filters failed in process', { cause: e }));
            });
        } catch (e) {
            R.warn('Failed to load Voice Filters module: '.concat(e.message)),
                f.default.track(T.rMx.VOICE_FILTER_ERROR, {
                    error_message: 'Failed to load Voice Filters module',
                    cause: (0, p.X)(e)
                }),
                m.Z.captureException(e),
                u.Z.dispatch({
                    type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                    state: O.O.FAILED
                });
        }
    }
}
