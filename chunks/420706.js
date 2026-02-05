"use strict";
n.d(t, { Ay: () => j, Jd: () => F, Oo: () => V, bG: () => w, h9: () => M });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(837381),
    l = n(681154),
    u = n(311907),
    c = n(397927),
    d = n(442433),
    _ = n(775602),
    f = n(941726),
    p = n(963307),
    h = n(287809),
    m = n(947593),
    g = n(468581),
    E = n(849258),
    A = n(322789),
    I = n(636202),
    T = n(27322),
    y = n(363670),
    S = n(525313),
    v = n(620708),
    C = n(247807),
    b = n(977001),
    N = n(273198),
    R = n(514243),
    O = n(654288),
    D = n(299846),
    L = n(424994);
let w = 72,
    x = 32,
    P = 2e3;
function M(e) {
    return e?.type === p.S9.CONTENT_INVENTORY
        ? e.entry.content_type === l.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? w + x
            : w
        : 0;
}
let k = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case l.ContentInventoryEntryType.PLAYED_GAME:
                return (0, r.jsx)(A.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.WATCHED_MEDIA:
                return (0, r.jsx)(R.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_GAME:
                return (0, r.jsx)(b.Ay, { ...n, entry: t });
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
    U = (e) => {
        let { entry: t, targetElementRef: n, ...i } = e;
        return t.content_type === l.ContentInventoryEntryType.PLAYED_GAME
            ? (0, r.jsx)(T.A, {
                  entry: t,
                  targetElementRef: n,
                  isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
              })
            : null;
    },
    G = (e) => {
        let { closePopout: t, ...n } = e;
        return (0, r.jsx)(V, {
            onReaction: (e, r) => {
                n.trackRankingItemInteraction(e, { destinationChannelId: r.id, destinationGuildId: r.guild_id }), t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e) => {
                n.trackRankingItemInteraction(L.PA.VOICE_CHANNEL_PREVIEWED, {
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
            case l.ContentInventoryEntryType.PLAYED_GAME:
                return (0, r.jsx)(I.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.WATCHED_MEDIA:
                return (0, r.jsx)(O.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_GAME:
                return (0, r.jsx)(N.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_ARTIST:
                return (0, r.jsx)(C.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.LISTENED_SESSION:
                return (0, r.jsx)(S.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(E.Ay, { ...n, entry: t });
            default:
                return null;
        }
    },
    F = i.createContext(void 0),
    B = (e) => {
        let { index: t, ref: a, ...l } = e,
            p = i.useRef(null),
            [g, E] = i.useState("default"),
            [A, I] = i.useState(!1),
            T = (0, o.rm)(`${t}`),
            y = h.default.getCurrentUser()?.isStaff(),
            { isRich: S, appName: v } = (0, D.u)(l.entry);
        (0, f.T2)(l.entry.id);
        let C = i.useMemo(
                () => ({
                    entry: l.entry,
                    channelId: l.channel.id,
                    guildId: l.channel.guild_id,
                    requestId: l.requestId,
                    richPresenceName: S ? v : void 0,
                }),
                [v, l.channel.guild_id, l.channel.id, l.entry, l.requestId, S],
            ),
            b = i.useRef(!1),
            [N, R] = i.useState(!1),
            [O, w] = i.useState(!1),
            x = (0, u.bG)([_.A], () => _.A.keyboardModeEnabled);
        i.useEffect(() => {
            N && x && w(!0);
        }, [N, x]),
            i.useLayoutEffect(() => {
                null != p.current && I(!0);
            }, []);
        let M = i.useCallback(
                (e) => {
                    y &&
                        (0, d.L3)(e, async () => {
                            let { default: e } = await n.e("89346").then(n.bind(n, 949881));
                            return () => (0, r.jsx)(e, { entry: l.entry, requestId: l.requestId });
                        });
                },
                [l, y],
            ),
            V = i.useCallback(() => {
                E(String(Date.now()));
            }, []),
            B = i.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, m.I)(e, { ...C, ...t });
                },
                [C],
            ),
            j = i.useMemo(
                () =>
                    s().throttle(
                        (e) => {
                            (0, m.I)(L.PA.CARD_POPOUT_OPEN, e);
                        },
                        P,
                        { leading: !0, trailing: !1 },
                    ),
                [],
            ),
            H = () => {
                (b.current = !1),
                    setTimeout(() => {
                        b.current || (R(!1), w(x));
                    }, 100);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                A && (0, r.jsx)(U, { ...l, targetElementRef: p }),
                (0, r.jsx)("div", {
                    ref: a,
                    onMouseEnter: () => {
                        (b.current = !0),
                            setTimeout(() => {
                                b.current && R(!0), j(C);
                            }, 100);
                    },
                    onMouseLeave: H,
                    children: (0, r.jsx)(c.YNO, {
                        targetElementRef: p,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(F.Provider, {
                                value: H,
                                children: (0, r.jsx)(G, {
                                    closePopout: t,
                                    updatePopoutPosition: V,
                                    trackRankingItemInteraction: B,
                                    ...l,
                                }),
                            });
                        },
                        position: "left",
                        shouldShow: N,
                        positionKey: g,
                        onRequestOpen: () => j(C),
                        onRequestClose: () => {
                            O && H();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, r.jsx)(c.DUT, {
                                ...e,
                                ...T,
                                innerRef: p,
                                focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                                onClick: () => {
                                    N || R(!0);
                                },
                                onContextMenu: M,
                                children: (0, r.jsx)(k, {
                                    ...l,
                                    selected: n,
                                    hovered: b.current,
                                    trackRankingItemInteraction: B,
                                }),
                            });
                        },
                    }),
                }),
            ],
        });
    },
    j = i.memo(B);
