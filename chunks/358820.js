n.d(t, {
    fz: () => T,
    ge: () => C,
    r5: () => R,
    rk: () => N,
    wV: () => A
}),
    n(415506);
var r = n(512722),
    i = n.n(r),
    o = n(259443),
    a = n(46973),
    s = n(570140),
    l = n(314897),
    c = n(131951),
    u = n(626135),
    d = n(460366),
    f = n(358085),
    _ = n(960048),
    p = n(998502),
    h = n(743498),
    m = n(709706),
    g = n(750180),
    E = n(981631);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
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
function O(e, t) {
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
let I = new o.Yd('VoiceFilterActionCreators'),
    S = !1;
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        { url: n, modelId: r, fileName: i } = e,
        o = m.Z.getModelState(r);
    (null == o ? void 0 : o.status) !== g.L.DOWNLOADING &&
        (s.Z.dispatch(y({ type: 'VOICE_FILTER_DOWNLOAD_STARTED' }, e)),
        p.ZP.downloadVoiceFilterFile(n, i, (t) => {
            let { downloadedBytes: n, totalBytes: r } = t;
            s.Z.dispatch(
                O(y({ type: 'VOICE_FILTER_DOWNLOAD_PROGRESS' }, e), {
                    downloadedBytes: n,
                    totalBytes: r
                })
            );
        })
            .then((n) => {
                s.Z.dispatch(
                    O(y({ type: 'VOICE_FILTER_FILE_READY' }, e), {
                        fetchedFromNetwork: n.fetchedFromNetwork,
                        analyticsContext: t
                    })
                );
            })
            .catch((t) => {
                if (null == t ? void 0 : t.USER_CANCELED_DOWNLOAD) I.info('User canceled the download for Voice Filter dependency', e);
                else {
                    let n = 'Failed to download voice filter dependency';
                    I.error(n, y({ reason: t }, e)),
                        u.default.track(E.rMx.VOICE_FILTER_ERROR, {
                            error_message: n,
                            cause: (0, d.X)(Error(t))
                        }),
                        _.Z.captureException(Error(n, { cause: t }), {
                            tags: { modelId: r },
                            extra: { reason: t }
                        });
                }
                s.Z.dispatch(O(y({ type: 'VOICE_FILTER_DOWNLOAD_FAILED' }, e), { error: t }));
            }));
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (!m.Z.isNativeModuleLoaded()) return void I.warn('Voice Filter apply ignored, module not loaded.');
    let n = performance.now();
    p.ZP.getVoiceFilters()
        .setVoiceFilter({ name: e })
        .then(
            () => {
                s.Z.dispatch({
                    type: 'VOICE_FILTER_APPLIED',
                    voiceFilterId: e,
                    analyticsContext: t,
                    activationDurationMs: performance.now() - n
                });
            },
            (t) => {
                I.error('failed to set voice filter', t),
                    s.Z.dispatch({
                        type: 'VOICE_FILTER_APPLY_FAILED',
                        voiceFilterId: e,
                        error: t
                    });
            }
        );
}
async function A() {
    if (!m.Z.isNativeModuleLoaded()) return void I.info('Voice Filter catalog refresh ignored, module not loaded.');
    if (S) return;
    let e = l.default.getToken(),
        t = u.default.getSuperPropertiesBase64();
    i()(null != e, 'Authentication token must be available'), i()(null != t, 'Analytics superProperties must be available');
    try {
        S = !0;
        let n = p.ZP.getVoiceFilters(),
            r = await n.fetchCatalog(e, t),
            i = JSON.parse(r);
        if (!i.models) throw Error('Voice filters catalog repsonse is empty');
        await s.Z.dispatch({
            type: 'VOICE_FILTER_CATALOG_FETCH_SUCCESS',
            catalog: i
        });
    } catch (e) {
        I.warn('Failed to refresh voice filters catalog: '.concat(e.message)),
            u.default.track(E.rMx.VOICE_FILTER_ERROR, {
                error_message: 'Failed to refresh voice filters catalog',
                cause: (0, d.X)(e)
            }),
            _.Z.captureException(e),
            await s.Z.dispatch({ type: 'VOICE_FILTER_CATALOG_FETCH_FAILED' });
    } finally {
        S = !1;
    }
}
function C() {
    s.Z.dispatch({ type: 'VOICE_FILTER_DOWNLOAD_CANCELED' });
}
async function R() {
    if (!(m.Z.isNativeModuleLoaded() || m.Z.isNativeModuleLoading()) && !__OVERLAY__) {
        if (!(0, f.isWindows)() && !(0, f.isMac)())
            return void s.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: g.O.UNSUPPORTED
            });
        try {
            s.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: g.O.LOADING
            }),
                await p.ZP.ensureModule('discord_voice_filters');
            let t = p.ZP.getVoiceFilters();
            await t.setupResources(),
                await s.Z.dispatch({
                    type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                    state: g.O.LOADED
                }),
                await A();
            let n = c.Z.getMostRecentlyRequestedVoiceFilter();
            if (null != n) {
                var e;
                (null == (e = m.Z.getVoiceFilter(n)) ? void 0 : e.available) !== !0 ? (0, h.v6)(null) : (0, h.v6)(n);
            }
            c.Z.getMediaEngine().on(a.aB.VoiceFiltersFailed, (e) => {
                I.warn('Voice Filters failed in process: '.concat(e)),
                    u.default.track(E.rMx.VOICE_FILTER_ERROR, {
                        error_message: 'Voice Filters failed in process',
                        cause: (0, d.X)(Error(e))
                    }),
                    _.Z.captureException(Error('Voice Filters failed in process', { cause: e }));
            });
        } catch (e) {
            I.warn('Failed to load Voice Filters module: '.concat(e.message)),
                u.default.track(E.rMx.VOICE_FILTER_ERROR, {
                    error_message: 'Failed to load Voice Filters module',
                    cause: (0, d.X)(e)
                }),
                _.Z.captureException(e),
                s.Z.dispatch({
                    type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                    state: g.O.FAILED
                });
        }
    }
}
