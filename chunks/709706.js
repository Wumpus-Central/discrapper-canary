n.d(t, {
    Z: () => G,
    r: () => m
}),
    n(642613),
    n(388685),
    n(825670),
    n(467055);
var r,
    i = n(315008),
    a = n(347715),
    o = n(259443),
    s = n(442837),
    l = n(570140),
    c = n(579806),
    u = n(750180),
    d = n(999224);
function _(e, t, n) {
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
function f(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var m = (function (e) {
    return (e.ERROR_DOWNLOADING_DEPENDENCY = 'ERROR_DOWNLOADING_DEPENDENCY'), (e.ERROR_ACTIVATING_VOICE_FILTER = 'ERROR_ACTIVATING_VOICE_FILTER'), e;
})({});
let g = new o.Yd('VoiceFilterStore'),
    E = {
        nativeVoiceFilterModuleState: u.O.UNINITIALIZED,
        models: {},
        voiceFilters: {},
        modelState: {},
        sortedVoiceFilters: [],
        catalogFetchFailed: !1,
        catalogLastFetchTime: void 0,
        catalogUpdateTime: void 0,
        limitedTimeVoices: void 0,
        error: null
    },
    b = null;
function y() {
    return (null === c.Z || void 0 === c.Z ? void 0 : c.Z.remoteApp.getVersion()) === '0.0.0';
}
function O(e) {
    return e.available ? 0 : e.temporarilyAvailable ? 1 : 2;
}
function v(e) {
    if (null != e) {
        let t = new Date(),
            n = new Date(e.current_set_start),
            r = new Date(e.current_set_end),
            i = new Date(e.next_set_start),
            a = new Date(e.next_set_end);
        if (t >= n && t < r)
            return {
                currentSet: e.current_set,
                catalogUpdateTime: r
            };
        if (t >= i && t < a)
            return {
                currentSet: e.next_set,
                catalogUpdateTime: a
            };
    }
    return {
        currentSet: [],
        catalogUpdateTime: void 0
    };
}
function I(e) {
    if (null == E.limitedTimeVoices) return void g.warn('No limited time voices available to update');
    (E.limitedTimeVoices.current_set_end = e.toISOString()), (E.limitedTimeVoices.next_set_start = e.toISOString()), (E.limitedTimeVoices.next_set_end = (0, i.default)(e, 2).toISOString()), R();
}
function T(e) {
    return Object.entries(e)
        .sort((e, t) => O(e[1]) - O(t[1]))
        .map((e) => {
            let [t] = e;
            return t;
        });
}
function S(e) {
    let { catalog: t } = e,
        n = y();
    (E.catalogFetchFailed = !1), (E.models = t.models), (E.limitedTimeVoices = t.limited_time_voices);
    let r = {},
        i = v(E.limitedTimeVoices);
    if (((E.catalogUpdateTime = i.catalogUpdateTime), n))
        for (let e of Object.keys(d.x))
            r[e] = h(f({}, d.x[e]), {
                id: e,
                modelIds: void 0,
                available: !0
            });
    for (let { id: e, models: a, available: o } of t.voices)
        Object.hasOwn(d.x, e) &&
            (r[e] = h(f({}, d.x[e]), {
                id: e,
                modelIds: a,
                available: !!n || o,
                temporarilyAvailable: i.currentSet.includes(e)
            }));
    (E.voiceFilters = r), (E.sortedVoiceFilters = T(E.voiceFilters)), (E.catalogLastFetchTime = new Date());
}
function A() {
    E.catalogFetchFailed = !0;
}
function N(e) {
    let { modelState: t } = e;
    E.modelState = t;
}
class C extends (r = s.ZP.Store) {
    getVoiceFilterModels() {
        return E.models;
    }
    getVoiceFilters() {
        return E.voiceFilters;
    }
    getVoiceFilter(e) {
        return E.voiceFilters[e];
    }
    getModelState(e) {
        return E.modelState[e];
    }
    getOngoingDownloads() {
        return Object.fromEntries(
            Object.entries(E.modelState).filter((e) => {
                let [t, { status: n }] = e;
                return n === u.L.DOWNLOADING;
            })
        );
    }
    isVoiceFilterDownloaded(e) {
        var t, n;
        return Object.values(null != (n = null == (t = E.voiceFilters[e]) ? void 0 : t.modelIds) ? n : {}).every((e) => {
            var t;
            return (null == (t = E.modelState[e]) ? void 0 : t.status) === u.L.DOWNLOADED;
        });
    }
    isModelDownloaded(e) {
        var t;
        return (null == (t = E.modelState[e]) ? void 0 : t.status) === u.L.DOWNLOADED;
    }
    getSortedVoiceFilters() {
        return E.sortedVoiceFilters.map((e) => E.voiceFilters[e]);
    }
    getCatalogLastFetchTime() {
        return E.catalogLastFetchTime;
    }
    getCatalogUpdateTime() {
        return E.catalogUpdateTime;
    }
    getLimitedTimeVoices() {
        return E.limitedTimeVoices;
    }
    isNativeModuleLoaded() {
        return E.nativeVoiceFilterModuleState === u.O.LOADED;
    }
    isNativeModuleLoading() {
        return E.nativeVoiceFilterModuleState === u.O.LOADING;
    }
    hasNativeModuleFailed() {
        return E.nativeVoiceFilterModuleState === u.O.FAILED;
    }
    getCatalogFetchFailed() {
        return E.catalogFetchFailed;
    }
    getError() {
        return E.error;
    }
    getLastReportedLagTimestamp() {
        return b;
    }
}
function R() {
    let e = v(E.limitedTimeVoices);
    (E.catalogUpdateTime = e.catalogUpdateTime),
        Object.keys(E.voiceFilters).forEach((t) => {
            E.voiceFilters[t].temporarilyAvailable = e.currentSet.includes(t);
        }),
        (E.sortedVoiceFilters = T(E.voiceFilters));
}
function P(e) {
    let { modelId: t } = e;
    E.modelState[t] = h(f({}, E.modelState[t]), {
        status: u.L.DOWNLOADING,
        downloadedBytes: 0
    });
}
function w(e) {
    let { modelId: t, downloadedBytes: n, totalBytes: r } = e;
    E.modelState[t] = h(f({}, E.modelState[t]), {
        downloadedBytes: n,
        totalBytes: r
    });
}
function D(e) {
    var t;
    let { modelId: n, error: r } = e;
    (null == (t = E.modelState[n]) ? void 0 : t.status) !== u.L.DOWNLOADED && ((E.modelState[n] = h(f({}, E.modelState[n]), { status: u.L.MISSING })), 'USER_CANCELED_DOWNLOAD' in (null != r ? r : {}) || (E.error = 'ERROR_DOWNLOADING_DEPENDENCY'));
}
function L(e) {
    let { modelId: t } = e;
    E.modelState[t] = h(f({}, E.modelState[t]), {
        status: u.L.DOWNLOADED,
        downloadedBytes: void 0
    });
}
function x(e) {
    let { timeInSeconds: t } = e;
    I((0, a.Z)(new Date(), t));
}
function M(e) {
    E.nativeVoiceFilterModuleState = e.state;
}
function k() {
    E.error = 'ERROR_ACTIVATING_VOICE_FILTER';
}
function j() {
    E.error = null;
}
function U() {
    b = Date.now();
}
_(C, 'displayName', 'VoiceFilterStore');
let G = new C(l.Z, {
    VOICE_FILTER_DOWNLOAD_STARTED: P,
    VOICE_FILTER_DOWNLOAD_PROGRESS: w,
    VOICE_FILTER_DOWNLOAD_FAILED: D,
    VOICE_FILTER_FILE_READY: L,
    VOICE_FILTER_CATALOG_FETCH_SUCCESS: S,
    VOICE_FILTER_CATALOG_FETCH_FAILED: A,
    VOICE_FILTER_SET_MODEL_STATE: N,
    VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES: R,
    VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME: x,
    VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE: M,
    VOICE_FILTER_APPLY_FAILED: k,
    VOICE_FILTER_REQUEST_SWITCH: j,
    VOICE_FILTER_LAGGING: U
});
