"use strict";
n.d(t, { DH: () => k, JW: () => x, WH: () => j, a6: () => U, f7: () => w, jw: () => G, oo: () => F });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(575593),
    l = n(17928),
    u = n(661531),
    c = n(990078),
    d = n(834730),
    _ = n(778712),
    h = n(315629),
    f = n(403581),
    p = n(104510),
    E = n(323384),
    m = n(966327),
    g = n(456839),
    A = n(575926),
    I = n(548118),
    T = n(319820),
    S = n(576243),
    y = n(328968),
    C = n(403362),
    N = n(371794),
    v = n(427262),
    R = n(652215),
    O = n(788868),
    b = n(327105),
    D = n(375708),
    L = n(617956);
function w(e) {
    let {
            header: t,
            headerIconSrc: n,
            headerIconComponent: s,
            bottomSubText: o,
            label: l,
            description: u,
            graphic: _,
            price: h,
            priceStrikethroughText: f,
            PriceIcon: p,
            priceTooltip: E,
            priceSubText: m,
            priceSubTextHasStrikethrough: g = !0,
            omitDefaultIconBackground: A,
            target: I,
            className: T,
        } = e,
        S = (0, i.jsx)(M, { target: I }),
        y = r.useMemo(() => {
            let e = (0, i.jsxs)(d.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: L.nw,
                children: [
                    null != p && (0, i.jsx)(p, { size: "xs" }),
                    null != f &&
                        (0, i.jsx)(d.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "text-subtle",
                            className: L.EF,
                            children: f,
                        }),
                    h,
                ],
            });
            return null != E
                ? (0, i.jsx)(c.m, { text: E, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [p, h, f, E]),
        C = r.useMemo(
            () =>
                null != s
                    ? (0, i.jsx)("span", { className: L.nr, children: s })
                    : null != n
                      ? (0, i.jsx)("img", { alt: "", src: n, className: L.nr })
                      : null,
            [n, s],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(L.kL, T),
                children: [
                    null != _ && (0, i.jsx)("div", { className: a()(L.Kk, { [L.H9]: !A }), children: _ }),
                    (0, i.jsxs)("div", {
                        className: L.Qs,
                        children: [
                            null != t &&
                                (0, i.jsxs)(d.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    className: L.wx,
                                    children: [C, t],
                                }),
                            (0, i.jsxs)("div", {
                                className: L.zH,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: L.Qq,
                                        children: [
                                            (0, i.jsx)(d.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                lineClamp: 2,
                                                children: l,
                                            }),
                                            null != u &&
                                                (0, i.jsx)(d.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: u,
                                                }),
                                            null != S &&
                                                (0, i.jsx)(d.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: S,
                                                }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: L.p6,
                                        children: [
                                            y,
                                            null != m &&
                                                (0, i.jsx)(d.E, {
                                                    variant: g ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: a()(L.Jb, { [L.Nc]: g }),
                                                    children: m,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != o &&
                (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", className: L.dx, children: o }),
        ],
    });
}
function M(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return D.intl.format(b.default["2PiTTi"], {
                username: v.Ay.getUserTag(t.user),
                nickname: v.Ay.getName(t.user),
                avatar: (0, i.jsx)(m.A, { user: t.user, size: _._3.SIZE_16, className: L.RG }),
            });
        case "guildSubscription":
            return D.intl.format(b.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, i.jsx)(I.Ay, { guild: t.guild, size: I.Ay.Sizes.SMOL, className: L.RG }),
            });
        case "boost":
            return D.intl.format(b.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, i.jsx)(I.Ay, { guild: t.guild, size: I.Ay.Sizes.SMOL, className: L.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, C.xb)(t);
    }
}
function P(e) {
    let { color: t, Icon: n } = e;
    return (0, i.jsx)(h.h, {
        color: t,
        className: L.nC,
        children: (0, i.jsx)(n, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function x() {
    return (0, i.jsx)(S.A, { size: 64, iconSize: 32, color: u.A.unsafe_rawColors.NEUTRAL_1 });
}
function k() {
    return (0, i.jsx)("div", {
        className: L.Ty,
        children: (0, i.jsx)(f.t, { size: "lg", color: u.A.colors.ICON_DEFAULT }),
    });
}
function U() {
    return (0, i.jsx)(P, { color: "pink", Icon: p._ });
}
function G() {
    return (0, i.jsx)(E.k, { size: "lg", color: "var(--icon-muted)" });
}
function F() {
    return (0, i.jsx)("div", { className: L.CX, children: (0, i.jsx)(f.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let V = {
    [R.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [R.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [R.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function B(e) {
    let { skuId: t, productLine: n, applicationId: s, storeListing: a } = e,
        o = (0, l.bG)([y.A], () => a ?? y.A.getForSKU(t), [a, t]),
        u = V[n].preferredAssetType,
        c = r.useMemo(
            () =>
                null == o
                    ? null
                    : "headerBackground" === u
                      ? (o.headerBackground ?? o.thumbnail)
                      : (o.thumbnail ?? o.headerBackground),
            [u, o],
        );
    return null != c
        ? (0, i.jsx)("img", { src: (0, N.YE)(s, c, 64), alt: "", className: L.gw })
        : n === R.EZt.APPLICATION
          ? (0, i.jsx)(G, {})
          : n === R.EZt.GUILD_ROLE
            ? (0, i.jsx)(A.h, { width: 48, height: 48 })
            : null;
}
function j(e) {
    let { sku: t, premiumType: n, product: r, storeListing: s } = e;
    return n === O.PremiumTypes.TIER_0
        ? (0, i.jsx)(k, {})
        : n === O.PremiumTypes.TIER_2
          ? (0, i.jsx)(x, {})
          : r?.type === o.R.BUNDLE
            ? (0, i.jsx)(g.a, { product: r, staticPreviewClassName: L.C0 })
            : null == t
              ? null
              : t.productLine in V
                ? (0, i.jsx)(B, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: s,
                  })
                : (0, i.jsx)(T.r$, { sku: t, slayerProductPreviewClassName: L.gw });
}
