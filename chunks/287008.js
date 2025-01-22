r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(607070),
    l = r(654904),
    u = r(271383),
    c = r(451478),
    d = r(369111);
function f(e) {
    let { user: n, guildId: r, size: i, showPending: f = !1, animateOnHover: p = !1, avatarOverride: h } = e,
        [_, m] = a.useState(!1),
        g = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        E = (0, o.e7)([c.Z], () => c.Z.isFocused()) && (_ || (!g && !p)),
        { pendingAvatar: v } = (0, d.Z)({}),
        y = f ? v : void 0,
        b = void 0 !== h ? h : y,
        I = (0, o.e7)([u.ZP], () => (null != r && null != n ? u.ZP.getMember(r, n.id) : null)),
        T = a.useMemo(
            () =>
                null != n
                    ? (0, l.SG)(b, I, n, {
                          canAnimate: E,
                          size: i
                      })
                    : void 0,
            [b, I, n, E, i]
        ),
        S = a.useCallback(() => m(!0), []);
    return {
        avatarSrc: T,
        isAvatarAnimating: E,
        eventHandlers: {
            onMouseEnter: S,
            onMouseLeave: a.useCallback(() => m(!1), [])
        }
    };
}
