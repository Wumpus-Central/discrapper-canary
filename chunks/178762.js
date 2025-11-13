n.d(t, {
    Ir: () => H,
    J: () => V,
    YN: () => k,
    ZP: () => W,
    iZ: () => G,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n.n(a),
    s = n(91192),
    l = n(876215),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    f = n(607070),
    _ = n(439170),
    p = n(594174),
    h = n(69259),
    m = n(370370),
    g = n(107062),
    E = n(91140),
    b = n(227172),
    y = n(342998),
    O = n(551228),
    v = n(678869),
    I = n(278399),
    T = n(886217),
    S = n(555672),
    A = n(644548),
    C = n(335326),
    N = n(268010),
    R = n(797342),
    P = n(206583);
function D(e, t, n) {
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
function w(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = j(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let k = 72,
    U = 2000;
function G(e) {
    return (null == e ? void 0 : e.type) === _.so.CONTENT_INVENTORY ? k : 0;
}
let B = (e) => {
        var { entry: t } = e,
            n = M(e, ["entry"]);
        switch (t.content_type) {
            case l.s.PLAYED_GAME:
                return (0, r.jsx)(E.Z, L(w({}, n), { entry: t }));
            case l.s.WATCHED_MEDIA:
                return (0, r.jsx)(C.Z, L(w({}, n), { entry: t }));
            case l.s.TOP_GAME:
                return (0, r.jsx)(S.ZP, L(w({}, n), { entry: t }));
            case l.s.TOP_ARTIST:
                return (0, r.jsx)(I.ZP, L(w({}, n), { entry: t }));
            case l.s.LISTENED_SESSION:
                return (0, r.jsx)(O.ZP, L(w({}, n), { entry: t }));
            case l.s.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(m.Z, L(w({}, n), { entry: t }));
            default:
                return null;
        }
    },
    Z = (e) => {
        var t,
            { entry: n, targetElementRef: i } = e,
            a = M(e, ["entry", "targetElementRef"]);
        return n.content_type === l.s.PLAYED_GAME
            ? (0, r.jsx)(y.Z, {
                  entry: n,
                  targetElementRef: i,
                  isFirstApplicationOccurrence: null != (t = a.isFirstApplicationOccurrence) && t,
              })
            : null;
    },
    F = (e) => {
        var { closePopout: t } = e,
            n = M(e, ["closePopout"]);
        return (0, r.jsx)(
            V,
            w(
                {
                    onReaction: (e, r) => {
                        n.trackRankingItemInteraction(e, {
                            destinationChannelId: r.id,
                            destinationGuildId: r.guild_id,
                        }),
                            t();
                    },
                    closePopout: t,
                    onVoiceChannelPreview: (e) => {
                        n.trackRankingItemInteraction(P.xP.VOICE_CHANNEL_PREVIEWED, {
                            destinationChannelId: e.id,
                            destinationGuildId: e.guild_id,
                        });
                    },
                },
                n,
            ),
        );
    },
    V = (e) => {
        var { entry: t } = e,
            n = M(e, ["entry"]);
        switch (t.content_type) {
            case l.s.PLAYED_GAME:
                return (0, r.jsx)(b.Z, L(w({}, n), { entry: t }));
            case l.s.WATCHED_MEDIA:
                return (0, r.jsx)(N.Z, L(w({}, n), { entry: t }));
            case l.s.TOP_GAME:
                return (0, r.jsx)(A.Z, L(w({}, n), { entry: t }));
            case l.s.TOP_ARTIST:
                return (0, r.jsx)(T.Z, L(w({}, n), { entry: t }));
            case l.s.LISTENED_SESSION:
                return (0, r.jsx)(v.Z, L(w({}, n), { entry: t }));
            case l.s.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(g.ZP, L(w({}, n), { entry: t }));
            default:
                return null;
        }
    },
    H = i.createContext(void 0),
    Y = (e) => {
        var t,
            { index: a, ref: l } = e,
            _ = M(e, ["index", "ref"]);
        let m = i.useRef(null),
            [g, E] = i.useState("default"),
            [b, y] = i.useState(!1),
            O = (0, s.JA)("".concat(a)),
            v = null == (t = p.default.getCurrentUser()) ? void 0 : t.isStaff(),
            { isRich: I, appName: T } = (0, R.n)(_.entry),
            S = i.useMemo(
                () => ({
                    entry: _.entry,
                    channelId: _.channel.id,
                    guildId: _.channel.guild_id,
                    requestId: _.requestId,
                    richPresenceName: I ? T : void 0,
                }),
                [T, _.channel.guild_id, _.channel.id, _.entry, _.requestId, I],
            ),
            A = i.useRef(!1),
            [C, N] = i.useState(!1),
            [D, x] = i.useState(!1),
            j = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled);
        i.useEffect(() => {
            C && j && x(!0);
        }, [C, j]),
            i.useLayoutEffect(() => {
                null != m.current && y(!0);
            }, []);
        let k = i.useCallback(
                (e) => {
                    v &&
                        (0, d.jW)(e, async () => {
                            let { default: e } = await n.e("153").then(n.bind(n, 330150));
                            return () =>
                                (0, r.jsx)(e, {
                                    entry: _.entry,
                                    requestId: _.requestId,
                                });
                        });
                },
                [_, v],
            ),
            G = i.useCallback(() => {
                E(String(Date.now()));
            }, []),
            V = i.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, h.L)(e, w({}, S, t));
                },
                [S],
            ),
            Y = i.useMemo(
                () =>
                    o().throttle(
                        (e) => {
                            (0, h.L)(P.xP.CARD_POPOUT_OPEN, e);
                        },
                        U,
                        {
                            leading: !0,
                            trailing: !1,
                        },
                    ),
                [],
            ),
            W = () => {
                (A.current = !1),
                    setTimeout(() => {
                        A.current || (N(!1), x(j));
                    }, 100);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                b && (0, r.jsx)(Z, L(w({}, _), { targetElementRef: m })),
                (0, r.jsx)("div", {
                    ref: l,
                    onMouseEnter: () => {
                        (A.current = !0),
                            setTimeout(() => {
                                A.current && N(!0), Y(S);
                            }, 100);
                    },
                    onMouseLeave: W,
                    children: (0, r.jsx)(u.yRy, {
                        targetElementRef: m,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(H.Provider, {
                                value: W,
                                children: (0, r.jsx)(
                                    F,
                                    w(
                                        {
                                            closePopout: t,
                                            updatePopoutPosition: G,
                                            trackRankingItemInteraction: V,
                                        },
                                        _,
                                    ),
                                ),
                            });
                        },
                        position: "left",
                        shouldShow: C,
                        positionKey: g,
                        onRequestOpen: () => Y(S),
                        onRequestClose: () => {
                            D && W();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, r.jsx)(
                                u.P3F,
                                L(w({}, e, O), {
                                    innerRef: m,
                                    focusProps: {
                                        offset: {
                                            top: 4,
                                            bottom: 4,
                                            left: 4,
                                            right: 4,
                                        },
                                    },
                                    onClick: () => {
                                        C || N(!0);
                                    },
                                    onContextMenu: k,
                                    children: (0, r.jsx)(
                                        B,
                                        L(w({}, _), {
                                            selected: n,
                                            hovered: A.current,
                                        }),
                                    ),
                                }),
                            );
                        },
                    }),
                }),
            ],
        });
    },
    W = i.memo(Y);
