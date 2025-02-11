n.d(t, { Z: () => N }), n(47120), n(51350);
var i,
    r = n(315008),
    a = n(347715),
    s = n(259443),
    o = n(442837),
    l = n(570140),
    u = n(750180),
    c = n(999224);
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
let f = new s.Yd('VoiceFilterStore'),
    _ = {
        models: {},
        voiceFilters: {},
        modelState: {},
        sortedVoiceFilters: [],
        catalogUpdateTime: void 0,
        limitedTimeVoices: void 0
    };
function p(e) {
    return e.available ? 0 : e.temporarilyAvailable ? 1 : 2;
}
function h(e) {
    if (null != e) {
        let t = new Date(),
            n = new Date(e.current_set_start),
            i = new Date(e.current_set_end),
            r = new Date(e.next_set_start),
            a = new Date(e.next_set_end);
        if (t >= n && t < i)
            return {
                currentSet: e.current_set,
                catalogUpdateTime: i
            };
        if (t >= r && t < a)
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
function m(e) {
    if (null == _.limitedTimeVoices) {
        f.warn('No limited time voices available to update');
        return;
    }
    (_.limitedTimeVoices.current_set_end = e.toISOString()), (_.limitedTimeVoices.next_set_start = e.toISOString()), (_.limitedTimeVoices.next_set_end = (0, r.default)(e, 2).toISOString()), y();
}
function g(e) {
    return Object.entries(e)
        .sort((e, t) => p(e[1]) - p(t[1]))
        .map((e) => {
            let [t] = e;
            return t;
        });
}
function E(e) {
    let { catalog: t } = e;
    (_.models = t.models), (_.limitedTimeVoices = t.limited_time_voices);
    let n = {},
        i = h(_.limitedTimeVoices);
    for (let { id: e, models: r, available: a } of ((_.catalogUpdateTime = i.catalogUpdateTime), t.voices))
        Object.hasOwn(c.x, e) &&
            (n[e] = {
                ...c.x[e],
                id: e,
                modelIds: r,
                available: a,
                temporarilyAvailable: i.currentSet.includes(e)
            });
    return (_.voiceFilters = n), (_.sortedVoiceFilters = g(_.voiceFilters)), !0;
}
class v extends (i = o.ZP.Store) {
    getVoiceFilterModels() {
        return _.models;
    }
    getVoiceFilters() {
        return _.voiceFilters;
    }
    getVoiceFilter(e) {
        return _.voiceFilters[e];
    }
    getModelState(e) {
        return _.modelState[e];
    }
    isModelDownloaded(e) {
        var t;
        return (null === (t = _.modelState[e]) || void 0 === t ? void 0 : t.status) === u.L.DOWNLOADED;
    }
    getSortedVoiceFilters() {
        return _.sortedVoiceFilters.map((e) => _.voiceFilters[e]);
    }
    getCatalogUpdateTime() {
        return _.catalogUpdateTime;
    }
    getLimitedTimeVoices() {
        return _.limitedTimeVoices;
    }
}
function y() {
    let e = h(_.limitedTimeVoices);
    (_.catalogUpdateTime = e.catalogUpdateTime),
        Object.keys(_.voiceFilters).forEach((t) => {
            _.voiceFilters[t].temporarilyAvailable = e.currentSet.includes(t);
        }),
        (_.sortedVoiceFilters = g(_.voiceFilters));
}
function I(e) {
    let { modelId: t } = e;
    _.modelState[t] = {
        ..._.modelState[t],
        status: u.L.DOWNLOADING,
        downloadedBytes: 0
    };
}
function T(e) {
    let { modelId: t } = e;
    _.modelState[t] = {
        ..._.modelState[t],
        status: u.L.DOWNLOADED,
        downloadedBytes: void 0
    };
}
function b(e) {
    let { modelId: t, downloadedBytes: n, totalBytes: i } = e;
    _.modelState[t] = {
        ..._.modelState[t],
        downloadedBytes: n,
        totalBytes: i
    };
}
function S(e) {
    var t;
    let { modelId: n } = e;
    (null === (t = _.modelState[n]) || void 0 === t ? void 0 : t.status) !== u.L.DOWNLOADED &&
        (_.modelState[n] = {
            ..._.modelState[n],
            status: u.L.MISSING
        });
}
function A(e) {
    let { timeInSeconds: t } = e;
    m((0, a.Z)(new Date(), t));
}
d(v, 'displayName', 'VoiceFilterStore');
let N = new v(l.Z, {
    VOICE_FILTER_DOWNLOAD_STARTED: I,
    VOICE_FILTER_DOWNLOAD_READY: T,
    VOICE_FILTER_DOWNLOAD_PROGRESS: b,
    VOICE_FILTER_DOWNLOAD_FAILED: S,
    VOICE_FILTER_CATALOG_FETCH_SUCCESS: E,
    VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES: y,
    VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME: A
});
