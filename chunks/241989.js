l.d(t, { DH: () => U, JW: () => O, WH: () => F, a6: () => w, f7: () => G, jw: () => R, oo: () => M });
var n = l(477900),
    r = l(582128),
    i = l(503698),
    s = l.n(i),
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
    E = l(319820),
    b = l(576243),
    T = l(328968),
    S = l(403362),
    A = l(371794),
    C = l(427262),
    y = l(652215),
    D = l(202541),
    P = l(477729),
    I = l(375708),
    _ = l(242695);
function G(e) {
    let {
            header: t,
            headerIconSrc: l,
            headerIconComponent: i,
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
            className: E,
        } = e,
        b = (0, n.jsx)(k, { target: N }),
        T = r.useMemo(() => {
            let e = (0, n.jsxs)(o.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: _.nw,
                children: [
                    null != p && (0, n.jsx)(p, { size: "xs" }),
                    null != h &&
                        (0, n.jsx)(o.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "text-subtle",
                            className: _.EF,
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
                null != i
                    ? (0, n.jsx)("span", { className: _.nr, children: i })
                    : null != l
                      ? (0, n.jsx)("img", { alt: "", src: l, className: _.nr })
                      : null,
            [l, i],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: s()(_.kL, E),
                children: [
                    null != m && (0, n.jsx)("div", { className: s()(_.Kk, { [_.H9]: !g }), children: m }),
                    (0, n.jsxs)("div", {
                        className: _.Qs,
                        children: [
                            null != t &&
                                (0, n.jsxs)(o.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    className: _.wx,
                                    children: [S, t],
                                }),
                            (0, n.jsxs)("div", {
                                className: _.zH,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: _.Qq,
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
                                            null != b &&
                                                (0, n.jsx)(o.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: b,
                                                }),
                                        ],
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: _.p6,
                                        children: [
                                            T,
                                            null != j &&
                                                (0, n.jsx)(o.E, {
                                                    variant: f ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: s()(_.Jb, { [_.Nc]: f }),
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
                (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", className: _.dx, children: a }),
        ],
    });
}
function k(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return I.intl.format(P.default["2PiTTi"], {
                username: C.Ay.getUserTag(t.user),
                nickname: C.Ay.getName(t.user),
                avatar: (0, n.jsx)(j.A, { user: t.user, size: m._3.SIZE_16, className: _.RG }),
            });
        case "guildSubscription":
            return I.intl.format(P.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, n.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: _.RG }),
            });
        case "boost":
            return I.intl.format(P.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, n.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: _.RG, active: !0 }),
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
        className: _.nC,
        children: (0, n.jsx)(l, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function O() {
    return (0, n.jsx)(b.A, { size: 64, iconSize: 32, color: u.A.unsafe_rawColors.NEUTRAL_1 });
}
function U() {
    return (0, n.jsx)("div", {
        className: _.Ty,
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
    return (0, n.jsx)("div", { className: _.CX, children: (0, n.jsx)(h.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let z = {
    [y.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [y.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [y.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function B(e) {
    let { skuId: t, productLine: l, applicationId: i, storeListing: s } = e,
        a = (0, c.bG)([T.A], () => s ?? T.A.getForSKU(t), [s, t]),
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
        ? (0, n.jsx)("img", { src: (0, A.YE)(i, o, 64), alt: "", className: _.gw })
        : l === y.EZt.APPLICATION
          ? (0, n.jsx)(R, {})
          : l === y.EZt.GUILD_ROLE
            ? (0, n.jsx)(g.h, { width: 48, height: 48 })
            : null;
}
function F(e) {
    let { sku: t, premiumType: l, product: r, storeListing: i } = e;
    return l === D.PremiumTypes.TIER_0
        ? (0, n.jsx)(U, {})
        : l === D.PremiumTypes.TIER_2
          ? (0, n.jsx)(O, {})
          : r?.type === a.R.BUNDLE
            ? (0, n.jsx)(f.a, { product: r, staticPreviewClassName: _.C0 })
            : null == t
              ? null
              : t.productLine in z
                ? (0, n.jsx)(B, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: i,
                  })
                : (0, n.jsx)(E.r$, { sku: t, slayerProductPreviewClassName: _.gw });
}
