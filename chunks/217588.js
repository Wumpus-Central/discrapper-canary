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
    _ = n(493773),
    p = n(367907),
    h = n(600164),
    m = n(231053),
    g = n(697568),
    E = n(183023),
    b = n(524444),
    y = n(98278),
    O = n(767714),
    v = n(430824),
    I = n(594174),
    T = n(626135),
    S = n(74538),
    A = n(453070),
    C = n(926491),
    N = n(378233),
    R = n(419922),
    P = n(688179),
    D = n(981631),
    w = n(474936),
    L = n(388032),
    x = n(564651),
    M = n(975900);
function j(e, t, n) {
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
                j(e, t, n[t]);
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
let B = 80,
    Z = 48,
    F = 32,
    V = 2,
    H = 3,
    Y = 12,
    W = (e, t) =>
        t
            ? L.intl.format(L.t.auckXz, { stickerPackName: e.name })
            : L.intl.format(L.t.OzB6e3, { stickerPackName: e.name }),
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
    T.default.track(D.rMx.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? D.ZY5.GUILD_CHANNEL : D.ZY5.DM_CHANNEL,
        location_section: D.jXE.STICKER_POPOUT,
    }),
        (0, y.z)();
}
function q(e) {
    let { sticker: t, description: n } = e;
    return (0, r.jsxs)(h.Z, {
        children: [
            (0, r.jsx)(R.Z, {
                sticker: t,
                size: Z,
                isInteracting: !0,
            }),
            (0, r.jsxs)(h.Z, {
                direction: h.Z.Direction.VERTICAL,
                justify: h.Z.Justify.CENTER,
                className: M.truncatingText,
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
        let _ = (0, A.Sd)(a),
            h = {
                refreshPositionKey: o,
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
                T.default.track(
                    D.rMx.OPEN_POPOUT,
                    k(
                        {
                            type: D.jXE.STICKER_POPOUT,
                            guild_id: e.getGuildId(),
                            sticker_pack_id: n.pack_id,
                        },
                        (0, p.v_)(e),
                    ),
                );
            }, [n.pack_id]),
            c || null == l)
        )
            return (0, r.jsx)(b.SE, { className: x.popoutLoader });
        let g = u,
            E = () => {
                g &&
                    (0, P.m)({
                        stickerPack: l,
                        stickerPickerCategories: _,
                    }),
                    t();
            };
        return (0, r.jsxs)(b.W_, {
            className: x.popoutContent,
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
                    className: x.stickersList,
                    children: f.map((e) =>
                        (0, r.jsx)(
                            R.Z,
                            {
                                isInteracting: !0,
                                size: B,
                                sticker: e,
                            },
                            e.id,
                        ),
                    ),
                }),
                u &&
                    (0, r.jsx)("div", {
                        className: x.packActions,
                        children: (0, r.jsx)(
                            d.Button,
                            {
                                variant: "secondary",
                                size: "sm",
                                text: L.intl.string(L.t.GPy3Ar),
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
            [N, P] = i.useState(!1),
            j = I.default.getCurrentUser(),
            U = S.ZP.canUseCustomStickersEverywhere(j),
            B = (0, s.e7)([v.Z], () => v.Z.getGuild(n.guild_id)),
            Z = null != B,
            [H, W] = i.useState(!1),
            [K, X] = i.useState(null),
            Q = i.useMemo(
                () => ({
                    page: null != a.guild_id ? D.ZY5.GUILD_CHANNEL : D.ZY5.DM_CHANNEL,
                    section: D.jXE.STICKER_POPOUT,
                }),
                [a.guild_id],
            ),
            { current: J } = i.useRef(k({ guild_id: a.getGuildId() }, (0, p.v_)(a))),
            $ = {
                stickerSourceGuild: B,
                refreshPositionKey: y,
            },
            ee = i.useRef($);
        i.useEffect(() => {
            ee.current = $;
        }),
            i.useEffect(() => {
                let { stickerSourceGuild: e } = ee.current;
                (async () => {
                    (null == e || e.features.has(D.GuildFeatures.DISCOVERABLE)) && C(await (0, g.Z)(n.id)), P(!0);
                })();
            }, [n.id, Z]);
        let et = n.guild_id === a.getGuildId(),
            en = null != A,
            er = !1,
            ei = "Custom Sticker Popout";
        U
            ? (t = Z
                  ? et
                      ? L.intl.string(L.t.fZ0DiG)
                      : L.intl.string(L.t["1f6D9m"])
                  : en
                    ? L.intl.string(L.t.yHmoR9)
                    : L.intl.string(L.t.vZaScH))
            : Z
              ? ((t = et ? L.intl.string(L.t.jNphpt) : L.intl.string(L.t.lyD5ZW)),
                (er = !0),
                (ei = "Custom Sticker Popout (Upsell)"))
              : en
                ? ((t = L.intl.string(L.t.IuXYch)), (er = !0), (ei = "Custom Sticker Popout (Upsell)"))
                : ((t = L.intl.format(L.t.hGWuxU, {
                      openPremiumSettings: () => {
                          z(a), l();
                      },
                  })),
                  (ei = "Custom Sticker Popout (Soft Upsell)"));
        let ea = !er && !Z && en && U;
        if (
            (i.useEffect(() => {
                let { refreshPositionKey: e } = ee.current;
                e();
            }, [N, A]),
            (0, _.ZP)(() => {
                T.default.track(D.rMx.OPEN_POPOUT, k({ type: ei }, J));
            }),
            !N)
        )
            return (0, r.jsx)(b.SE, { className: x.popoutLoader });
        {
            let e = () => {
                    let e = async () => {
                        if (null == A || Z) return;
                        l();
                        let e = A.id;
                        try {
                            await f.Z.joinGuild(e), f.Z.transitionToGuildSync(e);
                        } catch (e) {}
                    };
                    return (0, r.jsxs)("div", {
                        className: M.emojiSection,
                        children: [
                            (0, r.jsx)(q, {
                                description: t,
                                sticker: n,
                            }),
                            er &&
                                (0, r.jsx)(O.Z, {
                                    className: M.ctaButton,
                                    subscriptionTier: w.Si.TIER_2,
                                    size: u.zx.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: L.intl.string(L.t["gl/XHJ"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : l()),
                                    postSuccessGuild: Z || null == A ? void 0 : A,
                                    premiumModalAnalyticsLocation: Q,
                                }),
                            ea &&
                                (0, r.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: M.ctaButton,
                                    children: (0, r.jsx)(d.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: L.intl.string(L.t.riu2R5),
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                }),
                        ],
                    });
                },
                i = () => {
                    var e;
                    if (!en && !Z) return;
                    let t = (null != (e = null == A ? void 0 : A.stickers) ? e : [])
                            .slice(0, Y + 1)
                            .filter((e) => e.id !== n.id)
                            .slice(0, Y),
                        i = () => {
                            y(), W(!H);
                        },
                        a = null != A ? m.JO.createFromDiscoverableGuild(A) : m.JO.createFromGuildRecord(B);
                    return (0, r.jsxs)("div", {
                        className: M.guildSection,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-secondary",
                                className: M.guildTitle,
                                children: Z ? L.intl.string(L.t.kx6pEG) : L.intl.string(L.t.pDE7Gb),
                            }),
                            (0, r.jsx)(E.Oe, {
                                expressionSourceGuild: a,
                                hasJoinedExpressionSourceGuild: Z,
                                isDisplayingJoinGuildButtonInPopout: ea,
                            }),
                            !Z &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(d.P3F, {
                                            onClick: i,
                                            className: M.showMoreEmojis,
                                            children: (0, r.jsxs)(h.Z, {
                                                children: [
                                                    (0, r.jsx)(d.Text, {
                                                        className: M.__invalid_showMoreEmojisLabel,
                                                        variant: "text-xs/normal",
                                                        color: "none",
                                                        children: L.intl.string(L.t.vtH5hn),
                                                    }),
                                                    (0, r.jsx)(d.CJ0, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: o()(M.showMoreEmojisArrow, {
                                                            [M.showMoreEmojisArrowCollapsed]: !H,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        H &&
                                            (0, r.jsx)(h.Z, {
                                                wrap: h.Z.Wrap.WRAP,
                                                align: h.Z.Align.START,
                                                justify: h.Z.Justify.START,
                                                className: M.otherEmojisContainer,
                                                children: t.map((e) =>
                                                    (0, r.jsx)(
                                                        c.u,
                                                        G(k({ text: e.name }, b.b_), {
                                                            children: (0, r.jsx)(
                                                                "div",
                                                                {
                                                                    className: o()(M.otherEmoji, {
                                                                        [x.nonInteractingSticker]:
                                                                            null != K && K !== e.id,
                                                                    }),
                                                                    onMouseEnter: () => {
                                                                        X(e.id);
                                                                    },
                                                                    onMouseLeave: () => {
                                                                        X(null);
                                                                    },
                                                                    children: (0, r.jsx)(R.Z, {
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
                className: M.popoutContent,
                children: [e(), (null != B || null != A) && i()],
            });
        }
    };
function J(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, r.jsx)(b.W_, {
        className: x.popoutContent,
        children: (0, r.jsx)(q, {
            sticker: i,
            description: L.intl.format(L.t.hGWuxU, {
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
