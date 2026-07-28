"use strict";
n.d(t, { A: () => c });
var i = n(582128),
    r = n(17928),
    a = n(252732),
    s = n(101058),
    l = n(696451),
    o = n(352413),
    d = n(45837);
function c(e) {
    let { user: t, guildId: n, size: c, showPending: u = !1, animateOnHover: _ = !1, avatarOverride: E } = e,
        { onMouseEnter: A, onMouseLeave: h, shouldAnimate: I } = (0, d.A)(_),
        { pendingAvatar: f } = (0, o.A)({ guildId: null === n ? void 0 : n }),
        p = u && null != t ? (0, s.V7)({ userId: t.id, image: f, canAnimate: I, size: c }) : void 0,
        T = void 0 !== E ? E : p,
        m = (0, r.bG)([l.Ay], () => (null != n && null != t ? l.Ay.getMember(n, t.id) : null));
    return {
        avatarSrc: i.useMemo(
            () => (null != t ? (0, a.sv)(T, m, t, { canAnimate: I, size: c }) : void 0),
            [T, m, t, I, c],
        ),
        isAvatarAnimating: I,
        eventHandlers: { onMouseEnter: A, onMouseLeave: h },
    };
}
