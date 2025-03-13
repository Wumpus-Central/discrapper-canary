n.d(t, {
    fz: () => O,
    ge: () => T,
    r5: () => N,
    rk: () => I,
    wV: () => S
}),
    n(411104);
var r = n(512722),
    i = n.n(r),
    o = n(259443),
    a = n(570140),
    s = n(314897),
    l = n(131951),
    c = n(626135),
    u = n(358085),
    d = n(960048),
    f = n(998502),
    _ = n(743498),
    p = n(709706),
    h = n(750180);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = new o.Yd('VoiceFilterActionCreators'),
    y = !1;
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        { url: n, modelId: r, fileName: i } = e,
        o = p.Z.getModelState(r);
    (null == o ? void 0 : o.status) !== h.L.DOWNLOADING &&
        (a.Z.dispatch(g({ type: 'VOICE_FILTER_DOWNLOAD_STARTED' }, e)),
        f.ZP.downloadVoiceFilterFile(n, i, (t) => {
            let { downloadedBytes: n, totalBytes: r } = t;
            a.Z.dispatch(
                v(g({ type: 'VOICE_FILTER_DOWNLOAD_PROGRESS' }, e), {
                    downloadedBytes: n,
                    totalBytes: r
                })
            );
        })
            .then((n) => {
                a.Z.dispatch(
                    v(g({ type: 'VOICE_FILTER_FILE_READY' }, e), {
                        fetchedFromNetwork: n.fetchedFromNetwork,
                        analyticsContext: t
                    })
                );
            })
            .catch((t) => {
                (null == t ? void 0 : t.USER_CANCELED_DOWNLOAD)
                    ? b.info('User canceled the download for Voice Filter dependency', e)
                    : (b.error('Failed to fetch voice filter model', g({ reason: t }, e)),
                      d.Z.captureMessage('Failed to fetch voice filter model', {
                          tags: { modelId: r },
                          extra: { reason: t }
                      })),
                    a.Z.dispatch(v(g({ type: 'VOICE_FILTER_DOWNLOAD_FAILED' }, e), { error: t }));
            }));
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (!p.Z.isNativeModuleLoaded()) {
        b.warn('Voice Filter apply ignored, module not loaded.');
        return;
    }
    let n = performance.now();
    f.ZP.getVoiceFilters()
        .setVoiceFilter({ name: e })
        .then(
            () => {
                a.Z.dispatch({
                    type: 'VOICE_FILTER_APPLIED',
                    voiceFilterId: e,
                    analyticsContext: t,
                    activationDurationMs: performance.now() - n
                });
            },
            (t) => {
                b.error('failed to set voice filter', t),
                    a.Z.dispatch({
                        type: 'VOICE_FILTER_APPLY_FAILED',
                        voiceFilterId: e,
                        error: t
                    });
            }
        );
}
async function S() {
    if (!p.Z.isNativeModuleLoaded()) {
        b.info('Voice Filter catalog refresh ignored, module not loaded.');
        return;
    }
    if (y) return;
    let e = s.default.getToken(),
        t = c.default.getSuperPropertiesBase64();
    i()(null != e, 'Authentication token must be available'), i()(null != t, 'Analytics superProperties must be available');
    try {
        y = !0;
        let n = f.ZP.getVoiceFilters(),
            r = await n.fetchCatalog(e, t),
            i = JSON.parse(r);
        if (!i.models) throw Error('Voice filters catalog repsonse is empty');
        await a.Z.dispatch({
            type: 'VOICE_FILTER_CATALOG_FETCH_SUCCESS',
            catalog: i
        });
    } catch (e) {
        b.warn('Failed to refresh voice filters catalog: '.concat(e.message)), d.Z.captureException(e), await a.Z.dispatch({ type: 'VOICE_FILTER_CATALOG_FETCH_FAILED' });
    } finally {
        y = !1;
    }
}
function T() {
    a.Z.dispatch({ type: 'VOICE_FILTER_DOWNLOAD_CANCELED' });
}
async function N() {
    if (!(p.Z.isNativeModuleLoaded() || p.Z.isNativeModuleLoading() || __OVERLAY__)) {
        if (!(0, u.isWindows)() && !(0, u.isMac)()) {
            a.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: h.O.UNSUPPORTED
            });
            return;
        }
        try {
            a.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: h.O.LOADING
            }),
                await f.ZP.ensureModule('discord_voice_filters');
            let t = f.ZP.getVoiceFilters();
            await t.setupResources(),
                await a.Z.dispatch({
                    type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                    state: h.O.LOADED
                }),
                await S();
            let n = l.Z.getMostRecentlyRequestedVoiceFilter();
            if (null != n) {
                var e;
                (null === (e = p.Z.getVoiceFilter(n)) || void 0 === e ? void 0 : e.available) !== !0 ? (0, _.v6)(null) : (0, _.v6)(n);
            }
        } catch (e) {
            b.warn('Failed to load Voice Filters module: '.concat(e.message)),
                d.Z.captureException(e),
                a.Z.dispatch({
                    type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                    state: h.O.FAILED
                });
        }
    }
}
