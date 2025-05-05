n.d(t, {
    I: () => v,
    Z: () => C
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(493773),
    l = n(237617),
    c = n(594174),
    u = n(122521),
    d = n(184301),
    f = n(726033),
    _ = n(228168),
    p = n(231338),
    h = n(744790);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = (0, o.pxk)(o.EFr.SIZE_80),
    I = {
        onMouseDown: p.dG,
        onClick: p.dG,
        onKeyDown: p.dG,
        'aria-controls': void 0,
        'aria-expanded': !1
    },
    S = {
        isShown: !1,
        position: void 0
    };
function T(e) {
    var { children: t, user: n, currentUser: a, guildId: s, channelId: l, messageId: c, roleId: u, disableUserProfileLink: p, newAnalyticsLocations: h, appContext: m, avatarUrl: E, preload: O, renderPopout: I, onRequestOpen: S, onRequestClose: T, onClosePopout: A, shouldShow: N, shouldPreload: C = !0 } = e,
        R = y(e, ['children', 'user', 'currentUser', 'guildId', 'channelId', 'messageId', 'roleId', 'disableUserProfileLink', 'newAnalyticsLocations', 'appContext', 'avatarUrl', 'preload', 'renderPopout', 'onRequestOpen', 'onRequestClose', 'onClosePopout', 'shouldShow', 'shouldPreload']);
    let P = i.useRef(void 0),
        w = i.useCallback(
            () =>
                null != O
                    ? O()
                    : (0, d.Z)(n.id, null != E ? E : n.getAvatarURL(s, v), {
                          type: 'popout',
                          withMutualGuilds: n.id !== a.id,
                          withMutualFriends: !n.bot && n.id !== a.id,
                          guildId: s,
                          channelId: l
                      }),
            [O, a, n, E, s, l]
        ),
        D = i.useCallback(
            (e) =>
                (null == P.current && (P.current = Date.now()), null != I)
                    ? I(e)
                    : (0, r.jsx)(
                          f.Z,
                          b(g({}, e), {
                              user: n,
                              currentUser: a,
                              guildId: s,
                              channelId: l,
                              roleId: u,
                              messageId: c,
                              disableUserProfileLink: p,
                              newAnalyticsLocations: h,
                              appContext: m,
                              openedAt: P.current,
                              closePopout: () => {
                                  e.closePopout(), null == A || A();
                              }
                          })
                      ),
            [n, a, I, s, l, u, c, p, h, m, A]
        );
    return (0, r.jsx)(
        o.yRy,
        b(
            g(
                {
                    popoutKey: _.Tg,
                    shouldShow: N,
                    preload: C ? w : void 0,
                    renderPopout: D,
                    onRequestOpen: () => {
                        null == P.current && (P.current = Date.now()), null == S || S();
                    },
                    onRequestClose: () => {
                        (P.current = void 0), null == T || T();
                    }
                },
                R
            ),
            { children: t }
        )
    );
}
function A(e) {
    var { children: t, user: n, currentUser: a, guildId: c, channelId: p, messageId: m, roleId: E, disableUserProfileLink: O, newAnalyticsLocations: I, appContext: S, avatarUrl: T, preload: A, renderPopout: N, onRequestOpen: C, onRequestClose: R, onClosePopout: P, shouldShow: w, shouldPreload: D = !0 } = e,
        L = y(e, ['children', 'user', 'currentUser', 'guildId', 'channelId', 'messageId', 'roleId', 'disableUserProfileLink', 'newAnalyticsLocations', 'appContext', 'avatarUrl', 'preload', 'renderPopout', 'onRequestOpen', 'onRequestClose', 'onClosePopout', 'shouldShow', 'shouldPreload']);
    let x = i.useRef(void 0),
        [M, k] = i.useState(!1),
        [j, U] = i.useState(!1),
        G = i.useRef(!1),
        B = i.useRef(void 0),
        V = i.useRef(void 0),
        F = i.useRef(void 0),
        Z = (0, u.Z)(),
        H = (0, l.Z)(Z),
        Y = i.useCallback(() => {
            clearTimeout(B.current), clearTimeout(V.current), clearTimeout(F.current);
        }, []);
    (0, s.zq)(Y);
    let W = i.useCallback(
            () =>
                null != A
                    ? A()
                    : (0, d.Z)(n.id, null != T ? T : n.getAvatarURL(c, v), {
                          type: 'popout',
                          withMutualGuilds: n.id !== a.id,
                          withMutualFriends: !n.bot && n.id !== a.id,
                          guildId: c,
                          channelId: p
                      }),
            [A, n, a, T, c, p]
        ),
        K = i.useCallback(
            (e) =>
                (null == x.current && (x.current = Date.now()), j)
                    ? (0, r.jsx)(o.xxz, {})
                    : null != N
                      ? N(e)
                      : (0, r.jsx)(
                            f.Z,
                            b(g({}, e), {
                                user: n,
                                currentUser: a,
                                guildId: c,
                                channelId: p,
                                roleId: E,
                                messageId: m,
                                disableUserProfileLink: O,
                                newAnalyticsLocations: I,
                                appContext: S,
                                openedAt: x.current,
                                closePopout: () => {
                                    e.closePopout(), null == P || P();
                                },
                                disableAutoFocus: !w
                            })
                        ),
            [n, a, N, c, p, E, m, O, I, S, P, j, w]
        ),
        z = i.useCallback(() => {
            Y(),
                (G.current = !0),
                D &&
                    (B.current = setTimeout(async () => {
                        if (G.current)
                            try {
                                U(!0), await W();
                            } finally {
                                U(!1);
                            }
                    }, _.a6)),
                (V.current = setTimeout(() => {
                    (0, o.$sL)() || H.current || (G.current && (null == x.current && (x.current = Date.now()), k(!0)));
                }, _.JX));
        }, [Y, D, W, H]),
        q = i.useCallback(() => {
            Y(),
                (G.current = !1),
                (F.current = setTimeout(() => {
                    G.current || ((x.current = void 0), k(!1));
                }, _.Ig));
        }, [Y]);
    return (0, r.jsx)('div', {
        className: h.hoverable,
        onMouseEnter: z,
        onMouseLeave: q,
        children: (0, r.jsx)(
            o.yRy,
            b(
                g(
                    {
                        popoutKey: _.Tg,
                        shouldShow: !0 === w || M,
                        preload: !D || j || M ? void 0 : W,
                        renderPopout: K,
                        onRequestOpen: () => {
                            null == x.current && (x.current = Date.now()), null == C || C();
                        },
                        onRequestClose: () => {
                            (x.current = void 0), k(!1), null == R || R();
                        }
                    },
                    L
                ),
                { children: t }
            )
        )
    });
}
function N(e) {
    var { children: t, userId: n, user: i, shouldShowOnHover: o = !1 } = e,
        s = y(e, ['children', 'userId', 'user', 'shouldShowOnHover']);
    let l = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        u = (0, a.e7)([c.default], () => (null != i ? i : c.default.getUser(n)));
    return null == u || null == l
        ? t(I, S)
        : o
          ? (0, r.jsx)(
                A,
                b(g({}, s), {
                    user: u,
                    currentUser: l,
                    children: t
                })
            )
          : (0, r.jsx)(
                T,
                b(g({}, s), {
                    user: u,
                    currentUser: l,
                    children: t
                })
            );
}
let C = i.memo(N);
