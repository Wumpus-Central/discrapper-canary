n.d(t, {
    Ay: () => K,
    Jd: () => Y,
    Oo: () => H,
    bG: () => k,
    h9: () => G,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(837381),
    l = n(681154),
    c = n(311907),
    u = n(397927),
    d = n(442433),
    f = n(775602),
    p = n(963307),
    _ = n(287809),
    h = n(947593),
    m = n(468581),
    g = n(849258),
    E = n(322789),
    b = n(636202),
    y = n(27322),
    O = n(363670),
    A = n(525313),
    v = n(620708),
    S = n(247807),
    I = n(977001),
    T = n(273198),
    C = n(514243),
    N = n(654288),
    R = n(299846),
    w = n(424994);

function P(e, t, n) {
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
                P(e, t, n[t]);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = M(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let k = 72,
    U = 2e3;

function G(e) {
    return (null == e ? void 0 : e.type) === p.S9.CONTENT_INVENTORY ? k : 0;
}
let V = (e) => {
        let { entry: t } = e,
            n = j(e, ["entry"]);
        switch (t.content_type) {
            case l.I.PLAYED_GAME:
                return (0, r.jsx)(
                    E.A,
                    L(D({}, n), {
                        entry: t,
                    }),
                );
            case l.I.WATCHED_MEDIA:
                return (0, r.jsx)(
                    C.A,
                    L(D({}, n), {
                        entry: t,
                    }),
                );
            case l.I.TOP_GAME:
                return (0, r.jsx)(
                    I.Ay,
                    L(D({}, n), {
                        entry: t,
                    }),
                );
            case l.I.TOP_ARTIST:
                return (0, r.jsx)(
                    v.Ay,
                    L(D({}, n), {
                        entry: t,
                    }),
                );
            case l.I.LISTENED_SESSION:
                return (0, r.jsx)(
                    O.Ay,
                    L(D({}, n), {
                        entry: t,
                    }),
                );
            case l.I.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(
                    m.A,
                    L(D({}, n), {
                        entry: t,
                    }),
                );
            default:
                return null;
        }
    },
    F = (e) => {
        var t;
        let { entry: n, targetElementRef: i } = e,
            a = j(e, ["entry", "targetElementRef"]);
        return n.content_type !== l.I.PLAYED_GAME
            ? null
            : (0, r.jsx)(y.A, {
                  entry: n,
                  targetElementRef: i,
                  isFirstApplicationOccurrence: null != (t = a.isFirstApplicationOccurrence) && t,
              });
    },
    B = (e) => {
        let { closePopout: t } = e,
            n = j(e, ["closePopout"]);
        return (0, r.jsx)(
            H,
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
                        n.trackRankingItemInteraction(w.PA.VOICE_CHANNEL_PREVIEWED, {
                            destinationChannelId: e.id,
                            destinationGuildId: e.guild_id,
                        });
                    },
                },
                n,
            ),
        );
    },
    H = (e) => {
        let { entry: t } = e,
            n = j(e, ["entry"]);
        switch (t.content_type) {
            case l.I.PLAYED_GAME:
                return (0, r.jsx)(
                    b.A,
                    L(D({}, n), {
                        entry: t,
                    }),
                );
            case l.I.WATCHED_MEDIA:
                return (0, r.jsx)(
                    N.A,
                    L(D({}, n), {
                        entry: t,
                    }),
                );
            case l.I.TOP_GAME:
                return (0, r.jsx)(
                    T.A,
                    L(D({}, n), {
                        entry: t,
                    }),
                );
            case l.I.TOP_ARTIST:
                return (0, r.jsx)(
                    S.A,
                    L(D({}, n), {
                        entry: t,
                    }),
                );
            case l.I.LISTENED_SESSION:
                return (0, r.jsx)(
                    A.A,
                    L(D({}, n), {
                        entry: t,
                    }),
                );
            case l.I.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(
                    g.Ay,
                    L(D({}, n), {
                        entry: t,
                    }),
                );
            default:
                return null;
        }
    },
    Y = i.createContext(void 0),
    W = (e) => {
        var t;
        let { index: a, ref: l } = e,
            p = j(e, ["index", "ref"]),
            m = i.useRef(null),
            [g, E] = i.useState("default"),
            [b, y] = i.useState(!1),
            O = (0, o.rm)("".concat(a)),
            A = null == (t = _.default.getCurrentUser()) ? void 0 : t.isStaff(),
            { isRich: v, appName: S } = (0, R.u)(p.entry),
            I = i.useMemo(
                () => ({
                    entry: p.entry,
                    channelId: p.channel.id,
                    guildId: p.channel.guild_id,
                    requestId: p.requestId,
                    richPresenceName: v ? S : void 0,
                }),
                [S, p.channel.guild_id, p.channel.id, p.entry, p.requestId, v],
            ),
            T = i.useRef(!1),
            [C, N] = i.useState(!1),
            [P, x] = i.useState(!1),
            M = (0, c.bG)([f.A], () => f.A.keyboardModeEnabled);
        i.useEffect(() => {
            C && M && x(!0);
        }, [C, M]),
            i.useLayoutEffect(() => {
                null != m.current && y(!0);
            }, []);
        let k = i.useCallback(
                (e) => {
                    A &&
                        (0, d.L3)(e, async () => {
                            let { default: e } = await n.e("89346").then(n.bind(n, 949881));
                            return () =>
                                (0, r.jsx)(e, {
                                    entry: p.entry,
                                    requestId: p.requestId,
                                });
                        });
                },
                [p, A],
            ),
            G = i.useCallback(() => {
                E(String(Date.now()));
            }, []),
            H = i.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, h.I)(e, D({}, I, t));
                },
                [I],
            ),
            W = i.useMemo(
                () =>
                    s().throttle(
                        (e) => {
                            (0, h.I)(w.PA.CARD_POPOUT_OPEN, e);
                        },
                        U,
                        {
                            leading: !0,
                            trailing: !1,
                        },
                    ),
                [],
            ),
            K = () => {
                (T.current = !1),
                    setTimeout(() => {
                        T.current || (N(!1), x(M));
                    }, 100);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                b &&
                    (0, r.jsx)(
                        F,
                        L(D({}, p), {
                            targetElementRef: m,
                        }),
                    ),
                (0, r.jsx)("div", {
                    ref: l,
                    onMouseEnter: () => {
                        (T.current = !0),
                            setTimeout(() => {
                                T.current && N(!0), W(I);
                            }, 100);
                    },
                    onMouseLeave: K,
                    children: (0, r.jsx)(u.YNO, {
                        targetElementRef: m,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(Y.Provider, {
                                value: K,
                                children: (0, r.jsx)(
                                    B,
                                    D(
                                        {
                                            closePopout: t,
                                            updatePopoutPosition: G,
                                            trackRankingItemInteraction: H,
                                        },
                                        p,
                                    ),
                                ),
                            });
                        },
                        position: "left",
                        shouldShow: C,
                        positionKey: g,
                        onRequestOpen: () => W(I),
                        onRequestClose: () => {
                            P && K();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, r.jsx)(
                                u.DUT,
                                L(D({}, e, O), {
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
                                        V,
                                        L(D({}, p), {
                                            selected: n,
                                            hovered: T.current,
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
    K = i.memo(W);
