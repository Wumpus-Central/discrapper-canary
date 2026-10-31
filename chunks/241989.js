l.d(t, { DH: () => M, JW: () => k, WH: () => W, a6: () => U, f7: () => O, jw: () => w, oo: () => F });
var a = l(477900),
    n = l(582128),
    r = l(503698),
    s = l.n(r),
    i = l(575593),
    o = l(17928),
    c = l(661531),
    d = l(834730),
    u = l(866665),
    m = l(939249),
    x = l(778712),
    f = l(315629),
    p = l(403581),
    h = l(104510),
    v = l(323384),
    j = l(966327),
    E = l(14702),
    N = l(575926),
    g = l(548118),
    T = l(319820),
    A = l(576243),
    b = l(328968),
    I = l(403362),
    C = l(371794),
    _ = l(427262),
    D = l(652215),
    S = l(202541),
    y = l(758476),
    P = l(105292),
    R = l(242695);
function O(e) {
    let {
            header: t,
            headerIconSrc: l,
            headerIconComponent: r,
            bottomSubText: i,
            label: o,
            description: c,
            graphic: x,
            price: f,
            priceStrikethroughText: p,
            PriceIcon: h,
            priceTooltip: v,
            priceSubText: j,
            priceSubTextHasStrikethrough: E = !0,
            omitDefaultIconBackground: N,
            target: g,
            onClick: T,
            className: A,
        } = e,
        b = (0, a.jsx)(L, { target: g }),
        I = n.useMemo(() => {
            let e = (0, a.jsxs)(d.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: R.nw,
                children: [
                    null != h && (0, a.jsx)(h, { size: "xs" }),
                    null != p &&
                        (0, a.jsx)(d.E, {
                            tag: "span",
                            variant: "text-md/medium",
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
        C = n.useMemo(
            () =>
                null != r
                    ? (0, a.jsx)("span", { className: R.nr, children: r })
                    : null != l
                      ? (0, a.jsx)("img", { alt: "", src: l, className: R.nr })
                      : null,
            [l, r],
        ),
        _ = (0, a.jsxs)(a.Fragment, {
            children: [
                null != x && (0, a.jsx)("div", { className: s()(R.Kk, { [R.H9]: !N }), children: x }),
                (0, a.jsxs)("div", {
                    className: R.Qs,
                    children: [
                        null != t &&
                            (0, a.jsxs)(d.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                lineClamp: 2,
                                className: R.wx,
                                children: [C, t],
                            }),
                        (0, a.jsxs)("div", {
                            className: R.zH,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: R.Qq,
                                    children: [
                                        (0, a.jsx)(d.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            lineClamp: 2,
                                            children: o,
                                        }),
                                        null != c &&
                                            (0, a.jsx)(d.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 2,
                                                children: c,
                                            }),
                                        null != b &&
                                            (0, a.jsx)(d.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: b,
                                            }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: R.p6,
                                    children: [
                                        I,
                                        null != j &&
                                            (0, a.jsx)(d.E, {
                                                variant: E ? "text-xs/medium" : "text-sm/normal",
                                                color: "text-muted",
                                                className: s()(R.Jb, { [R.Nc]: E }),
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
            null != T
                ? (0, a.jsx)(m.D, { className: s()(R.kL, R.vk, A), onClick: T, children: _ })
                : (0, a.jsx)("div", { className: s()(R.kL, A), children: _ }),
            null != i &&
                (0, a.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", className: R.dx, children: i }),
        ],
    });
}
function L(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return P.intl.format(y.default["2PiTTi"], {
                username: _.Ay.getUserTag(t.user),
                nickname: _.Ay.getName(t.user),
                avatar: (0, a.jsx)(j.A, { user: t.user, size: x._3.SIZE_16, className: R.RG }),
            });
        case "guildSubscription":
            return P.intl.format(y.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, a.jsx)(g.Ay, { guild: t.guild, size: g.Ay.Sizes.SMOL, className: R.RG }),
            });
        case "boost":
            return P.intl.format(y.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, a.jsx)(g.Ay, { guild: t.guild, size: g.Ay.Sizes.SMOL, className: R.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, I.xb)(t);
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
    return (0, a.jsx)(A.A, { size: 64, iconSize: 32, color: c.A.unsafe_rawColors.NEUTRAL_1 });
}
function M() {
    return (0, a.jsx)("div", {
        className: R.Ty,
        children: (0, a.jsx)(p.t, { size: "lg", color: c.A.colors.ICON_DEFAULT }),
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
    [D.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [D.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [D.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function z(e) {
    let { skuId: t, productLine: l, applicationId: r, storeListing: s } = e,
        i = (0, o.bG)([b.A], () => s ?? b.A.getForSKU(t), [s, t]),
        c = B[l].preferredAssetType,
        d = n.useMemo(
            () =>
                null == i
                    ? null
                    : "headerBackground" === c
                      ? (i.headerBackground ?? i.thumbnail)
                      : (i.thumbnail ?? i.headerBackground),
            [c, i],
        );
    return null != d
        ? (0, a.jsx)("img", { src: (0, C.YE)(r, d, 64), alt: "", className: R.gw })
        : l === D.EZt.APPLICATION
          ? (0, a.jsx)(w, {})
          : l === D.EZt.GUILD_ROLE
            ? (0, a.jsx)(N.h, { width: 48, height: 48 })
            : null;
}
function W(e) {
    let { sku: t, premiumType: l, product: n, storeListing: r } = e;
    return l === S.PremiumTypes.TIER_0
        ? (0, a.jsx)(M, {})
        : l === S.PremiumTypes.TIER_2
          ? (0, a.jsx)(k, {})
          : n?.type === i.R.BUNDLE
            ? (0, a.jsx)(E.a, { product: n, staticPreviewClassName: R.C0 })
            : null == t
              ? null
              : t.productLine in B
                ? (0, a.jsx)(z, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: r,
                  })
                : (0, a.jsx)(T.r$, { sku: t, slayerProductPreviewClassName: R.gw });
}
