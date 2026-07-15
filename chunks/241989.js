l.d(t, { DH: () => w, JW: () => O, WH: () => B, a6: () => R, f7: () => k, jw: () => M, oo: () => U });
var n = l(627968),
    r = l(64700),
    s = l(503698),
    i = l.n(s),
    a = l(575593),
    u = l(17928),
    d = l(661531),
    c = l(990078),
    o = l(834730),
    m = l(778712),
    x = l(315629),
    h = l(403581),
    p = l(104510),
    j = l(323384),
    v = l(966327),
    f = l(14702),
    g = l(575926),
    b = l(548118),
    N = l(319820),
    E = l(576243),
    T = l(328968),
    S = l(403362),
    y = l(371794),
    A = l(427262),
    C = l(652215),
    P = l(202541),
    D = l(327105),
    I = l(375708),
    _ = l(617956);
function k(e) {
    let {
            header: t,
            headerIconSrc: l,
            headerIconComponent: s,
            bottomSubText: a,
            label: u,
            description: d,
            graphic: m,
            price: x,
            priceStrikethroughText: h,
            PriceIcon: p,
            priceTooltip: j,
            priceSubText: v,
            priceSubTextHasStrikethrough: f = !0,
            omitDefaultIconBackground: g,
            target: b,
            className: N,
        } = e,
        E = (0, n.jsx)(G, { target: b }),
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
            return null != j
                ? (0, n.jsx)(c.m, { text: j, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [p, x, h, j]),
        S = r.useMemo(
            () =>
                null != s
                    ? (0, n.jsx)("span", { className: _.nr, children: s })
                    : null != l
                      ? (0, n.jsx)("img", { alt: "", src: l, className: _.nr })
                      : null,
            [l, s],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(_.kL, N),
                children: [
                    null != m && (0, n.jsx)("div", { className: i()(_.Kk, { [_.H9]: !g }), children: m }),
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
                                                children: u,
                                            }),
                                            null != d &&
                                                (0, n.jsx)(o.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: d,
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
                                        className: _.p6,
                                        children: [
                                            T,
                                            null != v &&
                                                (0, n.jsx)(o.E, {
                                                    variant: f ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: i()(_.Jb, { [_.Nc]: f }),
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
            null != a &&
                (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", className: _.dx, children: a }),
        ],
    });
}
function G(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return I.intl.format(D.default["2PiTTi"], {
                username: A.Ay.getUserTag(t.user),
                nickname: A.Ay.getName(t.user),
                avatar: (0, n.jsx)(v.A, { user: t.user, size: m._3.SIZE_16, className: _.RG }),
            });
        case "guildSubscription":
            return I.intl.format(D.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, n.jsx)(b.Ay, { guild: t.guild, size: b.Ay.Sizes.SMOL, className: _.RG }),
            });
        case "boost":
            return I.intl.format(D.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, n.jsx)(b.Ay, { guild: t.guild, size: b.Ay.Sizes.SMOL, className: _.RG, active: !0 }),
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
    return (0, n.jsx)(E.A, { size: 64, iconSize: 32, color: d.A.unsafe_rawColors.NEUTRAL_1 });
}
function w() {
    return (0, n.jsx)("div", {
        className: _.Ty,
        children: (0, n.jsx)(h.t, { size: "lg", color: d.A.colors.ICON_DEFAULT }),
    });
}
function R() {
    return (0, n.jsx)(L, { color: "pink", Icon: p._ });
}
function M() {
    return (0, n.jsx)(j.k, { size: "lg", color: "var(--icon-muted)" });
}
function U() {
    return (0, n.jsx)("div", { className: _.CX, children: (0, n.jsx)(h.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let z = {
    [C.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [C.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [C.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function F(e) {
    let { skuId: t, productLine: l, applicationId: s, storeListing: i } = e,
        a = (0, u.bG)([T.A], () => i ?? T.A.getForSKU(t), [i, t]),
        d = z[l].preferredAssetType,
        c = r.useMemo(
            () =>
                null == a
                    ? null
                    : "headerBackground" === d
                      ? (a.headerBackground ?? a.thumbnail)
                      : (a.thumbnail ?? a.headerBackground),
            [d, a],
        );
    return null != c
        ? (0, n.jsx)("img", { src: (0, y.YE)(s, c, 64), alt: "", className: _.gw })
        : l === C.EZt.APPLICATION
          ? (0, n.jsx)(M, {})
          : l === C.EZt.GUILD_ROLE
            ? (0, n.jsx)(g.h, { width: 48, height: 48 })
            : null;
}
function B(e) {
    let { sku: t, premiumType: l, product: r, storeListing: s } = e;
    return l === P.PremiumTypes.TIER_0
        ? (0, n.jsx)(w, {})
        : l === P.PremiumTypes.TIER_2
          ? (0, n.jsx)(O, {})
          : r?.type === a.R.BUNDLE
            ? (0, n.jsx)(f.a, { product: r, staticPreviewClassName: _.C0 })
            : null == t
              ? null
              : t.productLine in z
                ? (0, n.jsx)(F, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: s,
                  })
                : (0, n.jsx)(N.r$, { sku: t, slayerProductPreviewClassName: _.gw });
}
