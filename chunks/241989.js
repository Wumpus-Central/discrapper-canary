l.d(t, { DH: () => w, JW: () => G, WH: () => W, a6: () => F, f7: () => O, jw: () => M, oo: () => U });
var n = l(477900),
    a = l(582128),
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
    j = l(323384),
    v = l(966327),
    g = l(14702),
    E = l(575926),
    N = l(548118),
    T = l(319820),
    b = l(576243),
    A = l(328968),
    I = l(403362),
    C = l(371794),
    _ = l(427262),
    y = l(652215),
    D = l(202541),
    S = l(583741),
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
            priceTooltip: j,
            priceSubText: v,
            priceSubTextHasStrikethrough: g = !0,
            omitDefaultIconBackground: E,
            target: N,
            onClick: T,
            className: b,
        } = e,
        A = (0, n.jsx)(L, { target: N }),
        I = a.useMemo(() => {
            let e = (0, n.jsxs)(d.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: R.nw,
                children: [
                    null != h && (0, n.jsx)(h, { size: "xs" }),
                    null != p &&
                        (0, n.jsx)(d.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "text-subtle",
                            className: R.EF,
                            children: p,
                        }),
                    f,
                ],
            });
            return null != j
                ? (0, n.jsx)(u.m, { text: j, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [h, f, p, j]),
        C = a.useMemo(
            () =>
                null != r
                    ? (0, n.jsx)("span", { className: R.nr, children: r })
                    : null != l
                      ? (0, n.jsx)("img", { alt: "", src: l, className: R.nr })
                      : null,
            [l, r],
        ),
        _ = (0, n.jsxs)(n.Fragment, {
            children: [
                null != x && (0, n.jsx)("div", { className: s()(R.Kk, { [R.H9]: !E }), children: x }),
                (0, n.jsxs)("div", {
                    className: R.Qs,
                    children: [
                        null != t &&
                            (0, n.jsxs)(d.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                lineClamp: 2,
                                className: R.wx,
                                children: [C, t],
                            }),
                        (0, n.jsxs)("div", {
                            className: R.zH,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: R.Qq,
                                    children: [
                                        (0, n.jsx)(d.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            lineClamp: 2,
                                            children: o,
                                        }),
                                        null != c &&
                                            (0, n.jsx)(d.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 2,
                                                children: c,
                                            }),
                                        null != A &&
                                            (0, n.jsx)(d.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: A,
                                            }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: R.p6,
                                    children: [
                                        I,
                                        null != v &&
                                            (0, n.jsx)(d.E, {
                                                variant: g ? "text-xs/medium" : "text-sm/normal",
                                                color: "text-muted",
                                                className: s()(R.Jb, { [R.Nc]: g }),
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
            null != T
                ? (0, n.jsx)(m.D, { className: s()(R.kL, R.vk, b), onClick: T, children: _ })
                : (0, n.jsx)("div", { className: s()(R.kL, b), children: _ }),
            null != i &&
                (0, n.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", className: R.dx, children: i }),
        ],
    });
}
function L(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return P.intl.format(S.default["2PiTTi"], {
                username: _.Ay.getUserTag(t.user),
                nickname: _.Ay.getName(t.user),
                avatar: (0, n.jsx)(v.A, { user: t.user, size: x._3.SIZE_16, className: R.RG }),
            });
        case "guildSubscription":
            return P.intl.format(S.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, n.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: R.RG }),
            });
        case "boost":
            return P.intl.format(S.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, n.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: R.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, I.xb)(t);
    }
}
function k(e) {
    let { color: t, Icon: l } = e;
    return (0, n.jsx)(f.h, {
        color: t,
        className: R.nC,
        children: (0, n.jsx)(l, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function G() {
    return (0, n.jsx)(b.A, { size: 64, iconSize: 32, color: c.A.unsafe_rawColors.NEUTRAL_1 });
}
function w() {
    return (0, n.jsx)("div", {
        className: R.Ty,
        children: (0, n.jsx)(p.t, { size: "lg", color: c.A.colors.ICON_DEFAULT }),
    });
}
function F() {
    return (0, n.jsx)(k, { color: "pink", Icon: h._ });
}
function M() {
    return (0, n.jsx)(j.k, { size: "lg", color: "var(--icon-muted)" });
}
function U() {
    return (0, n.jsx)("div", { className: R.CX, children: (0, n.jsx)(p.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let B = {
    [y.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [y.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [y.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function z(e) {
    let { skuId: t, productLine: l, applicationId: r, storeListing: s } = e,
        i = (0, o.bG)([A.A], () => s ?? A.A.getForSKU(t), [s, t]),
        c = B[l].preferredAssetType,
        d = a.useMemo(
            () =>
                null == i
                    ? null
                    : "headerBackground" === c
                      ? (i.headerBackground ?? i.thumbnail)
                      : (i.thumbnail ?? i.headerBackground),
            [c, i],
        );
    return null != d
        ? (0, n.jsx)("img", { src: (0, C.YE)(r, d, 64), alt: "", className: R.gw })
        : l === y.EZt.APPLICATION
          ? (0, n.jsx)(M, {})
          : l === y.EZt.GUILD_ROLE
            ? (0, n.jsx)(E.h, { width: 48, height: 48 })
            : null;
}
function W(e) {
    let { sku: t, premiumType: l, product: a, storeListing: r } = e;
    return l === D.PremiumTypes.TIER_0
        ? (0, n.jsx)(w, {})
        : l === D.PremiumTypes.TIER_2
          ? (0, n.jsx)(G, {})
          : a?.type === i.R.BUNDLE
            ? (0, n.jsx)(g.a, { product: a, staticPreviewClassName: R.C0 })
            : null == t
              ? null
              : t.productLine in B
                ? (0, n.jsx)(z, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: r,
                  })
                : (0, n.jsx)(T.r$, { sku: t, slayerProductPreviewClassName: R.gw });
}
