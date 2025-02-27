n.d(t, { Z: () => u });
var r = n(192379),
    i = n(442837),
    o = n(654904),
    a = n(643879),
    s = n(271383),
    l = n(369111),
    c = n(442552);
function u(e) {
    let { user: t, guildId: n, size: u, showPending: d = !1, animateOnHover: f = !1, avatarOverride: _ } = e,
        { onMouseEnter: p, onMouseLeave: h, shouldAnimate: g } = (0, c.Z)(f),
        { pendingAvatarV2: m } = (0, l.Z)({}),
        E =
            d && null != t
                ? (0, a.SD)({
                      userId: t.id,
                      image: m,
                      canAnimate: g,
                      size: u
                  })
                : void 0,
        v = void 0 !== _ ? _ : E,
        b = (0, i.e7)([s.ZP], () => (null != n && null != t ? s.ZP.getMember(n, t.id) : null));
    return {
        avatarSrc: r.useMemo(
            () =>
                null != t
                    ? (0, o.SG)(v, b, t, {
                          canAnimate: g,
                          size: u
                      })
                    : void 0,
            [v, b, t, g, u]
        ),
        isAvatarAnimating: g,
        eventHandlers: {
            onMouseEnter: p,
            onMouseLeave: h
        }
    };
}
