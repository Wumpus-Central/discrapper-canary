var n = l(477900),
    r = l(582128),
    a = l(503698),
    s = l.n(a),
    i = l(575593),
    o = l(855986),
    c = l(646514),
    d = l(834730),
    u = l(866665),
    m = l(939249),
    x = l(778712),
    h = l(315629),
    p = l(403581),
    f = l(104510),
    j = l(323384),
    v = l(966327),
    b = l(14702),
    g = l(575926),
    E = l(682163),
    N = l(319820),
    y = l(291322),
    T = l(328968),
    C = l(403362),
    I = l(371794),
    _ = l(427262),
    A = l(652215),
    D = l(682901),
    S = l(379912),
    P = l(792996),
    k = l(242695);
function R(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return P.intl.format(S.default["2PiTTi"], {
                username: _.Ay.getUserTag(t.user),
                nickname: _.Ay.getName(t.user),
                avatar: (0, n.jsx)(v.A, { user: t.user, size: x._3.SIZE_16, className: k.RG }),
            });
        case "guildSubscription":
            return P.intl.format(S.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, n.jsx)(E.Ay, { guild: t.guild, size: E.Ay.Sizes.SMOL, className: k.RG }),
            });
        case "boost":
            return P.intl.format(S.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, n.jsx)(E.Ay, { guild: t.guild, size: E.Ay.Sizes.SMOL, className: k.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, C.xb)(t);
    }
}
function G(e) {
    let { color: t, Icon: l } = e;
    return (0, n.jsx)(h.h, {
        color: t,
        className: k.nC,
        children: (0, n.jsx)(l, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function L() {
    return (0, n.jsx)(y.A, { size: 64, iconSize: 32, color: c.A.unsafe_rawColors.NEUTRAL_1 });
}
function w() {
    return (0, n.jsx)("div", {
        className: k.Ty,
        children: (0, n.jsx)(p.t, { size: "lg", color: c.A.colors.ICON_DEFAULT }),
    });
}
function O() {
    return (0, n.jsx)(j.k, { size: "lg", color: "var(--icon-muted)" });
}
let M = {
    [A.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [A.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [A.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function F(e) {
    let { skuId: t, productLine: l, applicationId: a, storeListing: s } = e,
        i = (0, o.bG)([T.A], () => s ?? T.A.getForSKU(t), [s, t]),
        c = M[l].preferredAssetType,
        d = r.useMemo(
            () =>
                null == i
                    ? null
                    : "headerBackground" === c
                      ? (i.headerBackground ?? i.thumbnail)
                      : (i.thumbnail ?? i.headerBackground),
            [c, i],
        );
    return null != d
        ? (0, n.jsx)("img", { src: (0, I.YE)(a, d, 64), alt: "", className: k.gw })
        : l === A.EZt.APPLICATION
          ? (0, n.jsx)(O, {})
          : l === A.EZt.GUILD_ROLE
            ? (0, n.jsx)(g.h, { width: 48, height: 48 })
            : null;
}
l.d(
    t,
    {},
    {
        DH: w,
        JW: L,
        WH: function (e) {
            let { sku: t, premiumType: l, product: r, storeListing: a } = e;
            return l === D.PremiumTypes.TIER_0
                ? (0, n.jsx)(w, {})
                : l === D.PremiumTypes.TIER_2
                  ? (0, n.jsx)(L, {})
                  : r?.type === i.R.BUNDLE
                    ? (0, n.jsx)(b.a, { product: r, staticPreviewClassName: k.C0 })
                    : null == t
                      ? null
                      : t.productLine in M
                        ? (0, n.jsx)(F, {
                              skuId: t.id,
                              productLine: t.productLine,
                              applicationId: t.applicationId,
                              storeListing: a,
                          })
                        : (0, n.jsx)(N.r$, { sku: t, slayerProductPreviewClassName: k.gw });
        },
        a6: function () {
            return (0, n.jsx)(G, { color: "pink", Icon: f._ });
        },
        f7: function (e) {
            let {
                    header: t,
                    headerIconSrc: l,
                    headerIconComponent: a,
                    bottomSubText: i,
                    label: o,
                    description: c,
                    graphic: x,
                    price: h,
                    priceStrikethroughText: p,
                    PriceIcon: f,
                    priceTooltip: j,
                    priceSubText: v,
                    priceSubTextHasStrikethrough: b = !0,
                    omitDefaultIconBackground: g,
                    target: E,
                    onClick: N,
                    className: y,
                } = e,
                T = (0, n.jsx)(R, { target: E }),
                C = r.useMemo(() => {
                    let e = (0, n.jsxs)(d.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        className: k.nw,
                        children: [
                            null != f && (0, n.jsx)(f, { size: "xs" }),
                            null != p &&
                                (0, n.jsx)(d.E, {
                                    tag: "span",
                                    variant: "body-md/medium",
                                    color: "text-subtle",
                                    className: k.EF,
                                    children: p,
                                }),
                            h,
                        ],
                    });
                    return null != j
                        ? (0, n.jsx)(u.m, { text: j, asContainer: !0, position: "top", align: "center", children: e })
                        : e;
                }, [f, h, p, j]),
                I = r.useMemo(
                    () =>
                        null != a
                            ? (0, n.jsx)("span", { className: k.nr, children: a })
                            : null != l
                              ? (0, n.jsx)("img", { alt: "", src: l, className: k.nr })
                              : null,
                    [l, a],
                ),
                _ = (0, n.jsxs)(n.Fragment, {
                    children: [
                        null != x && (0, n.jsx)("div", { className: s()(k.Kk, { [k.H9]: !g }), children: x }),
                        (0, n.jsxs)("div", {
                            className: k.Qs,
                            children: [
                                null != t &&
                                    (0, n.jsxs)(d.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-muted",
                                        lineClamp: 2,
                                        className: k.wx,
                                        children: [I, t],
                                    }),
                                (0, n.jsxs)("div", {
                                    className: k.zH,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: k.Qq,
                                            children: [
                                                (0, n.jsx)(d.E, {
                                                    variant: "body-md/normal",
                                                    color: "text-default",
                                                    lineClamp: 2,
                                                    children: o,
                                                }),
                                                null != c &&
                                                    (0, n.jsx)(d.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-muted",
                                                        lineClamp: 2,
                                                        children: c,
                                                    }),
                                                null != T &&
                                                    (0, n.jsx)(d.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-muted",
                                                        lineClamp: 1,
                                                        children: T,
                                                    }),
                                            ],
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: k.p6,
                                            children: [
                                                C,
                                                null != v &&
                                                    (0, n.jsx)(d.E, {
                                                        variant: b ? "body-xs/medium" : "body-sm/normal",
                                                        color: "text-muted",
                                                        className: s()(k.Jb, { [k.Nc]: b }),
                                                        children: v,
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    null != N
                        ? (0, n.jsx)(m.D, { className: s()(k.kL, k.vk, y), onClick: N, children: _ })
                        : (0, n.jsx)("div", { className: s()(k.kL, y), children: _ }),
                    null != i &&
                        (0, n.jsx)(d.E, {
                            variant: "body-sm/medium",
                            color: "text-muted",
                            className: k.dx,
                            children: i,
                        }),
                ],
            });
        },
        jw: O,
        oo: function () {
            return (0, n.jsx)("div", {
                className: k.CX,
                children: (0, n.jsx)(p.t, { size: "lg", color: "var(--neutral-1)" }),
            });
        },
    },
);
