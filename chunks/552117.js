n.d(t, { A: () => W });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(3026),
    d = n(990078),
    c = n(862482),
    u = n(834730),
    m = n(534514),
    _ = n(821609),
    h = n(939249),
    p = n(847374),
    g = n(686956),
    A = n(964486),
    f = n(58149),
    x = n(235986),
    C = n(624793),
    E = n(477712),
    I = n(767143),
    v = n(652176),
    b = n(87719),
    T = n(725807),
    S = n(71393),
    y = n(287809),
    N = n(954571),
    j = n(927578),
    L = n(256449),
    R = n(679382),
    P = n(378058),
    w = n(148355),
    D = n(915488),
    k = n(652215),
    O = n(788868),
    M = n(985018),
    U = n(631144),
    G = n(979132);
function B(e) {
    N.default.track(k.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? k.liQ.GUILD_CHANNEL : k.liQ.DM_CHANNEL,
        location_section: k.JJy.STICKER_POPOUT,
    }),
        (0, b.e)();
}
function F(e) {
    let { sticker: t, description: n } = e;
    return (0, i.jsxs)(x.A, {
        children: [
            (0, i.jsx)(w.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, i.jsxs)(x.A, {
                direction: x.A.Direction.VERTICAL,
                justify: x.A.Justify.CENTER,
                className: G.bM,
                children: [
                    (0, i.jsx)(u.E, { variant: "text-md/semibold", children: (0, i.jsx)(o.A, { children: t.name }) }),
                    null != n && (0, i.jsx)(u.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
let H = (e) => {
        let { closePopout: t, sticker: n, channel: a, refreshPositionKey: s } = e,
            [o, d, c] = (0, r.yK)(
                [R.A],
                () => [R.A.getStickerPack(n.pack_id), !R.A.hasLoadedStickerPacks, R.A.isPremiumPack(n.pack_id)],
                [n],
            ),
            h = ((e) => {
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
        (0, L.Sr)(n.pack_id);
        let p = (0, L.pD)(a),
            g = { refreshPositionKey: s, channel: a },
            A = l.useRef(g);
        return (l.useEffect(() => {
            A.current = g;
        }),
        l.useEffect(() => {
            let { refreshPositionKey: e } = A.current;
            e();
        }, [d]),
        l.useEffect(() => {
            let { channel: e } = A.current;
            N.default.track(k.HAw.OPEN_POPOUT, {
                type: k.JJy.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, f.dI)(e),
            });
        }, [n.pack_id]),
        d || null == o)
            ? (0, i.jsx)(v.Y0, { className: U.v0 })
            : (0, i.jsxs)(v.Uq, {
                  className: U.Bm,
                  children: [
                      (0, i.jsx)(m.D, { variant: "heading-md/semibold", children: n.name }),
                      (0, i.jsx)(u.E, {
                          variant: "text-sm/normal",
                          children: c
                              ? M.intl.format(M.t.auckXz, { stickerPackName: o.name })
                              : M.intl.format(M.t.OzB6e3, { stickerPackName: o.name }),
                      }),
                      (0, i.jsx)("ul", {
                          className: U.pQ,
                          children: h.map((e) => (0, i.jsx)(w.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      c &&
                          (0, i.jsx)("div", {
                              className: U.j0,
                              children: (0, i.jsx)(
                                  _.$,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: M.intl.string(M.t.GPy3Ar),
                                      onClick: () => {
                                          c && (0, D.a)({ stickerPack: o, stickerPickerCategories: p }), t();
                                      },
                                  },
                                  "view-sticker-pack",
                              ),
                          }),
                  ],
              });
    },
    V = (e) => {
        let t,
            { sticker: n, channel: a, closePopout: o, refreshPositionKey: m } = e,
            [b, L] = l.useState(null),
            [R, P] = l.useState(!1),
            D = y.default.getCurrentUser(),
            H = j.Ay.canUseCustomStickersEverywhere(D),
            V = (0, r.bG)([S.A], () => S.A.getGuild(n.guild_id)),
            q = null != V,
            [W, z] = l.useState(!1),
            [Y, Q] = l.useState(null),
            K = l.useMemo(
                () => ({
                    page: null != a.guild_id ? k.liQ.GUILD_CHANNEL : k.liQ.DM_CHANNEL,
                    section: k.JJy.STICKER_POPOUT,
                }),
                [a.guild_id],
            ),
            { current: Z } = l.useRef({ guild_id: a.getGuildId(), ...(0, f.dI)(a) }),
            J = { stickerSourceGuild: V, refreshPositionKey: m },
            X = l.useRef(J);
        l.useEffect(() => {
            X.current = J;
        }),
            l.useEffect(() => {
                let { stickerSourceGuild: e } = X.current;
                (async () => {
                    (null == e || e.features.has(k.GuildFeatures.DISCOVERABLE)) && L(await (0, E.A)(n.id)), P(!0);
                })();
            }, [n.id, q]);
        let $ = n.guild_id === a.getGuildId(),
            ee = null != b,
            et = !1,
            en = "Custom Sticker Popout";
        H
            ? (t = q
                  ? $
                      ? M.intl.string(M.t.fZ0DiG)
                      : M.intl.string(M.t["1f6D9m"])
                  : ee
                    ? M.intl.string(M.t.yHmoR9)
                    : M.intl.string(M.t.vZaScH))
            : q
              ? ((t = $ ? M.intl.string(M.t.jNphpt) : M.intl.string(M.t.lyD5ZW)),
                (et = !0),
                (en = "Custom Sticker Popout (Upsell)"))
              : ee
                ? ((t = M.intl.string(M.t.IuXYch)), (et = !0), (en = "Custom Sticker Popout (Upsell)"))
                : ((t = M.intl.format(M.t.hGWuxU, {
                      openPremiumSettings: () => {
                          B(a), o();
                      },
                  })),
                  (en = "Custom Sticker Popout (Soft Upsell)"));
        let ei = !et && !q && ee && H;
        if (
            (l.useEffect(() => {
                let { refreshPositionKey: e } = X.current;
                e();
            }, [R, b]),
            (0, A.Ay)(() => {
                N.default.track(k.HAw.OPEN_POPOUT, { type: en, ...Z });
            }),
            !R)
        )
            return (0, i.jsx)(v.Y0, { className: U.v0 });
        {
            let e;
            return (0, i.jsxs)(v.Uq, {
                className: G.Bm,
                children: [
                    ((e = async () => {
                        if (null == b || q) return;
                        o();
                        let e = b.id;
                        try {
                            await g.A.joinGuild(e), g.A.transitionToGuildSync(e);
                        } catch {}
                    }),
                    (0, i.jsxs)("div", {
                        className: G.gH,
                        children: [
                            (0, i.jsx)(F, { description: t, sticker: n }),
                            et &&
                                (0, i.jsx)(T.A, {
                                    className: G.lI,
                                    subscriptionTier: O.pe.TIER_2,
                                    size: c.$n.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: M.intl.string(M.t["gl/XHJ"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : o()),
                                    postSuccessGuild: q || null == b ? void 0 : b,
                                    premiumModalAnalyticsLocation: K,
                                }),
                            ei &&
                                (0, i.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: G.lI,
                                    children: (0, i.jsx)(_.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: M.intl.string(M.t.riu2R5),
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                }),
                        ],
                    })),
                    (null != V || null != b) &&
                        (() => {
                            if (!ee && !q) return;
                            let e = (b?.stickers ?? [])
                                    .slice(0, 13)
                                    .filter((e) => e.id !== n.id)
                                    .slice(0, 12),
                                t = null != b ? C.GO.createFromDiscoverableGuild(b) : C.GO.createFromGuildRecord(V);
                            return (0, i.jsxs)("div", {
                                className: G.tl,
                                children: [
                                    (0, i.jsx)(u.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: G.YW,
                                        children: q ? M.intl.string(M.t.kx6pEG) : M.intl.string(M.t.pDE7Gb),
                                    }),
                                    (0, i.jsx)(I.G7, {
                                        expressionSourceGuild: t,
                                        hasJoinedExpressionSourceGuild: q,
                                        isDisplayingJoinGuildButtonInPopout: ei,
                                    }),
                                    !q &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(h.D, {
                                                    onClick: () => {
                                                        m(), z(!W);
                                                    },
                                                    className: G.wK,
                                                    children: (0, i.jsxs)(x.A, {
                                                        children: [
                                                            (0, i.jsx)(u.E, {
                                                                className: G.__invalid_showMoreEmojisLabel,
                                                                variant: "text-xs/normal",
                                                                color: "none",
                                                                children: M.intl.string(M.t.vtH5hn),
                                                            }),
                                                            (0, i.jsx)(p.a, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: s()(G.ZB, { [G.cP]: !W }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                W &&
                                                    (0, i.jsx)(x.A, {
                                                        wrap: x.A.Wrap.WRAP,
                                                        align: x.A.Align.START,
                                                        justify: x.A.Justify.START,
                                                        className: G.LX,
                                                        children: e.map((e) =>
                                                            (0, i.jsx)(
                                                                d.m,
                                                                {
                                                                    text: e.name,
                                                                    ...v.Uk,
                                                                    children: (0, i.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: s()(G.Th, {
                                                                                [U.vT]: null != Y && Y !== e.id,
                                                                            }),
                                                                            onMouseEnter: () => {
                                                                                Q(e.id);
                                                                            },
                                                                            onMouseLeave: () => {
                                                                                Q(null);
                                                                            },
                                                                            children: (0, i.jsx)(w.A, {
                                                                                size: 32,
                                                                                enlargeOnInteraction: !0,
                                                                                enlargeWithName: !1,
                                                                                enlargeScaleFactor: 2,
                                                                                isInteracting: Y === e.id,
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
function q(e) {
    let { channel: t, closePopout: n, sticker: l } = e;
    return (0, i.jsx)(v.Uq, {
        className: U.Bm,
        children: (0, i.jsx)(F, {
            sticker: l,
            description: M.intl.format(M.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), B(t);
                },
            }),
        }),
    });
}
let W = (e) => {
    let { renderableSticker: t, channel: n, closePopout: l, refreshPositionKey: a } = e,
        [s, r] = (0, L.Zq)(t, !0);
    return null != s && (0, P.FD)(s)
        ? (0, i.jsx)(H, { sticker: s, closePopout: l, channel: n, refreshPositionKey: a })
        : null != s && (0, P.Xw)(s)
          ? (0, i.jsx)(V, { sticker: s, channel: n, closePopout: l, refreshPositionKey: a })
          : r
            ? null == s
                ? (0, i.jsx)(q, { channel: n, closePopout: l, sticker: t })
                : (l(), null)
            : (0, i.jsx)(v.Y0, {});
};
