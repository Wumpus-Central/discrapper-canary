l.d(t, { DH: () => w, JW: () => M, WH: () => B, a6: () => L, f7: () => k, jw: () => R, oo: () => D });
var n = l(627968),
    a = l(64700),
    r = l(503698),
    s = l.n(r),
    i = l(575593),
    c = l(17928),
    o = l(990078),
    d = l(834730),
    u = l(778712),
    m = l(315629),
    x = l(403581),
    h = l(104510),
    g = l(323384),
    v = l(966327),
    j = l(14702),
    p = l(575926),
    f = l(548118),
    N = l(319820),
    b = l(328968),
    E = l(403362),
    T = l(371794),
    y = l(427262),
    A = l(652215),
    C = l(788868),
    I = l(327105),
    S = l(985018),
    _ = l(617956);
function k(e) {
    let {
            header: t,
            headerIconSrc: l,
            headerIconComponent: r,
            bottomSubText: i,
            label: c,
            description: u,
            graphic: m,
            price: x,
            PriceIcon: h,
            priceTooltip: g,
            priceSubText: v,
            priceSubTextHasStrikethrough: j = !0,
            target: p,
            className: f,
        } = e,
        N = (0, n.jsx)(P, { target: p }),
        b = a.useMemo(() => {
            let e = (0, n.jsxs)(d.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: _.nw,
                children: [null != h && (0, n.jsx)(h, { size: "xs" }), x],
            });
            return null != g
                ? (0, n.jsx)(o.m, { text: g, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [h, x, g]),
        E = a.useMemo(
            () =>
                null != r
                    ? (0, n.jsx)("span", { className: _.nr, children: r })
                    : null != l
                      ? (0, n.jsx)("img", { alt: "", src: l, className: _.nr })
                      : null,
            [l, r],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: s()(_.kL, f),
                children: [
                    null != m && (0, n.jsx)("div", { className: _.Kk, children: m }),
                    (0, n.jsxs)("div", {
                        className: _.Qs,
                        children: [
                            null != t &&
                                (0, n.jsxs)(d.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    className: _.wx,
                                    children: [E, t],
                                }),
                            (0, n.jsxs)("div", {
                                className: _.zH,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: _.Qq,
                                        children: [
                                            (0, n.jsx)(d.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                lineClamp: 2,
                                                children: c,
                                            }),
                                            null != u &&
                                                (0, n.jsx)(d.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: u,
                                                }),
                                            null != N &&
                                                (0, n.jsx)(d.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: N,
                                                }),
                                        ],
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: _.p6,
                                        children: [
                                            b,
                                            null != v &&
                                                (0, n.jsx)(d.E, {
                                                    variant: j ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: s()(_.Jb, { [_.Nc]: j }),
                                                    children: v,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != i &&
                (0, n.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", className: _.dx, children: i }),
        ],
    });
}
function P(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return S.intl.format(I.default["2PiTTi"], {
                username: y.Ay.getUserTag(t.user),
                nickname: y.Ay.getName(t.user),
                avatar: (0, n.jsx)(v.A, { user: t.user, size: u._3.SIZE_16, className: _.RG }),
            });
        case "guildSubscription":
            return S.intl.format(I.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, n.jsx)(f.Ay, { guild: t.guild, size: f.Ay.Sizes.SMOL, className: _.RG }),
            });
        case "boost":
            return S.intl.format(I.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, n.jsx)(f.Ay, { guild: t.guild, size: f.Ay.Sizes.SMOL, className: _.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, E.xb)(t);
    }
}
function G(e) {
    let { color: t, Icon: l } = e;
    return (0, n.jsx)(m.h, {
        color: t,
        className: _.nC,
        children: (0, n.jsx)(l, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function M() {
    return (0, n.jsx)(G, { color: "nitro-pink", Icon: x.t });
}
function w() {
    return (0, n.jsx)(G, { color: "nitro-green", Icon: x.t });
}
function L() {
    return (0, n.jsx)(G, { color: "pink", Icon: h._ });
}
function R() {
    return (0, n.jsx)(g.k, { size: "lg", color: "var(--icon-muted)" });
}
function D() {
    return (0, n.jsx)("div", { className: _.CX, children: (0, n.jsx)(x.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let O = {
    [A.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [A.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [A.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function $(e) {
    let { skuId: t, productLine: l, applicationId: r, storeListing: s } = e,
        i = (0, c.bG)([b.A], () => s ?? b.A.getForSKU(t), [s, t]),
        o = O[l].preferredAssetType,
        d = a.useMemo(
            () =>
                null == i
                    ? null
                    : "headerBackground" === o
                      ? (i.headerBackground ?? i.thumbnail)
                      : (i.thumbnail ?? i.headerBackground),
            [o, i],
        );
    return null != d
        ? (0, n.jsx)("img", { src: (0, T.YE)(r, d, 64), alt: "", className: _.gw })
        : l === A.EZt.APPLICATION
          ? (0, n.jsx)(R, {})
          : l === A.EZt.GUILD_ROLE
            ? (0, n.jsx)(p.h, { width: 48, height: 48 })
            : null;
}
function B(e) {
    let { sku: t, premiumType: l, product: a, storeListing: r } = e;
    return l === C.PremiumTypes.TIER_0
        ? (0, n.jsx)(w, {})
        : l === C.PremiumTypes.TIER_2
          ? (0, n.jsx)(M, {})
          : a?.type === i.R.BUNDLE
            ? (0, n.jsx)(j.a, { product: a, staticPreviewClassName: _.C0 })
            : null == t
              ? null
              : t.productLine in O
                ? (0, n.jsx)($, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: r,
                  })
                : (0, n.jsx)(N.r$, { sku: t, slayerProductPreviewClassName: _.gw });
}
