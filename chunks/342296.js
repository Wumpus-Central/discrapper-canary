var s = i(477900),
    n = i(582128),
    r = i(855986),
    l = i(778712),
    a = i(265872),
    c = i(335180),
    d = i(287809),
    o = i(365958),
    h = i(589022),
    u = i(518477),
    j = i(818348);
let x = (0, l.FT)(l._3.SIZE_80),
    v = { onMouseDown: j.tE, onClick: j.tE, onKeyDown: j.tE, "aria-controls": void 0, "aria-expanded": !1 },
    m = { isShown: !1, position: void 0 };
function f(e) {
    let {
            children: t,
            user: i,
            currentUser: r,
            guildId: l,
            channelId: d,
            messageId: j,
            roleId: v,
            disableUserProfileLink: m,
            newAnalyticsLocations: f,
            appContext: g,
            avatarUrl: N,
            preload: A,
            renderPopout: p,
            onRequestOpen: S,
            onRequestClose: w,
            onClosePopout: y,
            shouldShow: b,
            shouldPreload: I = !0,
            ignoreModalClicks: C = !0,
            ...P
        } = e,
        M = n.useRef(void 0),
        U = n.useCallback(
            () =>
                null != A
                    ? A()
                    : (0, o.A)(i.id, N ?? i.getAvatarURL(l, x), {
                          type: "popout",
                          withMutualGuilds: i.id !== r.id,
                          withMutualFriends: !i.bot && i.id !== r.id,
                          guildId: l,
                          channelId: d,
                      }),
            [A, r, i, N, l, d],
        ),
        L = n.useCallback(
            (e) =>
                ((M.current = Date.now()), null != p)
                    ? p(e, M.current)
                    : (0, s.jsx)(h.A, {
                          ...e,
                          user: i,
                          currentUser: r,
                          guildId: l,
                          channelId: d,
                          roleId: v,
                          messageId: j,
                          disableUserProfileLink: m,
                          newAnalyticsLocations: f,
                          appContext: g,
                          openedAt: M.current,
                          closePopout: () => {
                              (e.closePopout(), y?.());
                          },
                      }),
            [i, r, p, l, d, v, j, m, f, g, y],
        );
    return (0, s.jsx)(a.Y, {
        popoutKey: u.KM,
        shouldShow: b,
        preload: I ? U : void 0,
        loadingComponent: (0, c.Zm)(),
        renderPopout: L,
        onRequestOpen: S,
        onRequestClose: w,
        ignoreModalClicks: C,
        ...P,
        children: t,
    });
}
let g = n.memo(function (e) {
    let { children: t, userId: i, user: n, ...l } = e,
        a = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        c = (0, r.bG)([d.default], () => n ?? d.default.getUser(i));
    return null == c || null == a ? t(v, m) : (0, s.jsx)(f, { ...l, user: c, currentUser: a, children: t });
});
i.d(t, {}, { A: g, S: x });
