var l,
    s = n(635377),
    a = n.n(s),
    i = n(855986),
    r = n(73153),
    o = (((l = {}).VOICE_MESSAGE = "voice_message"), l);
let c = { rates: { voice_message: 1 }, positions: new (a())({ max: 25 }) },
    u = { ...c };
class d extends i.Ay.DeviceSettingsStore {
    static displayName = "MediaPlaybackStore";
    static persistKey = "MediaPlaybackStore";
    initialize(e) {
        let { positions: t, ...n } = e ?? {};
        ((u = { ...c, ...n }), null != t && u.positions.load(t));
    }
    getUserAgnosticState() {
        return { rates: u.rates, positions: u.positions.dump() };
    }
    getPlaybackRate(e) {
        return u.rates[e] ?? 1;
    }
    getPlaybackPosition(e) {
        return u.positions.get(e) ?? 0;
    }
}
let m = new d(r.h, {
    MEDIA_PLAYBACK_RATE_UPDATE: function (e) {
        let { rate: t, playbackType: n } = e;
        u = { ...u, rates: { ...u.rates, [n]: t } };
    },
    MEDIA_PLAYBACK_POSITION_UPDATE: function (e) {
        let { cacheKey: t, position: n, duration: l } = e;
        n > 0.5 && n < 0.95 * l ? u.positions.set(t, n) : u.positions.del(t);
    },
});
n.d(
    t,
    {},
    {
        Ay: m,
        dx: function (e, t) {
            return `${e}-${t}`;
        },
        k0: o,
    },
);
