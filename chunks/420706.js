n.d(t, { Ay: () => F, Jd: () => B, Oo: () => V, bG: () => v, h9: () => y });
var i = n(627968),
    a = n(64700),
    r = n(735438),
    s = n.n(r),
    l = n(837381),
    o = n(681154),
    d = n(17928),
    c = n(922016),
    _ = n(939249),
    E = n(442433),
    u = n(775602),
    A = n(941726),
    I = n(963307),
    T = n(287809),
    h = n(947593),
    S = n(468581),
    N = n(632492),
    f = n(322789),
    p = n(197965),
    m = n(710475),
    O = n(363670),
    C = n(525313),
    R = n(620708),
    g = n(247807),
    L = n(977001),
    D = n(273198),
    b = n(514243),
    M = n(302908),
    P = n(299846),
    U = n(424994);
let v = 72;
function y(e) {
    return e?.type === I.S9.CONTENT_INVENTORY
        ? e.entry.content_type === o.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? v + 32
            : v
        : 0;
}
let G = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.ContentInventoryEntryType.PLAYED_GAME:
                return (0, i.jsx)(f.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.WATCHED_MEDIA:
                return (0, i.jsx)(b.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.TOP_GAME:
                return (0, i.jsx)(L.Ay, { ...n, entry: t });
            case o.ContentInventoryEntryType.TOP_ARTIST:
                return (0, i.jsx)(R.Ay, { ...n, entry: t });
            case o.ContentInventoryEntryType.LISTENED_SESSION:
                return (0, i.jsx)(O.Ay, { ...n, entry: t });
            case o.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                return (0, i.jsx)(S.A, { ...n, entry: t });
            default:
                return null;
        }
    },
    w = (e) => {
        let { entry: t, targetElementRef: n, ...a } = e;
        return t.content_type === o.ContentInventoryEntryType.PLAYED_GAME
            ? (0, i.jsx)(m.A, {
                  entry: t,
                  targetElementRef: n,
                  isFirstApplicationOccurrence: a.isFirstApplicationOccurrence ?? !1,
              })
            : null;
    },
    x = (e) => {
        let { closePopout: t, ...n } = e;
        return (0, i.jsx)(V, {
            onReaction: (e, i) => {
                n.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e) => {
                n.trackRankingItemInteraction(U.PA.VOICE_CHANNEL_PREVIEWED, {
                    destinationChannelId: e.id,
                    destinationGuildId: e.guild_id,
                });
            },
            ...n,
        });
    },
    V = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.ContentInventoryEntryType.PLAYED_GAME:
                return (0, i.jsx)(p.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.WATCHED_MEDIA:
                return (0, i.jsx)(M.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.TOP_GAME:
                return (0, i.jsx)(D.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.TOP_ARTIST:
                return (0, i.jsx)(g.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.LISTENED_SESSION:
                return (0, i.jsx)(C.A, { ...n, entry: t });
            case o.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                return (0, i.jsx)(N.Ay, { ...n, entry: t });
            default:
                return null;
        }
    },
    B = a.createContext(void 0),
    F = a.memo((e) => {
        let { index: t, ref: r, ...o } = e,
            I = a.useRef(null),
            [S, N] = a.useState("default"),
            [f, p] = a.useState(!1),
            m = (0, l.rm)(`${t}`),
            O = T.default.getCurrentUser()?.isStaff(),
            { isRich: C, appName: R } = (0, P.u)(o.entry);
        (0, A.T2)(o.entry.id);
        let g = a.useMemo(
                () => ({
                    entry: o.entry,
                    channelId: o.channel.id,
                    guildId: o.channel.guild_id,
                    requestId: o.requestId,
                    richPresenceName: C ? R : void 0,
                }),
                [R, o.channel.guild_id, o.channel.id, o.entry, o.requestId, C],
            ),
            L = a.useRef(!1),
            [D, b] = a.useState(!1),
            [M, v] = a.useState(!1),
            y = (0, d.bG)([u.A], () => u.A.keyboardModeEnabled);
        a.useEffect(() => {
            D && y && v(!0);
        }, [D, y]),
            a.useLayoutEffect(() => {
                null != I.current && p(!0);
            }, []);
        let V = a.useCallback(
                (e) => {
                    O &&
                        (0, E.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("86456"), n.e("89346")]).then(
                                n.bind(n, 949881),
                            );
                            return () => (0, i.jsx)(e, { entry: o.entry, requestId: o.requestId });
                        });
                },
                [o, O],
            ),
            F = a.useCallback(() => {
                N(String(Date.now()));
            }, []),
            k = a.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, h.I)(e, { ...g, ...t });
                },
                [g],
            ),
            H = a.useMemo(
                () =>
                    s().throttle(
                        (e) => {
                            (0, h.I)(U.PA.CARD_POPOUT_OPEN, e);
                        },
                        2e3,
                        { leading: !0, trailing: !1 },
                    ),
                [],
            ),
            j = () => {
                (L.current = !1),
                    setTimeout(() => {
                        L.current || (b(!1), v(y));
                    }, 100);
            };
        return (0, i.jsxs)(i.Fragment, {
            children: [
                f && (0, i.jsx)(w, { ...o, targetElementRef: I }),
                (0, i.jsx)("div", {
                    ref: r,
                    onMouseEnter: () => {
                        (L.current = !0),
                            setTimeout(() => {
                                L.current && b(!0), H(g);
                            }, 100);
                    },
                    onMouseLeave: j,
                    children: (0, i.jsx)(c.Y, {
                        targetElementRef: I,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(B.Provider, {
                                value: j,
                                children: (0, i.jsx)(x, {
                                    closePopout: t,
                                    updatePopoutPosition: F,
                                    trackRankingItemInteraction: k,
                                    ...o,
                                }),
                            });
                        },
                        position: "left",
                        shouldShow: D,
                        positionKey: S,
                        onRequestOpen: () => H(g),
                        onRequestClose: () => {
                            M && j();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.jsx)(_.D, {
                                ...e,
                                ...m,
                                innerRef: I,
                                focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                                onClick: () => {
                                    D || b(!0);
                                },
                                onContextMenu: V,
                                children: (0, i.jsx)(G, {
                                    ...o,
                                    selected: n,
                                    hovered: L.current,
                                    trackRankingItemInteraction: k,
                                }),
                            });
                        },
                    }),
                }),
            ],
        });
    });
