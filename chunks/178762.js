n.d(t, {
    Ir: () => H,
    J: () => V,
    YN: () => k,
    ZP: () => W,
    iZ: () => G,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(91192),
    l = n(876215),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    f = n(607070),
    p = n(439170),
    _ = n(594174),
    m = n(69259),
    h = n(370370),
    g = n(107062),
    E = n(91140),
    b = n(227172),
    y = n(342998),
    O = n(551228),
    v = n(678869),
    S = n(278399),
    I = n(886217),
    T = n(555672),
    C = n(644548),
    A = n(335326),
    N = n(268010),
    P = n(797342),
    R = n(206583);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
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
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = M(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function M(e, t) {
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
    return (null == e ? void 0 : e.type) === p.so.CONTENT_INVENTORY ? k : 0;
}
let Z = (e) => {
        var { entry: t } = e,
            n = j(e, ["entry"]);
        switch (t.content_type) {
            case l.s.PLAYED_GAME:
                return (0, r.jsx)(E.Z, L(D({}, n), { entry: t }));
            case l.s.WATCHED_MEDIA:
                return (0, r.jsx)(A.Z, L(D({}, n), { entry: t }));
            case l.s.TOP_GAME:
                return (0, r.jsx)(T.ZP, L(D({}, n), { entry: t }));
            case l.s.TOP_ARTIST:
                return (0, r.jsx)(S.ZP, L(D({}, n), { entry: t }));
            case l.s.LISTENED_SESSION:
                return (0, r.jsx)(O.ZP, L(D({}, n), { entry: t }));
            case l.s.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(h.Z, L(D({}, n), { entry: t }));
            default:
                return null;
        }
    },
    F = (e) => {
        var t,
            { entry: n, targetElementRef: i } = e,
            a = j(e, ["entry", "targetElementRef"]);
        return n.content_type === l.s.PLAYED_GAME
            ? (0, r.jsx)(y.Z, {
                  entry: n,
                  targetElementRef: i,
                  isFirstApplicationOccurrence: null != (t = a.isFirstApplicationOccurrence) && t,
              })
            : null;
    },
    B = (e) => {
        var { closePopout: t } = e,
            n = j(e, ["closePopout"]);
        return (0, r.jsx)(
            V,
            D(
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
                        n.trackRankingItemInteraction(R.xP.VOICE_CHANNEL_PREVIEWED, {
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
            n = j(e, ["entry"]);
        switch (t.content_type) {
            case l.s.PLAYED_GAME:
                return (0, r.jsx)(b.Z, L(D({}, n), { entry: t }));
            case l.s.WATCHED_MEDIA:
                return (0, r.jsx)(N.Z, L(D({}, n), { entry: t }));
            case l.s.TOP_GAME:
                return (0, r.jsx)(C.Z, L(D({}, n), { entry: t }));
            case l.s.TOP_ARTIST:
                return (0, r.jsx)(I.Z, L(D({}, n), { entry: t }));
            case l.s.LISTENED_SESSION:
                return (0, r.jsx)(v.Z, L(D({}, n), { entry: t }));
            case l.s.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(g.ZP, L(D({}, n), { entry: t }));
            default:
                return null;
        }
    },
    H = i.createContext(void 0),
    Y = (e) => {
        var t,
            { index: a, ref: l } = e,
            p = j(e, ["index", "ref"]);
        let h = i.useRef(null),
            [g, E] = i.useState("default"),
            [b, y] = i.useState(!1),
            O = (0, s.JA)("".concat(a)),
            v = null == (t = _.default.getCurrentUser()) ? void 0 : t.isStaff(),
            { isRich: S, appName: I } = (0, P.n)(p.entry),
            T = i.useMemo(
                () => ({
                    entry: p.entry,
                    channelId: p.channel.id,
                    guildId: p.channel.guild_id,
                    requestId: p.requestId,
                    richPresenceName: S ? I : void 0,
                }),
                [I, p.channel.guild_id, p.channel.id, p.entry, p.requestId, S],
            ),
            C = i.useRef(!1),
            [A, N] = i.useState(!1),
            [w, x] = i.useState(!1),
            M = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled);
        i.useEffect(() => {
            A && M && x(!0);
        }, [A, M]),
            i.useLayoutEffect(() => {
                null != h.current && y(!0);
            }, []);
        let k = i.useCallback(
                (e) => {
                    v &&
                        (0, d.jW)(e, async () => {
                            let { default: e } = await n.e("153").then(n.bind(n, 330150));
                            return () =>
                                (0, r.jsx)(e, {
                                    entry: p.entry,
                                    requestId: p.requestId,
                                });
                        });
                },
                [p, v],
            ),
            G = i.useCallback(() => {
                E(String(Date.now()));
            }, []),
            V = i.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, m.L)(e, D({}, T, t));
                },
                [T],
            ),
            Y = i.useMemo(
                () =>
                    o().throttle(
                        (e) => {
                            (0, m.L)(R.xP.CARD_POPOUT_OPEN, e);
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
                (C.current = !1),
                    setTimeout(() => {
                        C.current || (N(!1), x(M));
                    }, 100);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                b && (0, r.jsx)(F, L(D({}, p), { targetElementRef: h })),
                (0, r.jsx)("div", {
                    ref: l,
                    onMouseEnter: () => {
                        (C.current = !0),
                            setTimeout(() => {
                                C.current && N(!0), Y(T);
                            }, 100);
                    },
                    onMouseLeave: W,
                    children: (0, r.jsx)(u.yRy, {
                        targetElementRef: h,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(H.Provider, {
                                value: W,
                                children: (0, r.jsx)(
                                    B,
                                    D(
                                        {
                                            closePopout: t,
                                            updatePopoutPosition: G,
                                            trackRankingItemInteraction: V,
                                        },
                                        p,
                                    ),
                                ),
                            });
                        },
                        position: "left",
                        shouldShow: A,
                        positionKey: g,
                        onRequestOpen: () => Y(T),
                        onRequestClose: () => {
                            w && W();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, r.jsx)(
                                u.P3F,
                                L(D({}, e, O), {
                                    innerRef: h,
                                    focusProps: {
                                        offset: {
                                            top: 4,
                                            bottom: 4,
                                            left: 4,
                                            right: 4,
                                        },
                                    },
                                    onClick: () => {
                                        A || N(!0);
                                    },
                                    onContextMenu: k,
                                    children: (0, r.jsx)(
                                        Z,
                                        L(D({}, p), {
                                            selected: n,
                                            hovered: C.current,
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
