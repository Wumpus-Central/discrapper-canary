let i;
var a,
    o = r(442837),
    s = r(570140),
    l = r(353368);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = () => {
    i = i === l.q.BASIC ? l.q.PREMIUM : l.q.BASIC;
};
class d extends (a = o.ZP.PersistedStore) {
    initialize(e) {
        var n;
        i = null !== (n = null == e ? void 0 : e.animationType) && void 0 !== n ? n : l.q.PREMIUM;
    }
    getState() {
        return { animationType: i };
    }
}
u(d, 'displayName', 'VoiceChannelEffectsPersistedStore'), u(d, 'persistKey', 'VoiceChannelEffectsPersistedStore'), (n.Z = new d(s.Z, { VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: c }));
