n.d(t, {
    fz: () => P,
    ge: () => k,
    gf: () => j,
    r5: () => M,
    rk: () => w,
    wV: () => x
}),
    n(415506);
var r = n(512722),
    i = n.n(r),
    a = n(392711),
    o = n(259443),
    s = n(544891),
    l = n(46973),
    c = n(570140),
    u = n(314897),
    d = n(131951),
    f = n(626135),
    _ = n(460366),
    p = n(358085),
    h = n(960048),
    m = n(998502),
    g = n(743498),
    E = n(111677),
    b = n(709706),
    y = n(750180),
    O = n(981631);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = new o.Yd('VoiceFilterActionCreators'),
    N = 1000,
    C = (0, a.debounce)(
        () => {
            c.Z.dispatch({ type: 'VOICE_FILTER_LAGGING' });
        },
        N,
        { leading: !0 }
    ),
    R = !1;
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        { url: n, modelId: r, fileName: i } = e,
        a = b.Z.getModelState(r);
    if ((null == a ? void 0 : a.status) === y.L.DOWNLOADED)
        return void c.Z.dispatch(
            T(I({ type: 'VOICE_FILTER_FILE_READY' }, e), {
                fetchedFromNetwork: !1,
                analyticsContext: t
            })
        );
    (null == a ? void 0 : a.status) !== y.L.DOWNLOADING &&
        (c.Z.dispatch(I({ type: 'VOICE_FILTER_DOWNLOAD_STARTED' }, e)),
        m.ZP.downloadVoiceFilterFile(n, i, (t) => {
            let { downloadedBytes: n, totalBytes: r } = t;
            c.Z.dispatch(
                T(I({ type: 'VOICE_FILTER_DOWNLOAD_PROGRESS' }, e), {
                    downloadedBytes: n,
                    totalBytes: r
                })
            );
        })
            .then((n) => {
                c.Z.dispatch(
                    T(I({ type: 'VOICE_FILTER_FILE_READY' }, e), {
                        fetchedFromNetwork: n.fetchedFromNetwork,
                        analyticsContext: t
                    })
                );
            })
            .catch((t) => {
                if (null == t ? void 0 : t.USER_CANCELED_DOWNLOAD) A.info('User canceled the download for Voice Filter dependency', e);
                else {
                    let n = 'Failed to download voice filter dependency';
                    A.error(n, I({ reason: t }, e)),
                        f.default.track(O.rMx.VOICE_FILTER_ERROR, {
                            error_message: n,
                            cause: (0, _.X)(Error(t))
                        }),
                        h.Z.captureException(Error(n, { cause: t }), {
                            tags: { modelId: r },
                            extra: { reason: t }
                        });
                }
                c.Z.dispatch(T(I({ type: 'VOICE_FILTER_DOWNLOAD_FAILED' }, e), { error: t }));
            }));
}
async function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    await M();
    let n = performance.now();
    try {
        let r = m.ZP.getVoiceFilters();
        await r.setVoiceFilter({ name: e }),
            c.Z.dispatch({
                type: 'VOICE_FILTER_APPLIED',
                voiceFilterId: e,
                analyticsContext: t,
                activationDurationMs: performance.now() - n
            });
    } catch (t) {
        A.error('failed to set voice filter', t),
            c.Z.dispatch({
                type: 'VOICE_FILTER_APPLY_FAILED',
                voiceFilterId: e,
                error: t
            });
    }
}
async function D(e) {
    if (null == e.getCatalogNonce || null == e.getModuleVersion || null == e.getRequestedModelIds || null == e.setCatalog) throw Error('Voice filters signed catalog is not supported');
    let t = e.getCatalogNonce(),
        n = await s.tn.get({
            url: O.ANM.VOICE_FILTERS_CATALOG,
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
    await e.setCatalog(r, a),
        await c.Z.dispatch({
            type: 'VOICE_FILTER_CATALOG_FETCH_SUCCESS',
            catalog: i
        });
}
async function L(e) {
    let t = u.default.getToken(),
        n = f.default.getSuperPropertiesBase64();
    i()(null != t, 'Authentication token must be available'), i()(null != n, 'Analytics superProperties must be available');
    let r = JSON.parse(await e.fetchCatalog(t, n));
    if (!r.models) throw Error('Voice filters catalog response is empty');
    await c.Z.dispatch({
        type: 'VOICE_FILTER_CATALOG_FETCH_SUCCESS',
        catalog: r
    });
}
async function x() {
    if (!b.Z.isNativeModuleLoaded()) return void A.info('Voice Filter catalog refresh ignored, module not loaded.');
    if (!R)
        try {
            R = !0;
            let e = m.ZP.getVoiceFilters(),
                t = null != e.getCatalogNonce && null != e.getModuleVersion && null != e.getRequestedModelIds && null != e.setCatalog;
            (0, E.t)({
                location: 'refreshVoiceFiltersCatalog',
                autoTrackExposure: !0,
                disable: !t
            })
                ? await D(e)
                : await L(e);
        } catch (e) {
            A.warn('Failed to refresh voice filters catalog: '.concat(e.message)),
                f.default.track(O.rMx.VOICE_FILTER_ERROR, {
                    error_message: 'Failed to refresh voice filters catalog',
                    cause: (0, _.X)(e)
                }),
                h.Z.captureException(e),
                await c.Z.dispatch({ type: 'VOICE_FILTER_CATALOG_FETCH_FAILED' });
        } finally {
            R = !1;
        }
}
function k() {
    c.Z.dispatch({ type: 'VOICE_FILTER_DOWNLOAD_CANCELED' });
}
async function M() {
    if (!(b.Z.isNativeModuleLoaded() || b.Z.isNativeModuleLoading()) && !__OVERLAY__) {
        if (!(0, p.isWindows)() && !(0, p.isMac)())
            return void c.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: y.O.UNSUPPORTED
            });
        try {
            c.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: y.O.LOADING
            }),
                await m.ZP.ensureModule('discord_voice_filters');
            let t = m.ZP.getVoiceFilters();
            await t.setupResources(),
                void 0 !== t.setVoiceFilterLaggingCallback && (await t.setVoiceFilterLaggingCallback(C)),
                void 0 !== t.setVoiceFilterReadyCallback &&
                    (await t.setVoiceFilterReadyCallback((e) => {
                        c.Z.dispatch({
                            type: 'VOICE_FILTER_READY',
                            name: e
                        });
                    })),
                await c.Z.dispatch({
                    type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                    state: y.O.LOADED
                }),
                await x();
            let n = d.Z.getMostRecentlyRequestedVoiceFilter();
            if (null != n) {
                var e;
                (null == (e = b.Z.getVoiceFilter(n)) ? void 0 : e.available) !== !0 ? (0, g.v6)(null) : (0, g.v6)(n);
            }
            d.Z.getMediaEngine().on(l.aB.VoiceFiltersFailed, (e) => {
                A.warn('Voice Filters failed in process: '.concat(e)),
                    f.default.track(O.rMx.VOICE_FILTER_ERROR, {
                        error_message: 'Voice Filters failed in process',
                        cause: (0, _.X)(Error(e))
                    }),
                    h.Z.captureException(Error('Voice Filters failed in process', { cause: e }));
            });
        } catch (e) {
            A.warn('Failed to load Voice Filters module: '.concat(e.message)),
                f.default.track(O.rMx.VOICE_FILTER_ERROR, {
                    error_message: 'Failed to load Voice Filters module',
                    cause: (0, _.X)(e)
                }),
                h.Z.captureException(e),
                c.Z.dispatch({
                    type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                    state: y.O.FAILED
                });
        }
    }
}
function j(e) {
    c.Z.dispatch({
        type: 'VOICE_FILTER_SET_MODEL_STATE',
        modelState: e
    });
}
