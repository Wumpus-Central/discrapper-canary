r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(192379),
    a = r(481060),
    o = r(1585),
    s = r(125988),
    l = r(287008);
function u(e) {
    let { user: n, guildId: r, size: u, showPending: c = !1, showTryItOut: d = !1, animateOnHover: f = !1, avatarDecorationOverride: p, avatarOverride: h } = e,
        {
            avatarSrc: _,
            isAvatarAnimating: m,
            eventHandlers: g
        } = (0, l.Z)({
            user: n,
            guildId: r,
            size: (0, a.getAvatarSize)(u),
            showPending: c,
            animateOnHover: f,
            avatarOverride: h
        }),
        {
            avatarPlaceholderSrc: E,
            avatarDecorationSrc: v,
            eventHandlers: y
        } = (0, s.Z)({
            user: n,
            guildId: null != r ? r : void 0,
            size: (0, o.y9)(u),
            showPending: c,
            onlyAnimateOnHover: f,
            avatarDecorationOverride: p,
            showTryItOut: d
        }),
        b = i.useCallback(() => {
            g.onMouseEnter(), y.onMouseEnter();
        }, [g, y]);
    return {
        avatarPlaceholderSrc: E,
        avatarDecorationSrc: v,
        avatarSrc: _,
        isAnimating: m,
        eventHandlers: {
            onMouseEnter: b,
            onMouseLeave: i.useCallback(() => {
                g.onMouseLeave(), y.onMouseLeave();
            }, [g, y])
        }
    };
}
