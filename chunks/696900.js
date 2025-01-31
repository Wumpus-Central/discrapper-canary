let i;
n.d(t, { Z: () => d });
var r,
    a = n(442837),
    s = n(570140),
    o = n(353368);
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
let u = () => {
    i = i === o.q.BASIC ? o.q.PREMIUM : o.q.BASIC;
};
class c extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        i = null !== (t = null == e ? void 0 : e.animationType) && void 0 !== t ? t : o.q.PREMIUM;
    }
    getState() {
        return { animationType: i };
    }
}
l(c, 'displayName', 'VoiceChannelEffectsPersistedStore'), l(c, 'persistKey', 'VoiceChannelEffectsPersistedStore');
let d = new c(s.Z, { VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: u });
