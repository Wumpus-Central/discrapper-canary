l.d(t, { DH: () => M, JW: () => F, WH: () => $, a6: () => U, f7: () => w, jw: () => G, oo: () => R });
var s = l(477900),
    n = l(582128),
    a = l(503698),
    r = l.n(a),
    i = l(575593),
    c = l(17928),
    d = l(661531),
    u = l(834730),
    o = l(866665),
    m = l(939249),
    x = l(778712),
    j = l(315629),
    h = l(403581),
    v = l(104510),
    g = l(323384),
    p = l(966327),
    f = l(456839),
    N = l(575926),
    b = l(548118),
    E = l(319820),
    C = l(576243),
    T = l(328968),
    y = l(403362),
    k = l(371794),
    I = l(427262),
    A = l(652215),
    S = l(202541),
    _ = l(583741),
    D = l(375708),
    L = l(242695);
function w(e) {
    let {
            header: t,
            headerIconSrc: l,
            headerIconComponent: a,
            bottomSubText: i,
            label: c,
            description: d,
            graphic: x,
            price: j,
            priceStrikethroughText: h,
            PriceIcon: v,
            priceTooltip: g,
            priceSubText: p,
            priceSubTextHasStrikethrough: f = !0,
            omitDefaultIconBackground: N,
            target: b,
            onClick: E,
            className: C,
        } = e,
        T = (0, s.jsx)(P, { target: b }),
        y = n.useMemo(() => {
            let e = (0, s.jsxs)(u.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: L.nw,
                children: [
                    null != v && (0, s.jsx)(v, { size: "xs" }),
                    null != h &&
                        (0, s.jsx)(u.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "text-subtle",
                            className: L.EF,
                            children: h,
                        }),
                    j,
                ],
            });
            return null != g
                ? (0, s.jsx)(o.m, { text: g, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [v, j, h, g]),
        k = n.useMemo(
            () =>
                null != a
                    ? (0, s.jsx)("span", { className: L.nr, children: a })
                    : null != l
                      ? (0, s.jsx)("img", { alt: "", src: l, className: L.nr })
                      : null,
            [l, a],
        ),
        I = (0, s.jsxs)(s.Fragment, {
            children: [
                null != x && (0, s.jsx)("div", { className: r()(L.Kk, { [L.H9]: !N }), children: x }),
                (0, s.jsxs)("div", {
                    className: L.Qs,
                    children: [
                        null != t &&
                            (0, s.jsxs)(u.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                lineClamp: 2,
                                className: L.wx,
                                children: [k, t],
                            }),
                        (0, s.jsxs)("div", {
                            className: L.zH,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: L.Qq,
                                    children: [
                                        (0, s.jsx)(u.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            lineClamp: 2,
                                            children: c,
                                        }),
                                        null != d &&
                                            (0, s.jsx)(u.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 2,
                                                children: d,
                                            }),
                                        null != T &&
                                            (0, s.jsx)(u.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: T,
                                            }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: L.p6,
                                    children: [
                                        y,
                                        null != p &&
                                            (0, s.jsx)(u.E, {
                                                variant: f ? "text-xs/medium" : "text-sm/normal",
                                                color: "text-muted",
                                                className: r()(L.Jb, { [L.Nc]: f }),
                                                children: p,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != E
                ? (0, s.jsx)(m.D, { className: r()(L.kL, L.vk, C), onClick: E, children: I })
                : (0, s.jsx)("div", { className: r()(L.kL, C), children: I }),
            null != i &&
                (0, s.jsx)(u.E, { variant: "text-sm/medium", color: "text-muted", className: L.dx, children: i }),
        ],
    });
}
function P(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return D.intl.format(_.default["2PiTTi"], {
                username: I.Ay.getUserTag(t.user),
                nickname: I.Ay.getName(t.user),
                avatar: (0, s.jsx)(p.A, { user: t.user, size: x._3.SIZE_16, className: L.RG }),
            });
        case "guildSubscription":
            return D.intl.format(_.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, s.jsx)(b.Ay, { guild: t.guild, size: b.Ay.Sizes.SMOL, className: L.RG }),
            });
        case "boost":
            return D.intl.format(_.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, s.jsx)(b.Ay, { guild: t.guild, size: b.Ay.Sizes.SMOL, className: L.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, y.xb)(t);
    }
}
function z(e) {
    let { color: t, Icon: l } = e;
    return (0, s.jsx)(j.h, {
        color: t,
        className: L.nC,
        children: (0, s.jsx)(l, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function F() {
    return (0, s.jsx)(C.A, { size: 64, iconSize: 32, color: d.A.unsafe_rawColors.NEUTRAL_1 });
}
function M() {
    return (0, s.jsx)("div", {
        className: L.Ty,
        children: (0, s.jsx)(h.t, { size: "lg", color: d.A.colors.ICON_DEFAULT }),
    });
}
function U() {
    return (0, s.jsx)(z, { color: "pink", Icon: v._ });
}
function G() {
    return (0, s.jsx)(g.k, { size: "lg", color: "var(--icon-muted)" });
}
function R() {
    return (0, s.jsx)("div", { className: L.CX, children: (0, s.jsx)(h.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let B = {
    [A.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [A.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [A.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function O(e) {
    let { skuId: t, productLine: l, applicationId: a, storeListing: r } = e,
        i = (0, c.bG)([T.A], () => r ?? T.A.getForSKU(t), [r, t]),
        d = B[l].preferredAssetType,
        u = n.useMemo(
            () =>
                null == i
                    ? null
                    : "headerBackground" === d
                      ? (i.headerBackground ?? i.thumbnail)
                      : (i.thumbnail ?? i.headerBackground),
            [d, i],
        );
    return null != u
        ? (0, s.jsx)("img", { src: (0, k.YE)(a, u, 64), alt: "", className: L.gw })
        : l === A.EZt.APPLICATION
          ? (0, s.jsx)(G, {})
          : l === A.EZt.GUILD_ROLE
            ? (0, s.jsx)(N.h, { width: 48, height: 48 })
            : null;
}
function $(e) {
    let { sku: t, premiumType: l, product: n, storeListing: a } = e;
    return l === S.PremiumTypes.TIER_0
        ? (0, s.jsx)(M, {})
        : l === S.PremiumTypes.TIER_2
          ? (0, s.jsx)(F, {})
          : n?.type === i.R.BUNDLE
            ? (0, s.jsx)(f.a, { product: n, staticPreviewClassName: L.C0 })
            : null == t
              ? null
              : t.productLine in B
                ? (0, s.jsx)(O, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: a,
                  })
                : (0, s.jsx)(E.r$, { sku: t, slayerProductPreviewClassName: L.gw });
}
