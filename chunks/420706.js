"use strict";
n.d(t, { Ay: () => V, Jd: () => F, Oo: () => G, bG: () => M, h9: () => P });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(837381),
    l = n(681154),
    u = n(311907),
    c = n(265872),
    d = n(939249),
    _ = n(442433),
    f = n(775602),
    p = n(941726),
    h = n(963307),
    E = n(287809),
    m = n(947593),
    g = n(468581),
    A = n(849258),
    I = n(322789),
    T = n(636202),
    S = n(27322),
    y = n(363670),
    N = n(525313),
    v = n(620708),
    C = n(247807),
    O = n(977001),
    R = n(273198),
    b = n(514243),
    D = n(654288),
    L = n(299846),
    w = n(424994);
let M = 72;
function P(e) {
    return e?.type === h.S9.CONTENT_INVENTORY
        ? e.entry.content_type === l.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? M + 32
            : M
        : 0;
}
let x = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case l.ContentInventoryEntryType.PLAYED_GAME:
                return (0, r.jsx)(I.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.WATCHED_MEDIA:
                return (0, r.jsx)(b.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_GAME:
                return (0, r.jsx)(O.Ay, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_ARTIST:
                return (0, r.jsx)(v.Ay, { ...n, entry: t });
            case l.ContentInventoryEntryType.LISTENED_SESSION:
                return (0, r.jsx)(y.Ay, { ...n, entry: t });
            case l.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(g.A, { ...n, entry: t });
            default:
                return null;
        }
    },
    k = (e) => {
        let { entry: t, targetElementRef: n, ...i } = e;
        return t.content_type === l.ContentInventoryEntryType.PLAYED_GAME
            ? (0, r.jsx)(S.A, {
                  entry: t,
                  targetElementRef: n,
                  isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
              })
            : null;
    },
    U = (e) => {
        let { closePopout: t, ...n } = e;
        return (0, r.jsx)(G, {
            onReaction: (e, r) => {
                n.trackRankingItemInteraction(e, { destinationChannelId: r.id, destinationGuildId: r.guild_id }), t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e) => {
                n.trackRankingItemInteraction(w.PA.VOICE_CHANNEL_PREVIEWED, {
                    destinationChannelId: e.id,
                    destinationGuildId: e.guild_id,
                });
            },
            ...n,
        });
    },
    G = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case l.ContentInventoryEntryType.PLAYED_GAME:
                return (0, r.jsx)(T.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.WATCHED_MEDIA:
                return (0, r.jsx)(D.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_GAME:
                return (0, r.jsx)(R.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_ARTIST:
                return (0, r.jsx)(C.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.LISTENED_SESSION:
                return (0, r.jsx)(N.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(A.Ay, { ...n, entry: t });
            default:
                return null;
        }
    },
    F = i.createContext(void 0),
    V = i.memo((e) => {
        let { index: t, ref: s, ...l } = e,
            h = i.useRef(null),
            [g, A] = i.useState("default"),
            [I, T] = i.useState(!1),
            S = (0, o.rm)(`${t}`),
            y = E.default.getCurrentUser()?.isStaff(),
            { isRich: N, appName: v } = (0, L.u)(l.entry);
        (0, p.T2)(l.entry.id);
        let C = i.useMemo(
                () => ({
                    entry: l.entry,
                    channelId: l.channel.id,
                    guildId: l.channel.guild_id,
                    requestId: l.requestId,
                    richPresenceName: N ? v : void 0,
                }),
                [v, l.channel.guild_id, l.channel.id, l.entry, l.requestId, N],
            ),
            O = i.useRef(!1),
            [R, b] = i.useState(!1),
            [D, M] = i.useState(!1),
            P = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled);
        i.useEffect(() => {
            R && P && M(!0);
        }, [R, P]),
            i.useLayoutEffect(() => {
                null != h.current && T(!0);
            }, []);
        let G = i.useCallback(
                (e) => {
                    y &&
                        (0, _.L3)(e, async () => {
                            let { default: e } = await n.e("89346").then(n.bind(n, 949881));
                            return () => (0, r.jsx)(e, { entry: l.entry, requestId: l.requestId });
                        });
                },
                [l, y],
            ),
            V = i.useCallback(() => {
                A(String(Date.now()));
            }, []),
            B = i.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, m.I)(e, { ...C, ...t });
                },
                [C],
            ),
            H = i.useMemo(
                () =>
                    a().throttle(
                        (e) => {
                            (0, m.I)(w.PA.CARD_POPOUT_OPEN, e);
                        },
                        2e3,
                        { leading: !0, trailing: !1 },
                    ),
                [],
            ),
            j = () => {
                (O.current = !1),
                    setTimeout(() => {
                        O.current || (b(!1), M(P));
                    }, 100);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                I && (0, r.jsx)(k, { ...l, targetElementRef: h }),
                (0, r.jsx)("div", {
                    ref: s,
                    onMouseEnter: () => {
                        (O.current = !0),
                            setTimeout(() => {
                                O.current && b(!0), H(C);
                            }, 100);
                    },
                    onMouseLeave: j,
                    children: (0, r.jsx)(c.Y, {
                        targetElementRef: h,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(F.Provider, {
                                value: j,
                                children: (0, r.jsx)(U, {
                                    closePopout: t,
                                    updatePopoutPosition: V,
                                    trackRankingItemInteraction: B,
                                    ...l,
                                }),
                            });
                        },
                        position: "left",
                        shouldShow: R,
                        positionKey: g,
                        onRequestOpen: () => H(C),
                        onRequestClose: () => {
                            D && j();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, r.jsx)(d.D, {
                                ...e,
                                ...S,
                                innerRef: h,
                                focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                                onClick: () => {
                                    R || b(!0);
                                },
                                onContextMenu: G,
                                children: (0, r.jsx)(x, {
                                    ...l,
                                    selected: n,
                                    hovered: O.current,
                                    trackRankingItemInteraction: B,
                                }),
                            });
                        },
                    }),
                }),
            ],
        });
    });
