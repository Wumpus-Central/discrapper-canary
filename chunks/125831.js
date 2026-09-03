n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let a = { topSoundboardSoundsByGuildId: {} },
    s = a,
    l = {};
class o extends i.Ay.PersistedStore {
    static displayName = "TopSoundboardSoundStore";
    static persistKey = "TopSoundboardSoundStore";
    initialize(e) {
        s = e ?? a;
    }
    getState() {
        return s;
    }
    getTopSoundboardSoundIdsByGuildId(e) {
        return s.topSoundboardSoundsByGuildId[e];
    }
    getIsFetching(e) {
        return l[e];
    }
}
let d = new o(r.h, {
    LOGOUT: function () {
        (s = a), (l = {});
    },
    TOP_SOUNDBOARD_SOUNDS_FETCH: function (e) {
        let { guildId: t } = e;
        l[t] = !0;
    },
    TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topSoundsMetadata: n } = e;
        (s.topSoundboardSoundsByGuildId[t] = n.map((e) => e.soundId)), (l[t] = !1);
    },
    TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        l[t] = !1;
    },
});
