n.d(t, {
    I: () => E,
    Z: () => I,
});
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(594174),
    l = n(184301),
    c = n(726033),
    u = n(228168),
    d = n(231338);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = (0, o.pxk)(o.EFr.SIZE_80),
    b = {
        onMouseDown: d.dG,
        onClick: d.dG,
        onKeyDown: d.dG,
        "aria-controls": void 0,
        "aria-expanded": !1,
    },
    y = {
        isShown: !1,
        position: void 0,
    };
function O(e) {
    var {
            children: t,
            user: n,
            currentUser: a,
            guildId: s,
            channelId: d,
            messageId: f,
            roleId: p,
            disableUserProfileLink: g,
            newAnalyticsLocations: b,
            appContext: y,
            avatarUrl: O,
            preload: v,
            renderPopout: I,
            onRequestOpen: T,
            onRequestClose: S,
            onClosePopout: A,
            shouldShow: C,
            shouldPreload: N = !0,
            onRoleClick: R,
        } = e,
        P = m(e, [
            "children",
            "user",
            "currentUser",
            "guildId",
            "channelId",
            "messageId",
            "roleId",
            "disableUserProfileLink",
            "newAnalyticsLocations",
            "appContext",
            "avatarUrl",
            "preload",
            "renderPopout",
            "onRequestOpen",
            "onRequestClose",
            "onClosePopout",
            "shouldShow",
            "shouldPreload",
            "onRoleClick",
        ]);
    let D = i.useRef(void 0),
        w = i.useCallback(
            () =>
                null != v
                    ? v()
                    : (0, l.Z)(n.id, null != O ? O : n.getAvatarURL(s, E), {
                          type: "popout",
                          withMutualGuilds: n.id !== a.id,
                          withMutualFriends: !n.bot && n.id !== a.id,
                          guildId: s,
                          channelId: d,
                      }),
            [v, a, n, O, s, d],
        ),
        x = i.useCallback(
            (e) =>
                ((D.current = Date.now()), null != I)
                    ? I(e, D.current)
                    : (0, r.jsx)(
                          c.Z,
                          h(_({}, e), {
                              user: n,
                              currentUser: a,
                              guildId: s,
                              channelId: d,
                              roleId: p,
                              messageId: f,
                              disableUserProfileLink: g,
                              newAnalyticsLocations: b,
                              appContext: y,
                              openedAt: D.current,
                              closePopout: () => {
                                  e.closePopout(), null == A || A();
                              },
                              onRoleClick: R,
                          }),
                      ),
            [n, a, I, s, d, p, f, g, b, y, A, R],
        );
    return (0, r.jsx)(
        o.yRy,
        h(
            _(
                {
                    popoutKey: u.Tg,
                    shouldShow: C,
                    preload: N ? w : void 0,
                    renderPopout: x,
                    onRequestOpen: T,
                    onRequestClose: S,
                },
                P,
            ),
            { children: t },
        ),
    );
}
function v(e) {
    var { children: t, userId: n, user: i } = e,
        o = m(e, ["children", "userId", "user"]);
    let l = (0, a.e7)([s.default], () => s.default.getCurrentUser()),
        c = (0, a.e7)([s.default], () => (null != i ? i : s.default.getUser(n)));
    return null == c || null == l
        ? t(b, y)
        : (0, r.jsx)(
              O,
              h(_({}, o), {
                  user: c,
                  currentUser: l,
                  children: t,
              }),
          );
}
let I = i.memo(v);
