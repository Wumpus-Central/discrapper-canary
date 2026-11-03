l.d(t, { DH: () => M, JW: () => k, WH: () => W, a6: () => U, f7: () => O, jw: () => w, oo: () => F });
var a = l(477900),
    n = l(582128),
    r = l(503698),
    s = l.n(r),
    i = l(575593),
    o = l(17928),
    d = l(661531),
    c = l(834730),
    u = l(866665),
    m = l(939249),
    x = l(778712),
    f = l(315629),
    p = l(403581),
    h = l(104510),
    v = l(323384),
    j = l(966327),
    b = l(14702),
    E = l(575926),
    N = l(548118),
    g = l(319820),
    T = l(576243),
    y = l(328968),
    A = l(403362),
    I = l(371794),
    C = l(427262),
    _ = l(652215),
    D = l(202541),
    S = l(758476),
    P = l(105292),
    R = l(242695);
function O(e) {
    let {
            header: t,
            headerIconSrc: l,
            headerIconComponent: r,
            bottomSubText: i,
            label: o,
            description: d,
            graphic: x,
            price: f,
            priceStrikethroughText: p,
            PriceIcon: h,
            priceTooltip: v,
            priceSubText: j,
            priceSubTextHasStrikethrough: b = !0,
            omitDefaultIconBackground: E,
            target: N,
            onClick: g,
            className: T,
        } = e,
        y = (0, a.jsx)(L, { target: N }),
        A = n.useMemo(() => {
            let e = (0, a.jsxs)(c.E, {
                variant: "body-md/medium",
                color: "text-default",
                className: R.nw,
                children: [
                    null != h && (0, a.jsx)(h, { size: "xs" }),
                    null != p &&
                        (0, a.jsx)(c.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "text-subtle",
                            className: R.EF,
                            children: p,
                        }),
                    f,
                ],
            });
            return null != v
                ? (0, a.jsx)(u.m, { text: v, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [h, f, p, v]),
        I = n.useMemo(
            () =>
                null != r
                    ? (0, a.jsx)("span", { className: R.nr, children: r })
                    : null != l
                      ? (0, a.jsx)("img", { alt: "", src: l, className: R.nr })
                      : null,
            [l, r],
        ),
        C = (0, a.jsxs)(a.Fragment, {
            children: [
                null != x && (0, a.jsx)("div", { className: s()(R.Kk, { [R.H9]: !E }), children: x }),
                (0, a.jsxs)("div", {
                    className: R.Qs,
                    children: [
                        null != t &&
                            (0, a.jsxs)(c.E, {
                                variant: "body-sm/semibold",
                                color: "text-muted",
                                lineClamp: 2,
                                className: R.wx,
                                children: [I, t],
                            }),
                        (0, a.jsxs)("div", {
                            className: R.zH,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: R.Qq,
                                    children: [
                                        (0, a.jsx)(c.E, {
                                            variant: "body-md/normal",
                                            color: "text-default",
                                            lineClamp: 2,
                                            children: o,
                                        }),
                                        null != d &&
                                            (0, a.jsx)(c.E, {
                                                variant: "body-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 2,
                                                children: d,
                                            }),
                                        null != y &&
                                            (0, a.jsx)(c.E, {
                                                variant: "body-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: y,
                                            }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: R.p6,
                                    children: [
                                        A,
                                        null != j &&
                                            (0, a.jsx)(c.E, {
                                                variant: b ? "body-xs/medium" : "body-sm/normal",
                                                color: "text-muted",
                                                className: s()(R.Jb, { [R.Nc]: b }),
                                                children: j,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != g
                ? (0, a.jsx)(m.D, { className: s()(R.kL, R.vk, T), onClick: g, children: C })
                : (0, a.jsx)("div", { className: s()(R.kL, T), children: C }),
            null != i &&
                (0, a.jsx)(c.E, { variant: "body-sm/medium", color: "text-muted", className: R.dx, children: i }),
        ],
    });
}
function L(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return P.intl.format(S.default["2PiTTi"], {
                username: C.Ay.getUserTag(t.user),
                nickname: C.Ay.getName(t.user),
                avatar: (0, a.jsx)(j.A, { user: t.user, size: x._3.SIZE_16, className: R.RG }),
            });
        case "guildSubscription":
            return P.intl.format(S.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, a.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: R.RG }),
            });
        case "boost":
            return P.intl.format(S.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, a.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: R.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, A.xb)(t);
    }
}
function G(e) {
    let { color: t, Icon: l } = e;
    return (0, a.jsx)(f.h, {
        color: t,
        className: R.nC,
        children: (0, a.jsx)(l, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function k() {
    return (0, a.jsx)(T.A, { size: 64, iconSize: 32, color: d.A.unsafe_rawColors.NEUTRAL_1 });
}
function M() {
    return (0, a.jsx)("div", {
        className: R.Ty,
        children: (0, a.jsx)(p.t, { size: "lg", color: d.A.colors.ICON_DEFAULT }),
    });
}
function U() {
    return (0, a.jsx)(G, { color: "pink", Icon: h._ });
}
function w() {
    return (0, a.jsx)(v.k, { size: "lg", color: "var(--icon-muted)" });
}
function F() {
    return (0, a.jsx)("div", { className: R.CX, children: (0, a.jsx)(p.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let B = {
    [_.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [_.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [_.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function z(e) {
    let { skuId: t, productLine: l, applicationId: r, storeListing: s } = e,
        i = (0, o.bG)([y.A], () => s ?? y.A.getForSKU(t), [s, t]),
        d = B[l].preferredAssetType,
        c = n.useMemo(
            () =>
                null == i
                    ? null
                    : "headerBackground" === d
                      ? (i.headerBackground ?? i.thumbnail)
                      : (i.thumbnail ?? i.headerBackground),
            [d, i],
        );
    return null != c
        ? (0, a.jsx)("img", { src: (0, I.YE)(r, c, 64), alt: "", className: R.gw })
        : l === _.EZt.APPLICATION
          ? (0, a.jsx)(w, {})
          : l === _.EZt.GUILD_ROLE
            ? (0, a.jsx)(E.h, { width: 48, height: 48 })
            : null;
}
function W(e) {
    let { sku: t, premiumType: l, product: n, storeListing: r } = e;
    return l === D.PremiumTypes.TIER_0
        ? (0, a.jsx)(M, {})
        : l === D.PremiumTypes.TIER_2
          ? (0, a.jsx)(k, {})
          : n?.type === i.R.BUNDLE
            ? (0, a.jsx)(b.a, { product: n, staticPreviewClassName: R.C0 })
            : null == t
              ? null
              : t.productLine in B
                ? (0, a.jsx)(z, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: r,
                  })
                : (0, a.jsx)(g.r$, { sku: t, slayerProductPreviewClassName: R.gw });
}
