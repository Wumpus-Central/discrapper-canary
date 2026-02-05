n.d(t, { A: () => F });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(3026),
    d = n(990078),
    c = n(421380),
    u = n(397927),
    m = n(686956),
    _ = n(964486),
    h = n(58149),
    p = n(235986),
    g = n(624793),
    A = n(477712),
    f = n(767143),
    x = n(652176),
    E = n(87719),
    C = n(465794),
    I = n(71393),
    T = n(287809),
    v = n(954571),
    N = n(927578),
    S = n(256449),
    b = n(679382),
    y = n(378058),
    j = n(148355),
    R = n(915488),
    L = n(652215),
    M = n(788868),
    O = n(985018),
    P = n(986785),
    D = n(767419);
function k(e) {
    v.default.track(L.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? L.liQ.GUILD_CHANNEL : L.liQ.DM_CHANNEL,
        location_section: L.JJy.STICKER_POPOUT,
    }),
        (0, E.e)();
}
function U(e) {
    let { sticker: t, description: n } = e;
    return (0, i.jsxs)(p.A, {
        children: [
            (0, i.jsx)(j.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, i.jsxs)(p.A, {
                direction: p.A.Direction.VERTICAL,
                justify: p.A.Justify.CENTER,
                className: D.bM,
                children: [
                    (0, i.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        children: (0, i.jsx)(o.A, { children: t.name }),
                    }),
                    null != n && (0, i.jsx)(u.Text, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
let w = (e) => {
        let { closePopout: t, sticker: n, channel: a, refreshPositionKey: r } = e,
            [o, d, c] = (0, s.yK)(
                [b.A],
                () => [b.A.getStickerPack(n.pack_id), !b.A.hasLoadedStickerPacks, b.A.isPremiumPack(n.pack_id)],
                [n],
            ),
            m = ((e) => {
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
            })({ sticker: n, stickerPack: o });
        (0, S.Sr)(n.pack_id);
        let _ = (0, S.pD)(a),
            p = { refreshPositionKey: r, channel: a },
            g = l.useRef(p);
        return (l.useEffect(() => {
            g.current = p;
        }),
        l.useEffect(() => {
            let { refreshPositionKey: e } = g.current;
            e();
        }, [d]),
        l.useEffect(() => {
            let { channel: e } = g.current;
            v.default.track(L.HAw.OPEN_POPOUT, {
                type: L.JJy.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, h.dI)(e),
            });
        }, [n.pack_id]),
        d || null == o)
            ? (0, i.jsx)(x.Y0, { className: P.v0 })
            : (0, i.jsxs)(x.Uq, {
                  className: P.Bm,
                  children: [
                      (0, i.jsx)(u.Heading, { variant: "heading-md/semibold", children: n.name }),
                      (0, i.jsx)(u.Text, {
                          variant: "text-sm/normal",
                          children: c
                              ? O.intl.format(O.t.auckXz, { stickerPackName: o.name })
                              : O.intl.format(O.t.OzB6e3, { stickerPackName: o.name }),
                      }),
                      (0, i.jsx)("ul", {
                          className: P.pQ,
                          children: m.map((e) => (0, i.jsx)(j.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      c &&
                          (0, i.jsx)("div", {
                              className: P.j0,
                              children: (0, i.jsx)(
                                  u.Button,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: O.intl.string(O.t.GPy3Ar),
                                      onClick: () => {
                                          c && (0, R.a)({ stickerPack: o, stickerPickerCategories: _ }), t();
                                      },
                                  },
                                  "view-sticker-pack",
                              ),
                          }),
                  ],
              });
    },
    G = (e) => {
        let t,
            { sticker: n, channel: a, closePopout: o, refreshPositionKey: E } = e,
            [S, b] = l.useState(null),
            [y, R] = l.useState(!1),
            w = T.default.getCurrentUser(),
            G = N.Ay.canUseCustomStickersEverywhere(w),
            B = (0, s.bG)([I.A], () => I.A.getGuild(n.guild_id)),
            F = null != B,
            [H, V] = l.useState(!1),
            [z, W] = l.useState(null),
            Y = l.useMemo(
                () => ({
                    page: null != a.guild_id ? L.liQ.GUILD_CHANNEL : L.liQ.DM_CHANNEL,
                    section: L.JJy.STICKER_POPOUT,
                }),
                [a.guild_id],
            ),
            { current: q } = l.useRef({ guild_id: a.getGuildId(), ...(0, h.dI)(a) }),
            K = { stickerSourceGuild: B, refreshPositionKey: E },
            Q = l.useRef(K);
        l.useEffect(() => {
            Q.current = K;
        }),
            l.useEffect(() => {
                let { stickerSourceGuild: e } = Q.current;
                (async () => {
                    (null == e || e.features.has(L.GuildFeatures.DISCOVERABLE)) && b(await (0, A.A)(n.id)), R(!0);
                })();
            }, [n.id, F]);
        let J = n.guild_id === a.getGuildId(),
            X = null != S,
            Z = !1,
            $ = "Custom Sticker Popout";
        G
            ? (t = F
                  ? J
                      ? O.intl.string(O.t.fZ0DiG)
                      : O.intl.string(O.t["1f6D9m"])
                  : X
                    ? O.intl.string(O.t.yHmoR9)
                    : O.intl.string(O.t.vZaScH))
            : F
              ? ((t = J ? O.intl.string(O.t.jNphpt) : O.intl.string(O.t.lyD5ZW)),
                (Z = !0),
                ($ = "Custom Sticker Popout (Upsell)"))
              : X
                ? ((t = O.intl.string(O.t.IuXYch)), (Z = !0), ($ = "Custom Sticker Popout (Upsell)"))
                : ((t = O.intl.format(O.t.hGWuxU, {
                      openPremiumSettings: () => {
                          k(a), o();
                      },
                  })),
                  ($ = "Custom Sticker Popout (Soft Upsell)"));
        let ee = !Z && !F && X && G;
        if (
            (l.useEffect(() => {
                let { refreshPositionKey: e } = Q.current;
                e();
            }, [y, S]),
            (0, _.Ay)(() => {
                v.default.track(L.HAw.OPEN_POPOUT, { type: $, ...q });
            }),
            !y)
        )
            return (0, i.jsx)(x.Y0, { className: P.v0 });
        {
            let e;
            return (0, i.jsxs)(x.Uq, {
                className: D.Bm,
                children: [
                    ((e = async () => {
                        if (null == S || F) return;
                        o();
                        let e = S.id;
                        try {
                            await m.A.joinGuild(e), m.A.transitionToGuildSync(e);
                        } catch {}
                    }),
                    (0, i.jsxs)("div", {
                        className: D.gH,
                        children: [
                            (0, i.jsx)(U, { description: t, sticker: n }),
                            Z &&
                                (0, i.jsx)(C.A, {
                                    className: D.lI,
                                    subscriptionTier: M.pe.TIER_2,
                                    size: c.$n.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: O.intl.string(O.t["gl/XHJ"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : o()),
                                    postSuccessGuild: F || null == S ? void 0 : S,
                                    premiumModalAnalyticsLocation: Y,
                                }),
                            ee &&
                                (0, i.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: D.lI,
                                    children: (0, i.jsx)(u.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: O.intl.string(O.t.riu2R5),
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                }),
                        ],
                    })),
                    (null != B || null != S) &&
                        (() => {
                            if (!X && !F) return;
                            let e = (S?.stickers ?? [])
                                    .slice(0, 13)
                                    .filter((e) => e.id !== n.id)
                                    .slice(0, 12),
                                t = null != S ? g.GO.createFromDiscoverableGuild(S) : g.GO.createFromGuildRecord(B);
                            return (0, i.jsxs)("div", {
                                className: D.tl,
                                children: [
                                    (0, i.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: D.YW,
                                        children: F ? O.intl.string(O.t.kx6pEG) : O.intl.string(O.t.pDE7Gb),
                                    }),
                                    (0, i.jsx)(f.G7, {
                                        expressionSourceGuild: t,
                                        hasJoinedExpressionSourceGuild: F,
                                        isDisplayingJoinGuildButtonInPopout: ee,
                                    }),
                                    !F &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(u.DUT, {
                                                    onClick: () => {
                                                        E(), V(!H);
                                                    },
                                                    className: D.wK,
                                                    children: (0, i.jsxs)(p.A, {
                                                        children: [
                                                            (0, i.jsx)(u.Text, {
                                                                className: D.__invalid_showMoreEmojisLabel,
                                                                variant: "text-xs/normal",
                                                                color: "none",
                                                                children: O.intl.string(O.t.vtH5hn),
                                                            }),
                                                            (0, i.jsx)(u.abt, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: r()(D.ZB, { [D.cP]: !H }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                H &&
                                                    (0, i.jsx)(p.A, {
                                                        wrap: p.A.Wrap.WRAP,
                                                        align: p.A.Align.START,
                                                        justify: p.A.Justify.START,
                                                        className: D.LX,
                                                        children: e.map((e) =>
                                                            (0, i.jsx)(
                                                                d.m,
                                                                {
                                                                    text: e.name,
                                                                    ...x.Uk,
                                                                    children: (0, i.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: r()(D.Th, {
                                                                                [P.vT]: null != z && z !== e.id,
                                                                            }),
                                                                            onMouseEnter: () => {
                                                                                W(e.id);
                                                                            },
                                                                            onMouseLeave: () => {
                                                                                W(null);
                                                                            },
                                                                            children: (0, i.jsx)(j.A, {
                                                                                size: 32,
                                                                                enlargeOnInteraction: !0,
                                                                                enlargeWithName: !1,
                                                                                enlargeScaleFactor: 2,
                                                                                isInteracting: z === e.id,
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
function B(e) {
    let { channel: t, closePopout: n, sticker: l } = e;
    return (0, i.jsx)(x.Uq, {
        className: P.Bm,
        children: (0, i.jsx)(U, {
            sticker: l,
            description: O.intl.format(O.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), k(t);
                },
            }),
        }),
    });
}
let F = (e) => {
    let { renderableSticker: t, channel: n, closePopout: l, refreshPositionKey: a } = e,
        [r, s] = (0, S.Zq)(t, !0);
    return null != r && (0, y.FD)(r)
        ? (0, i.jsx)(w, { sticker: r, closePopout: l, channel: n, refreshPositionKey: a })
        : null != r && (0, y.Xw)(r)
          ? (0, i.jsx)(G, { sticker: r, channel: n, closePopout: l, refreshPositionKey: a })
          : s
            ? s && null == r
                ? (0, i.jsx)(B, { channel: n, closePopout: l, sticker: t })
                : (l(), null)
            : (0, i.jsx)(x.Y0, {});
};
