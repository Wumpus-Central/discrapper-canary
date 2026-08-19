l.d(t, { DH: () => R, JW: () => U, WH: () => z, a6: () => k, f7: () => O, jw: () => w, oo: () => M });
var n = l(477900),
    r = l(582128),
    a = l(503698),
    i = l.n(a),
    s = l(575593),
    o = l(17928),
    c = l(661531),
    u = l(834730),
    d = l(866665),
    m = l(778712),
    x = l(315629),
    f = l(403581),
    p = l(104510),
    v = l(323384),
    h = l(966327),
    j = l(14702),
    g = l(575926),
    N = l(548118),
    E = l(319820),
    T = l(576243),
    b = l(328968),
    A = l(403362),
    S = l(371794),
    C = l(427262),
    I = l(652215),
    P = l(202541),
    D = l(327105),
    _ = l(375708),
    y = l(915500);
function O(e) {
    let {
            header: t,
            headerIconSrc: l,
            headerIconComponent: a,
            bottomSubText: s,
            label: o,
            description: c,
            graphic: m,
            price: x,
            priceStrikethroughText: f,
            PriceIcon: p,
            priceTooltip: v,
            priceSubText: h,
            priceSubTextHasStrikethrough: j = !0,
            omitDefaultIconBackground: g,
            target: N,
            className: E,
        } = e,
        T = (0, n.jsx)(L, { target: N }),
        b = r.useMemo(() => {
            let e = (0, n.jsxs)(u.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: y.nw,
                children: [
                    null != p && (0, n.jsx)(p, { size: "xs" }),
                    null != f &&
                        (0, n.jsx)(u.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "text-subtle",
                            className: y.EF,
                            children: f,
                        }),
                    x,
                ],
            });
            return null != v
                ? (0, n.jsx)(d.m, { text: v, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [p, x, f, v]),
        A = r.useMemo(
            () =>
                null != a
                    ? (0, n.jsx)("span", { className: y.nr, children: a })
                    : null != l
                      ? (0, n.jsx)("img", { alt: "", src: l, className: y.nr })
                      : null,
            [l, a],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(y.kL, E),
                children: [
                    null != m && (0, n.jsx)("div", { className: i()(y.Kk, { [y.H9]: !g }), children: m }),
                    (0, n.jsxs)("div", {
                        className: y.Qs,
                        children: [
                            null != t &&
                                (0, n.jsxs)(u.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    className: y.wx,
                                    children: [A, t],
                                }),
                            (0, n.jsxs)("div", {
                                className: y.zH,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: y.Qq,
                                        children: [
                                            (0, n.jsx)(u.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                lineClamp: 2,
                                                children: o,
                                            }),
                                            null != c &&
                                                (0, n.jsx)(u.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: c,
                                                }),
                                            null != T &&
                                                (0, n.jsx)(u.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: T,
                                                }),
                                        ],
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: y.p6,
                                        children: [
                                            b,
                                            null != h &&
                                                (0, n.jsx)(u.E, {
                                                    variant: j ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: i()(y.Jb, { [y.Nc]: j }),
                                                    children: h,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != s &&
                (0, n.jsx)(u.E, { variant: "text-sm/medium", color: "text-muted", className: y.dx, children: s }),
        ],
    });
}
function L(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return _.intl.format(D.default["2PiTTi"], {
                username: C.Ay.getUserTag(t.user),
                nickname: C.Ay.getName(t.user),
                avatar: (0, n.jsx)(h.A, { user: t.user, size: m._3.SIZE_16, className: y.RG }),
            });
        case "guildSubscription":
            return _.intl.format(D.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, n.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: y.RG }),
            });
        case "boost":
            return _.intl.format(D.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, n.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: y.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, A.xb)(t);
    }
}
function G(e) {
    let { color: t, Icon: l } = e;
    return (0, n.jsx)(x.h, {
        color: t,
        className: y.nC,
        children: (0, n.jsx)(l, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function U() {
    return (0, n.jsx)(T.A, { size: 64, iconSize: 32, color: c.A.unsafe_rawColors.NEUTRAL_1 });
}
function R() {
    return (0, n.jsx)("div", {
        className: y.Ty,
        children: (0, n.jsx)(f.t, { size: "lg", color: c.A.colors.ICON_DEFAULT }),
    });
}
function k() {
    return (0, n.jsx)(G, { color: "pink", Icon: p._ });
}
function w() {
    return (0, n.jsx)(v.k, { size: "lg", color: "var(--icon-muted)" });
}
function M() {
    return (0, n.jsx)("div", { className: y.CX, children: (0, n.jsx)(f.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let F = {
    [I.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [I.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [I.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function B(e) {
    let { skuId: t, productLine: l, applicationId: a, storeListing: i } = e,
        s = (0, o.bG)([b.A], () => i ?? b.A.getForSKU(t), [i, t]),
        c = F[l].preferredAssetType,
        u = r.useMemo(
            () =>
                null == s
                    ? null
                    : "headerBackground" === c
                      ? (s.headerBackground ?? s.thumbnail)
                      : (s.thumbnail ?? s.headerBackground),
            [c, s],
        );
    return null != u
        ? (0, n.jsx)("img", { src: (0, S.YE)(a, u, 64), alt: "", className: y.gw })
        : l === I.EZt.APPLICATION
          ? (0, n.jsx)(w, {})
          : l === I.EZt.GUILD_ROLE
            ? (0, n.jsx)(g.h, { width: 48, height: 48 })
            : null;
}
function z(e) {
    let { sku: t, premiumType: l, product: r, storeListing: a } = e;
    return l === P.PremiumTypes.TIER_0
        ? (0, n.jsx)(R, {})
        : l === P.PremiumTypes.TIER_2
          ? (0, n.jsx)(U, {})
          : r?.type === s.R.BUNDLE
            ? (0, n.jsx)(j.a, { product: r, staticPreviewClassName: y.C0 })
            : null == t
              ? null
              : t.productLine in F
                ? (0, n.jsx)(B, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: a,
                  })
                : (0, n.jsx)(E.r$, { sku: t, slayerProductPreviewClassName: y.gw });
}
