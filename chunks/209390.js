a.d(t, { A: () => m });
var n = a(311907),
    l = a(73153),
    i = a(314542);
let s = new Map(),
    r = !1,
    o = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    d = { ...o };
function c() {
    s = new Map(d.channelAffinities.map((e) => [e.channelId, e]));
}
class u extends n.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((d.channelAffinities = e.channelAffinities), (d.lastFetched = e.lastFetched), c());
    }
    shouldFetch() {
        if (!r) return Date.now() - d.lastFetched > i.p;
    }
    isFetching() {
        return r;
    }
    getChannelAffinities() {
        return d.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return s;
    }
    getChannelAffinity(e) {
        return s.get(e);
    }
    compare(e, t) {
        return (s.get(t)?.score ?? 0) - (s.get(e)?.score ?? 0);
    }
    getState() {
        return d;
    }
}
let m = new u(l.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        r = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (d.lastFetched = Date.now()), (r = !1), (d.channelAffinities = t), c();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        r = !1;
    },
    LOGOUT: function () {
        (d = { ...o }), (s = new Map()), (r = !1);
    },
});
