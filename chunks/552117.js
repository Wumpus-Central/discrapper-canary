n.d(t, {
    A: () => J,
}),
    n(228524),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(3026),
    c = n(990078),
    u = n(421380),
    d = n(397927),
    f = n(686956),
    p = n(964486),
    _ = n(58149),
    h = n(235986),
    m = n(624793),
    g = n(477712),
    E = n(767143),
    b = n(652176),
    y = n(87719),
    O = n(465794),
    A = n(71393),
    v = n(287809),
    S = n(954571),
    I = n(927578),
    T = n(256449),
    C = n(679382),
    N = n(378058),
    R = n(148355),
    w = n(915488),
    P = n(652215),
    D = n(788868),
    x = n(985018),
    L = n(986785),
    j = n(767419);

function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}

function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let V = 80,
    F = 48,
    B = 32,
    H = 2,
    Y = 3,
    W = 12,
    K = (e, t) =>
        t
            ? x.intl.format(x.t.auckXz, {
                  stickerPackName: e.name,
              })
            : x.intl.format(x.t.OzB6e3, {
                  stickerPackName: e.name,
              }),
    z = (e) => {
        let { sticker: t, stickerPack: n } = e;
        return i.useMemo(
            () =>
                null == n
                    ? []
                    : n.stickers
                          .slice(0, Y + 1)
                          .reduce((e, n) => (e.length !== Y && n.id !== t.id ? e.concat(n) : e), []),
            [t, n],
        );
    };

function q(e) {
    S.default.track(P.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? P.liQ.GUILD_CHANNEL : P.liQ.DM_CHANNEL,
        location_section: P.JJy.STICKER_POPOUT,
    }),
        (0, y.Z)();
}

function X(e) {
    let { sticker: t, description: n } = e;
    return (0, r.jsxs)(h.A, {
        children: [
            (0, r.jsx)(R.A, {
                sticker: t,
                size: F,
                isInteracting: !0,
            }),
            (0, r.jsxs)(h.A, {
                direction: h.A.Direction.VERTICAL,
                justify: h.A.Justify.CENTER,
                className: j.bM,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        children: (0, r.jsx)(l.A, {
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
let Z = (e) => {
        let { closePopout: t, sticker: n, channel: a, refreshPositionKey: s } = e,
            [l, c, u] = (0, o.yK)(
                [C.A],
                () => [C.A.getStickerPack(n.pack_id), !C.A.hasLoadedStickerPacks, C.A.isPremiumPack(n.pack_id)],
                [n],
            ),
            f = z({
                sticker: n,
                stickerPack: l,
            });
        (0, T.Sr)(n.pack_id);
        let p = (0, T.pD)(a),
            h = {
                refreshPositionKey: s,
                channel: a,
            },
            m = i.useRef(h);
        if (
            (i.useEffect(() => {
                m.current = h;
            }),
            i.useEffect(() => {
                let { refreshPositionKey: e } = m.current;
                e();
            }, [c]),
            i.useEffect(() => {
                let { channel: e } = m.current;
                S.default.track(
                    P.HAw.OPEN_POPOUT,
                    k(
                        {
                            type: P.JJy.STICKER_POPOUT,
                            guild_id: e.getGuildId(),
                            sticker_pack_id: n.pack_id,
                        },
                        (0, _.dI)(e),
                    ),
                );
            }, [n.pack_id]),
            c || null == l)
        )
            return (0, r.jsx)(b.Y0, {
                className: L.v0,
            });
        let g = u,
            E = () => {
                g &&
                    (0, w.a)({
                        stickerPack: l,
                        stickerPickerCategories: p,
                    }),
                    t();
            };
        return (0, r.jsxs)(b.Uq, {
            className: L.Bm,
            children: [
                (0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    children: n.name,
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: K(l, u),
                }),
                (0, r.jsx)("ul", {
                    className: L.pQ,
                    children: f.map((e) =>
                        (0, r.jsx)(
                            R.A,
                            {
                                isInteracting: !0,
                                size: V,
                                sticker: e,
                            },
                            e.id,
                        ),
                    ),
                }),
                u &&
                    (0, r.jsx)("div", {
                        className: L.j0,
                        children: (0, r.jsx)(
                            d.Button,
                            {
                                variant: "secondary",
                                size: "sm",
                                text: x.intl.string(x.t.GPy3Ar),
                                onClick: E,
                            },
                            "view-sticker-pack",
                        ),
                    }),
            ],
        });
    },
    Q = (e) => {
        let t,
            { sticker: n, channel: a, closePopout: l, refreshPositionKey: y } = e,
            [T, C] = i.useState(null),
            [N, w] = i.useState(!1),
            M = v.default.getCurrentUser(),
            U = I.Ay.canUseCustomStickersEverywhere(M),
            V = (0, o.bG)([A.A], () => A.A.getGuild(n.guild_id)),
            F = null != V,
            [Y, K] = i.useState(!1),
            [z, Z] = i.useState(null),
            Q = i.useMemo(
                () => ({
                    page: null != a.guild_id ? P.liQ.GUILD_CHANNEL : P.liQ.DM_CHANNEL,
                    section: P.JJy.STICKER_POPOUT,
                }),
                [a.guild_id],
            ),
            { current: $ } = i.useRef(
                k(
                    {
                        guild_id: a.getGuildId(),
                    },
                    (0, _.dI)(a),
                ),
            ),
            J = {
                stickerSourceGuild: V,
                refreshPositionKey: y,
            },
            ee = i.useRef(J);
        i.useEffect(() => {
            ee.current = J;
        }),
            i.useEffect(() => {
                let { stickerSourceGuild: e } = ee.current;
                (async () => {
                    (null == e || e.features.has(P.GuildFeatures.DISCOVERABLE)) && C(await (0, g.A)(n.id)), w(!0);
                })();
            }, [n.id, F]);
        let et = n.guild_id === a.getGuildId(),
            en = null != T,
            er = !1,
            ei = "Custom Sticker Popout";
        U
            ? (t = F
                  ? et
                      ? x.intl.string(x.t.fZ0DiG)
                      : x.intl.string(x.t["1f6D9m"])
                  : en
                    ? x.intl.string(x.t.yHmoR9)
                    : x.intl.string(x.t.vZaScH))
            : F
              ? ((t = et ? x.intl.string(x.t.jNphpt) : x.intl.string(x.t.lyD5ZW)),
                (er = !0),
                (ei = "Custom Sticker Popout (Upsell)"))
              : en
                ? ((t = x.intl.string(x.t.IuXYch)), (er = !0), (ei = "Custom Sticker Popout (Upsell)"))
                : ((t = x.intl.format(x.t.hGWuxU, {
                      openPremiumSettings: () => {
                          q(a), l();
                      },
                  })),
                  (ei = "Custom Sticker Popout (Soft Upsell)"));
        let ea = !er && !F && en && U;
        if (
            (i.useEffect(() => {
                let { refreshPositionKey: e } = ee.current;
                e();
            }, [N, T]),
            (0, p.Ay)(() => {
                S.default.track(
                    P.HAw.OPEN_POPOUT,
                    k(
                        {
                            type: ei,
                        },
                        $,
                    ),
                );
            }),
            !N)
        )
            return (0, r.jsx)(b.Y0, {
                className: L.v0,
            });
        {
            let e = () => {
                    let e = async () => {
                        if (null == T || F) return;
                        l();
                        let e = T.id;
                        try {
                            await f.A.joinGuild(e), f.A.transitionToGuildSync(e);
                        } catch (e) {}
                    };
                    return (0, r.jsxs)("div", {
                        className: j.gH,
                        children: [
                            (0, r.jsx)(X, {
                                description: t,
                                sticker: n,
                            }),
                            er &&
                                (0, r.jsx)(O.A, {
                                    className: j.lI,
                                    subscriptionTier: D.pe.TIER_2,
                                    size: u.$n.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: {
                                        textOverride: x.intl.string(x.t["gl/XHJ"]),
                                    },
                                    onSubscribeModalClose: (t) => (t ? e() : l()),
                                    postSuccessGuild: F || null == T ? void 0 : T,
                                    premiumModalAnalyticsLocation: Q,
                                }),
                            ea &&
                                (0, r.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: j.lI,
                                    children: (0, r.jsx)(d.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: x.intl.string(x.t.riu2R5),
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                }),
                        ],
                    });
                },
                i = () => {
                    var e;
                    if (!en && !F) return;
                    let t = (null != (e = null == T ? void 0 : T.stickers) ? e : [])
                            .slice(0, W + 1)
                            .filter((e) => e.id !== n.id)
                            .slice(0, W),
                        i = () => {
                            y(), K(!Y);
                        },
                        a = null != T ? m.GO.createFromDiscoverableGuild(T) : m.GO.createFromGuildRecord(V);
                    return (0, r.jsxs)("div", {
                        className: j.tl,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                className: j.YW,
                                children: F ? x.intl.string(x.t.kx6pEG) : x.intl.string(x.t.pDE7Gb),
                            }),
                            (0, r.jsx)(E.G7, {
                                expressionSourceGuild: a,
                                hasJoinedExpressionSourceGuild: F,
                                isDisplayingJoinGuildButtonInPopout: ea,
                            }),
                            !F &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(d.DUT, {
                                            onClick: i,
                                            className: j.wK,
                                            children: (0, r.jsxs)(h.A, {
                                                children: [
                                                    (0, r.jsx)(d.Text, {
                                                        className: j.__invalid_showMoreEmojisLabel,
                                                        variant: "text-xs/normal",
                                                        color: "none",
                                                        children: x.intl.string(x.t.vtH5hn),
                                                    }),
                                                    (0, r.jsx)(d.abt, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: s()(j.ZB, {
                                                            [j.cP]: !Y,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        Y &&
                                            (0, r.jsx)(h.A, {
                                                wrap: h.A.Wrap.WRAP,
                                                align: h.A.Align.START,
                                                justify: h.A.Justify.START,
                                                className: j.LX,
                                                children: t.map((e) =>
                                                    (0, r.jsx)(
                                                        c.m,
                                                        G(
                                                            k(
                                                                {
                                                                    text: e.name,
                                                                },
                                                                b.Uk,
                                                            ),
                                                            {
                                                                children: (0, r.jsx)(
                                                                    "div",
                                                                    {
                                                                        className: s()(j.Th, {
                                                                            [L.vT]: null != z && z !== e.id,
                                                                        }),
                                                                        onMouseEnter: () => {
                                                                            Z(e.id);
                                                                        },
                                                                        onMouseLeave: () => {
                                                                            Z(null);
                                                                        },
                                                                        children: (0, r.jsx)(R.A, {
                                                                            size: B,
                                                                            enlargeOnInteraction: !0,
                                                                            enlargeWithName: !1,
                                                                            enlargeScaleFactor: H,
                                                                            isInteracting: z === e.id,
                                                                            sticker: e,
                                                                        }),
                                                                    },
                                                                    e.id,
                                                                ),
                                                            },
                                                        ),
                                                        e.id,
                                                    ),
                                                ),
                                            }),
                                    ],
                                }),
                        ],
                    });
                };
            return (0, r.jsxs)(b.Uq, {
                className: j.Bm,
                children: [e(), (null != V || null != T) && i()],
            });
        }
    };

function $(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, r.jsx)(b.Uq, {
        className: L.Bm,
        children: (0, r.jsx)(X, {
            sticker: i,
            description: x.intl.format(x.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), q(t);
                },
            }),
        }),
    });
}
let J = (e) => {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: a } = e,
        [s, o] = (0, T.Zq)(t, !0);
    return null != s && (0, N.FD)(s)
        ? (0, r.jsx)(Z, {
              sticker: s,
              closePopout: i,
              channel: n,
              refreshPositionKey: a,
          })
        : null != s && (0, N.Xw)(s)
          ? (0, r.jsx)(Q, {
                sticker: s,
                channel: n,
                closePopout: i,
                refreshPositionKey: a,
            })
          : o
            ? o && null == s
                ? (0, r.jsx)($, {
                      channel: n,
                      closePopout: i,
                      sticker: t,
                  })
                : (i(), null)
            : (0, r.jsx)(b.Y0, {});
};
