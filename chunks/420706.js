n.d(t, { Ay: () => H, Jd: () => V, Oo: () => F, bG: () => y, h9: () => G });
var i = n(627968),
    r = n(64700),
    a = n(735438),
    s = n.n(a),
    _ = n(837381),
    l = n(681154),
    o = n(17928),
    E = n(922016),
    d = n(939249),
    c = n(442433),
    u = n(775602),
    I = n(941726),
    A = n(963307),
    T = n(287809),
    S = n(947593),
    N = n(468581),
    O = n(632492),
    R = n(322789),
    f = n(197965),
    C = n(710475),
    p = n(363670),
    m = n(525313),
    L = n(620708),
    D = n(247807),
    h = n(977001),
    g = n(273198),
    b = n(514243),
    U = n(302908),
    P = n(299846),
    M = n(424994);
let y = 72;
function G(e) {
    return e?.type === A.S9.CONTENT_INVENTORY
        ? e.entry.content_type === l.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? y + 32
            : y
        : 0;
}
let v = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case l.ContentInventoryEntryType.PLAYED_GAME:
                return (0, i.jsx)(R.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.WATCHED_MEDIA:
                return (0, i.jsx)(b.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_GAME:
                return (0, i.jsx)(h.Ay, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_ARTIST:
                return (0, i.jsx)(L.Ay, { ...n, entry: t });
            case l.ContentInventoryEntryType.LISTENED_SESSION:
                return (0, i.jsx)(p.Ay, { ...n, entry: t });
            case l.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                return (0, i.jsx)(N.A, { ...n, entry: t });
            default:
                return null;
        }
    },
    B = (e) => {
        let { entry: t, targetElementRef: n, ...r } = e;
        return t.content_type === l.ContentInventoryEntryType.PLAYED_GAME
            ? (0, i.jsx)(C.A, {
                  entry: t,
                  targetElementRef: n,
                  isFirstApplicationOccurrence: r.isFirstApplicationOccurrence ?? !1,
              })
            : null;
    },
    w = (e) => {
        let { closePopout: t, ...n } = e;
        return (0, i.jsx)(F, {
            onReaction: (e, i) => {
                n.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e) => {
                n.trackRankingItemInteraction(M.PA.VOICE_CHANNEL_PREVIEWED, {
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
            case l.ContentInventoryEntryType.PLAYED_GAME:
                return (0, i.jsx)(f.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.WATCHED_MEDIA:
                return (0, i.jsx)(U.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_GAME:
                return (0, i.jsx)(g.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_ARTIST:
                return (0, i.jsx)(D.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.LISTENED_SESSION:
                return (0, i.jsx)(m.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                return (0, i.jsx)(O.Ay, { ...n, entry: t });
            default:
                return null;
        }
    },
    V = r.createContext(void 0),
    H = r.memo((e) => {
        let { index: t, ref: a, ...l } = e,
            A = r.useRef(null),
            [N, O] = r.useState("default"),
            [R, f] = r.useState(!1),
            C = (0, _.rm)(`${t}`),
            p = T.default.getCurrentUser()?.isStaff(),
            { isRich: m, appName: L } = (0, P.u)(l.entry);
        (0, I.T2)(l.entry.id);
        let D = r.useMemo(
                () => ({
                    entry: l.entry,
                    channelId: l.channel.id,
                    guildId: l.channel.guild_id,
                    requestId: l.requestId,
                    richPresenceName: m ? L : void 0,
                }),
                [L, l.channel.guild_id, l.channel.id, l.entry, l.requestId, m],
            ),
            h = r.useRef(!1),
            [g, b] = r.useState(!1),
            [U, y] = r.useState(!1),
            G = (0, o.bG)([u.A], () => u.A.keyboardModeEnabled);
        r.useEffect(() => {
            g && G && y(!0);
        }, [g, G]),
            r.useLayoutEffect(() => {
                null != A.current && f(!0);
            }, []);
        let F = r.useCallback(
                (e) => {
                    p &&
                        (0, c.L3)(e, async () => {
                            let { default: e } = await n.e("89346").then(n.bind(n, 949881));
                            return () => (0, i.jsx)(e, { entry: l.entry, requestId: l.requestId });
                        });
                },
                [l, p],
            ),
            H = r.useCallback(() => {
                O(String(Date.now()));
            }, []),
            k = r.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, S.I)(e, { ...D, ...t });
                },
                [D],
            ),
            x = r.useMemo(
                () =>
                    s().throttle(
                        (e) => {
                            (0, S.I)(M.PA.CARD_POPOUT_OPEN, e);
                        },
                        2e3,
                        { leading: !0, trailing: !1 },
                    ),
                [],
            ),
            W = () => {
                (h.current = !1),
                    setTimeout(() => {
                        h.current || (b(!1), y(G));
                    }, 100);
            };
        return (0, i.jsxs)(i.Fragment, {
            children: [
                R && (0, i.jsx)(B, { ...l, targetElementRef: A }),
                (0, i.jsx)("div", {
                    ref: a,
                    onMouseEnter: () => {
                        (h.current = !0),
                            setTimeout(() => {
                                h.current && b(!0), x(D);
                            }, 100);
                    },
                    onMouseLeave: W,
                    children: (0, i.jsx)(E.Y, {
                        targetElementRef: A,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(V.Provider, {
                                value: W,
                                children: (0, i.jsx)(w, {
                                    closePopout: t,
                                    updatePopoutPosition: H,
                                    trackRankingItemInteraction: k,
                                    ...l,
                                }),
                            });
                        },
                        position: "left",
                        shouldShow: g,
                        positionKey: N,
                        onRequestOpen: () => x(D),
                        onRequestClose: () => {
                            U && W();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.jsx)(d.D, {
                                ...e,
                                ...C,
                                innerRef: A,
                                focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                                onClick: () => {
                                    g || b(!0);
                                },
                                onContextMenu: F,
                                children: (0, i.jsx)(v, {
                                    ...l,
                                    selected: n,
                                    hovered: h.current,
                                    trackRankingItemInteraction: k,
                                }),
                            });
                        },
                    }),
                }),
            ],
        });
    });
