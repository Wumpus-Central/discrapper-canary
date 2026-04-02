n.d(t, { A: () => m });
var a = n(311907),
    i = n(73153),
    s = n(314542);
let l = new Map(),
    r = !1,
    o = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    d = { ...o };
function c() {
    l = new Map(d.channelAffinities.map((e) => [e.channelId, e]));
}
class u extends a.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((d.channelAffinities = e.channelAffinities), (d.lastFetched = e.lastFetched), c());
    }
    shouldFetch() {
        if (!r) return Date.now() - d.lastFetched > s.p;
    }
    isFetching() {
        return r;
    }
    getChannelAffinities() {
        return d.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return l;
    }
    getChannelAffinity(e) {
        return l.get(e);
    }
    compare(e, t) {
        return (l.get(t)?.score ?? 0) - (l.get(e)?.score ?? 0);
    }
    getState() {
        return d;
    }
}
let m = new u(i.h, {
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
        (d = { ...o }), (l = new Map()), (r = !1);
    },
});
