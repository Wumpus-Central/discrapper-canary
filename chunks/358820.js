n.d(t, {
    fz: () => I,
    ge: () => N,
    r5: () => A,
    rk: () => S,
    wV: () => T
}),
    n(411104);
var r = n(512722),
    i = n.n(r),
    o = n(259443),
    a = n(46973),
    s = n(570140),
    l = n(314897),
    c = n(131951),
    u = n(626135),
    d = n(358085),
    f = n(960048),
    _ = n(998502),
    p = n(743498),
    h = n(709706),
    m = n(750180);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = new o.Yd('VoiceFilterActionCreators'),
    O = !1;
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        { url: n, modelId: r, fileName: i } = e,
        o = h.Z.getModelState(r);
    (null == o ? void 0 : o.status) !== m.L.DOWNLOADING &&
        (s.Z.dispatch(E({ type: 'VOICE_FILTER_DOWNLOAD_STARTED' }, e)),
        _.ZP.downloadVoiceFilterFile(n, i, (t) => {
            let { downloadedBytes: n, totalBytes: r } = t;
            s.Z.dispatch(
                y(E({ type: 'VOICE_FILTER_DOWNLOAD_PROGRESS' }, e), {
                    downloadedBytes: n,
                    totalBytes: r
                })
            );
        })
            .then((n) => {
                s.Z.dispatch(
                    y(E({ type: 'VOICE_FILTER_FILE_READY' }, e), {
                        fetchedFromNetwork: n.fetchedFromNetwork,
                        analyticsContext: t
                    })
                );
            })
            .catch((t) => {
                (null == t ? void 0 : t.USER_CANCELED_DOWNLOAD)
                    ? v.info('User canceled the download for Voice Filter dependency', e)
                    : (v.error('Failed to fetch voice filter model', E({ reason: t }, e)),
                      f.Z.captureException(Error('Failed to fetch voice filter model', { cause: t }), {
                          tags: { modelId: r },
                          extra: { reason: t }
                      })),
                    s.Z.dispatch(y(E({ type: 'VOICE_FILTER_DOWNLOAD_FAILED' }, e), { error: t }));
            }));
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (!h.Z.isNativeModuleLoaded()) return void v.warn('Voice Filter apply ignored, module not loaded.');
    let n = performance.now();
    _.ZP.getVoiceFilters()
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
                v.error('failed to set voice filter', t),
                    s.Z.dispatch({
                        type: 'VOICE_FILTER_APPLY_FAILED',
                        voiceFilterId: e,
                        error: t
                    });
            }
        );
}
async function T() {
    if (!h.Z.isNativeModuleLoaded()) return void v.info('Voice Filter catalog refresh ignored, module not loaded.');
    if (O) return;
    let e = l.default.getToken(),
        t = u.default.getSuperPropertiesBase64();
    i()(null != e, 'Authentication token must be available'), i()(null != t, 'Analytics superProperties must be available');
    try {
        O = !0;
        let n = _.ZP.getVoiceFilters(),
            r = await n.fetchCatalog(e, t),
            i = JSON.parse(r);
        if (!i.models) throw Error('Voice filters catalog repsonse is empty');
        await s.Z.dispatch({
            type: 'VOICE_FILTER_CATALOG_FETCH_SUCCESS',
            catalog: i
        });
    } catch (e) {
        v.warn('Failed to refresh voice filters catalog: '.concat(e.message)), f.Z.captureException(e), await s.Z.dispatch({ type: 'VOICE_FILTER_CATALOG_FETCH_FAILED' });
    } finally {
        O = !1;
    }
}
function N() {
    s.Z.dispatch({ type: 'VOICE_FILTER_DOWNLOAD_CANCELED' });
}
async function A() {
    if (!(h.Z.isNativeModuleLoaded() || h.Z.isNativeModuleLoading()) && !__OVERLAY__) {
        if (!(0, d.isWindows)() && !(0, d.isMac)())
            return void s.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: m.O.UNSUPPORTED
            });
        try {
            s.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: m.O.LOADING
            }),
                await _.ZP.ensureModule('discord_voice_filters');
            let t = _.ZP.getVoiceFilters();
            await t.setupResources(),
                await s.Z.dispatch({
                    type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                    state: m.O.LOADED
                }),
                await T();
            let n = c.Z.getMostRecentlyRequestedVoiceFilter();
            if (null != n) {
                var e;
                (null == (e = h.Z.getVoiceFilter(n)) ? void 0 : e.available) !== !0 ? (0, p.v6)(null) : (0, p.v6)(n);
            }
            c.Z.getMediaEngine().on(a.aB.VoiceFiltersFailed, (e) => {
                v.warn('Voice Filters failed in process: '.concat(e)), f.Z.captureException(Error('Voice Filters failed in process', { cause: e }));
            });
        } catch (e) {
            v.warn('Failed to load Voice Filters module: '.concat(e.message)),
                f.Z.captureException(e),
                s.Z.dispatch({
                    type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                    state: m.O.FAILED
                });
        }
    }
}
