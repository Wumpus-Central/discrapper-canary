n.d(t, {
    Z: () => x,
    r: () => h
}),
    n(642613),
    n(388685),
    n(825670);
var r,
    i = n(315008),
    a = n(347715),
    o = n(259443),
    s = n(442837),
    l = n(570140),
    c = n(750180),
    u = n(999224);
function d(e, t, n) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var h = (function (e) {
    return (e.ERROR_DOWNLOADING_DEPENDENCY = 'ERROR_DOWNLOADING_DEPENDENCY'), (e.ERROR_ACTIVATING_VOICE_FILTER = 'ERROR_ACTIVATING_VOICE_FILTER'), e;
})({});
let m = new o.Yd('VoiceFilterStore'),
    g = {
        nativeVoiceFilterModuleState: c.O.UNINITIALIZED,
        models: {},
        voiceFilters: {},
        modelState: {},
        sortedVoiceFilters: [],
        catalogFetchFailed: !1,
        catalogLastFetchTime: void 0,
        catalogUpdateTime: void 0,
        limitedTimeVoices: void 0,
        error: null
    };
function E(e) {
    return e.available ? 0 : e.temporarilyAvailable ? 1 : 2;
}
function b(e) {
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
function y(e) {
    if (null == g.limitedTimeVoices) return void m.warn('No limited time voices available to update');
    (g.limitedTimeVoices.current_set_end = e.toISOString()), (g.limitedTimeVoices.next_set_start = e.toISOString()), (g.limitedTimeVoices.next_set_end = (0, i.default)(e, 2).toISOString()), T();
}
function v(e) {
    return Object.entries(e)
        .sort((e, t) => E(e[1]) - E(t[1]))
        .map((e) => {
            let [t] = e;
            return t;
        });
}
function O(e) {
    let { catalog: t } = e;
    (g.catalogFetchFailed = !1), (g.models = t.models), (g.limitedTimeVoices = t.limited_time_voices);
    let n = {},
        r = b(g.limitedTimeVoices);
    for (let { id: e, models: i, available: a } of ((g.catalogUpdateTime = r.catalogUpdateTime), t.voices))
        Object.hasOwn(u.x, e) &&
            (n[e] = p(f({}, u.x[e]), {
                id: e,
                modelIds: i,
                available: a,
                temporarilyAvailable: r.currentSet.includes(e)
            }));
    return (g.voiceFilters = n), (g.sortedVoiceFilters = v(g.voiceFilters)), (g.catalogLastFetchTime = new Date()), !0;
}
function I() {
    g.catalogFetchFailed = !0;
}
class S extends (r = s.ZP.Store) {
    getVoiceFilterModels() {
        return g.models;
    }
    getVoiceFilters() {
        return g.voiceFilters;
    }
    getVoiceFilter(e) {
        return g.voiceFilters[e];
    }
    getModelState(e) {
        return g.modelState[e];
    }
    isModelDownloaded(e) {
        var t;
        return (null == (t = g.modelState[e]) ? void 0 : t.status) === c.L.DOWNLOADED;
    }
    getSortedVoiceFilters() {
        return g.sortedVoiceFilters.map((e) => g.voiceFilters[e]);
    }
    getCatalogLastFetchTime() {
        return g.catalogLastFetchTime;
    }
    getCatalogUpdateTime() {
        return g.catalogUpdateTime;
    }
    getLimitedTimeVoices() {
        return g.limitedTimeVoices;
    }
    isNativeModuleLoaded() {
        return g.nativeVoiceFilterModuleState === c.O.LOADED;
    }
    isNativeModuleLoading() {
        return g.nativeVoiceFilterModuleState === c.O.LOADING;
    }
    hasNativeModuleFailed() {
        return g.nativeVoiceFilterModuleState === c.O.FAILED;
    }
    getCatalogFetchFailed() {
        return g.catalogFetchFailed;
    }
    getError() {
        return g.error;
    }
}
function T() {
    let e = b(g.limitedTimeVoices);
    (g.catalogUpdateTime = e.catalogUpdateTime),
        Object.keys(g.voiceFilters).forEach((t) => {
            g.voiceFilters[t].temporarilyAvailable = e.currentSet.includes(t);
        }),
        (g.sortedVoiceFilters = v(g.voiceFilters));
}
function A(e) {
    let { modelId: t } = e;
    g.modelState[t] = p(f({}, g.modelState[t]), {
        status: c.L.DOWNLOADING,
        downloadedBytes: 0
    });
}
function N(e) {
    let { modelId: t, downloadedBytes: n, totalBytes: r } = e;
    g.modelState[t] = p(f({}, g.modelState[t]), {
        downloadedBytes: n,
        totalBytes: r
    });
}
function C(e) {
    var t;
    let { modelId: n, error: r } = e;
    (null == (t = g.modelState[n]) ? void 0 : t.status) !== c.L.DOWNLOADED && ((g.modelState[n] = p(f({}, g.modelState[n]), { status: c.L.MISSING })), 'USER_CANCELED_DOWNLOAD' in (null != r ? r : {}) || (g.error = 'ERROR_DOWNLOADING_DEPENDENCY'));
}
function R(e) {
    let { modelId: t } = e;
    g.modelState[t] = p(f({}, g.modelState[t]), {
        status: c.L.DOWNLOADED,
        downloadedBytes: void 0
    });
}
function P(e) {
    let { timeInSeconds: t } = e;
    y((0, a.Z)(new Date(), t));
}
function w(e) {
    g.nativeVoiceFilterModuleState = e.state;
}
function D() {
    g.error = 'ERROR_ACTIVATING_VOICE_FILTER';
}
function L() {
    g.error = null;
}
d(S, 'displayName', 'VoiceFilterStore');
let x = new S(l.Z, {
    VOICE_FILTER_DOWNLOAD_STARTED: A,
    VOICE_FILTER_DOWNLOAD_PROGRESS: N,
    VOICE_FILTER_DOWNLOAD_FAILED: C,
    VOICE_FILTER_FILE_READY: R,
    VOICE_FILTER_CATALOG_FETCH_SUCCESS: O,
    VOICE_FILTER_CATALOG_FETCH_FAILED: I,
    VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES: T,
    VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME: P,
    VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE: w,
    VOICE_FILTER_APPLY_FAILED: D,
    VOICE_FILTER_REQUEST_SWITCH: L
});
