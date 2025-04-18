n.d(t, { Z: () => C }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
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
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = (0, a.pxk)(a.EFr.SIZE_80),
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
    var { children: t, user: n, currentUser: o, guildId: s, channelId: l, messageId: c, roleId: u, disableUserProfileLink: p, newAnalyticsLocations: h, appContext: m, avatarUrl: E, preload: v, renderPopout: I, onRequestOpen: S, onRequestClose: T, onClosePopout: N, shouldShow: A, shouldPreload: C = !0 } = e,
        R = y(e, ['children', 'user', 'currentUser', 'guildId', 'channelId', 'messageId', 'roleId', 'disableUserProfileLink', 'newAnalyticsLocations', 'appContext', 'avatarUrl', 'preload', 'renderPopout', 'onRequestOpen', 'onRequestClose', 'onClosePopout', 'shouldShow', 'shouldPreload']);
    let P = i.useRef(void 0),
        w = i.useCallback(
            () =>
                null != v
                    ? v()
                    : (0, d.Z)(n.id, null != E ? E : n.getAvatarURL(s, O), {
                          withMutualGuilds: n.id != n.id,
                          withMutualFriends: !n.bot && n.id !== o.id,
                          guildId: s,
                          channelId: l
                      }),
            [v, o, n, E, s, l]
        ),
        D = i.useCallback(
            (e) =>
                (null == P.current && (P.current = Date.now()), null != I)
                    ? I(e)
                    : (0, r.jsx)(
                          f.Z,
                          b(g({}, e), {
                              user: n,
                              currentUser: o,
                              guildId: s,
                              channelId: l,
                              roleId: u,
                              messageId: c,
                              disableUserProfileLink: p,
                              newAnalyticsLocations: h,
                              appContext: m,
                              openedAt: P.current,
                              closePopout: () => {
                                  e.closePopout(), null == N || N();
                              }
                          })
                      ),
            [n, o, I, s, l, u, c, p, h, m, N]
        );
    return (0, r.jsx)(
        a.yRy,
        b(
            g(
                {
                    popoutKey: _.Tg,
                    shouldShow: A,
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
function N(e) {
    var { children: t, user: n, currentUser: o, guildId: c, channelId: p, messageId: m, roleId: E, disableUserProfileLink: v, newAnalyticsLocations: I, appContext: S, avatarUrl: T, preload: N, renderPopout: A, onRequestOpen: C, onRequestClose: R, onClosePopout: P, shouldShow: w, shouldPreload: D = !0 } = e,
        L = y(e, ['children', 'user', 'currentUser', 'guildId', 'channelId', 'messageId', 'roleId', 'disableUserProfileLink', 'newAnalyticsLocations', 'appContext', 'avatarUrl', 'preload', 'renderPopout', 'onRequestOpen', 'onRequestClose', 'onClosePopout', 'shouldShow', 'shouldPreload']);
    let x = i.useRef(void 0),
        [M, k] = i.useState(!1),
        [j, U] = i.useState(!1),
        G = i.useRef(!1),
        B = i.useRef(void 0),
        F = i.useRef(void 0),
        V = i.useRef(void 0),
        Z = (0, u.Z)(),
        H = (0, l.Z)(Z),
        W = i.useCallback(() => {
            clearTimeout(B.current), clearTimeout(F.current), clearTimeout(V.current);
        }, []);
    (0, s.zq)(W);
    let Y = i.useCallback(
            () =>
                null != N
                    ? N()
                    : (0, d.Z)(n.id, null != T ? T : n.getAvatarURL(c, O), {
                          withMutualGuilds: n.id !== o.id,
                          withMutualFriends: !n.bot && n.id !== o.id,
                          guildId: c,
                          channelId: p
                      }),
            [N, n, o, T, c, p]
        ),
        K = i.useCallback(
            (e) =>
                (null == x.current && (x.current = Date.now()), j)
                    ? (0, r.jsx)(a.xxz, {})
                    : null != A
                      ? A(e)
                      : (0, r.jsx)(
                            f.Z,
                            b(g({}, e), {
                                user: n,
                                currentUser: o,
                                guildId: c,
                                channelId: p,
                                roleId: E,
                                messageId: m,
                                disableUserProfileLink: v,
                                newAnalyticsLocations: I,
                                appContext: S,
                                openedAt: x.current,
                                closePopout: () => {
                                    e.closePopout(), null == P || P();
                                }
                            })
                        ),
            [n, o, A, c, p, E, m, v, I, S, P, j]
        ),
        z = i.useCallback(() => {
            W(),
                (G.current = !0),
                D &&
                    (B.current = setTimeout(async () => {
                        if (G.current)
                            try {
                                U(!0), await Y();
                            } finally {
                                U(!1);
                            }
                    }, _.a6)),
                (F.current = setTimeout(() => {
                    (0, a.$sL)() || H.current || (G.current && (null == x.current && (x.current = Date.now()), k(!0)));
                }, _.JX));
        }, [W, D, Y, H]),
        q = i.useCallback(() => {
            W(),
                (G.current = !1),
                (V.current = setTimeout(() => {
                    G.current || ((x.current = void 0), k(!1));
                }, _.Ig));
        }, [W]);
    return (0, r.jsx)('div', {
        className: h.hoverable,
        onMouseEnter: z,
        onMouseLeave: q,
        children: (0, r.jsx)(
            a.yRy,
            b(
                g(
                    {
                        popoutKey: _.Tg,
                        shouldShow: !0 === w || M,
                        preload: !D || j || M ? void 0 : Y,
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
function A(e) {
    var { children: t, userId: n, user: i, shouldShowOnHover: a = !1 } = e,
        s = y(e, ['children', 'userId', 'user', 'shouldShowOnHover']);
    let l = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        u = (0, o.e7)([c.default], () => (null != i ? i : c.default.getUser(n)));
    return null == u || null == l
        ? t(I, S)
        : a
          ? (0, r.jsx)(
                N,
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
let C = i.memo(A);
