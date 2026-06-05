l.d(t, { DH: () => G, JW: () => P, WH: () => H, a6: () => R, f7: () => M, jw: () => O, oo: () => Z });
var s = l(627968),
    i = l(64700),
    n = l(503698),
    r = l.n(n),
    a = l(575593),
    d = l(17928),
    c = l(661531),
    u = l(851974),
    o = l(990078),
    m = l(834730),
    x = l(778712),
    h = l(315629),
    C = l(403581),
    p = l(104510),
    v = l(323384),
    j = l(966327),
    g = l(14702),
    f = l(575926),
    L = l(548118),
    E = l(319820),
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
            headerIconComponent: n,
            bottomSubText: a,
            label: d,
            description: c,
            graphic: u,
            price: x,
            priceStrikethroughText: h,
            PriceIcon: C,
            priceTooltip: p,
            priceSubText: v,
            priceSubTextHasStrikethrough: j = !0,
            omitDefaultIconBackground: g,
            target: f,
            className: L,
        } = e,
        E = (0, s.jsx)(k, { target: f }),
        N = i.useMemo(() => {
            let e = (0, s.jsxs)(m.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: y.nw,
                children: [
                    null != C && (0, s.jsx)(C, { size: "xs" }),
                    null != h &&
                        (0, s.jsx)(m.E, {
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
                ? (0, s.jsx)(o.m, { text: p, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [C, x, h, p]),
        b = i.useMemo(
            () =>
                null != n
                    ? (0, s.jsx)("span", { className: y.nr, children: n })
                    : null != l
                      ? (0, s.jsx)("img", { alt: "", src: l, className: y.nr })
                      : null,
            [l, n],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: r()(y.kL, L),
                children: [
                    null != u && (0, s.jsx)("div", { className: r()(y.Kk, { [y.H9]: !g }), children: u }),
                    (0, s.jsxs)("div", {
                        className: y.Qs,
                        children: [
                            null != t &&
                                (0, s.jsxs)(m.E, {
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
                                            (0, s.jsx)(m.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                lineClamp: 2,
                                                children: d,
                                            }),
                                            null != c &&
                                                (0, s.jsx)(m.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: c,
                                                }),
                                            null != E &&
                                                (0, s.jsx)(m.E, {
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
                                                (0, s.jsx)(m.E, {
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
                (0, s.jsx)(m.E, { variant: "text-sm/medium", color: "text-muted", className: y.dx, children: a }),
        ],
    });
}
function k(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return I.intl.format(w.default["2PiTTi"], {
                username: A.Ay.getUserTag(t.user),
                nickname: A.Ay.getName(t.user),
                avatar: (0, s.jsx)(j.A, { user: t.user, size: x._3.SIZE_16, className: y.RG }),
            });
        case "guildSubscription":
            return I.intl.format(w.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, s.jsx)(L.Ay, { guild: t.guild, size: L.Ay.Sizes.SMOL, className: y.RG }),
            });
        case "boost":
            return I.intl.format(w.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, s.jsx)(L.Ay, { guild: t.guild, size: L.Ay.Sizes.SMOL, className: y.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, b.xb)(t);
    }
}
function D(e) {
    let { color: t, Icon: l } = e;
    return (0, s.jsx)(h.h, {
        color: t,
        className: y.nC,
        children: (0, s.jsx)(l, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function P() {
    return (0, s.jsxs)("div", {
        className: y.vc,
        children: [
            (0, s.jsx)("div", {
                className: y.Ad,
                children: (0, s.jsx)(u.d, { alt: "Nitro Icon background", ariaHidden: !0, width: 64, height: 64 }),
            }),
            (0, s.jsx)(C.t, { size: "lg", color: c.A.unsafe_rawColors.NEUTRAL_1, className: y.Ad }),
        ],
    });
}
function G() {
    return (0, s.jsx)("div", {
        className: y.Ty,
        children: (0, s.jsx)(C.t, { size: "lg", color: c.A.colors.ICON_DEFAULT }),
    });
}
function R() {
    return (0, s.jsx)(D, { color: "pink", Icon: p._ });
}
function O() {
    return (0, s.jsx)(v.k, { size: "lg", color: "var(--icon-muted)" });
}
function Z() {
    return (0, s.jsx)("div", { className: y.CX, children: (0, s.jsx)(C.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let U = {
    [_.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [_.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [_.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function V(e) {
    let { skuId: t, productLine: l, applicationId: n, storeListing: r } = e,
        a = (0, d.bG)([N.A], () => r ?? N.A.getForSKU(t), [r, t]),
        c = U[l].preferredAssetType,
        u = i.useMemo(
            () =>
                null == a
                    ? null
                    : "headerBackground" === c
                      ? (a.headerBackground ?? a.thumbnail)
                      : (a.thumbnail ?? a.headerBackground),
            [c, a],
        );
    return null != u
        ? (0, s.jsx)("img", { src: (0, T.YE)(n, u, 64), alt: "", className: y.gw })
        : l === _.EZt.APPLICATION
          ? (0, s.jsx)(O, {})
          : l === _.EZt.GUILD_ROLE
            ? (0, s.jsx)(f.h, { width: 48, height: 48 })
            : null;
}
function H(e) {
    let { sku: t, premiumType: l, product: i, storeListing: n } = e;
    return l === S.PremiumTypes.TIER_0
        ? (0, s.jsx)(G, {})
        : l === S.PremiumTypes.TIER_2
          ? (0, s.jsx)(P, {})
          : i?.type === a.R.BUNDLE
            ? (0, s.jsx)(g.a, { product: i, staticPreviewClassName: y.C0 })
            : null == t
              ? null
              : t.productLine in U
                ? (0, s.jsx)(V, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: n,
                  })
                : (0, s.jsx)(E.r$, { sku: t, slayerProductPreviewClassName: y.gw });
}
