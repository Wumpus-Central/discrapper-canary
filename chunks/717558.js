"use strict";
n.d(t, { A: () => l, R: () => u });
var r = n(311907),
    i = n(209932),
    s = n(309010),
    a = n(485296),
    o = n(977997);
function l(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: l = !0, checkIsMuted: u = !1, context: d } = e,
        c = (0, r.bG)([o.A, s.A], () => {
            let e = s.A.getVoiceChannelId();
            return null != e ? o.A.getVoiceStateForChannel(e, t) : null;
        }),
        _ = u && (c?.mute || c?.selfMute),
        f = (0, r.bG)([a.A], () => a.A.isSpeaking(t, d) && !_),
        E = (0, r.bG)([a.A], () => a.A.isSoundSharing(t) && n),
        h = (0, r.bG)([i.A], () => i.A.isUserPlayingSounds(t) && l);
    return f || h || E;
}
function u(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: r = !0, checkIsMuted: l = !1, context: u } = e,
        [d, c, _, f] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.A, s.A, a.A, i.A],
        E = c.getVoiceChannelId(),
        h = null != E ? d.getVoiceStateForChannel(E, t) : null,
        p = l && (h?.mute || h?.selfMute),
        m = _.isSpeaking(t, u) && !p,
        g = _.isSoundSharing(t) && n,
        A = f.isUserPlayingSounds(t) && r;
    return m || A || g;
}
