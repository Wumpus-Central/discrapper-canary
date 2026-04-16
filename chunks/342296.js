"use strict";
n.d(t, { A: () => E, S: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(287809),
    l = n(454719),
    u = n(589022),
    c = n(518477),
    d = n(818348);
let _ = (0, a.FT9)(a._3J.SIZE_80),
    f = { onMouseDown: d.tE, onClick: d.tE, onKeyDown: d.tE, "aria-controls": void 0, "aria-expanded": !1 },
    p = { isShown: !1, position: void 0 };
function h(e) {
    let {
            children: t,
            user: n,
            currentUser: s,
            guildId: o,
            channelId: d,
            messageId: f,
            roleId: p,
            disableUserProfileLink: h,
            newAnalyticsLocations: m,
            appContext: E,
            avatarUrl: g,
            preload: A,
            renderPopout: I,
            onRequestOpen: T,
            onRequestClose: S,
            onClosePopout: y,
            shouldShow: v,
            shouldPreload: N = !0,
            ...C
        } = e,
        R = i.useRef(void 0),
        O = i.useCallback(
            () =>
                null != A
                    ? A()
                    : (0, l.A)(n.id, g ?? n.getAvatarURL(o, _), {
                          type: "popout",
                          withMutualGuilds: n.id !== s.id,
                          withMutualFriends: !n.bot && n.id !== s.id,
                          guildId: o,
                          channelId: d,
                      }),
            [A, s, n, g, o, d],
        ),
        b = i.useCallback(
            (e) =>
                ((R.current = Date.now()), null != I)
                    ? I(e, R.current)
                    : (0, r.jsx)(u.A, {
                          ...e,
                          user: n,
                          currentUser: s,
                          guildId: o,
                          channelId: d,
                          roleId: p,
                          messageId: f,
                          disableUserProfileLink: h,
                          newAnalyticsLocations: m,
                          appContext: E,
                          openedAt: R.current,
                          closePopout: () => {
                              e.closePopout(), y?.();
                          },
                      }),
            [n, s, I, o, d, p, f, h, m, E, y],
        );
    return (0, r.jsx)(a.YNO, {
        popoutKey: c.KM,
        shouldShow: v,
        preload: N ? O : void 0,
        renderPopout: b,
        onRequestOpen: T,
        onRequestClose: S,
        ...C,
        children: t,
    });
}
function m(e) {
    let { children: t, userId: n, user: i, ...a } = e,
        l = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
        u = (0, s.bG)([o.default], () => i ?? o.default.getUser(n));
    return null == u || null == l ? t(f, p) : (0, r.jsx)(h, { ...a, user: u, currentUser: l, children: t });
}
let E = i.memo(m);
