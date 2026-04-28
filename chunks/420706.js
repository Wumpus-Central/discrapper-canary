n.d(t, { Ay: () => B, Jd: () => U, Oo: () => F, bG: () => j, h9: () => L });
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n.n(i),
    u = n(837381),
    o = n(681154),
    s = n(17928),
    d = n(922016),
    c = n(939249),
    A = n(442433),
    f = n(775602),
    p = n(941726),
    m = n(963307),
    y = n(287809),
    I = n(947593),
    g = n(468581),
    E = n(632492),
    h = n(322789),
    v = n(197965),
    _ = n(710475),
    T = n(363670),
    S = n(525313),
    N = n(620708),
    C = n(247807),
    x = n(977001),
    P = n(273198),
    D = n(514243),
    M = n(302908),
    b = n(299846),
    R = n(424994);
let j = 72;
function L(e) {
    return e?.type === m.S9.CONTENT_INVENTORY
        ? e.entry.content_type === o.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? j + 32
            : j
        : 0;
}
let O = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.ContentInventoryEntryType.PLAYED_GAME:
                return (0, r.jsx)(h.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.WATCHED_MEDIA:
                return (0, r.jsx)(D.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.TOP_GAME:
                return (0, r.jsx)(x.Ay, { ...n, entry: t });
            case o.ContentInventoryEntryType.TOP_ARTIST:
                return (0, r.jsx)(N.Ay, { ...n, entry: t });
            case o.ContentInventoryEntryType.LISTENED_SESSION:
                return (0, r.jsx)(T.Ay, { ...n, entry: t });
            case o.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(g.A, { ...n, entry: t });
            default:
                return null;
        }
    },
    G = (e) => {
        let { entry: t, targetElementRef: n, ...l } = e;
        return t.content_type === o.ContentInventoryEntryType.PLAYED_GAME
            ? (0, r.jsx)(_.A, {
                  entry: t,
                  targetElementRef: n,
                  isFirstApplicationOccurrence: l.isFirstApplicationOccurrence ?? !1,
              })
            : null;
    },
    w = (e) => {
        let { closePopout: t, ...n } = e;
        return (0, r.jsx)(F, {
            onReaction: (e, r) => {
                n.trackRankingItemInteraction(e, { destinationChannelId: r.id, destinationGuildId: r.guild_id }), t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e) => {
                n.trackRankingItemInteraction(R.PA.VOICE_CHANNEL_PREVIEWED, {
                    destinationChannelId: e.id,
                    destinationGuildId: e.guild_id,
                });
            },
            ...n,
        });
    },
    F = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.ContentInventoryEntryType.PLAYED_GAME:
                return (0, r.jsx)(v.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.WATCHED_MEDIA:
                return (0, r.jsx)(M.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.TOP_GAME:
                return (0, r.jsx)(P.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.TOP_ARTIST:
                return (0, r.jsx)(C.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.LISTENED_SESSION:
                return (0, r.jsx)(S.A, { ...n, entry: t });
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
            [h, v] = l.useState(!1),
            _ = (0, u.rm)(`${t}`),
            T = y.default.getCurrentUser()?.isStaff(),
            { isRich: S, appName: N } = (0, b.u)(o.entry);
        (0, p.T2)(o.entry.id);
        let C = l.useMemo(
                () => ({
                    entry: o.entry,
                    channelId: o.channel.id,
                    guildId: o.channel.guild_id,
                    requestId: o.requestId,
                    richPresenceName: S ? N : void 0,
                }),
                [N, o.channel.guild_id, o.channel.id, o.entry, o.requestId, S],
            ),
            x = l.useRef(!1),
            [P, D] = l.useState(!1),
            [M, j] = l.useState(!1),
            L = (0, s.bG)([f.A], () => f.A.keyboardModeEnabled);
        l.useEffect(() => {
            P && L && j(!0);
        }, [P, L]),
            l.useLayoutEffect(() => {
                null != m.current && v(!0);
            }, []);
        let F = l.useCallback(
                (e) => {
                    T &&
                        (0, A.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("86456"), n.e("89346")]).then(
                                n.bind(n, 949881),
                            );
                            return () => (0, r.jsx)(e, { entry: o.entry, requestId: o.requestId });
                        });
                },
                [o, T],
            ),
            B = l.useCallback(() => {
                E(String(Date.now()));
            }, []),
            k = l.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, I.I)(e, { ...C, ...t });
                },
                [C],
            ),
            V = l.useMemo(
                () =>
                    a().throttle(
                        (e) => {
                            (0, I.I)(R.PA.CARD_POPOUT_OPEN, e);
                        },
                        2e3,
                        { leading: !0, trailing: !1 },
                    ),
                [],
            ),
            Y = () => {
                (x.current = !1),
                    setTimeout(() => {
                        x.current || (D(!1), j(L));
                    }, 100);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                h && (0, r.jsx)(G, { ...o, targetElementRef: m }),
                (0, r.jsx)("div", {
                    ref: i,
                    onMouseEnter: () => {
                        (x.current = !0),
                            setTimeout(() => {
                                x.current && D(!0), V(C);
                            }, 100);
                    },
                    onMouseLeave: Y,
                    children: (0, r.jsx)(d.Y, {
                        targetElementRef: m,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(U.Provider, {
                                value: Y,
                                children: (0, r.jsx)(w, {
                                    closePopout: t,
                                    updatePopoutPosition: B,
                                    trackRankingItemInteraction: k,
                                    ...o,
                                }),
                            });
                        },
                        position: "left",
                        shouldShow: P,
                        positionKey: g,
                        onRequestOpen: () => V(C),
                        onRequestClose: () => {
                            M && Y();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, r.jsx)(c.D, {
                                ...e,
                                ..._,
                                innerRef: m,
                                focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                                onClick: () => {
                                    P || D(!0);
                                },
                                onContextMenu: F,
                                children: (0, r.jsx)(O, {
                                    ...o,
                                    selected: n,
                                    hovered: x.current,
                                    trackRankingItemInteraction: k,
                                }),
                            });
                        },
                    }),
                }),
            ],
        });
    });
