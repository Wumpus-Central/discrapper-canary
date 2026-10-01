s.d(t, { Ay: () => m, dx: () => u, k0: () => o });
var n,
    a = s(635377),
    l = s.n(a),
    i = s(17928),
    r = s(73153),
    o = (((n = {}).VOICE_MESSAGE = "voice_message"), n);
function u(e, t) {
    return `${e}-${t}`;
}
let d = { rates: { voice_message: 1 }, positions: new (l())({ max: 25 }) },
    c = { ...d };
class h extends i.Ay.DeviceSettingsStore {
    static displayName = "MediaPlaybackStore";
    static persistKey = "MediaPlaybackStore";
    initialize(e) {
        let { positions: t, ...s } = e ?? {};
        ((c = { ...d, ...s }), null != t && c.positions.load(t));
    }
    getUserAgnosticState() {
        return { rates: c.rates, positions: c.positions.dump() };
    }
    getPlaybackRate(e) {
        return c.rates[e] ?? 1;
    }
    getPlaybackPosition(e) {
        return c.positions.get(e) ?? 0;
    }
}
let m = new h(r.h, {
    MEDIA_PLAYBACK_RATE_UPDATE: function (e) {
        let { rate: t, playbackType: s } = e;
        c = { ...c, rates: { ...c.rates, [s]: t } };
    },
    MEDIA_PLAYBACK_POSITION_UPDATE: function (e) {
        let { cacheKey: t, position: s, duration: n } = e;
        s > 0.5 && s < 0.95 * n ? c.positions.set(t, s) : c.positions.del(t);
    },
});
