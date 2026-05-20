l.d(t, { DH: () => R, JW: () => G, WH: () => H, a6: () => O, f7: () => S, jw: () => D, oo: () => U });
var n = l(627968),
    s = l(64700),
    a = l(503698),
    r = l.n(a),
    i = l(575593),
    c = l(17928),
    d = l(661531),
    u = l(851974),
    o = l(990078),
    m = l(834730),
    x = l(778712),
    h = l(315629),
    C = l(403581),
    v = l(104510),
    p = l(323384),
    g = l(966327),
    j = l(14702),
    f = l(575926),
    L = l(548118),
    N = l(319820),
    E = l(328968),
    b = l(403362),
    T = l(371794),
    A = l(427262),
    y = l(652215),
    _ = l(788868),
    I = l(327105),
    w = l(375708),
    M = l(617956);
function S(e) {
    let {
            header: t,
            headerIconSrc: l,
            headerIconComponent: a,
            bottomSubText: i,
            label: c,
            description: d,
            graphic: u,
            price: x,
            PriceIcon: h,
            priceTooltip: C,
            priceSubText: v,
            priceSubTextHasStrikethrough: p = !0,
            omitDefaultIconBackground: g,
            target: j,
            className: f,
        } = e,
        L = (0, n.jsx)(k, { target: j }),
        N = s.useMemo(() => {
            let e = (0, n.jsxs)(m.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: M.nw,
                children: [null != h && (0, n.jsx)(h, { size: "xs" }), x],
            });
            return null != C
                ? (0, n.jsx)(o.m, { text: C, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [h, x, C]),
        E = s.useMemo(
            () =>
                null != a
                    ? (0, n.jsx)("span", { className: M.nr, children: a })
                    : null != l
                      ? (0, n.jsx)("img", { alt: "", src: l, className: M.nr })
                      : null,
            [l, a],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: r()(M.kL, f),
                children: [
                    null != u && (0, n.jsx)("div", { className: r()(M.Kk, { [M.H9]: !g }), children: u }),
                    (0, n.jsxs)("div", {
                        className: M.Qs,
                        children: [
                            null != t &&
                                (0, n.jsxs)(m.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    className: M.wx,
                                    children: [E, t],
                                }),
                            (0, n.jsxs)("div", {
                                className: M.zH,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: M.Qq,
                                        children: [
                                            (0, n.jsx)(m.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                lineClamp: 2,
                                                children: c,
                                            }),
                                            null != d &&
                                                (0, n.jsx)(m.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: d,
                                                }),
                                            null != L &&
                                                (0, n.jsx)(m.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: L,
                                                }),
                                        ],
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: M.p6,
                                        children: [
                                            N,
                                            null != v &&
                                                (0, n.jsx)(m.E, {
                                                    variant: p ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: r()(M.Jb, { [M.Nc]: p }),
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
                (0, n.jsx)(m.E, { variant: "text-sm/medium", color: "text-muted", className: M.dx, children: i }),
        ],
    });
}
function k(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return w.intl.format(I.default["2PiTTi"], {
                username: A.Ay.getUserTag(t.user),
                nickname: A.Ay.getName(t.user),
                avatar: (0, n.jsx)(g.A, { user: t.user, size: x._3.SIZE_16, className: M.RG }),
            });
        case "guildSubscription":
            return w.intl.format(I.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, n.jsx)(L.Ay, { guild: t.guild, size: L.Ay.Sizes.SMOL, className: M.RG }),
            });
        case "boost":
            return w.intl.format(I.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, n.jsx)(L.Ay, { guild: t.guild, size: L.Ay.Sizes.SMOL, className: M.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, b.xb)(t);
    }
}
function P(e) {
    let { color: t, Icon: l } = e;
    return (0, n.jsx)(h.h, {
        color: t,
        className: M.nC,
        children: (0, n.jsx)(l, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function G() {
    return (0, n.jsxs)("div", {
        className: M.vc,
        children: [
            (0, n.jsx)("div", {
                className: M.Ad,
                children: (0, n.jsx)(u.d, { alt: "Nitro Icon background", ariaHidden: !0, width: 64, height: 64 }),
            }),
            (0, n.jsx)(C.t, { size: "lg", color: d.A.unsafe_rawColors.NEUTRAL_1, className: M.Ad }),
        ],
    });
}
function R() {
    return (0, n.jsx)("div", {
        className: M.Ty,
        children: (0, n.jsx)(C.t, { size: "lg", color: d.A.colors.ICON_DEFAULT }),
    });
}
function O() {
    return (0, n.jsx)(P, { color: "pink", Icon: v._ });
}
function D() {
    return (0, n.jsx)(p.k, { size: "lg", color: "var(--icon-muted)" });
}
function U() {
    return (0, n.jsx)("div", { className: M.CX, children: (0, n.jsx)(C.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let V = {
    [y.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [y.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [y.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function B(e) {
    let { skuId: t, productLine: l, applicationId: a, storeListing: r } = e,
        i = (0, c.bG)([E.A], () => r ?? E.A.getForSKU(t), [r, t]),
        d = V[l].preferredAssetType,
        u = s.useMemo(
            () =>
                null == i
                    ? null
                    : "headerBackground" === d
                      ? (i.headerBackground ?? i.thumbnail)
                      : (i.thumbnail ?? i.headerBackground),
            [d, i],
        );
    return null != u
        ? (0, n.jsx)("img", { src: (0, T.YE)(a, u, 64), alt: "", className: M.gw })
        : l === y.EZt.APPLICATION
          ? (0, n.jsx)(D, {})
          : l === y.EZt.GUILD_ROLE
            ? (0, n.jsx)(f.h, { width: 48, height: 48 })
            : null;
}
function H(e) {
    let { sku: t, premiumType: l, product: s, storeListing: a } = e;
    return l === _.PremiumTypes.TIER_0
        ? (0, n.jsx)(R, {})
        : l === _.PremiumTypes.TIER_2
          ? (0, n.jsx)(G, {})
          : s?.type === i.R.BUNDLE
            ? (0, n.jsx)(j.a, { product: s, staticPreviewClassName: M.C0 })
            : null == t
              ? null
              : t.productLine in V
                ? (0, n.jsx)(B, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: a,
                  })
                : (0, n.jsx)(N.r$, { sku: t, slayerProductPreviewClassName: M.gw });
}
