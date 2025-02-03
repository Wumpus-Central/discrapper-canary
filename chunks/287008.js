n.d(t, { Z: () => c }), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(607070),
    s = n(654904),
    o = n(271383),
    l = n(451478),
    u = n(369111);
function c(e) {
    let { user: t, guildId: n, size: c, showPending: d = !1, animateOnHover: f = !1, avatarOverride: _ } = e,
        [p, h] = i.useState(!1),
        m = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        g = (0, r.e7)([l.Z], () => l.Z.isFocused()) && (p || (!m && !f)),
        { pendingAvatar: E } = (0, u.Z)({}),
        v = d ? E : void 0,
        y = void 0 !== _ ? _ : v,
        I = (0, r.e7)([o.ZP], () => (null != n && null != t ? o.ZP.getMember(n, t.id) : null)),
        b = i.useMemo(
            () =>
                null != t
                    ? (0, s.SG)(y, I, t, {
                          canAnimate: g,
                          size: c
                      })
                    : void 0,
            [y, I, t, g, c]
        );
    return {
        avatarSrc: b,
        isAvatarAnimating: g,
        eventHandlers: {
            onMouseEnter: i.useCallback(() => h(!0), []),
            onMouseLeave: i.useCallback(() => h(!1), [])
        }
    };
}
