n.d(t, { A: () => _ });
var i = n(17928),
    s = n(228366);
let a = 12 * n(927813).A.Millis.HOUR,
    h = new Map(),
    c = !1,
    r = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    A = { ...r };
function l() {
    h = new Map(A.channelAffinities.map((e) => [e.channelId, e]));
}
class f extends i.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((A.channelAffinities = e.channelAffinities), (A.lastFetched = e.lastFetched), l());
    }
    shouldFetch() {
        if (!c) return Date.now() - A.lastFetched > a;
    }
    isFetching() {
        return c;
    }
    getChannelAffinities() {
        return A.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return h;
    }
    getChannelAffinity(e) {
        return h.get(e);
    }
    compare(e, t) {
        return (h.get(t)?.score ?? 0) - (h.get(e)?.score ?? 0);
    }
    getState() {
        return A;
    }
}
let _ = new f(s.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        c = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (A.lastFetched = Date.now()), (c = !1), (A.channelAffinities = t), l();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        c = !1;
    },
    LOGOUT: function () {
        (A = { ...r }), (h = new Map()), (c = !1);
    },
});
