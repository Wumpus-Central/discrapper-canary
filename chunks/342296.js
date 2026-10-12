t.d(i, { A: () => N, S: () => x });
var s = t(477900),
    n = t(582128),
    r = t(17928),
    l = t(778712),
    a = t(922016),
    c = t(335180),
    d = t(287809),
    o = t(454719),
    h = t(589022),
    u = t(518477),
    j = t(818348);
let x = (0, l.FT)(l._3.SIZE_80),
    v = { onMouseDown: j.tE, onClick: j.tE, onKeyDown: j.tE, "aria-controls": void 0, "aria-expanded": !1 },
    m = { isShown: !1, position: void 0 };
function f(e) {
    let {
            children: i,
            user: t,
            currentUser: r,
            guildId: l,
            channelId: d,
            messageId: j,
            roleId: v,
            disableUserProfileLink: m,
            newAnalyticsLocations: f,
            appContext: N,
            avatarUrl: g,
            preload: A,
            renderPopout: p,
            onRequestOpen: S,
            onRequestClose: w,
            onClosePopout: y,
            shouldShow: b,
            shouldPreload: C = !0,
            ignoreModalClicks: I = !0,
            ...P
        } = e,
        M = n.useRef(void 0),
        U = n.useCallback(
            () =>
                null != A
                    ? A()
                    : (0, o.A)(t.id, g ?? t.getAvatarURL(l, x), {
                          type: "popout",
                          withMutualGuilds: t.id !== r.id,
                          withMutualFriends: !t.bot && t.id !== r.id,
                          guildId: l,
                          channelId: d,
                      }),
            [A, r, t, g, l, d],
        ),
        L = n.useCallback(
            (e) =>
                ((M.current = Date.now()), null != p)
                    ? p(e, M.current)
                    : (0, s.jsx)(h.A, {
                          ...e,
                          user: t,
                          currentUser: r,
                          guildId: l,
                          channelId: d,
                          roleId: v,
                          messageId: j,
                          disableUserProfileLink: m,
                          newAnalyticsLocations: f,
                          appContext: N,
                          openedAt: M.current,
                          closePopout: () => {
                              (e.closePopout(), y?.());
                          },
                      }),
            [t, r, p, l, d, v, j, m, f, N, y],
        );
    return (0, s.jsx)(a.Y, {
        popoutKey: u.KM,
        shouldShow: b,
        preload: C ? U : void 0,
        loadingComponent: (0, c.Zm)(),
        renderPopout: L,
        onRequestOpen: S,
        onRequestClose: w,
        ignoreModalClicks: I,
        ...P,
        children: i,
    });
}
let N = n.memo(function (e) {
    let { children: i, userId: t, user: n, ...l } = e,
        a = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        c = (0, r.bG)([d.default], () => n ?? d.default.getUser(t));
    return null == c || null == a ? i(v, m) : (0, s.jsx)(f, { ...l, user: c, currentUser: a, children: i });
});
