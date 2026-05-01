t.d(a, { A: () => _ });
var n = t(64700),
    r = t(17928),
    l = t(252732),
    i = t(101058),
    o = t(696451),
    s = t(352413),
    u = t(45837);
function _(e) {
    let { user: a, guildId: t, size: _, showPending: c = !1, animateOnHover: p = !1, avatarOverride: d } = e,
        { onMouseEnter: g, onMouseLeave: A, shouldAnimate: f } = (0, u.A)(p),
        { pendingAvatar: E } = (0, s.A)({ guildId: null === t ? void 0 : t }),
        v = c && null != a ? (0, i.V7)({ userId: a.id, image: E, canAnimate: f, size: _ }) : void 0,
        m = void 0 !== d ? d : v,
        b = (0, r.bG)([o.Ay], () => (null != t && null != a ? o.Ay.getMember(t, a.id) : null));
    return {
        avatarSrc: n.useMemo(
            () => (null != a ? (0, l.sv)(m, b, a, { canAnimate: f, size: _ }) : void 0),
            [m, b, a, f, _],
        ),
        isAvatarAnimating: f,
        eventHandlers: { onMouseEnter: g, onMouseLeave: A },
    };
}
