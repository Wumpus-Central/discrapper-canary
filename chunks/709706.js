n.d(t, { Z: () => w }), n(230036), n(47120), n(51350);
var r,
    i = n(315008),
    o = n(347715),
    a = n(259443),
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
function _(e, t) {
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
let h = new a.Yd('VoiceFilterStore'),
    m = {
        nativeVoiceFilterModuleState: c.O.UNINITIALIZED,
        models: {},
        voiceFilters: {},
        modelState: {},
        sortedVoiceFilters: [],
        catalogUpdateTime: void 0,
        limitedTimeVoices: void 0,
        catalogFailed: !1
    };
function g(e) {
    return e.available ? 0 : e.temporarilyAvailable ? 1 : 2;
}
function E(e) {
    if (null != e) {
        let t = new Date(),
            n = new Date(e.current_set_start),
            r = new Date(e.current_set_end),
            i = new Date(e.next_set_start),
            o = new Date(e.next_set_end);
        if (t >= n && t < r)
            return {
                currentSet: e.current_set,
                catalogUpdateTime: r
            };
        if (t >= i && t < o)
            return {
                currentSet: e.next_set,
                catalogUpdateTime: o
            };
    }
    return {
        currentSet: [],
        catalogUpdateTime: void 0
    };
}
function v(e) {
    if (null == m.limitedTimeVoices) {
        h.warn('No limited time voices available to update');
        return;
    }
    (m.limitedTimeVoices.current_set_end = e.toISOString()), (m.limitedTimeVoices.next_set_start = e.toISOString()), (m.limitedTimeVoices.next_set_end = (0, i.default)(e, 2).toISOString()), I();
}
function b(e) {
    return Object.entries(e)
        .sort((e, t) => g(e[1]) - g(t[1]))
        .map((e) => {
            let [t] = e;
            return t;
        });
}
function y(e) {
    let { catalog: t } = e;
    (m.catalogFailed = !1), (m.models = t.models), (m.limitedTimeVoices = t.limited_time_voices);
    let n = {},
        r = E(m.limitedTimeVoices);
    for (let { id: e, models: i, available: o } of ((m.catalogUpdateTime = r.catalogUpdateTime), t.voices))
        Object.hasOwn(u.x, e) &&
            (n[e] = _(f({}, u.x[e]), {
                id: e,
                modelIds: i,
                available: o,
                temporarilyAvailable: r.currentSet.includes(e)
            }));
    return (m.voiceFilters = n), (m.sortedVoiceFilters = b(m.voiceFilters)), !0;
}
function O() {
    m.catalogFailed = !0;
}
class S extends (r = s.ZP.Store) {
    getVoiceFilterModels() {
        return m.models;
    }
    getVoiceFilters() {
        return m.voiceFilters;
    }
    getVoiceFilter(e) {
        return m.voiceFilters[e];
    }
    getModelState(e) {
        return m.modelState[e];
    }
    isModelDownloaded(e) {
        var t;
        return (null === (t = m.modelState[e]) || void 0 === t ? void 0 : t.status) === c.L.DOWNLOADED;
    }
    getSortedVoiceFilters() {
        return m.sortedVoiceFilters.map((e) => m.voiceFilters[e]);
    }
    getCatalogUpdateTime() {
        return m.catalogUpdateTime;
    }
    getLimitedTimeVoices() {
        return m.limitedTimeVoices;
    }
    isNativeModuleLoading() {
        return m.nativeVoiceFilterModuleState === c.O.LOADING;
    }
    showFailure() {
        var e;
        if (Object.keys(null !== (e = null == m ? void 0 : m.models) && void 0 !== e ? e : {}).length) return !1;
        let t = m.nativeVoiceFilterModuleState === c.O.FAILED;
        return m.catalogFailed || t;
    }
}
function I() {
    let e = E(m.limitedTimeVoices);
    (m.catalogUpdateTime = e.catalogUpdateTime),
        Object.keys(m.voiceFilters).forEach((t) => {
            m.voiceFilters[t].temporarilyAvailable = e.currentSet.includes(t);
        }),
        (m.sortedVoiceFilters = b(m.voiceFilters));
}
function T(e) {
    let { modelId: t } = e;
    m.modelState[t] = _(f({}, m.modelState[t]), {
        status: c.L.DOWNLOADING,
        downloadedBytes: 0
    });
}
function N(e) {
    let { modelId: t } = e;
    m.modelState[t] = _(f({}, m.modelState[t]), {
        status: c.L.DOWNLOADED,
        downloadedBytes: void 0
    });
}
function A(e) {
    let { modelId: t, downloadedBytes: n, totalBytes: r } = e;
    m.modelState[t] = _(f({}, m.modelState[t]), {
        downloadedBytes: n,
        totalBytes: r
    });
}
function C(e) {
    var t;
    let { modelId: n } = e;
    (null === (t = m.modelState[n]) || void 0 === t ? void 0 : t.status) !== c.L.DOWNLOADED && (m.modelState[n] = _(f({}, m.modelState[n]), { status: c.L.MISSING }));
}
function R(e) {
    let { timeInSeconds: t } = e;
    v((0, o.Z)(new Date(), t));
}
function P(e) {
    m.nativeVoiceFilterModuleState = e.state;
}
d(S, 'displayName', 'VoiceFilterStore');
let w = new S(l.Z, {
    VOICE_FILTER_DOWNLOAD_STARTED: T,
    VOICE_FILTER_DOWNLOAD_READY: N,
    VOICE_FILTER_DOWNLOAD_PROGRESS: A,
    VOICE_FILTER_DOWNLOAD_FAILED: C,
    VOICE_FILTER_CATALOG_FETCH_SUCCESS: y,
    VOICE_FILTER_CATALOG_FETCH_FAILED: O,
    VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES: I,
    VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME: R,
    VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE: P
});
