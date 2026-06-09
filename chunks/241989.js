l.d(t, { DH: () => G, JW: () => k, WH: () => H, a6: () => R, f7: () => M, jw: () => O, oo: () => Z });
var s = l(627968),
    n = l(64700),
    i = l(503698),
    r = l.n(i),
    a = l(575593),
    c = l(17928),
    d = l(661531),
    u = l(990078),
    o = l(834730),
    m = l(778712),
    x = l(315629),
    h = l(403581),
    C = l(104510),
    p = l(323384),
    v = l(966327),
    j = l(14702),
    f = l(575926),
    g = l(548118),
    L = l(319820),
    E = l(576243),
    N = l(328968),
    b = l(403362),
    T = l(371794),
    A = l(427262),
    _ = l(652215),
    S = l(788868),
    w = l(327105),
    I = l(375708),
    y = l(617956);
function M(e) {
    let {
            header: t,
            headerIconSrc: l,
            headerIconComponent: i,
            bottomSubText: a,
            label: c,
            description: d,
            graphic: m,
            price: x,
            priceStrikethroughText: h,
            PriceIcon: C,
            priceTooltip: p,
            priceSubText: v,
            priceSubTextHasStrikethrough: j = !0,
            omitDefaultIconBackground: f,
            target: g,
            className: L,
        } = e,
        E = (0, s.jsx)(D, { target: g }),
        N = n.useMemo(() => {
            let e = (0, s.jsxs)(o.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: y.nw,
                children: [
                    null != C && (0, s.jsx)(C, { size: "xs" }),
                    null != h &&
                        (0, s.jsx)(o.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "text-subtle",
                            className: y.EF,
                            children: h,
                        }),
                    x,
                ],
            });
            return null != p
                ? (0, s.jsx)(u.m, { text: p, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [C, x, h, p]),
        b = n.useMemo(
            () =>
                null != i
                    ? (0, s.jsx)("span", { className: y.nr, children: i })
                    : null != l
                      ? (0, s.jsx)("img", { alt: "", src: l, className: y.nr })
                      : null,
            [l, i],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: r()(y.kL, L),
                children: [
                    null != m && (0, s.jsx)("div", { className: r()(y.Kk, { [y.H9]: !f }), children: m }),
                    (0, s.jsxs)("div", {
                        className: y.Qs,
                        children: [
                            null != t &&
                                (0, s.jsxs)(o.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    className: y.wx,
                                    children: [b, t],
                                }),
                            (0, s.jsxs)("div", {
                                className: y.zH,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: y.Qq,
                                        children: [
                                            (0, s.jsx)(o.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                lineClamp: 2,
                                                children: c,
                                            }),
                                            null != d &&
                                                (0, s.jsx)(o.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: d,
                                                }),
                                            null != E &&
                                                (0, s.jsx)(o.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: E,
                                                }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: y.p6,
                                        children: [
                                            N,
                                            null != v &&
                                                (0, s.jsx)(o.E, {
                                                    variant: j ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: r()(y.Jb, { [y.Nc]: j }),
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
                (0, s.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", className: y.dx, children: a }),
        ],
    });
}
function D(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return I.intl.format(w.default["2PiTTi"], {
                username: A.Ay.getUserTag(t.user),
                nickname: A.Ay.getName(t.user),
                avatar: (0, s.jsx)(v.A, { user: t.user, size: m._3.SIZE_16, className: y.RG }),
            });
        case "guildSubscription":
            return I.intl.format(w.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, s.jsx)(g.Ay, { guild: t.guild, size: g.Ay.Sizes.SMOL, className: y.RG }),
            });
        case "boost":
            return I.intl.format(w.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, s.jsx)(g.Ay, { guild: t.guild, size: g.Ay.Sizes.SMOL, className: y.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, b.xb)(t);
    }
}
function P(e) {
    let { color: t, Icon: l } = e;
    return (0, s.jsx)(x.h, {
        color: t,
        className: y.nC,
        children: (0, s.jsx)(l, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function k() {
    return (0, s.jsx)(E.A, { size: 64, iconSize: 32, color: d.A.unsafe_rawColors.NEUTRAL_1 });
}
function G() {
    return (0, s.jsx)("div", {
        className: y.Ty,
        children: (0, s.jsx)(h.t, { size: "lg", color: d.A.colors.ICON_DEFAULT }),
    });
}
function R() {
    return (0, s.jsx)(P, { color: "pink", Icon: C._ });
}
function O() {
    return (0, s.jsx)(p.k, { size: "lg", color: "var(--icon-muted)" });
}
function Z() {
    return (0, s.jsx)("div", { className: y.CX, children: (0, s.jsx)(h.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let U = {
    [_.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [_.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [_.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function V(e) {
    let { skuId: t, productLine: l, applicationId: i, storeListing: r } = e,
        a = (0, c.bG)([N.A], () => r ?? N.A.getForSKU(t), [r, t]),
        d = U[l].preferredAssetType,
        u = n.useMemo(
            () =>
                null == a
                    ? null
                    : "headerBackground" === d
                      ? (a.headerBackground ?? a.thumbnail)
                      : (a.thumbnail ?? a.headerBackground),
            [d, a],
        );
    return null != u
        ? (0, s.jsx)("img", { src: (0, T.YE)(i, u, 64), alt: "", className: y.gw })
        : l === _.EZt.APPLICATION
          ? (0, s.jsx)(O, {})
          : l === _.EZt.GUILD_ROLE
            ? (0, s.jsx)(f.h, { width: 48, height: 48 })
            : null;
}
function H(e) {
    let { sku: t, premiumType: l, product: n, storeListing: i } = e;
    return l === S.PremiumTypes.TIER_0
        ? (0, s.jsx)(G, {})
        : l === S.PremiumTypes.TIER_2
          ? (0, s.jsx)(k, {})
          : n?.type === a.R.BUNDLE
            ? (0, s.jsx)(j.a, { product: n, staticPreviewClassName: y.C0 })
            : null == t
              ? null
              : t.productLine in U
                ? (0, s.jsx)(V, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: i,
                  })
                : (0, s.jsx)(L.r$, { sku: t, slayerProductPreviewClassName: y.gw });
}
