"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(311907),
    s = n(385612),
    a = n(101058),
    o = n(696451),
    l = n(352413),
    u = n(45837);
function c(e) {
    let { user: t, guildId: n, size: c, showPending: d = !1, animateOnHover: _ = !1, avatarOverride: f } = e,
        { onMouseEnter: p, onMouseLeave: h, shouldAnimate: E } = (0, u.A)(_),
        { pendingAvatar: m } = (0, l.A)({ guildId: null === n ? void 0 : n }),
        g = d && null != t ? (0, a.V7)({ userId: t.id, image: m, canAnimate: E, size: c }) : void 0,
        A = void 0 !== f ? f : g,
        I = (0, i.bG)([o.Ay], () => (null != n && null != t ? o.Ay.getMember(n, t.id) : null));
    return {
        avatarSrc: r.useMemo(
            () => (null != t ? (0, s.sv)(A, I, t, { canAnimate: E, size: c }) : void 0),
            [A, I, t, E, c],
        ),
        isAvatarAnimating: E,
        eventHandlers: { onMouseEnter: p, onMouseLeave: h },
    };
}
