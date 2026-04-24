n.d(t, { A: () => el });
var i = n(627968),
    l = n(64700),
    a = n(990078),
    r = n(319060),
    s = n(812282),
    o = n(922016),
    c = n(939249),
    d = n(793574),
    u = n(58149),
    _ = n(688810),
    m = n(34337),
    h = n(240248),
    p = n(256449),
    g = n(194004),
    f = n(148355),
    x = n(503698),
    A = n.n(x),
    C = n(17928),
    v = n(3026),
    I = n(862482),
    E = n(834730),
    b = n(534514),
    y = n(821609),
    T = n(847374),
    j = n(686956),
    N = n(964486),
    S = n(235986),
    k = n(624793),
    L = n(636537),
    R = n(449054),
    w = n(652215),
    P = n(861626),
    D = n(87719),
    M = n(725807),
    O = n(71393),
    U = n(287809),
    G = n(954571),
    B = n(927578),
    V = n(750385),
    F = n(68935),
    H = n(850992),
    z = n(625494),
    W = n(698279),
    Y = n(788868),
    K = n(985018),
    q = n(631144),
    Z = n(979132);
function J(e) {
    G.default.track(w.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? w.liQ.GUILD_CHANNEL : w.liQ.DM_CHANNEL,
        location_section: w.JJy.STICKER_POPOUT,
    }),
        (0, D.e)();
}
function Q(e) {
    let { sticker: t, description: n } = e;
    return (0, i.jsxs)(S.A, {
        children: [
            (0, i.jsx)(f.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, i.jsxs)(S.A, {
                direction: S.A.Direction.VERTICAL,
                justify: S.A.Justify.CENTER,
                className: Z.bM,
                children: [
                    (0, i.jsx)(E.E, { variant: "text-md/semibold", children: (0, i.jsx)(v.A, { children: t.name }) }),
                    null != n && (0, i.jsx)(E.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
let X = (e) => {
        let { closePopout: t, sticker: n, channel: a, refreshPositionKey: r } = e,
            [s, o, c] = (0, C.yK)(
                [V.A],
                () => [V.A.getStickerPack(n.pack_id), !V.A.hasLoadedStickerPacks, V.A.isPremiumPack(n.pack_id)],
                [n],
            ),
            d = ((e) => {
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
            })({ sticker: n, stickerPack: s });
        (0, p.Sr)(n.pack_id);
        let _ = (0, p.pD)(a),
            h = { refreshPositionKey: r, channel: a },
            g = l.useRef(h);
        return (l.useEffect(() => {
            g.current = h;
        }),
        l.useEffect(() => {
            let { refreshPositionKey: e } = g.current;
            e();
        }, [o]),
        l.useEffect(() => {
            let { channel: e } = g.current;
            G.default.track(w.HAw.OPEN_POPOUT, {
                type: w.JJy.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, u.dI)(e),
            });
        }, [n.pack_id]),
        o || null == s)
            ? (0, i.jsx)(m.Y0, { className: q.v0 })
            : (0, i.jsxs)(m.Uq, {
                  className: q.Bm,
                  children: [
                      (0, i.jsx)(b.D, { variant: "heading-md/semibold", children: n.name }),
                      (0, i.jsx)(E.E, {
                          variant: "text-sm/normal",
                          children: c
                              ? K.intl.format(K.t.auckXz, { stickerPackName: s.name })
                              : K.intl.format(K.t.OzB6e3, { stickerPackName: s.name }),
                      }),
                      (0, i.jsx)("ul", {
                          className: q.pQ,
                          children: d.map((e) => (0, i.jsx)(f.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      c &&
                          (0, i.jsx)("div", {
                              className: q.j0,
                              children: (0, i.jsx)(
                                  y.$,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: K.intl.string(K.t.GPy3Ar),
                                      onClick: () => {
                                          c &&
                                              (function (e) {
                                                  let { stickerPack: t, stickerPickerCategories: n } = e;
                                                  z._.dispatchToLastSubscribed(w.jej.OPEN_EXPRESSION_PICKER, {
                                                      activeView: W.kx.STICKER,
                                                  });
                                                  let i = n.findIndex((e) => e.id === t.id);
                                                  -1 !== i && H.bM.setActiveCategoryIndex(i);
                                              })({ stickerPack: s, stickerPickerCategories: _ }),
                                              t();
                                      },
                                  },
                                  "view-sticker-pack",
                              ),
                          }),
                  ],
              });
    },
    $ = (e) => {
        let t,
            { sticker: n, channel: r, closePopout: s, refreshPositionKey: o } = e,
            [d, _] = l.useState(null),
            [h, p] = l.useState(!1),
            g = U.default.getCurrentUser(),
            x = B.Ay.canUseCustomStickersEverywhere(g),
            v = (0, C.bG)([O.A], () => O.A.getGuild(n.guild_id)),
            b = null != v,
            [D, V] = l.useState(!1),
            [F, H] = l.useState(null),
            z = l.useMemo(
                () => ({
                    page: null != r.guild_id ? w.liQ.GUILD_CHANNEL : w.liQ.DM_CHANNEL,
                    section: w.JJy.STICKER_POPOUT,
                }),
                [r.guild_id],
            ),
            { current: W } = l.useRef({ guild_id: r.getGuildId(), ...(0, u.dI)(r) }),
            X = { stickerSourceGuild: v, refreshPositionKey: o },
            $ = l.useRef(X);
        l.useEffect(() => {
            $.current = X;
        }),
            l.useEffect(() => {
                let { stickerSourceGuild: e } = $.current;
                (async () => {
                    if (null == e || e.features.has(w.GuildFeatures.DISCOVERABLE)) {
                        let e;
                        _(
                            await ((e = n.id),
                            L.Bo.get({ url: w.Rsh.STICKER_GUILD_DATA(e), oldFormErrors: !0, rejectWithError: !0 })
                                .then((e) => (e?.body != null ? (0, R.jE)(e.body) : null))
                                .catch(() => null)),
                        );
                    }
                    p(!0);
                })();
            }, [n.id, b]);
        let ee = n.guild_id === r.getGuildId(),
            et = null != d,
            en = !1,
            ei = "Custom Sticker Popout";
        x
            ? (t = b
                  ? ee
                      ? K.intl.string(K.t.fZ0DiG)
                      : K.intl.string(K.t["1f6D9m"])
                  : et
                    ? K.intl.string(K.t.yHmoR9)
                    : K.intl.string(K.t.vZaScH))
            : b
              ? ((t = ee ? K.intl.string(K.t.jNphpt) : K.intl.string(K.t.lyD5ZW)),
                (en = !0),
                (ei = "Custom Sticker Popout (Upsell)"))
              : et
                ? ((t = K.intl.string(K.t.IuXYch)), (en = !0), (ei = "Custom Sticker Popout (Upsell)"))
                : ((t = K.intl.format(K.t.hGWuxU, {
                      openPremiumSettings: () => {
                          J(r), s();
                      },
                  })),
                  (ei = "Custom Sticker Popout (Soft Upsell)"));
        let el = !en && !b && et && x;
        if (
            (l.useEffect(() => {
                let { refreshPositionKey: e } = $.current;
                e();
            }, [h, d]),
            (0, N.Ay)(() => {
                G.default.track(w.HAw.OPEN_POPOUT, { type: ei, ...W });
            }),
            !h)
        )
            return (0, i.jsx)(m.Y0, { className: q.v0 });
        {
            let e;
            return (0, i.jsxs)(m.Uq, {
                className: Z.Bm,
                children: [
                    ((e = async () => {
                        if (null == d || b) return;
                        s();
                        let e = d.id;
                        try {
                            await j.A.joinGuild(e), j.A.transitionToGuildSync(e);
                        } catch {}
                    }),
                    (0, i.jsxs)("div", {
                        className: Z.gH,
                        children: [
                            (0, i.jsx)(Q, { description: t, sticker: n }),
                            en &&
                                (0, i.jsx)(M.A, {
                                    className: Z.lI,
                                    subscriptionTier: Y.pe.TIER_2,
                                    size: I.$n.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: K.intl.string(K.t["gl/XHJ"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : s()),
                                    postSuccessGuild: b || null == d ? void 0 : d,
                                    premiumModalAnalyticsLocation: z,
                                }),
                            el &&
                                (0, i.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: Z.lI,
                                    children: (0, i.jsx)(y.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: K.intl.string(K.t.riu2R5),
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                }),
                        ],
                    })),
                    (null != v || null != d) &&
                        (() => {
                            if (!et && !b) return;
                            let e = (d?.stickers ?? [])
                                    .slice(0, 13)
                                    .filter((e) => e.id !== n.id)
                                    .slice(0, 12),
                                t = null != d ? k.GO.createFromDiscoverableGuild(d) : k.GO.createFromGuildRecord(v);
                            return (0, i.jsxs)("div", {
                                className: Z.tl,
                                children: [
                                    (0, i.jsx)(E.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: Z.YW,
                                        children: b ? K.intl.string(K.t.kx6pEG) : K.intl.string(K.t.pDE7Gb),
                                    }),
                                    (0, i.jsx)(P.G7, {
                                        expressionSourceGuild: t,
                                        hasJoinedExpressionSourceGuild: b,
                                        isDisplayingJoinGuildButtonInPopout: el,
                                    }),
                                    !b &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(c.D, {
                                                    onClick: () => {
                                                        o(), V(!D);
                                                    },
                                                    className: Z.wK,
                                                    children: (0, i.jsxs)(S.A, {
                                                        children: [
                                                            (0, i.jsx)(E.E, {
                                                                className: Z.__invalid_showMoreEmojisLabel,
                                                                variant: "text-xs/normal",
                                                                color: "none",
                                                                children: K.intl.string(K.t.vtH5hn),
                                                            }),
                                                            (0, i.jsx)(T.a, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: A()(Z.ZB, { [Z.cP]: !D }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                D &&
                                                    (0, i.jsx)(S.A, {
                                                        wrap: S.A.Wrap.WRAP,
                                                        align: S.A.Align.START,
                                                        justify: S.A.Justify.START,
                                                        className: Z.LX,
                                                        children: e.map((e) =>
                                                            (0, i.jsx)(
                                                                a.m,
                                                                {
                                                                    text: e.name,
                                                                    ...m.Uk,
                                                                    children: (0, i.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: A()(Z.Th, {
                                                                                [q.vT]: null != F && F !== e.id,
                                                                            }),
                                                                            onMouseEnter: () => {
                                                                                H(e.id);
                                                                            },
                                                                            onMouseLeave: () => {
                                                                                H(null);
                                                                            },
                                                                            children: (0, i.jsx)(f.A, {
                                                                                size: 32,
                                                                                enlargeOnInteraction: !0,
                                                                                enlargeWithName: !1,
                                                                                enlargeScaleFactor: 2,
                                                                                isInteracting: F === e.id,
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
    return (0, i.jsx)(m.Uq, {
        className: q.Bm,
        children: (0, i.jsx)(Q, {
            sticker: l,
            description: K.intl.format(K.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), J(t);
                },
            }),
        }),
    });
}
let et = (e) => {
    let { renderableSticker: t, channel: n, closePopout: l, refreshPositionKey: a } = e,
        [r, s] = (0, p.Zq)(t, !0);
    return null != r && (0, F.FD)(r)
        ? (0, i.jsx)(X, { sticker: r, closePopout: l, channel: n, refreshPositionKey: a })
        : null != r && (0, F.Xw)(r)
          ? (0, i.jsx)($, { sticker: r, channel: n, closePopout: l, refreshPositionKey: a })
          : s
            ? null == r
                ? (0, i.jsx)(ee, { channel: n, closePopout: l, sticker: t })
                : (l(), null)
            : (0, i.jsx)(m.Y0, {});
};
var en = n(76513);
let ei = (0, h.xI)(r.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    el = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: r } = e,
            h = l.useRef(null),
            [x, A] = l.useState(!0),
            [C, v] = l.useState(String(Date.now())),
            [I] = (0, p.Zq)(t, r),
            { analyticsLocations: E } = (0, _.Ay)(d.A.STICKER_MESSAGE),
            b = (0, i.jsxs)("span", {
                className: en.Zl,
                children: [(0, i.jsx)(s.s, { size: "xs", color: "currentColor", className: en.lA }), (I ?? t).name],
            });
        return (0, i.jsx)(_.f5, {
            value: E,
            children: (0, i.jsx)("div", {
                className: en.be,
                children: (0, i.jsx)(o.Y, {
                    align: "center",
                    animation: o.Y.Animation.TRANSLATE,
                    positionKey: C,
                    onRequestClose: () => {
                        A(!0);
                    },
                    renderPopout: (e) =>
                        (0, i.jsx)(et, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => v(String(Date.now())),
                        }),
                    targetElementRef: h,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, i.jsx)(a.m, {
                            ...m.Uk,
                            shouldShow: x,
                            __unsupportedReactNodeAsText: (0, m.yR)(b),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = I) &&
                                    u.Ay.trackWithMetadata(w.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: Y.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, g.Tw)(e.format_type),
                                        is_custom: (0, g.zN)(e.type),
                                    });
                            },
                            children: (0, i.jsx)(c.D, {
                                innerRef: h,
                                className: en.q7,
                                onClick: (e) => {
                                    A(!x), n(e);
                                },
                                tag: "span",
                                children: (0, i.jsx)(f.A, { isInteracting: r, size: ei, sticker: I ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
