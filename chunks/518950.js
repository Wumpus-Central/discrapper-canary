n.d(t, { Z: () => l });
var r = n(192379),
    i = n(481060),
    o = n(1585),
    a = n(125988),
    s = n(287008);
function l(e) {
    let { user: t, guildId: n, size: l, showPending: c = !1, showTryItOut: u = !1, animateOnHover: d = !1, avatarDecorationOverride: f, avatarOverride: p } = e,
        {
            avatarSrc: _,
            isAvatarAnimating: h,
            eventHandlers: m
        } = (0, s.Z)({
            user: t,
            guildId: n,
            size: (0, i.pxk)(l),
            showPending: c,
            animateOnHover: d,
            avatarOverride: p
        }),
        {
            avatarPlaceholderSrc: g,
            avatarDecorationSrc: E,
            eventHandlers: v
        } = (0, a.Z)({
            user: t,
            guildId: null != n ? n : void 0,
            size: (0, o.y9)(l),
            showPending: c,
            onlyAnimateOnHover: d,
            avatarDecorationOverride: f,
            showTryItOut: u
        });
    return {
        avatarPlaceholderSrc: g,
        avatarDecorationSrc: E,
        avatarSrc: _,
        isAnimating: h,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => {
                m.onMouseEnter(), v.onMouseEnter();
            }, [m, v]),
            onMouseLeave: r.useCallback(() => {
                m.onMouseLeave(), v.onMouseLeave();
            }, [m, v])
        }
    };
}
