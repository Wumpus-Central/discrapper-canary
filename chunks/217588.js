n.d(t, { Z: () => ee }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(749210),
    d = n(493773),
    f = n(367907),
    _ = n(600164),
    p = n(111028),
    h = n(231053),
    m = n(697568),
    g = n(183023),
    E = n(524444),
    b = n(98278),
    y = n(767714),
    O = n(430824),
    v = n(594174),
    I = n(626135),
    T = n(74538),
    S = n(453070),
    A = n(926491),
    C = n(378233),
    N = n(419922),
    R = n(688179),
    P = n(981631),
    w = n(474936),
    D = n(388032),
    L = n(24506),
    x = n(702417);
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = B(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let Z = 80,
    F = 48,
    V = 32,
    H = 2,
    Y = 3,
    W = 12,
    K = (e, t) =>
        t
            ? D.intl.format(D.t.auckX1, { stickerPackName: e.name })
            : D.intl.format(D.t.OzB6e3, { stickerPackName: e.name }),
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
    I.default.track(P.rMx.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? P.ZY5.GUILD_CHANNEL : P.ZY5.DM_CHANNEL,
        location_section: P.jXE.STICKER_POPOUT,
    }),
        (0, b.z)();
}
function X(e) {
    let { sticker: t, description: n } = e;
    return (0, r.jsxs)(_.Z, {
        children: [
            (0, r.jsx)(N.Z, {
                sticker: t,
                size: F,
                isInteracting: !0,
            }),
            (0, r.jsxs)(_.Z, {
                direction: _.Z.Direction.VERTICAL,
                justify: _.Z.Justify.CENTER,
                className: x.truncatingText,
                children: [
                    (0, r.jsx)(c.Text, {
                        className: x.__invalid_emojiName,
                        variant: "text-md/semibold",
                        children: (0, r.jsx)(p.Z, { children: t.name }),
                    }),
                    null != n &&
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            children: n,
                        }),
                ],
            }),
        ],
    });
}
let Q = (e) => {
        let { closePopout: t, sticker: n, channel: a, refreshPositionKey: o } = e,
            [l, u, d] = (0, s.Wu)(
                [A.Z],
                () => [A.Z.getStickerPack(n.pack_id), !A.Z.hasLoadedStickerPacks, A.Z.isPremiumPack(n.pack_id)],
                [n],
            ),
            _ = z({
                sticker: n,
                stickerPack: l,
            });
        (0, S.Pq)(n.pack_id);
        let p = (0, S.Sd)(a),
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
            }, [u]),
            i.useEffect(() => {
                let { channel: e } = m.current;
                I.default.track(
                    P.rMx.OPEN_POPOUT,
                    M(
                        {
                            type: P.jXE.STICKER_POPOUT,
                            guild_id: e.getGuildId(),
                            sticker_pack_id: n.pack_id,
                        },
                        (0, f.v_)(e),
                    ),
                );
            }, [n.pack_id]),
            u || null == l)
        )
            return (0, r.jsx)(E.SE, { className: L.popoutLoader });
        let g = d,
            b = () => {
                g &&
                    (0, R.m)({
                        stickerPack: l,
                        stickerPickerCategories: p,
                    }),
                    t();
            };
        return (0, r.jsxs)(E.W_, {
            className: L.popoutContent,
            children: [
                (0, r.jsx)(c.X6q, {
                    variant: "heading-md/semibold",
                    children: n.name,
                }),
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: K(l, d),
                }),
                (0, r.jsx)("ul", {
                    className: L.stickersList,
                    children: _.map((e) =>
                        (0, r.jsx)(
                            N.Z,
                            {
                                isInteracting: !0,
                                size: Z,
                                sticker: e,
                            },
                            e.id,
                        ),
                    ),
                }),
                d &&
                    (0, r.jsx)("div", {
                        className: L.packActions,
                        children: (0, r.jsx)(
                            c.zxk,
                            {
                                variant: "secondary",
                                size: "sm",
                                text: D.intl.string(D.t.GPy3Ag),
                                onClick: b,
                            },
                            "view-sticker-pack",
                        ),
                    }),
            ],
        });
    },
    J = (e) => {
        let t,
            { sticker: n, channel: a, closePopout: p, refreshPositionKey: b } = e,
            [S, A] = i.useState(null),
            [C, R] = i.useState(!1),
            j = v.default.getCurrentUser(),
            k = T.ZP.canUseCustomStickersEverywhere(j),
            B = (0, s.e7)([O.Z], () => O.Z.getGuild(n.guild_id)),
            Z = null != B,
            [F, Y] = i.useState(!1),
            [K, z] = i.useState(null),
            Q = i.useMemo(
                () => ({
                    page: null != a.guild_id ? P.ZY5.GUILD_CHANNEL : P.ZY5.DM_CHANNEL,
                    section: P.jXE.STICKER_POPOUT,
                }),
                [a.guild_id],
            ),
            { current: J } = i.useRef(M({ guild_id: a.getGuildId() }, (0, f.v_)(a))),
            $ = {
                stickerSourceGuild: B,
                refreshPositionKey: b,
            },
            ee = i.useRef($);
        i.useEffect(() => {
            ee.current = $;
        }),
            i.useEffect(() => {
                let { stickerSourceGuild: e } = ee.current;
                (async () => {
                    (null == e || e.features.has(P.oNc.DISCOVERABLE)) && A(await (0, m.Z)(n.id)), R(!0);
                })();
            }, [n.id, Z]);
        let et = n.guild_id === a.getGuildId(),
            en = null != S,
            er = !1,
            ei = "Custom Sticker Popout";
        k
            ? (t = Z
                  ? et
                      ? D.intl.string(D.t.fZ0DiI)
                      : D.intl.string(D.t["1f6D9v"])
                  : en
                    ? D.intl.string(D.t.yHmoR0)
                    : D.intl.string(D.t.vZaScH))
            : Z
              ? ((t = et ? D.intl.string(D.t.jNphpq) : D.intl.string(D.t.lyD5ZW)),
                (er = !0),
                (ei = "Custom Sticker Popout (Upsell)"))
              : en
                ? ((t = D.intl.string(D.t.IuXYcn)), (er = !0), (ei = "Custom Sticker Popout (Upsell)"))
                : ((t = D.intl.format(D.t.hGWuxc, {
                      openPremiumSettings: () => {
                          q(a), p();
                      },
                  })),
                  (ei = "Custom Sticker Popout (Soft Upsell)"));
        let ea = !er && !Z && en && k;
        if (
            (i.useEffect(() => {
                let { refreshPositionKey: e } = ee.current;
                e();
            }, [C, S]),
            (0, d.ZP)(() => {
                I.default.track(P.rMx.OPEN_POPOUT, M({ type: ei }, J));
            }),
            !C)
        )
            return (0, r.jsx)(E.SE, { className: L.popoutLoader });
        {
            let e = () => {
                    let e = async () => {
                        if (null == S || Z) return;
                        p();
                        let e = S.id;
                        try {
                            await u.Z.joinGuild(e), u.Z.transitionToGuildSync(e);
                        } catch (e) {}
                    };
                    return (0, r.jsxs)("div", {
                        className: x.emojiSection,
                        children: [
                            (0, r.jsx)(X, {
                                description: t,
                                sticker: n,
                            }),
                            er &&
                                (0, r.jsx)(y.Z, {
                                    className: x.ctaButton,
                                    subscriptionTier: w.Si.TIER_2,
                                    size: l.zx.Sizes.SMALL,
                                    fullWidth: !0,
                                    textOptions: { textOverride: D.intl.string(D.t["gl/XHB"]) },
                                    onSubscribeModalClose: (t) => (t ? e() : p()),
                                    postSuccessGuild: Z || null == S ? void 0 : S,
                                    premiumModalAnalyticsLocation: Q,
                                }),
                            ea &&
                                (0, r.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: x.ctaButton,
                                    children: (0, r.jsx)(c.zxk, {
                                        variant: "primary",
                                        size: "sm",
                                        text: D.intl.string(D.t.riu2R0),
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
                    let t = (null != (e = null == S ? void 0 : S.stickers) ? e : [])
                            .slice(0, W + 1)
                            .filter((e) => e.id !== n.id)
                            .slice(0, W),
                        i = () => {
                            b(), Y(!F);
                        },
                        a = null != S ? h.JO.createFromDiscoverableGuild(S) : h.JO.createFromGuildRecord(B);
                    return (0, r.jsxs)("div", {
                        className: x.guildSection,
                        children: [
                            (0, r.jsx)(c.vwX, {
                                className: x.guildTitle,
                                children: Z ? D.intl.string(D.t.kx6pEB) : D.intl.string(D.t.pDE7GR),
                            }),
                            (0, r.jsx)(g.Oe, {
                                expressionSourceGuild: a,
                                hasJoinedExpressionSourceGuild: Z,
                                isDisplayingJoinGuildButtonInPopout: ea,
                            }),
                            !Z &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(c.P3F, {
                                            onClick: i,
                                            className: x.showMoreEmojis,
                                            children: (0, r.jsxs)(_.Z, {
                                                children: [
                                                    (0, r.jsx)(c.Text, {
                                                        className: x.__invalid_showMoreEmojisLabel,
                                                        variant: "text-xs/normal",
                                                        color: "none",
                                                        children: D.intl.string(D.t.vtH5ho),
                                                    }),
                                                    (0, r.jsx)(c.CJ0, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: o()(x.showMoreEmojisArrow, {
                                                            [x.showMoreEmojisArrowCollapsed]: !F,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        F &&
                                            (0, r.jsx)(_.Z, {
                                                wrap: _.Z.Wrap.WRAP,
                                                align: _.Z.Align.START,
                                                justify: _.Z.Justify.START,
                                                className: x.otherEmojisContainer,
                                                children: t.map((e) =>
                                                    (0, r.jsx)(
                                                        c.ua7,
                                                        U(M({ text: e.name }, E.b_), {
                                                            children: (t) => {
                                                                var { onMouseEnter: n, onMouseLeave: i } = t,
                                                                    a = G(t, ["onMouseEnter", "onMouseLeave"]);
                                                                return (0, r.jsx)(
                                                                    "div",
                                                                    U(
                                                                        M(
                                                                            {
                                                                                className: o()(x.otherEmoji, {
                                                                                    [L.nonInteractingSticker]:
                                                                                        null != K && K !== e.id,
                                                                                }),
                                                                                onMouseEnter: () => {
                                                                                    null == n || n(), z(e.id);
                                                                                },
                                                                                onMouseLeave: () => {
                                                                                    null == i || i(), z(null);
                                                                                },
                                                                            },
                                                                            a,
                                                                        ),
                                                                        {
                                                                            children: (0, r.jsx)(N.Z, {
                                                                                size: V,
                                                                                enlargeOnInteraction: !0,
                                                                                enlargeWithName: !1,
                                                                                enlargeScaleFactor: H,
                                                                                isInteracting: K === e.id,
                                                                                sticker: e,
                                                                            }),
                                                                        },
                                                                    ),
                                                                    e.id,
                                                                );
                                                            },
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
            return (0, r.jsxs)(E.W_, {
                className: x.popoutContent,
                children: [e(), (null != B || null != S) && i()],
            });
        }
    };
function $(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, r.jsx)(E.W_, {
        className: L.popoutContent,
        children: (0, r.jsx)(X, {
            sticker: i,
            description: D.intl.format(D.t.hGWuxc, {
                openPremiumSettings: () => {
                    n(), q(t);
                },
            }),
        }),
    });
}
let ee = (e) => {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: a } = e,
        [o, s] = (0, S.XW)(t, !0);
    return null != o && (0, C.jl)(o)
        ? (0, r.jsx)(Q, {
              sticker: o,
              closePopout: i,
              channel: n,
              refreshPositionKey: a,
          })
        : null != o && (0, C.J8)(o)
          ? (0, r.jsx)(J, {
                sticker: o,
                channel: n,
                closePopout: i,
                refreshPositionKey: a,
            })
          : s
            ? s && null == o
                ? (0, r.jsx)($, {
                      channel: n,
                      closePopout: i,
                      sticker: t,
                  })
                : (i(), null)
            : (0, r.jsx)(E.SE, {});
};
