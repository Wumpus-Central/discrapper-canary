n.d(t, { Z: () => c });
var r = n(192379),
    i = n(442837),
    o = n(654904),
    a = n(271383),
    s = n(369111),
    l = n(442552);
function c(e) {
    let { user: t, guildId: n, size: c, showPending: u = !1, animateOnHover: d = !1, avatarOverride: f } = e,
        { onMouseEnter: p, onMouseLeave: _, shouldAnimate: h } = (0, l.Z)(d),
        { pendingAvatar: m } = (0, s.Z)({}),
        g = u ? m : void 0,
        E = void 0 !== f ? f : g,
        v = (0, i.e7)([a.ZP], () => (null != n && null != t ? a.ZP.getMember(n, t.id) : null));
    return {
        avatarSrc: r.useMemo(
            () =>
                null != t
                    ? (0, o.SG)(E, v, t, {
                          canAnimate: h,
                          size: c
                      })
                    : void 0,
            [E, v, t, h, c]
        ),
        isAvatarAnimating: h,
        eventHandlers: {
            onMouseEnter: p,
            onMouseLeave: _
        }
    };
}
