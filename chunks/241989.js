l.d(t, { DH: () => U, JW: () => O, WH: () => F, a6: () => w, f7: () => I, jw: () => R, oo: () => M });
var n = l(477900),
    r = l(582128),
    s = l(503698),
    i = l.n(s),
    a = l(575593),
    c = l(17928),
    u = l(661531),
    o = l(834730),
    d = l(866665),
    m = l(778712),
    x = l(315629),
    h = l(403581),
    p = l(104510),
    v = l(323384),
    j = l(966327),
    f = l(14702),
    g = l(575926),
    N = l(548118),
    b = l(319820),
    E = l(576243),
    T = l(328968),
    S = l(403362),
    A = l(371794),
    y = l(427262),
    D = l(652215),
    C = l(202541),
    P = l(327105),
    _ = l(375708),
    G = l(915500);
function I(e) {
    let {
            header: t,
            headerIconSrc: l,
            headerIconComponent: s,
            bottomSubText: a,
            label: c,
            description: u,
            graphic: m,
            price: x,
            priceStrikethroughText: h,
            PriceIcon: p,
            priceTooltip: v,
            priceSubText: j,
            priceSubTextHasStrikethrough: f = !0,
            omitDefaultIconBackground: g,
            target: N,
            className: b,
        } = e,
        E = (0, n.jsx)(k, { target: N }),
        T = r.useMemo(() => {
            let e = (0, n.jsxs)(o.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: G.nw,
                children: [
                    null != p && (0, n.jsx)(p, { size: "xs" }),
                    null != h &&
                        (0, n.jsx)(o.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "text-subtle",
                            className: G.EF,
                            children: h,
                        }),
                    x,
                ],
            });
            return null != v
                ? (0, n.jsx)(d.m, { text: v, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [p, x, h, v]),
        S = r.useMemo(
            () =>
                null != s
                    ? (0, n.jsx)("span", { className: G.nr, children: s })
                    : null != l
                      ? (0, n.jsx)("img", { alt: "", src: l, className: G.nr })
                      : null,
            [l, s],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(G.kL, b),
                children: [
                    null != m && (0, n.jsx)("div", { className: i()(G.Kk, { [G.H9]: !g }), children: m }),
                    (0, n.jsxs)("div", {
                        className: G.Qs,
                        children: [
                            null != t &&
                                (0, n.jsxs)(o.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    className: G.wx,
                                    children: [S, t],
                                }),
                            (0, n.jsxs)("div", {
                                className: G.zH,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: G.Qq,
                                        children: [
                                            (0, n.jsx)(o.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                lineClamp: 2,
                                                children: c,
                                            }),
                                            null != u &&
                                                (0, n.jsx)(o.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: u,
                                                }),
                                            null != E &&
                                                (0, n.jsx)(o.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: E,
                                                }),
                                        ],
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: G.p6,
                                        children: [
                                            T,
                                            null != j &&
                                                (0, n.jsx)(o.E, {
                                                    variant: f ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: i()(G.Jb, { [G.Nc]: f }),
                                                    children: j,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != a &&
                (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", className: G.dx, children: a }),
        ],
    });
}
function k(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return _.intl.format(P.default["2PiTTi"], {
                username: y.Ay.getUserTag(t.user),
                nickname: y.Ay.getName(t.user),
                avatar: (0, n.jsx)(j.A, { user: t.user, size: m._3.SIZE_16, className: G.RG }),
            });
        case "guildSubscription":
            return _.intl.format(P.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, n.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: G.RG }),
            });
        case "boost":
            return _.intl.format(P.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, n.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: G.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, S.xb)(t);
    }
}
function L(e) {
    let { color: t, Icon: l } = e;
    return (0, n.jsx)(x.h, {
        color: t,
        className: G.nC,
        children: (0, n.jsx)(l, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function O() {
    return (0, n.jsx)(E.A, { size: 64, iconSize: 32, color: u.A.unsafe_rawColors.NEUTRAL_1 });
}
function U() {
    return (0, n.jsx)("div", {
        className: G.Ty,
        children: (0, n.jsx)(h.t, { size: "lg", color: u.A.colors.ICON_DEFAULT }),
    });
}
function w() {
    return (0, n.jsx)(L, { color: "pink", Icon: p._ });
}
function R() {
    return (0, n.jsx)(v.k, { size: "lg", color: "var(--icon-muted)" });
}
function M() {
    return (0, n.jsx)("div", { className: G.CX, children: (0, n.jsx)(h.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let z = {
    [D.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [D.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [D.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function B(e) {
    let { skuId: t, productLine: l, applicationId: s, storeListing: i } = e,
        a = (0, c.bG)([T.A], () => i ?? T.A.getForSKU(t), [i, t]),
        u = z[l].preferredAssetType,
        o = r.useMemo(
            () =>
                null == a
                    ? null
                    : "headerBackground" === u
                      ? (a.headerBackground ?? a.thumbnail)
                      : (a.thumbnail ?? a.headerBackground),
            [u, a],
        );
    return null != o
        ? (0, n.jsx)("img", { src: (0, A.YE)(s, o, 64), alt: "", className: G.gw })
        : l === D.EZt.APPLICATION
          ? (0, n.jsx)(R, {})
          : l === D.EZt.GUILD_ROLE
            ? (0, n.jsx)(g.h, { width: 48, height: 48 })
            : null;
}
function F(e) {
    let { sku: t, premiumType: l, product: r, storeListing: s } = e;
    return l === C.PremiumTypes.TIER_0
        ? (0, n.jsx)(U, {})
        : l === C.PremiumTypes.TIER_2
          ? (0, n.jsx)(O, {})
          : r?.type === a.R.BUNDLE
            ? (0, n.jsx)(f.a, { product: r, staticPreviewClassName: G.C0 })
            : null == t
              ? null
              : t.productLine in z
                ? (0, n.jsx)(B, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: s,
                  })
                : (0, n.jsx)(b.r$, { sku: t, slayerProductPreviewClassName: G.gw });
}
