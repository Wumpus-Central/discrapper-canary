"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(311907),
    a = n(385612),
    s = n(101058),
    o = n(696451),
    l = n(352413),
    u = n(45837);
function c(e) {
    let { user: t, guildId: n, size: c, showPending: d = !1, animateOnHover: _ = !1, avatarOverride: f } = e,
        { onMouseEnter: p, onMouseLeave: h, shouldAnimate: m } = (0, u.A)(_),
        { pendingAvatar: g } = (0, l.A)({ guildId: null === n ? void 0 : n }),
        E = d && null != t ? (0, s.V7)({ userId: t.id, image: g, canAnimate: m, size: c }) : void 0,
        A = void 0 !== f ? f : E,
        I = (0, i.bG)([o.Ay], () => (null != n && null != t ? o.Ay.getMember(n, t.id) : null));
    return {
        avatarSrc: r.useMemo(
            () => (null != t ? (0, a.sv)(A, I, t, { canAnimate: m, size: c }) : void 0),
            [A, I, t, m, c],
        ),
        isAvatarAnimating: m,
        eventHandlers: { onMouseEnter: p, onMouseLeave: h },
    };
}
