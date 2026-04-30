n.d(t, { A: () => _, S: () => p });
var r = n(627968),
    i = n(64700),
    a = n(17928),
    l = n(778712),
    s = n(922016),
    o = n(335180),
    u = n(287809),
    d = n(454719),
    c = n(589022),
    h = n(518477),
    y = n(818348);
let p = (0, l.FT)(l._3.SIZE_80),
    f = { onMouseDown: y.tE, onClick: y.tE, onKeyDown: y.tE, "aria-controls": void 0, "aria-expanded": !1 },
    m = { isShown: !1, position: void 0 };
function E(e) {
    let {
            children: t,
            user: n,
            currentUser: a,
            guildId: l,
            channelId: u,
            messageId: y,
            roleId: f,
            disableUserProfileLink: m,
            newAnalyticsLocations: E,
            appContext: _,
            avatarUrl: g,
            preload: C,
            renderPopout: v,
            onRequestOpen: S,
            onRequestClose: A,
            onClosePopout: w,
            shouldShow: M,
            shouldPreload: k = !0,
            ignoreModalClicks: L = !0,
            ...b
        } = e,
        T = i.useRef(void 0),
        K = i.useCallback(
            () =>
                null != C
                    ? C()
                    : (0, d.A)(n.id, g ?? n.getAvatarURL(l, p), {
                          type: "popout",
                          withMutualGuilds: n.id !== a.id,
                          withMutualFriends: !n.bot && n.id !== a.id,
                          guildId: l,
                          channelId: u,
                      }),
            [C, a, n, g, l, u],
        ),
        I = i.useCallback(
            (e) =>
                ((T.current = Date.now()), null != v)
                    ? v(e, T.current)
                    : (0, r.jsx)(c.A, {
                          ...e,
                          user: n,
                          currentUser: a,
                          guildId: l,
                          channelId: u,
                          roleId: f,
                          messageId: y,
                          disableUserProfileLink: m,
                          newAnalyticsLocations: E,
                          appContext: _,
                          openedAt: T.current,
                          closePopout: () => {
                              e.closePopout(), w?.();
                          },
                      }),
            [n, a, v, l, u, f, y, m, E, _, w],
        );
    return (0, r.jsx)(s.Y, {
        popoutKey: h.KM,
        shouldShow: M,
        preload: k ? K : void 0,
        loadingComponent: (0, o.Zm)(),
        renderPopout: I,
        onRequestOpen: S,
        onRequestClose: A,
        ignoreModalClicks: L,
        ...b,
        children: t,
    });
}
let _ = i.memo(function (e) {
    let { children: t, userId: n, user: i, ...l } = e,
        s = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        o = (0, a.bG)([u.default], () => i ?? u.default.getUser(n));
    return null == o || null == s ? t(f, m) : (0, r.jsx)(E, { ...l, user: o, currentUser: s, children: t });
});
