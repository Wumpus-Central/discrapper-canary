"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    r = n(17928),
    s = n(252732),
    a = n(101058),
    o = n(696451),
    l = n(352413),
    u = n(45837);
function c(e) {
    let { user: t, guildId: n, size: c, showPending: d = !1, animateOnHover: _ = !1, avatarOverride: f } = e,
        { onMouseEnter: h, onMouseLeave: p, shouldAnimate: E } = (0, u.A)(_),
        { pendingAvatar: m } = (0, l.A)({ guildId: null === n ? void 0 : n }),
        g = d && null != t ? (0, a.V7)({ userId: t.id, image: m, canAnimate: E, size: c }) : void 0,
        A = void 0 !== f ? f : g,
        I = (0, r.bG)([o.Ay], () => (null != n && null != t ? o.Ay.getMember(n, t.id) : null));
    return {
        avatarSrc: i.useMemo(
            () => (null != t ? (0, s.sv)(A, I, t, { canAnimate: E, size: c }) : void 0),
            [A, I, t, E, c],
        ),
        isAvatarAnimating: E,
        eventHandlers: { onMouseEnter: h, onMouseLeave: p },
    };
}
