"use strict";
n.d(t, { A: () => _ });
var i = n(64700),
    r = n(17928),
    s = n(252732),
    a = n(101058),
    o = n(696451),
    l = n(352413),
    d = n(45837);
function _(e) {
    let { user: t, guildId: n, size: _, showPending: u = !1, animateOnHover: c = !1, avatarOverride: E } = e,
        { onMouseEnter: h, onMouseLeave: m, shouldAnimate: f } = (0, d.A)(c),
        { pendingAvatar: g } = (0, l.A)({ guildId: null === n ? void 0 : n }),
        p = u && null != t ? (0, a.V7)({ userId: t.id, image: g, canAnimate: f, size: _ }) : void 0,
        A = void 0 !== E ? E : p,
        I = (0, r.bG)([o.Ay], () => (null != n && null != t ? o.Ay.getMember(n, t.id) : null));
    return {
        avatarSrc: i.useMemo(
            () => (null != t ? (0, s.sv)(A, I, t, { canAnimate: f, size: _ }) : void 0),
            [A, I, t, f, _],
        ),
        isAvatarAnimating: f,
        eventHandlers: { onMouseEnter: h, onMouseLeave: m },
    };
}
