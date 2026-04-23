"use strict";
n.d(t, { DH: () => P, JW: () => M, WH: () => V, a6: () => x, f7: () => D, jw: () => k, oo: () => U });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(575593),
    l = n(311907),
    u = n(990078),
    c = n(834730),
    d = n(778712),
    _ = n(315629),
    f = n(403581),
    p = n(104510),
    h = n(323384),
    E = n(966327),
    m = n(14702),
    g = n(575926),
    A = n(263063),
    I = n(319820),
    T = n(328968),
    S = n(403362),
    y = n(371794),
    N = n(427262),
    v = n(652215),
    C = n(788868),
    O = n(327105),
    R = n(985018),
    b = n(617956);
function D(e) {
    let {
            header: t,
            headerIconSrc: n,
            headerIconComponent: s,
            bottomSubText: o,
            label: l,
            description: d,
            graphic: _,
            price: f,
            PriceIcon: p,
            priceTooltip: h,
            priceSubText: E,
            priceSubTextHasStrikethrough: m = !0,
            target: g,
            className: A,
        } = e,
        I = (0, r.jsx)(L, { target: g }),
        T = i.useMemo(() => {
            let e = (0, r.jsxs)(c.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: b.nw,
                children: [null != p && (0, r.jsx)(p, { size: "xs" }), f],
            });
            return null != h
                ? (0, r.jsx)(u.m, { text: h, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [p, f, h]),
        S = i.useMemo(
            () =>
                null != s
                    ? (0, r.jsx)("span", { className: b.nr, children: s })
                    : null != n
                      ? (0, r.jsx)("img", { alt: "", src: n, className: b.nr })
                      : null,
            [n, s],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(b.kL, A),
                children: [
                    null != _ && (0, r.jsx)("div", { className: b.Kk, children: _ }),
                    (0, r.jsxs)("div", {
                        className: b.Qs,
                        children: [
                            null != t &&
                                (0, r.jsxs)(c.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    className: b.wx,
                                    children: [S, t],
                                }),
                            (0, r.jsxs)("div", {
                                className: b.zH,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: b.Qq,
                                        children: [
                                            (0, r.jsx)(c.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                lineClamp: 2,
                                                children: l,
                                            }),
                                            null != d &&
                                                (0, r.jsx)(c.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: d,
                                                }),
                                            null != I &&
                                                (0, r.jsx)(c.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: I,
                                                }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: b.p6,
                                        children: [
                                            T,
                                            null != E &&
                                                (0, r.jsx)(c.E, {
                                                    variant: m ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: a()(b.Jb, { [b.Nc]: m }),
                                                    children: E,
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
                (0, r.jsx)(c.E, { variant: "text-sm/medium", color: "text-muted", className: b.dx, children: o }),
        ],
    });
}
function L(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return R.intl.format(O.default["2PiTTi"], {
                username: N.Ay.getUserTag(t.user),
                nickname: N.Ay.getName(t.user),
                avatar: (0, r.jsx)(E.A, { user: t.user, size: d._3.SIZE_16, className: b.RG }),
            });
        case "guildSubscription":
            return R.intl.format(O.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, r.jsx)(A.Ay, { guild: t.guild, size: A.Ay.Sizes.SMOL, className: b.RG }),
            });
        case "boost":
            return R.intl.format(O.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, r.jsx)(A.Ay, { guild: t.guild, size: A.Ay.Sizes.SMOL, className: b.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, S.xb)(t);
    }
}
function w(e) {
    let { color: t, Icon: n } = e;
    return (0, r.jsx)(_.h, {
        color: t,
        className: b.nC,
        children: (0, r.jsx)(n, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function M() {
    return (0, r.jsx)(w, { color: "nitro-pink", Icon: f.t });
}
function P() {
    return (0, r.jsx)(w, { color: "nitro-green", Icon: f.t });
}
function x() {
    return (0, r.jsx)(w, { color: "pink", Icon: p._ });
}
function k() {
    return (0, r.jsx)(h.k, { size: "lg", color: "var(--icon-muted)" });
}
function U() {
    return (0, r.jsx)("div", { className: b.CX, children: (0, r.jsx)(f.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let G = {
    [v.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [v.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [v.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function F(e) {
    let { skuId: t, productLine: n, applicationId: s, storeListing: a } = e,
        o = (0, l.bG)([T.A], () => a ?? T.A.getForSKU(t), [a, t]),
        u = G[n].preferredAssetType,
        c = i.useMemo(
            () =>
                null == o
                    ? null
                    : "headerBackground" === u
                      ? (o.headerBackground ?? o.thumbnail)
                      : (o.thumbnail ?? o.headerBackground),
            [u, o],
        );
    return null != c
        ? (0, r.jsx)("img", { src: (0, y.YE)(s, c, 64), alt: "", className: b.gw })
        : n === v.EZt.APPLICATION
          ? (0, r.jsx)(k, {})
          : n === v.EZt.GUILD_ROLE
            ? (0, r.jsx)(g.h, { width: 48, height: 48 })
            : null;
}
function V(e) {
    let { sku: t, premiumType: n, product: i, storeListing: s } = e;
    return n === C.PremiumTypes.TIER_0
        ? (0, r.jsx)(P, {})
        : n === C.PremiumTypes.TIER_2
          ? (0, r.jsx)(M, {})
          : i?.type === o.R.BUNDLE
            ? (0, r.jsx)(m.a, { product: i, fallbackLabel: null, staticPreviewClassName: b.C0 })
            : null == t
              ? null
              : t.productLine in G
                ? (0, r.jsx)(F, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: s,
                  })
                : (0, r.jsx)(I.r$, { sku: t, slayerProductPreviewClassName: b.gw });
}
