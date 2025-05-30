n.d(t, {
    fz: () => C,
    ge: () => w,
    gf: () => L,
    r5: () => D,
    rk: () => P,
    wV: () => R
}),
    n(415506);
var r = n(512722),
    i = n.n(r),
    a = n(392711),
    o = n(259443),
    s = n(46973),
    l = n(570140),
    c = n(314897),
    u = n(131951),
    d = n(626135),
    f = n(460366),
    _ = n(358085),
    p = n(960048),
    h = n(998502),
    m = n(743498),
    g = n(709706),
    E = n(750180),
    b = n(981631);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = new o.Yd('VoiceFilterActionCreators'),
    T = 1000,
    A = (0, a.debounce)(
        () => {
            l.Z.dispatch({ type: 'VOICE_FILTER_LAGGING' });
        },
        T,
        { leading: !0 }
    ),
    N = !1;
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        { url: n, modelId: r, fileName: i } = e,
        a = g.Z.getModelState(r);
    if ((null == a ? void 0 : a.status) === E.L.DOWNLOADED)
        return void l.Z.dispatch(
            I(O({ type: 'VOICE_FILTER_FILE_READY' }, e), {
                fetchedFromNetwork: !1,
                analyticsContext: t
            })
        );
    (null == a ? void 0 : a.status) !== E.L.DOWNLOADING &&
        (l.Z.dispatch(O({ type: 'VOICE_FILTER_DOWNLOAD_STARTED' }, e)),
        h.ZP.downloadVoiceFilterFile(n, i, (t) => {
            let { downloadedBytes: n, totalBytes: r } = t;
            l.Z.dispatch(
                I(O({ type: 'VOICE_FILTER_DOWNLOAD_PROGRESS' }, e), {
                    downloadedBytes: n,
                    totalBytes: r
                })
            );
        })
            .then((n) => {
                l.Z.dispatch(
                    I(O({ type: 'VOICE_FILTER_FILE_READY' }, e), {
                        fetchedFromNetwork: n.fetchedFromNetwork,
                        analyticsContext: t
                    })
                );
            })
            .catch((t) => {
                if (null == t ? void 0 : t.USER_CANCELED_DOWNLOAD) S.info('User canceled the download for Voice Filter dependency', e);
                else {
                    let n = 'Failed to download voice filter dependency';
                    S.error(n, O({ reason: t }, e)),
                        d.default.track(b.rMx.VOICE_FILTER_ERROR, {
                            error_message: n,
                            cause: (0, f.X)(Error(t))
                        }),
                        p.Z.captureException(Error(n, { cause: t }), {
                            tags: { modelId: r },
                            extra: { reason: t }
                        });
                }
                l.Z.dispatch(I(O({ type: 'VOICE_FILTER_DOWNLOAD_FAILED' }, e), { error: t }));
            }));
}
async function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (!g.Z.isNativeModuleLoaded()) return void S.warn('Voice Filter apply ignored, module not loaded.');
    let n = performance.now();
    try {
        let r = h.ZP.getVoiceFilters();
        await r.setVoiceFilter({ name: e }),
            l.Z.dispatch({
                type: 'VOICE_FILTER_APPLIED',
                voiceFilterId: e,
                analyticsContext: t,
                activationDurationMs: performance.now() - n
            });
    } catch (t) {
        S.error('failed to set voice filter', t),
            l.Z.dispatch({
                type: 'VOICE_FILTER_APPLY_FAILED',
                voiceFilterId: e,
                error: t
            });
    }
}
async function R() {
    if (!g.Z.isNativeModuleLoaded()) return void S.info('Voice Filter catalog refresh ignored, module not loaded.');
    if (N) return;
    let e = c.default.getToken(),
        t = d.default.getSuperPropertiesBase64();
    i()(null != e, 'Authentication token must be available'), i()(null != t, 'Analytics superProperties must be available');
    try {
        N = !0;
        let n = h.ZP.getVoiceFilters(),
            r = await n.fetchCatalog(e, t),
            i = JSON.parse(r);
        if (!i.models) throw Error('Voice filters catalog repsonse is empty');
        await l.Z.dispatch({
            type: 'VOICE_FILTER_CATALOG_FETCH_SUCCESS',
            catalog: i
        });
    } catch (e) {
        S.warn('Failed to refresh voice filters catalog: '.concat(e.message)),
            d.default.track(b.rMx.VOICE_FILTER_ERROR, {
                error_message: 'Failed to refresh voice filters catalog',
                cause: (0, f.X)(e)
            }),
            p.Z.captureException(e),
            await l.Z.dispatch({ type: 'VOICE_FILTER_CATALOG_FETCH_FAILED' });
    } finally {
        N = !1;
    }
}
function w() {
    l.Z.dispatch({ type: 'VOICE_FILTER_DOWNLOAD_CANCELED' });
}
async function D() {
    if (!(g.Z.isNativeModuleLoaded() || g.Z.isNativeModuleLoading()) && !__OVERLAY__) {
        if (!(0, _.isWindows)() && !(0, _.isMac)())
            return void l.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: E.O.UNSUPPORTED
            });
        try {
            l.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: E.O.LOADING
            }),
                await h.ZP.ensureModule('discord_voice_filters');
            let t = h.ZP.getVoiceFilters();
            await t.setupResources(),
                void 0 !== t.setVoiceFilterLaggingCallback && (await t.setVoiceFilterLaggingCallback(A)),
                void 0 !== t.setVoiceFilterReadyCallback &&
                    (await t.setVoiceFilterReadyCallback((e) => {
                        l.Z.dispatch({
                            type: 'VOICE_FILTER_READY',
                            name: e
                        });
                    })),
                await l.Z.dispatch({
                    type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                    state: E.O.LOADED
                }),
                await R();
            let n = u.Z.getMostRecentlyRequestedVoiceFilter();
            if (null != n) {
                var e;
                (null == (e = g.Z.getVoiceFilter(n)) ? void 0 : e.available) !== !0 ? (0, m.v6)(null) : (0, m.v6)(n);
            }
            u.Z.getMediaEngine().on(s.aB.VoiceFiltersFailed, (e) => {
                S.warn('Voice Filters failed in process: '.concat(e)),
                    d.default.track(b.rMx.VOICE_FILTER_ERROR, {
                        error_message: 'Voice Filters failed in process',
                        cause: (0, f.X)(Error(e))
                    }),
                    p.Z.captureException(Error('Voice Filters failed in process', { cause: e }));
            });
        } catch (e) {
            S.warn('Failed to load Voice Filters module: '.concat(e.message)),
                d.default.track(b.rMx.VOICE_FILTER_ERROR, {
                    error_message: 'Failed to load Voice Filters module',
                    cause: (0, f.X)(e)
                }),
                p.Z.captureException(e),
                l.Z.dispatch({
                    type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                    state: E.O.FAILED
                });
        }
    }
}
function L(e) {
    l.Z.dispatch({
        type: 'VOICE_FILTER_SET_MODEL_STATE',
        modelState: e
    });
}
