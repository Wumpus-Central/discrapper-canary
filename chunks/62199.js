a.d(n, { A: () => c });
var t = a(64700),
    r = a(17928),
    i = a(252732),
    l = a(101058),
    o = a(696451),
    s = a(352413),
    u = a(45837);
function c(e) {
    let { user: n, guildId: a, size: c, showPending: d = !1, animateOnHover: p = !1, avatarOverride: _ } = e,
        { onMouseEnter: g, onMouseLeave: A, shouldAnimate: m } = (0, u.A)(p),
        { pendingAvatar: f } = (0, s.A)({ guildId: null === a ? void 0 : a }),
        E = d && null != n ? (0, l.V7)({ userId: n.id, image: f, canAnimate: m, size: c }) : void 0,
        v = void 0 !== _ ? _ : E,
        b = (0, r.bG)([o.Ay], () => (null != a && null != n ? o.Ay.getMember(a, n.id) : null));
    return {
        avatarSrc: t.useMemo(
            () => (null != n ? (0, i.sv)(v, b, n, { canAnimate: m, size: c }) : void 0),
            [v, b, n, m, c],
        ),
        isAvatarAnimating: m,
        eventHandlers: { onMouseEnter: g, onMouseLeave: A },
    };
}
