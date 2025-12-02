n.d(t, { Z: () => $ }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(194983),
    c = n(28664),
    u = n(755721),
    d = n(481060),
    f = n(749210),
    p = n(493773),
    _ = n(367907),
    m = n(600164),
    h = n(231053),
    g = n(697568),
    E = n(183023),
    b = n(524444),
    y = n(98278),
    O = n(767714),
    v = n(430824),
    S = n(594174),
    I = n(626135),
    T = n(74538),
    A = n(453070),
    C = n(926491),
    N = n(378233),
    P = n(419922),
    R = n(688179),
    w = n(981631),
    D = n(474936),
    x = n(388032),
    L = n(564651),
    j = n(975900);
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
let Z = 80,
    B = 48,
    F = 32,
    V = 2,
    H = 3,
    Y = 12,
    W = (e, t) =>
        t
            ? x.intl.format(x.t.auckXz, { stickerPackName: e.name })
            : x.intl.format(x.t.OzB6e3, { stickerPackName: e.name }),
    K = (e) => {
        let { sticker: t, stickerPack: n } = e;
        return i.useMemo(
            () =>
                null == n
                    ? []
                    : n.stickers
                          .slice(0, H + 1)
                          .reduce((e, n) => (e.length !== H && n.id !== t.id ? e.concat(n) : e), []),
            [t, n],
        );
    };
function z(e) {
    I.default.track(w.rMx.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? w.ZY5.GUILD_CHANNEL : w.ZY5.DM_CHANNEL,
        location_section: w.jXE.STICKER_POPOUT,
    }),
        (0, y.z)();
}
function q(e) {
    let { sticker: t, description: n } = e;
    return (0, r.jsxs)(m.Z, {
        children: [
            (0, r.jsx)(P.Z, {
                sticker: t,
                size: B,
                isInteracting: !0,
            }),
            (0, r.jsxs)(m.Z, {
                direction: m.Z.Direction.VERTICAL,
                justify: m.Z.Justify.CENTER,
                className: j.truncatingText,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        children: (0, r.jsx)(l.Z, { children: t.name }),
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
let X = (e) => {
        let { closePopout: t, sticker: n, channel: a, refreshPositionKey: o } = e,
            [l, c, u] = (0, s.Wu)(
                [C.Z],
                () => [C.Z.getStickerPack(n.pack_id), !C.Z.hasLoadedStickerPacks, C.Z.isPremiumPack(n.pack_id)],
                [n],
            ),
            f = K({
                sticker: n,
                stickerPack: l,
            });
        (0, A.Pq)(n.pack_id);
        let p = (0, A.Sd)(a),
            m = {
                refreshPositionKey: o,
                channel: a,
            },
            h = i.useRef(m);
        if (
            (i.useEffect(() => {
                h.current = m;
            }),
            i.useEffect(() => {
                let { refreshPositionKey: e } = h.current;
                e();
            }, [c]),
            i.useEffect(() => {
                let { channel: e } = h.current;
                I.default.track(
                    w.rMx.OPEN_POPOUT,
                    k(
                        {
                            type: w.jXE.STICKER_POPOUT,
                            guild_id: e.getGuildId(),
                            sticker_pack_id: n.pack_id,
                        },
                        (0, _.v_)(e),
                    ),
                );
            }, [n.pack_id]),
            c || null == l)
        )
            return (0, r.jsx)(b.SE, { className: L.popoutLoader });
        let g = u,
            E = () => {
                g &&
                    (0, R.m)({
                        stickerPack: l,
                        stickerPickerCategories: p,
                    }),
                    t();
            };
        return (0, r.jsxs)(b.W_, {
            className: L.popoutContent,
            children: [
                (0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    children: n.name,
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: W(l, u),
                }),
                (0, r.jsx)("ul", {
                    className: L.stickersList,
                    children: f.map((e) =>
                        (0, r.jsx)(
                            P.Z,
                            {
                                isInteracting: !0,
                                size: Z,
                                sticker: e,
                            },
                            e.id,
                        ),
                    ),
                }),
                u &&
                    (0, r.jsx)("div", {
                        className: L.packActions,
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
            [A, C] = i.useState(null),
            [N, R] = i.useState(!1),
            M = S.default.getCurrentUser(),
            U = T.ZP.canUseCustomStickersEverywhere(M),
            Z = (0, s.e7)([v.Z], () => v.Z.getGuild(n.guild_id)),
            B = null != Z,
            [H, W] = i.useState(!1),
            [K, X] = i.useState(null),
            Q = i.useMemo(
                () => ({
                    page: null != a.guild_id ? w.ZY5.GUILD_CHANNEL : w.ZY5.DM_CHANNEL,
                    section: w.jXE.STICKER_POPOUT,
                }),
                [a.guild_id],
            ),
            { current: J } = i.useRef(k({ guild_id: a.getGuildId() }, (0, _.v_)(a))),
            $ = {
                stickerSourceGuild: Z,
                refreshPositionKey: y,
            },
            ee = i.useRef($);
        i.useEffect(() => {
            ee.current = $;
        }),
            i.useEffect(() => {
                let { stickerSourceGuild: e } = ee.current;
                (async () => {
                    (null == e || e.features.has(w.GuildFeatures.DISCOVERABLE)) && C(await (0, g.Z)(n.id)), R(!0);
                })();
            }, [n.id, B]);
        let et = n.guild_id === a.getGuildId(),
            en = null != A,
            er = !1,
            ei = "Custom Sticker Popout";
        U
            ? (t = B
                  ? et
                      ? x.intl.string(x.t.fZ0DiG)
                      : x.intl.string(x.t["1f6D9m"])
                  : en
                    ? x.intl.string(x.t.yHmoR9)
                    : x.intl.string(x.t.vZaScH))
            : B
              ? ((t = et ? x.intl.string(x.t.jNphpt) : x.intl.string(x.t.lyD5ZW)),
                (er = !0),
                (ei = "Custom Sticker Popout (Upsell)"))
              : en
                ? ((t = x.intl.string(x.t.IuXYch)), (er = !0), (ei = "Custom Sticker Popout (Upsell)"))
                : ((t = x.intl.format(x.t.hGWuxU, {
                      openPremiumSettings: () => {
                          z(a), l();
                      },
                  })),
                  (ei = "Custom Sticker Popout (Soft Upsell)"));
        let ea = !er && !B && en && U;
        if (
            (i.useEffect(() => {
                let { refreshPositionKey: e } = ee.current;
                e();
            }, [N, A]),
            (0, p.ZP)(() => {
                I.default.track(w.rMx.OPEN_POPOUT, k({ type: ei }, J));
            }),
            !N)
        )
            return (0, r.jsx)(b.SE, { className: L.popoutLoader });
        {
            let e = () => {
                    let e = async () => {
                        if (null == A || B) return;
                        l();
                        let e = A.id;
                        try {
                            await f.Z.joinGuild(e), f.Z.transitionToGuildSync(e);
                        } catch (e) {}
                    };
                    return (0, r.jsxs)("div", {
                        className: j.emojiSection,
                        children: [
                            (0, r.jsx)(q, {
                                description: t,
                                sticker: n,
                            }),
                            er &&
                                (0, r.jsx)(O.Z, {
                                    className: j.ctaButton,
                                    subscriptionTier: D.Si.TIER_2,
                                    size: u.zx.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: x.intl.string(x.t["gl/XHJ"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : l()),
                                    postSuccessGuild: B || null == A ? void 0 : A,
                                    premiumModalAnalyticsLocation: Q,
                                }),
                            ea &&
                                (0, r.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: j.ctaButton,
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
                    if (!en && !B) return;
                    let t = (null != (e = null == A ? void 0 : A.stickers) ? e : [])
                            .slice(0, Y + 1)
                            .filter((e) => e.id !== n.id)
                            .slice(0, Y),
                        i = () => {
                            y(), W(!H);
                        },
                        a = null != A ? h.JO.createFromDiscoverableGuild(A) : h.JO.createFromGuildRecord(Z);
                    return (0, r.jsxs)("div", {
                        className: j.guildSection,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-secondary",
                                className: j.guildTitle,
                                children: B ? x.intl.string(x.t.kx6pEG) : x.intl.string(x.t.pDE7Gb),
                            }),
                            (0, r.jsx)(E.Oe, {
                                expressionSourceGuild: a,
                                hasJoinedExpressionSourceGuild: B,
                                isDisplayingJoinGuildButtonInPopout: ea,
                            }),
                            !B &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(d.P3F, {
                                            onClick: i,
                                            className: j.showMoreEmojis,
                                            children: (0, r.jsxs)(m.Z, {
                                                children: [
                                                    (0, r.jsx)(d.Text, {
                                                        className: j.__invalid_showMoreEmojisLabel,
                                                        variant: "text-xs/normal",
                                                        color: "none",
                                                        children: x.intl.string(x.t.vtH5hn),
                                                    }),
                                                    (0, r.jsx)(d.CJ0, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: o()(j.showMoreEmojisArrow, {
                                                            [j.showMoreEmojisArrowCollapsed]: !H,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        H &&
                                            (0, r.jsx)(m.Z, {
                                                wrap: m.Z.Wrap.WRAP,
                                                align: m.Z.Align.START,
                                                justify: m.Z.Justify.START,
                                                className: j.otherEmojisContainer,
                                                children: t.map((e) =>
                                                    (0, r.jsx)(
                                                        c.u,
                                                        G(k({ text: e.name }, b.b_), {
                                                            children: (0, r.jsx)(
                                                                "div",
                                                                {
                                                                    className: o()(j.otherEmoji, {
                                                                        [L.nonInteractingSticker]:
                                                                            null != K && K !== e.id,
                                                                    }),
                                                                    onMouseEnter: () => {
                                                                        X(e.id);
                                                                    },
                                                                    onMouseLeave: () => {
                                                                        X(null);
                                                                    },
                                                                    children: (0, r.jsx)(P.Z, {
                                                                        size: F,
                                                                        enlargeOnInteraction: !0,
                                                                        enlargeWithName: !1,
                                                                        enlargeScaleFactor: V,
                                                                        isInteracting: K === e.id,
                                                                        sticker: e,
                                                                    }),
                                                                },
                                                                e.id,
                                                            ),
                                                        }),
                                                        e.id,
                                                    ),
                                                ),
                                            }),
                                    ],
                                }),
                        ],
                    });
                };
            return (0, r.jsxs)(b.W_, {
                className: j.popoutContent,
                children: [e(), (null != Z || null != A) && i()],
            });
        }
    };
function J(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, r.jsx)(b.W_, {
        className: L.popoutContent,
        children: (0, r.jsx)(q, {
            sticker: i,
            description: x.intl.format(x.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), z(t);
                },
            }),
        }),
    });
}
let $ = (e) => {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: a } = e,
        [o, s] = (0, A.XW)(t, !0);
    return null != o && (0, N.jl)(o)
        ? (0, r.jsx)(X, {
              sticker: o,
              closePopout: i,
              channel: n,
              refreshPositionKey: a,
          })
        : null != o && (0, N.J8)(o)
          ? (0, r.jsx)(Q, {
                sticker: o,
                channel: n,
                closePopout: i,
                refreshPositionKey: a,
            })
          : s
            ? s && null == o
                ? (0, r.jsx)(J, {
                      channel: n,
                      closePopout: i,
                      sticker: t,
                  })
                : (i(), null)
            : (0, r.jsx)(b.SE, {});
};
