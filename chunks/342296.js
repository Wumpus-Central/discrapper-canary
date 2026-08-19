n.d(t, { A: () => T, S: () => u });
var i = n(477900),
    s = n(582128),
    a = n(17928),
    l = n(778712),
    r = n(922016),
    E = n(335180),
    o = n(287809),
    c = n(454719),
    d = n(589022),
    _ = n(518477),
    S = n(818348);
let u = (0, l.FT)(l._3.SIZE_80),
    A = { onMouseDown: S.tE, onClick: S.tE, onKeyDown: S.tE, "aria-controls": void 0, "aria-expanded": !1 },
    I = { isShown: !1, position: void 0 };
function h(e) {
    let {
            children: t,
            user: n,
            currentUser: a,
            guildId: l,
            channelId: o,
            messageId: S,
            roleId: A,
            disableUserProfileLink: I,
            newAnalyticsLocations: h,
            appContext: T,
            avatarUrl: R,
            preload: N,
            renderPopout: m,
            onRequestOpen: C,
            onRequestClose: P,
            onClosePopout: O,
            shouldShow: x,
            shouldPreload: f = !0,
            ignoreModalClicks: v = !0,
            ...g
        } = e,
        p = s.useRef(void 0),
        j = s.useCallback(
            () =>
                null != N
                    ? N()
                    : (0, c.A)(n.id, R ?? n.getAvatarURL(l, u), {
                          type: "popout",
                          withMutualGuilds: n.id !== a.id,
                          withMutualFriends: !n.bot && n.id !== a.id,
                          guildId: l,
                          channelId: o,
                      }),
            [N, a, n, R, l, o],
        ),
        D = s.useCallback(
            (e) =>
                ((p.current = Date.now()), null != m)
                    ? m(e, p.current)
                    : (0, i.jsx)(d.A, {
                          ...e,
                          user: n,
                          currentUser: a,
                          guildId: l,
                          channelId: o,
                          roleId: A,
                          messageId: S,
                          disableUserProfileLink: I,
                          newAnalyticsLocations: h,
                          appContext: T,
                          openedAt: p.current,
                          closePopout: () => {
                              e.closePopout(), O?.();
                          },
                      }),
            [n, a, m, l, o, A, S, I, h, T, O],
        );
    return (0, i.jsx)(r.Y, {
        popoutKey: _.KM,
        shouldShow: x,
        preload: f ? j : void 0,
        loadingComponent: (0, E.Zm)(),
        renderPopout: D,
        onRequestOpen: C,
        onRequestClose: P,
        ignoreModalClicks: v,
        ...g,
        children: t,
    });
}
let T = s.memo(function (e) {
    let { children: t, userId: n, user: s, ...l } = e,
        r = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
        E = (0, a.bG)([o.default], () => s ?? o.default.getUser(n));
    return null == E || null == r ? t(A, I) : (0, i.jsx)(h, { ...l, user: E, currentUser: r, children: t });
});
