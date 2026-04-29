n.d(t, { A: () => el });
var i = n(627968),
    l = n(64700),
    s = n(990078),
    a = n(319060),
    r = n(812282),
    o = n(922016),
    d = n(939249),
    c = n(793574),
    u = n(58149),
    m = n(688810),
    h = n(34337),
    g = n(240248),
    A = n(256449),
    p = n(194004),
    x = n(148355),
    f = n(503698),
    C = n.n(f),
    E = n(17928),
    v = n(780645),
    I = n(862482),
    _ = n(834730),
    j = n(534514),
    N = n(821609),
    T = n(847374),
    y = n(686956),
    S = n(964486),
    b = n(235986),
    k = n(624793),
    L = n(636537),
    R = n(449054),
    P = n(652215),
    M = n(861626),
    D = n(87719),
    w = n(725807),
    O = n(71393),
    U = n(287809),
    G = n(954571),
    V = n(927578),
    B = n(750385),
    H = n(68935),
    F = n(850992),
    z = n(625494),
    Y = n(698279),
    W = n(788868),
    K = n(985018),
    J = n(631144),
    q = n(979132);
function Z(e) {
    G.default.track(P.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? P.liQ.GUILD_CHANNEL : P.liQ.DM_CHANNEL,
        location_section: P.JJy.STICKER_POPOUT,
    }),
        (0, D.e)();
}
function X(e) {
    let { sticker: t, description: n } = e;
    return (0, i.jsxs)(b.A, {
        children: [
            (0, i.jsx)(x.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, i.jsxs)(b.A, {
                direction: b.A.Direction.VERTICAL,
                justify: b.A.Justify.CENTER,
                className: q.bM,
                children: [
                    (0, i.jsx)(_.E, { variant: "text-md/semibold", children: (0, i.jsx)(v.A, { children: t.name }) }),
                    null != n && (0, i.jsx)(_.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
let $ = (e) => {
        let { closePopout: t, sticker: n, channel: s, refreshPositionKey: a } = e,
            [r, o, d] = (0, E.yK)(
                [B.A],
                () => [B.A.getStickerPack(n.pack_id), !B.A.hasLoadedStickerPacks, B.A.isPremiumPack(n.pack_id)],
                [n],
            ),
            c = ((e) => {
                let { sticker: t, stickerPack: n } = e;
                return l.useMemo(
                    () =>
                        null == n
                            ? []
                            : n.stickers
                                  .slice(0, 4)
                                  .reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), []),
                    [t, n],
                );
            })({ sticker: n, stickerPack: r });
        (0, A.Sr)(n.pack_id);
        let m = (0, A.pD)(s),
            g = { refreshPositionKey: a, channel: s },
            p = l.useRef(g);
        return (l.useEffect(() => {
            p.current = g;
        }),
        l.useEffect(() => {
            let { refreshPositionKey: e } = p.current;
            e();
        }, [o]),
        l.useEffect(() => {
            let { channel: e } = p.current;
            G.default.track(P.HAw.OPEN_POPOUT, {
                type: P.JJy.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, u.dI)(e),
            });
        }, [n.pack_id]),
        o || null == r)
            ? (0, i.jsx)(h.Y0, { className: J.v0 })
            : (0, i.jsxs)(h.Uq, {
                  className: J.Bm,
                  children: [
                      (0, i.jsx)(j.D, { variant: "heading-md/semibold", children: n.name }),
                      (0, i.jsx)(_.E, {
                          variant: "text-sm/normal",
                          children: d
                              ? K.intl.format(K.t.auckXz, { stickerPackName: r.name })
                              : K.intl.format(K.t.OzB6e3, { stickerPackName: r.name }),
                      }),
                      (0, i.jsx)("ul", {
                          className: J.pQ,
                          children: c.map((e) => (0, i.jsx)(x.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      d &&
                          (0, i.jsx)("div", {
                              className: J.j0,
                              children: (0, i.jsx)(
                                  N.$,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: K.intl.string(K.t.GPy3Ar),
                                      onClick: () => {
                                          d &&
                                              (function (e) {
                                                  let { stickerPack: t, stickerPickerCategories: n } = e;
                                                  z._.dispatchToLastSubscribed(P.jej.OPEN_EXPRESSION_PICKER, {
                                                      activeView: Y.kx.STICKER,
                                                  });
                                                  let i = n.findIndex((e) => e.id === t.id);
                                                  -1 !== i && F.bM.setActiveCategoryIndex(i);
                                              })({ stickerPack: r, stickerPickerCategories: m }),
                                              t();
                                      },
                                  },
                                  "view-sticker-pack",
                              ),
                          }),
                  ],
              });
    },
    Q = (e) => {
        let t,
            { sticker: n, channel: a, closePopout: r, refreshPositionKey: o } = e,
            [c, m] = l.useState(null),
            [g, A] = l.useState(!1),
            p = U.default.getCurrentUser(),
            f = V.Ay.canUseCustomStickersEverywhere(p),
            v = (0, E.bG)([O.A], () => O.A.getGuild(n.guild_id)),
            j = null != v,
            [D, B] = l.useState(!1),
            [H, F] = l.useState(null),
            z = l.useMemo(
                () => ({
                    page: null != a.guild_id ? P.liQ.GUILD_CHANNEL : P.liQ.DM_CHANNEL,
                    section: P.JJy.STICKER_POPOUT,
                }),
                [a.guild_id],
            ),
            { current: Y } = l.useRef({ guild_id: a.getGuildId(), ...(0, u.dI)(a) }),
            $ = { stickerSourceGuild: v, refreshPositionKey: o },
            Q = l.useRef($);
        l.useEffect(() => {
            Q.current = $;
        }),
            l.useEffect(() => {
                let { stickerSourceGuild: e } = Q.current;
                (async () => {
                    if (null == e || e.features.has(P.GuildFeatures.DISCOVERABLE)) {
                        let e;
                        m(
                            await ((e = n.id),
                            L.Bo.get({ url: P.Rsh.STICKER_GUILD_DATA(e), oldFormErrors: !0, rejectWithError: !0 })
                                .then((e) => (e?.body != null ? (0, R.jE)(e.body) : null))
                                .catch(() => null)),
                        );
                    }
                    A(!0);
                })();
            }, [n.id, j]);
        let ee = n.guild_id === a.getGuildId(),
            et = null != c,
            en = !1,
            ei = "Custom Sticker Popout";
        f
            ? (t = j
                  ? ee
                      ? K.intl.string(K.t.fZ0DiG)
                      : K.intl.string(K.t["1f6D9m"])
                  : et
                    ? K.intl.string(K.t.yHmoR9)
                    : K.intl.string(K.t.vZaScH))
            : j
              ? ((t = ee ? K.intl.string(K.t.jNphpt) : K.intl.string(K.t.lyD5ZW)),
                (en = !0),
                (ei = "Custom Sticker Popout (Upsell)"))
              : et
                ? ((t = K.intl.string(K.t.IuXYch)), (en = !0), (ei = "Custom Sticker Popout (Upsell)"))
                : ((t = K.intl.format(K.t.hGWuxU, {
                      openPremiumSettings: () => {
                          Z(a), r();
                      },
                  })),
                  (ei = "Custom Sticker Popout (Soft Upsell)"));
        let el = !en && !j && et && f;
        if (
            (l.useEffect(() => {
                let { refreshPositionKey: e } = Q.current;
                e();
            }, [g, c]),
            (0, S.Ay)(() => {
                G.default.track(P.HAw.OPEN_POPOUT, { type: ei, ...Y });
            }),
            !g)
        )
            return (0, i.jsx)(h.Y0, { className: J.v0 });
        {
            let e;
            return (0, i.jsxs)(h.Uq, {
                className: q.Bm,
                children: [
                    ((e = async () => {
                        if (null == c || j) return;
                        r();
                        let e = c.id;
                        try {
                            await y.A.joinGuild(e), y.A.transitionToGuildSync(e);
                        } catch {}
                    }),
                    (0, i.jsxs)("div", {
                        className: q.gH,
                        children: [
                            (0, i.jsx)(X, { description: t, sticker: n }),
                            en &&
                                (0, i.jsx)(w.A, {
                                    className: q.lI,
                                    subscriptionTier: W.pe.TIER_2,
                                    size: I.$n.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: K.intl.string(K.t["gl/XHJ"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : r()),
                                    postSuccessGuild: j || null == c ? void 0 : c,
                                    premiumModalAnalyticsLocation: z,
                                }),
                            el &&
                                (0, i.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: q.lI,
                                    children: (0, i.jsx)(N.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: K.intl.string(K.t.riu2R5),
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                }),
                        ],
                    })),
                    (null != v || null != c) &&
                        (() => {
                            if (!et && !j) return;
                            let e = (c?.stickers ?? [])
                                    .slice(0, 13)
                                    .filter((e) => e.id !== n.id)
                                    .slice(0, 12),
                                t = null != c ? k.GO.createFromDiscoverableGuild(c) : k.GO.createFromGuildRecord(v);
                            return (0, i.jsxs)("div", {
                                className: q.tl,
                                children: [
                                    (0, i.jsx)(_.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: q.YW,
                                        children: j ? K.intl.string(K.t.kx6pEG) : K.intl.string(K.t.pDE7Gb),
                                    }),
                                    (0, i.jsx)(M.G7, {
                                        expressionSourceGuild: t,
                                        hasJoinedExpressionSourceGuild: j,
                                        isDisplayingJoinGuildButtonInPopout: el,
                                    }),
                                    !j &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(d.D, {
                                                    onClick: () => {
                                                        o(), B(!D);
                                                    },
                                                    className: q.wK,
                                                    children: (0, i.jsxs)(b.A, {
                                                        children: [
                                                            (0, i.jsx)(_.E, {
                                                                className: q.__invalid_showMoreEmojisLabel,
                                                                variant: "text-xs/normal",
                                                                color: "none",
                                                                children: K.intl.string(K.t.vtH5hn),
                                                            }),
                                                            (0, i.jsx)(T.a, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: C()(q.ZB, { [q.cP]: !D }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                D &&
                                                    (0, i.jsx)(b.A, {
                                                        wrap: b.A.Wrap.WRAP,
                                                        align: b.A.Align.START,
                                                        justify: b.A.Justify.START,
                                                        className: q.LX,
                                                        children: e.map((e) =>
                                                            (0, i.jsx)(
                                                                s.m,
                                                                {
                                                                    text: e.name,
                                                                    ...h.Uk,
                                                                    children: (0, i.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: C()(q.Th, {
                                                                                [J.vT]: null != H && H !== e.id,
                                                                            }),
                                                                            onMouseEnter: () => {
                                                                                F(e.id);
                                                                            },
                                                                            onMouseLeave: () => {
                                                                                F(null);
                                                                            },
                                                                            children: (0, i.jsx)(x.A, {
                                                                                size: 32,
                                                                                enlargeOnInteraction: !0,
                                                                                enlargeWithName: !1,
                                                                                enlargeScaleFactor: 2,
                                                                                isInteracting: H === e.id,
                                                                                sticker: e,
                                                                            }),
                                                                        },
                                                                        e.id,
                                                                    ),
                                                                },
                                                                e.id,
                                                            ),
                                                        ),
                                                    }),
                                            ],
                                        }),
                                ],
                            });
                        })(),
                ],
            });
        }
    };
function ee(e) {
    let { channel: t, closePopout: n, sticker: l } = e;
    return (0, i.jsx)(h.Uq, {
        className: J.Bm,
        children: (0, i.jsx)(X, {
            sticker: l,
            description: K.intl.format(K.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), Z(t);
                },
            }),
        }),
    });
}
let et = (e) => {
    let { renderableSticker: t, channel: n, closePopout: l, refreshPositionKey: s } = e,
        [a, r] = (0, A.Zq)(t, !0);
    return null != a && (0, H.FD)(a)
        ? (0, i.jsx)($, { sticker: a, closePopout: l, channel: n, refreshPositionKey: s })
        : null != a && (0, H.Xw)(a)
          ? (0, i.jsx)(Q, { sticker: a, channel: n, closePopout: l, refreshPositionKey: s })
          : r
            ? null == a
                ? (0, i.jsx)(ee, { channel: n, closePopout: l, sticker: t })
                : (l(), null)
            : (0, i.jsx)(h.Y0, {});
};
var en = n(76513);
let ei = (0, g.xI)(a.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    el = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: a } = e,
            g = l.useRef(null),
            [f, C] = l.useState(!0),
            [E, v] = l.useState(String(Date.now())),
            [I] = (0, A.Zq)(t, a),
            { analyticsLocations: _ } = (0, m.Ay)(c.A.STICKER_MESSAGE),
            j = (0, i.jsxs)("span", {
                className: en.Zl,
                children: [(0, i.jsx)(r.s, { size: "xs", color: "currentColor", className: en.lA }), (I ?? t).name],
            });
        return (0, i.jsx)(m.f5, {
            value: _,
            children: (0, i.jsx)("div", {
                className: en.be,
                children: (0, i.jsx)(o.Y, {
                    align: "center",
                    animation: o.Y.Animation.TRANSLATE,
                    positionKey: E,
                    onRequestClose: () => {
                        C(!0);
                    },
                    renderPopout: (e) =>
                        (0, i.jsx)(et, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => v(String(Date.now())),
                        }),
                    targetElementRef: g,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, i.jsx)(s.m, {
                            ...h.Uk,
                            shouldShow: f,
                            __unsupportedReactNodeAsText: (0, h.yR)(j),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = I) &&
                                    u.Ay.trackWithMetadata(P.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: W.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, p.Tw)(e.format_type),
                                        is_custom: (0, p.zN)(e.type),
                                    });
                            },
                            children: (0, i.jsx)(d.D, {
                                innerRef: g,
                                className: en.q7,
                                onClick: (e) => {
                                    C(!f), n(e);
                                },
                                tag: "span",
                                children: (0, i.jsx)(x.A, { isInteracting: a, size: ei, sticker: I ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
