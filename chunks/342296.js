"use strict";
n.d(t, { A: () => g, S: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(287809),
    l = n(454719),
    u = n(589022),
    c = n(518477),
    d = n(818348);
let _ = (0, s.FT9)(s._3J.SIZE_80),
    f = { onMouseDown: d.tE, onClick: d.tE, onKeyDown: d.tE, "aria-controls": void 0, "aria-expanded": !1 },
    p = { isShown: !1, position: void 0 };
function h(e) {
    let {
            children: t,
            user: n,
            currentUser: a,
            guildId: o,
            channelId: d,
            messageId: f,
            roleId: p,
            disableUserProfileLink: h,
            newAnalyticsLocations: m,
            appContext: g,
            avatarUrl: E,
            preload: A,
            renderPopout: I,
            onRequestOpen: T,
            onRequestClose: y,
            onClosePopout: S,
            shouldShow: v,
            shouldPreload: C = !0,
            ...b
        } = e,
        N = i.useRef(void 0),
        R = i.useCallback(
            () =>
                null != A
                    ? A()
                    : (0, l.A)(n.id, E ?? n.getAvatarURL(o, _), {
                          type: "popout",
                          withMutualGuilds: n.id !== a.id,
                          withMutualFriends: !n.bot && n.id !== a.id,
                          guildId: o,
                          channelId: d,
                      }),
            [A, a, n, E, o, d],
        ),
        O = i.useCallback(
            (e) =>
                ((N.current = Date.now()), null != I)
                    ? I(e, N.current)
                    : (0, r.jsx)(u.A, {
                          ...e,
                          user: n,
                          currentUser: a,
                          guildId: o,
                          channelId: d,
                          roleId: p,
                          messageId: f,
                          disableUserProfileLink: h,
                          newAnalyticsLocations: m,
                          appContext: g,
                          openedAt: N.current,
                          closePopout: () => {
                              e.closePopout(), S?.();
                          },
                      }),
            [n, a, I, o, d, p, f, h, m, g, S],
        );
    return (0, r.jsx)(s.YNO, {
        popoutKey: c.KM,
        shouldShow: v,
        preload: C ? R : void 0,
        renderPopout: O,
        onRequestOpen: T,
        onRequestClose: y,
        ...b,
        children: t,
    });
}
function m(e) {
    let { children: t, userId: n, user: i, ...s } = e,
        l = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
        u = (0, a.bG)([o.default], () => i ?? o.default.getUser(n));
    return null == u || null == l ? t(f, p) : (0, r.jsx)(h, { ...s, user: u, currentUser: l, children: t });
}
let g = i.memo(m);
