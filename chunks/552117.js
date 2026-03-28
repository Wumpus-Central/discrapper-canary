n.d(t, { A: () => F });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(3026),
    d = n(990078),
    c = n(421380),
    u = n(397927),
    _ = n(686956),
    m = n(964486),
    h = n(58149),
    p = n(235986),
    g = n(624793),
    A = n(477712),
    x = n(767143),
    f = n(652176),
    C = n(87719),
    I = n(465794),
    E = n(71393),
    b = n(287809),
    v = n(954571),
    T = n(927578),
    y = n(256449),
    S = n(679382),
    N = n(378058),
    j = n(148355),
    L = n(915488),
    R = n(652215),
    P = n(788868),
    w = n(985018),
    M = n(865112),
    D = n(260268);
function k(e) {
    v.default.track(R.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? R.liQ.GUILD_CHANNEL : R.liQ.DM_CHANNEL,
        location_section: R.JJy.STICKER_POPOUT,
    }),
        (0, C.e)();
}
function O(e) {
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
let U = (e) => {
        let { closePopout: t, sticker: n, channel: r, refreshPositionKey: l } = e,
            [o, d, c] = (0, s.yK)(
                [S.A],
                () => [S.A.getStickerPack(n.pack_id), !S.A.hasLoadedStickerPacks, S.A.isPremiumPack(n.pack_id)],
                [n],
            ),
            _ = ((e) => {
                let { sticker: t, stickerPack: n } = e;
                return a.useMemo(
                    () =>
                        null == n
                            ? []
                            : n.stickers
                                  .slice(0, 4)
                                  .reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), []),
                    [t, n],
                );
            })({ sticker: n, stickerPack: o });
        (0, y.Sr)(n.pack_id);
        let m = (0, y.pD)(r),
            p = { refreshPositionKey: l, channel: r },
            g = a.useRef(p);
        return (a.useEffect(() => {
            g.current = p;
        }),
        a.useEffect(() => {
            let { refreshPositionKey: e } = g.current;
            e();
        }, [d]),
        a.useEffect(() => {
            let { channel: e } = g.current;
            v.default.track(R.HAw.OPEN_POPOUT, {
                type: R.JJy.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, h.dI)(e),
            });
        }, [n.pack_id]),
        d || null == o)
            ? (0, i.jsx)(f.Y0, { className: M.v0 })
            : (0, i.jsxs)(f.Uq, {
                  className: M.Bm,
                  children: [
                      (0, i.jsx)(u.Heading, { variant: "heading-md/semibold", children: n.name }),
                      (0, i.jsx)(u.Text, {
                          variant: "text-sm/normal",
                          children: c
                              ? w.intl.format(w.t.auckXz, { stickerPackName: o.name })
                              : w.intl.format(w.t.OzB6e3, { stickerPackName: o.name }),
                      }),
                      (0, i.jsx)("ul", {
                          className: M.pQ,
                          children: _.map((e) => (0, i.jsx)(j.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      c &&
                          (0, i.jsx)("div", {
                              className: M.j0,
                              children: (0, i.jsx)(
                                  u.Button,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: w.intl.string(w.t.GPy3Ar),
                                      onClick: () => {
                                          c && (0, L.a)({ stickerPack: o, stickerPickerCategories: m }), t();
                                      },
                                  },
                                  "view-sticker-pack",
                              ),
                          }),
                  ],
              });
    },
    B = (e) => {
        let t,
            { sticker: n, channel: r, closePopout: o, refreshPositionKey: C } = e,
            [y, S] = a.useState(null),
            [N, L] = a.useState(!1),
            U = b.default.getCurrentUser(),
            B = T.Ay.canUseCustomStickersEverywhere(U),
            G = (0, s.bG)([E.A], () => E.A.getGuild(n.guild_id)),
            F = null != G,
            [H, V] = a.useState(!1),
            [q, W] = a.useState(null),
            z = a.useMemo(
                () => ({
                    page: null != r.guild_id ? R.liQ.GUILD_CHANNEL : R.liQ.DM_CHANNEL,
                    section: R.JJy.STICKER_POPOUT,
                }),
                [r.guild_id],
            ),
            { current: Y } = a.useRef({ guild_id: r.getGuildId(), ...(0, h.dI)(r) }),
            Q = { stickerSourceGuild: G, refreshPositionKey: C },
            K = a.useRef(Q);
        a.useEffect(() => {
            K.current = Q;
        }),
            a.useEffect(() => {
                let { stickerSourceGuild: e } = K.current;
                (async () => {
                    (null == e || e.features.has(R.GuildFeatures.DISCOVERABLE)) && S(await (0, A.A)(n.id)), L(!0);
                })();
            }, [n.id, F]);
        let J = n.guild_id === r.getGuildId(),
            X = null != y,
            Z = !1,
            $ = "Custom Sticker Popout";
        B
            ? (t = F
                  ? J
                      ? w.intl.string(w.t.fZ0DiG)
                      : w.intl.string(w.t["1f6D9m"])
                  : X
                    ? w.intl.string(w.t.yHmoR9)
                    : w.intl.string(w.t.vZaScH))
            : F
              ? ((t = J ? w.intl.string(w.t.jNphpt) : w.intl.string(w.t.lyD5ZW)),
                (Z = !0),
                ($ = "Custom Sticker Popout (Upsell)"))
              : X
                ? ((t = w.intl.string(w.t.IuXYch)), (Z = !0), ($ = "Custom Sticker Popout (Upsell)"))
                : ((t = w.intl.format(w.t.hGWuxU, {
                      openPremiumSettings: () => {
                          k(r), o();
                      },
                  })),
                  ($ = "Custom Sticker Popout (Soft Upsell)"));
        let ee = !Z && !F && X && B;
        if (
            (a.useEffect(() => {
                let { refreshPositionKey: e } = K.current;
                e();
            }, [N, y]),
            (0, m.Ay)(() => {
                v.default.track(R.HAw.OPEN_POPOUT, { type: $, ...Y });
            }),
            !N)
        )
            return (0, i.jsx)(f.Y0, { className: M.v0 });
        {
            let e;
            return (0, i.jsxs)(f.Uq, {
                className: D.Bm,
                children: [
                    ((e = async () => {
                        if (null == y || F) return;
                        o();
                        let e = y.id;
                        try {
                            await _.A.joinGuild(e), _.A.transitionToGuildSync(e);
                        } catch {}
                    }),
                    (0, i.jsxs)("div", {
                        className: D.gH,
                        children: [
                            (0, i.jsx)(O, { description: t, sticker: n }),
                            Z &&
                                (0, i.jsx)(I.A, {
                                    className: D.lI,
                                    subscriptionTier: P.pe.TIER_2,
                                    size: c.$n.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: w.intl.string(w.t["gl/XHJ"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : o()),
                                    postSuccessGuild: F || null == y ? void 0 : y,
                                    premiumModalAnalyticsLocation: z,
                                }),
                            ee &&
                                (0, i.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: D.lI,
                                    children: (0, i.jsx)(u.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: w.intl.string(w.t.riu2R5),
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                }),
                        ],
                    })),
                    (null != G || null != y) &&
                        (() => {
                            if (!X && !F) return;
                            let e = (y?.stickers ?? [])
                                    .slice(0, 13)
                                    .filter((e) => e.id !== n.id)
                                    .slice(0, 12),
                                t = null != y ? g.GO.createFromDiscoverableGuild(y) : g.GO.createFromGuildRecord(G);
                            return (0, i.jsxs)("div", {
                                className: D.tl,
                                children: [
                                    (0, i.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: D.YW,
                                        children: F ? w.intl.string(w.t.kx6pEG) : w.intl.string(w.t.pDE7Gb),
                                    }),
                                    (0, i.jsx)(x.G7, {
                                        expressionSourceGuild: t,
                                        hasJoinedExpressionSourceGuild: F,
                                        isDisplayingJoinGuildButtonInPopout: ee,
                                    }),
                                    !F &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(u.DUT, {
                                                    onClick: () => {
                                                        C(), V(!H);
                                                    },
                                                    className: D.wK,
                                                    children: (0, i.jsxs)(p.A, {
                                                        children: [
                                                            (0, i.jsx)(u.Text, {
                                                                className: D.__invalid_showMoreEmojisLabel,
                                                                variant: "text-xs/normal",
                                                                color: "none",
                                                                children: w.intl.string(w.t.vtH5hn),
                                                            }),
                                                            (0, i.jsx)(u.abt, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: l()(D.ZB, { [D.cP]: !H }),
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
                                                                    ...f.Uk,
                                                                    children: (0, i.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: l()(D.Th, {
                                                                                [M.vT]: null != q && q !== e.id,
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
                                                                                isInteracting: q === e.id,
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
function G(e) {
    let { channel: t, closePopout: n, sticker: a } = e;
    return (0, i.jsx)(f.Uq, {
        className: M.Bm,
        children: (0, i.jsx)(O, {
            sticker: a,
            description: w.intl.format(w.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), k(t);
                },
            }),
        }),
    });
}
let F = (e) => {
    let { renderableSticker: t, channel: n, closePopout: a, refreshPositionKey: r } = e,
        [l, s] = (0, y.Zq)(t, !0);
    return null != l && (0, N.FD)(l)
        ? (0, i.jsx)(U, { sticker: l, closePopout: a, channel: n, refreshPositionKey: r })
        : null != l && (0, N.Xw)(l)
          ? (0, i.jsx)(B, { sticker: l, channel: n, closePopout: a, refreshPositionKey: r })
          : s
            ? null == l
                ? (0, i.jsx)(G, { channel: n, closePopout: a, sticker: t })
                : (a(), null)
            : (0, i.jsx)(f.Y0, {});
};
