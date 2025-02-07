n.d(t, { Z: () => u });
var i = n(192379),
    r = n(442837),
    a = n(654904),
    s = n(271383),
    o = n(369111),
    l = n(442552);
function u(e) {
    let { user: t, guildId: n, size: u, showPending: c = !1, animateOnHover: d = !1, avatarOverride: f } = e,
        { onMouseEnter: _, onMouseLeave: p, shouldAnimate: h } = (0, l.Z)(d),
        { pendingAvatar: m } = (0, o.Z)({}),
        g = c ? m : void 0,
        E = void 0 !== f ? f : g,
        v = (0, r.e7)([s.ZP], () => (null != n && null != t ? s.ZP.getMember(n, t.id) : null));
    return {
        avatarSrc: i.useMemo(
            () =>
                null != t
                    ? (0, a.SG)(E, v, t, {
                          canAnimate: h,
                          size: u
                      })
                    : void 0,
            [E, v, t, h, u]
        ),
        isAvatarAnimating: h,
        eventHandlers: {
            onMouseEnter: _,
            onMouseLeave: p
        }
    };
}
