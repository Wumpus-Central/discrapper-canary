n.d(t, {
    A: () => H,
}),
    n(228524),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(3026),
    c = n(990078),
    u = n(421380),
    d = n(397927),
    p = n(686956),
    m = n(964486),
    f = n(58149),
    g = n(235986),
    h = n(624793),
    _ = n(477712),
    b = n(767143),
    A = n(652176),
    y = n(87719),
    v = n(465794),
    x = n(71393),
    O = n(287809),
    E = n(954571),
    j = n(927578),
    C = n(256449),
    I = n(679382),
    S = n(378058),
    T = n(148355),
    N = n(915488),
    P = n(652215),
    w = n(788868),
    R = n(985018),
    D = n(986785),
    L = n(767419);

function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function k(e) {
    E.default.track(P.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? P.liQ.GUILD_CHANNEL : P.liQ.DM_CHANNEL,
        location_section: P.JJy.STICKER_POPOUT,
    }),
        (0, y.Z)();
}

function U(e) {
    let { sticker: t, description: n } = e;
    return (0, r.jsxs)(g.A, {
        children: [
            (0, r.jsx)(T.A, {
                sticker: t,
                size: 48,
                isInteracting: !0,
            }),
            (0, r.jsxs)(g.A, {
                direction: g.A.Direction.VERTICAL,
                justify: g.A.Justify.CENTER,
                className: L.bM,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        children: (0, r.jsx)(o.A, {
                            children: t.name,
                        }),
                    }),
                    null != n &&
                        (0, r.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            children: n,
                        }),
                ],
            }),
        ],
    });
}
let G = (e) => {
        let { closePopout: t, sticker: n, channel: l, refreshPositionKey: a } = e,
            [o, c, u] = (0, s.yK)(
                [I.A],
                () => [I.A.getStickerPack(n.pack_id), !I.A.hasLoadedStickerPacks, I.A.isPremiumPack(n.pack_id)],
                [n],
            ),
            p = ((e) => {
                let { sticker: t, stickerPack: n } = e;
                return i.useMemo(
                    () =>
                        null == n
                            ? []
                            : n.stickers
                                  .slice(0, 4)
                                  .reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), []),
                    [t, n],
                );
            })({
                sticker: n,
                stickerPack: o,
            });
        (0, C.Sr)(n.pack_id);
        let m = (0, C.pD)(l),
            g = {
                refreshPositionKey: a,
                channel: l,
            },
            h = i.useRef(g);
        return (i.useEffect(() => {
            h.current = g;
        }),
        i.useEffect(() => {
            let { refreshPositionKey: e } = h.current;
            e();
        }, [c]),
        i.useEffect(() => {
            let { channel: e } = h.current;
            E.default.track(
                P.HAw.OPEN_POPOUT,
                M(
                    {
                        type: P.JJy.STICKER_POPOUT,
                        guild_id: e.getGuildId(),
                        sticker_pack_id: n.pack_id,
                    },
                    (0, f.dI)(e),
                ),
            );
        }, [n.pack_id]),
        c || null == o)
            ? (0, r.jsx)(A.Y0, {
                  className: D.v0,
              })
            : (0, r.jsxs)(A.Uq, {
                  className: D.Bm,
                  children: [
                      (0, r.jsx)(d.Heading, {
                          variant: "heading-md/semibold",
                          children: n.name,
                      }),
                      (0, r.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          children: u
                              ? R.intl.format(R.t.auckXz, {
                                    stickerPackName: o.name,
                                })
                              : R.intl.format(R.t.OzB6e3, {
                                    stickerPackName: o.name,
                                }),
                      }),
                      (0, r.jsx)("ul", {
                          className: D.pQ,
                          children: p.map((e) =>
                              (0, r.jsx)(
                                  T.A,
                                  {
                                      isInteracting: !0,
                                      size: 80,
                                      sticker: e,
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                      u &&
                          (0, r.jsx)("div", {
                              className: D.j0,
                              children: (0, r.jsx)(
                                  d.Button,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: R.intl.string(R.t.GPy3Ar),
                                      onClick: () => {
                                          u &&
                                              (0, N.a)({
                                                  stickerPack: o,
                                                  stickerPickerCategories: m,
                                              }),
                                              t();
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
            { sticker: n, channel: l, closePopout: o, refreshPositionKey: y } = e,
            [C, I] = i.useState(null),
            [S, N] = i.useState(!1),
            G = O.default.getCurrentUser(),
            B = j.Ay.canUseCustomStickersEverywhere(G),
            F = (0, s.bG)([x.A], () => x.A.getGuild(n.guild_id)),
            H = null != F,
            [V, z] = i.useState(!1),
            [W, K] = i.useState(null),
            Y = i.useMemo(
                () => ({
                    page: null != l.guild_id ? P.liQ.GUILD_CHANNEL : P.liQ.DM_CHANNEL,
                    section: P.JJy.STICKER_POPOUT,
                }),
                [l.guild_id],
            ),
            { current: q } = i.useRef(
                M(
                    {
                        guild_id: l.getGuildId(),
                    },
                    (0, f.dI)(l),
                ),
            ),
            J = {
                stickerSourceGuild: F,
                refreshPositionKey: y,
            },
            Q = i.useRef(J);
        i.useEffect(() => {
            Q.current = J;
        }),
            i.useEffect(() => {
                let { stickerSourceGuild: e } = Q.current;
                (async () => {
                    (null == e || e.features.has(P.GuildFeatures.DISCOVERABLE)) && I(await (0, _.A)(n.id)), N(!0);
                })();
            }, [n.id, H]);
        let Z = n.guild_id === l.getGuildId(),
            X = null != C,
            $ = !1,
            ee = "Custom Sticker Popout";
        B
            ? (t = H
                  ? Z
                      ? R.intl.string(R.t.fZ0DiG)
                      : R.intl.string(R.t["1f6D9m"])
                  : X
                    ? R.intl.string(R.t.yHmoR9)
                    : R.intl.string(R.t.vZaScH))
            : H
              ? ((t = Z ? R.intl.string(R.t.jNphpt) : R.intl.string(R.t.lyD5ZW)),
                ($ = !0),
                (ee = "Custom Sticker Popout (Upsell)"))
              : X
                ? ((t = R.intl.string(R.t.IuXYch)), ($ = !0), (ee = "Custom Sticker Popout (Upsell)"))
                : ((t = R.intl.format(R.t.hGWuxU, {
                      openPremiumSettings: () => {
                          k(l), o();
                      },
                  })),
                  (ee = "Custom Sticker Popout (Soft Upsell)"));
        let et = !$ && !H && X && B;
        if (
            (i.useEffect(() => {
                let { refreshPositionKey: e } = Q.current;
                e();
            }, [S, C]),
            (0, m.Ay)(() => {
                E.default.track(
                    P.HAw.OPEN_POPOUT,
                    M(
                        {
                            type: ee,
                        },
                        q,
                    ),
                );
            }),
            !S)
        )
            return (0, r.jsx)(A.Y0, {
                className: D.v0,
            });
        {
            let e;
            return (0, r.jsxs)(A.Uq, {
                className: L.Bm,
                children: [
                    ((e = async () => {
                        if (null == C || H) return;
                        o();
                        let e = C.id;
                        try {
                            await p.A.joinGuild(e), p.A.transitionToGuildSync(e);
                        } catch (e) {}
                    }),
                    (0, r.jsxs)("div", {
                        className: L.gH,
                        children: [
                            (0, r.jsx)(U, {
                                description: t,
                                sticker: n,
                            }),
                            $ &&
                                (0, r.jsx)(v.A, {
                                    className: L.lI,
                                    subscriptionTier: w.pe.TIER_2,
                                    size: u.$n.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: {
                                        textOverride: R.intl.string(R.t["gl/XHJ"]),
                                    },
                                    onSubscribeModalClose: (t) => (t ? e() : o()),
                                    postSuccessGuild: H || null == C ? void 0 : C,
                                    premiumModalAnalyticsLocation: Y,
                                }),
                            et &&
                                (0, r.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: L.lI,
                                    children: (0, r.jsx)(d.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: R.intl.string(R.t.riu2R5),
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                }),
                        ],
                    })),
                    (null != F || null != C) &&
                        (() => {
                            var e;
                            if (!X && !H) return;
                            let t = (null != (e = null == C ? void 0 : C.stickers) ? e : [])
                                    .slice(0, 13)
                                    .filter((e) => e.id !== n.id)
                                    .slice(0, 12),
                                i = null != C ? h.GO.createFromDiscoverableGuild(C) : h.GO.createFromGuildRecord(F);
                            return (0, r.jsxs)("div", {
                                className: L.tl,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: L.YW,
                                        children: H ? R.intl.string(R.t.kx6pEG) : R.intl.string(R.t.pDE7Gb),
                                    }),
                                    (0, r.jsx)(b.G7, {
                                        expressionSourceGuild: i,
                                        hasJoinedExpressionSourceGuild: H,
                                        isDisplayingJoinGuildButtonInPopout: et,
                                    }),
                                    !H &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(d.DUT, {
                                                    onClick: () => {
                                                        y(), z(!V);
                                                    },
                                                    className: L.wK,
                                                    children: (0, r.jsxs)(g.A, {
                                                        children: [
                                                            (0, r.jsx)(d.Text, {
                                                                className: L.__invalid_showMoreEmojisLabel,
                                                                variant: "text-xs/normal",
                                                                color: "none",
                                                                children: R.intl.string(R.t.vtH5hn),
                                                            }),
                                                            (0, r.jsx)(d.abt, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: a()(L.ZB, {
                                                                    [L.cP]: !V,
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                V &&
                                                    (0, r.jsx)(g.A, {
                                                        wrap: g.A.Wrap.WRAP,
                                                        align: g.A.Align.START,
                                                        justify: g.A.Justify.START,
                                                        className: L.LX,
                                                        children: t.map((e) => {
                                                            var t, n;
                                                            return (0, r.jsx)(
                                                                c.m,
                                                                ((t = M(
                                                                    {
                                                                        text: e.name,
                                                                    },
                                                                    A.Uk,
                                                                )),
                                                                (n = n =
                                                                    {
                                                                        children: (0, r.jsx)(
                                                                            "div",
                                                                            {
                                                                                className: a()(L.Th, {
                                                                                    [D.vT]: null != W && W !== e.id,
                                                                                }),
                                                                                onMouseEnter: () => {
                                                                                    K(e.id);
                                                                                },
                                                                                onMouseLeave: () => {
                                                                                    K(null);
                                                                                },
                                                                                children: (0, r.jsx)(T.A, {
                                                                                    size: 32,
                                                                                    enlargeOnInteraction: !0,
                                                                                    enlargeWithName: !1,
                                                                                    enlargeScaleFactor: 2,
                                                                                    isInteracting: W === e.id,
                                                                                    sticker: e,
                                                                                }),
                                                                            },
                                                                            e.id,
                                                                        ),
                                                                    }),
                                                                Object.getOwnPropertyDescriptors
                                                                    ? Object.defineProperties(
                                                                          t,
                                                                          Object.getOwnPropertyDescriptors(n),
                                                                      )
                                                                    : (function (e, t) {
                                                                          var n = Object.keys(e);
                                                                          if (Object.getOwnPropertySymbols) {
                                                                              var r = Object.getOwnPropertySymbols(e);
                                                                              n.push.apply(n, r);
                                                                          }
                                                                          return n;
                                                                      })(Object(n)).forEach(function (e) {
                                                                          Object.defineProperty(
                                                                              t,
                                                                              e,
                                                                              Object.getOwnPropertyDescriptor(n, e),
                                                                          );
                                                                      }),
                                                                t),
                                                                e.id,
                                                            );
                                                        }),
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

function F(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, r.jsx)(A.Uq, {
        className: D.Bm,
        children: (0, r.jsx)(U, {
            sticker: i,
            description: R.intl.format(R.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), k(t);
                },
            }),
        }),
    });
}
let H = (e) => {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [a, s] = (0, C.Zq)(t, !0);
    return null != a && (0, S.FD)(a)
        ? (0, r.jsx)(G, {
              sticker: a,
              closePopout: i,
              channel: n,
              refreshPositionKey: l,
          })
        : null != a && (0, S.Xw)(a)
          ? (0, r.jsx)(B, {
                sticker: a,
                channel: n,
                closePopout: i,
                refreshPositionKey: l,
            })
          : s
            ? s && null == a
                ? (0, r.jsx)(F, {
                      channel: n,
                      closePopout: i,
                      sticker: t,
                  })
                : (i(), null)
            : (0, r.jsx)(A.Y0, {});
};
