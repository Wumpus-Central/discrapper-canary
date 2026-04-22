n.d(t, { Ay: () => B, Jd: () => U, Oo: () => w, bG: () => P, h9: () => D });
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(837381),
    o = n(681154),
    u = n(311907),
    c = n(265872),
    d = n(939249),
    _ = n(442433),
    p = n(775602),
    h = n(941726),
    m = n(963307),
    A = n(287809),
    f = n(947593),
    g = n(468581),
    E = n(849258),
    C = n(322789),
    I = n(636202),
    v = n(27322),
    y = n(363670),
    T = n(525313),
    x = n(620708),
    b = n(247807),
    S = n(977001),
    N = n(273198),
    L = n(514243),
    O = n(654288),
    R = n(299846),
    j = n(424994);
let P = 72;
function D(e) {
    return e?.type === m.S9.CONTENT_INVENTORY
        ? e.entry.content_type === o.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? P + 32
            : P
        : 0;
}
let M = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.ContentInventoryEntryType.PLAYED_GAME:
                return (0, r.jsx)(C.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.WATCHED_MEDIA:
                return (0, r.jsx)(L.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.TOP_GAME:
                return (0, r.jsx)(S.Ay, { ...n, entry: t });
            case o.ContentInventoryEntryType.TOP_ARTIST:
                return (0, r.jsx)(x.Ay, { ...n, entry: t });
            case o.ContentInventoryEntryType.LISTENED_SESSION:
                return (0, r.jsx)(y.Ay, { ...n, entry: t });
            case o.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(g.A, { ...n, entry: t });
            default:
                return null;
        }
    },
    F = (e) => {
        let { entry: t, targetElementRef: n, ...l } = e;
        return t.content_type === o.ContentInventoryEntryType.PLAYED_GAME
            ? (0, r.jsx)(v.A, {
                  entry: t,
                  targetElementRef: n,
                  isFirstApplicationOccurrence: l.isFirstApplicationOccurrence ?? !1,
              })
            : null;
    },
    G = (e) => {
        let { closePopout: t, ...n } = e;
        return (0, r.jsx)(w, {
            onReaction: (e, r) => {
                n.trackRankingItemInteraction(e, { destinationChannelId: r.id, destinationGuildId: r.guild_id }), t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e) => {
                n.trackRankingItemInteraction(j.PA.VOICE_CHANNEL_PREVIEWED, {
                    destinationChannelId: e.id,
                    destinationGuildId: e.guild_id,
                });
            },
            ...n,
        });
    },
    w = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.ContentInventoryEntryType.PLAYED_GAME:
                return (0, r.jsx)(I.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.WATCHED_MEDIA:
                return (0, r.jsx)(O.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.TOP_GAME:
                return (0, r.jsx)(N.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.TOP_ARTIST:
                return (0, r.jsx)(b.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.LISTENED_SESSION:
                return (0, r.jsx)(T.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(E.Ay, { ...n, entry: t });
            default:
                return null;
        }
    },
    U = l.createContext(void 0),
    B = l.memo((e) => {
        let { index: t, ref: i, ...o } = e,
            m = l.useRef(null),
            [g, E] = l.useState("default"),
            [C, I] = l.useState(!1),
            v = (0, s.rm)(`${t}`),
            y = A.default.getCurrentUser()?.isStaff(),
            { isRich: T, appName: x } = (0, R.u)(o.entry);
        (0, h.T2)(o.entry.id);
        let b = l.useMemo(
                () => ({
                    entry: o.entry,
                    channelId: o.channel.id,
                    guildId: o.channel.guild_id,
                    requestId: o.requestId,
                    richPresenceName: T ? x : void 0,
                }),
                [x, o.channel.guild_id, o.channel.id, o.entry, o.requestId, T],
            ),
            S = l.useRef(!1),
            [N, L] = l.useState(!1),
            [O, P] = l.useState(!1),
            D = (0, u.bG)([p.A], () => p.A.keyboardModeEnabled);
        l.useEffect(() => {
            N && D && P(!0);
        }, [N, D]),
            l.useLayoutEffect(() => {
                null != m.current && I(!0);
            }, []);
        let w = l.useCallback(
                (e) => {
                    y &&
                        (0, _.L3)(e, async () => {
                            let { default: e } = await n.e("89346").then(n.bind(n, 949881));
                            return () => (0, r.jsx)(e, { entry: o.entry, requestId: o.requestId });
                        });
                },
                [o, y],
            ),
            B = l.useCallback(() => {
                E(String(Date.now()));
            }, []),
            k = l.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, f.I)(e, { ...b, ...t });
                },
                [b],
            ),
            V = l.useMemo(
                () =>
                    a().throttle(
                        (e) => {
                            (0, f.I)(j.PA.CARD_POPOUT_OPEN, e);
                        },
                        2e3,
                        { leading: !0, trailing: !1 },
                    ),
                [],
            ),
            H = () => {
                (S.current = !1),
                    setTimeout(() => {
                        S.current || (L(!1), P(D));
                    }, 100);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                C && (0, r.jsx)(F, { ...o, targetElementRef: m }),
                (0, r.jsx)("div", {
                    ref: i,
                    onMouseEnter: () => {
                        (S.current = !0),
                            setTimeout(() => {
                                S.current && L(!0), V(b);
                            }, 100);
                    },
                    onMouseLeave: H,
                    children: (0, r.jsx)(c.Y, {
                        targetElementRef: m,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(U.Provider, {
                                value: H,
                                children: (0, r.jsx)(G, {
                                    closePopout: t,
                                    updatePopoutPosition: B,
                                    trackRankingItemInteraction: k,
                                    ...o,
                                }),
                            });
                        },
                        position: "left",
                        shouldShow: N,
                        positionKey: g,
                        onRequestOpen: () => V(b),
                        onRequestClose: () => {
                            O && H();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, r.jsx)(d.D, {
                                ...e,
                                ...v,
                                innerRef: m,
                                focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                                onClick: () => {
                                    N || L(!0);
                                },
                                onContextMenu: w,
                                children: (0, r.jsx)(M, {
                                    ...o,
                                    selected: n,
                                    hovered: S.current,
                                    trackRankingItemInteraction: k,
                                }),
                            });
                        },
                    }),
                }),
            ],
        });
    });
