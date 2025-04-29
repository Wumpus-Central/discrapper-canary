let r;
n.d(t, { Z: () => d });
var i,
    o = n(442837),
    a = n(570140),
    s = n(353368);
function l(e, t, n) {
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
let c = () => {
    r = r === s.q.BASIC ? s.q.PREMIUM : s.q.BASIC;
};
class u extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        var t;
        r = null != (t = null == e ? void 0 : e.animationType) ? t : s.q.PREMIUM;
    }
    getState() {
        return { animationType: r };
    }
}
l(u, 'displayName', 'VoiceChannelEffectsPersistedStore'), l(u, 'persistKey', 'VoiceChannelEffectsPersistedStore');
let d = new u(a.Z, { VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: c });
