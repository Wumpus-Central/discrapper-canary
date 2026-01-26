n.d(t, {
    Ay: () => q,
    Jd: () => K,
    Oo: () => W,
    bG: () => U,
    h9: () => F,
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
    p = n(941726),
    _ = n(963307),
    h = n(287809),
    m = n(947593),
    g = n(468581),
    E = n(849258),
    y = n(322789),
    b = n(636202),
    O = n(27322),
    v = n(363670),
    A = n(525313),
    I = n(620708),
    S = n(247807),
    T = n(977001),
    C = n(273198),
    N = n(514243),
    w = n(654288),
    R = n(299846),
    P = n(424994);

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

function x(e) {
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

function L(e, t) {
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

function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function M(e, t) {
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
    if (((a = k(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let U = 72,
    G = 32,
    V = 2e3;

function F(e) {
    return (null == e ? void 0 : e.type) === _.S9.CONTENT_INVENTORY
        ? e.entry.content_type === l.I.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? U + G
            : U
        : 0;
}
let B = (e) => {
        let { entry: t } = e,
            n = M(e, ["entry"]);
        switch (t.content_type) {
            case l.I.PLAYED_GAME:
                return (0, r.jsx)(
                    y.A,
                    j(x({}, n), {
                        entry: t,
                    }),
                );
            case l.I.WATCHED_MEDIA:
                return (0, r.jsx)(
                    N.A,
                    j(x({}, n), {
                        entry: t,
                    }),
                );
            case l.I.TOP_GAME:
                return (0, r.jsx)(
                    T.Ay,
                    j(x({}, n), {
                        entry: t,
                    }),
                );
            case l.I.TOP_ARTIST:
                return (0, r.jsx)(
                    I.Ay,
                    j(x({}, n), {
                        entry: t,
                    }),
                );
            case l.I.LISTENED_SESSION:
                return (0, r.jsx)(
                    v.Ay,
                    j(x({}, n), {
                        entry: t,
                    }),
                );
            case l.I.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(
                    g.A,
                    j(x({}, n), {
                        entry: t,
                    }),
                );
            default:
                return null;
        }
    },
    H = (e) => {
        var t;
        let { entry: n, targetElementRef: i } = e,
            a = M(e, ["entry", "targetElementRef"]);
        return n.content_type !== l.I.PLAYED_GAME
            ? null
            : (0, r.jsx)(O.A, {
                  entry: n,
                  targetElementRef: i,
                  isFirstApplicationOccurrence: null != (t = a.isFirstApplicationOccurrence) && t,
              });
    },
    Y = (e) => {
        let { closePopout: t } = e,
            n = M(e, ["closePopout"]);
        return (0, r.jsx)(
            W,
            x(
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
                        n.trackRankingItemInteraction(P.PA.VOICE_CHANNEL_PREVIEWED, {
                            destinationChannelId: e.id,
                            destinationGuildId: e.guild_id,
                        });
                    },
                },
                n,
            ),
        );
    },
    W = (e) => {
        let { entry: t } = e,
            n = M(e, ["entry"]);
        switch (t.content_type) {
            case l.I.PLAYED_GAME:
                return (0, r.jsx)(
                    b.A,
                    j(x({}, n), {
                        entry: t,
                    }),
                );
            case l.I.WATCHED_MEDIA:
                return (0, r.jsx)(
                    w.A,
                    j(x({}, n), {
                        entry: t,
                    }),
                );
            case l.I.TOP_GAME:
                return (0, r.jsx)(
                    C.A,
                    j(x({}, n), {
                        entry: t,
                    }),
                );
            case l.I.TOP_ARTIST:
                return (0, r.jsx)(
                    S.A,
                    j(x({}, n), {
                        entry: t,
                    }),
                );
            case l.I.LISTENED_SESSION:
                return (0, r.jsx)(
                    A.A,
                    j(x({}, n), {
                        entry: t,
                    }),
                );
            case l.I.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(
                    E.Ay,
                    j(x({}, n), {
                        entry: t,
                    }),
                );
            default:
                return null;
        }
    },
    K = i.createContext(void 0),
    z = (e) => {
        var t;
        let { index: a, ref: l } = e,
            _ = M(e, ["index", "ref"]),
            g = i.useRef(null),
            [E, y] = i.useState("default"),
            [b, O] = i.useState(!1),
            v = (0, o.rm)("".concat(a)),
            A = null == (t = h.default.getCurrentUser()) ? void 0 : t.isStaff(),
            { isRich: I, appName: S } = (0, R.u)(_.entry);
        (0, p.T2)(_.entry.id);
        let T = i.useMemo(
                () => ({
                    entry: _.entry,
                    channelId: _.channel.id,
                    guildId: _.channel.guild_id,
                    requestId: _.requestId,
                    richPresenceName: I ? S : void 0,
                }),
                [S, _.channel.guild_id, _.channel.id, _.entry, _.requestId, I],
            ),
            C = i.useRef(!1),
            [N, w] = i.useState(!1),
            [D, L] = i.useState(!1),
            k = (0, c.bG)([f.A], () => f.A.keyboardModeEnabled);
        i.useEffect(() => {
            N && k && L(!0);
        }, [N, k]),
            i.useLayoutEffect(() => {
                null != g.current && O(!0);
            }, []);
        let U = i.useCallback(
                (e) => {
                    A &&
                        (0, d.L3)(e, async () => {
                            let { default: e } = await n.e("89346").then(n.bind(n, 949881));
                            return () =>
                                (0, r.jsx)(e, {
                                    entry: _.entry,
                                    requestId: _.requestId,
                                });
                        });
                },
                [_, A],
            ),
            G = i.useCallback(() => {
                y(String(Date.now()));
            }, []),
            F = i.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, m.I)(e, x({}, T, t));
                },
                [T],
            ),
            W = i.useMemo(
                () =>
                    s().throttle(
                        (e) => {
                            (0, m.I)(P.PA.CARD_POPOUT_OPEN, e);
                        },
                        V,
                        {
                            leading: !0,
                            trailing: !1,
                        },
                    ),
                [],
            ),
            z = () => {
                (C.current = !1),
                    setTimeout(() => {
                        C.current || (w(!1), L(k));
                    }, 100);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                b &&
                    (0, r.jsx)(
                        H,
                        j(x({}, _), {
                            targetElementRef: g,
                        }),
                    ),
                (0, r.jsx)("div", {
                    ref: l,
                    onMouseEnter: () => {
                        (C.current = !0),
                            setTimeout(() => {
                                C.current && w(!0), W(T);
                            }, 100);
                    },
                    onMouseLeave: z,
                    children: (0, r.jsx)(u.YNO, {
                        targetElementRef: g,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(K.Provider, {
                                value: z,
                                children: (0, r.jsx)(
                                    Y,
                                    x(
                                        {
                                            closePopout: t,
                                            updatePopoutPosition: G,
                                            trackRankingItemInteraction: F,
                                        },
                                        _,
                                    ),
                                ),
                            });
                        },
                        position: "left",
                        shouldShow: N,
                        positionKey: E,
                        onRequestOpen: () => W(T),
                        onRequestClose: () => {
                            D && z();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, r.jsx)(
                                u.DUT,
                                j(x({}, e, v), {
                                    innerRef: g,
                                    focusProps: {
                                        offset: {
                                            top: 4,
                                            bottom: 4,
                                            left: 4,
                                            right: 4,
                                        },
                                    },
                                    onClick: () => {
                                        N || w(!0);
                                    },
                                    onContextMenu: U,
                                    children: (0, r.jsx)(
                                        B,
                                        j(x({}, _), {
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
    q = i.memo(z);
