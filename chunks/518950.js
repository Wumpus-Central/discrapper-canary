n.d(t, { Z: () => l });
var i = n(192379),
    r = n(481060),
    a = n(1585),
    s = n(125988),
    o = n(287008);
function l(e) {
    let { user: t, guildId: n, size: l, showPending: u = !1, showTryItOut: c = !1, animateOnHover: d = !1, avatarDecorationOverride: f, avatarOverride: _ } = e,
        {
            avatarSrc: p,
            isAvatarAnimating: h,
            eventHandlers: m
        } = (0, o.Z)({
            user: t,
            guildId: n,
            size: (0, r.pxk)(l),
            showPending: u,
            animateOnHover: d,
            avatarOverride: _
        }),
        {
            avatarPlaceholderSrc: g,
            avatarDecorationSrc: E,
            eventHandlers: v
        } = (0, s.Z)({
            user: t,
            guildId: null != n ? n : void 0,
            size: (0, a.y9)(l),
            showPending: u,
            onlyAnimateOnHover: d,
            avatarDecorationOverride: f,
            showTryItOut: c
        });
    return {
        avatarPlaceholderSrc: g,
        avatarDecorationSrc: E,
        avatarSrc: p,
        isAnimating: h,
        eventHandlers: {
            onMouseEnter: i.useCallback(() => {
                m.onMouseEnter(), v.onMouseEnter();
            }, [m, v]),
            onMouseLeave: i.useCallback(() => {
                m.onMouseLeave(), v.onMouseLeave();
            }, [m, v])
        }
    };
}
