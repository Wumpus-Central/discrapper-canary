"use strict";
n.d(t, { DH: () => b, JW: () => O, WH: () => U, a6: () => D, f7: () => N, jw: () => L, oo: () => w });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(575593),
    l = n(311907),
    u = n(435371),
    c = n(397927),
    d = n(966327),
    _ = n(14702),
    f = n(575926),
    p = n(263063),
    h = n(319820),
    m = n(328968),
    E = n(403362),
    g = n(371794),
    A = n(427262),
    I = n(652215),
    T = n(788868),
    S = n(756366),
    y = n(985018),
    v = n(630356);
function N(e) {
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
            priceSubText: m,
            priceSubTextHasStrikethrough: E = !0,
            target: g,
            className: A,
        } = e,
        I = (0, r.jsx)(C, { target: g }),
        T = i.useMemo(() => {
            let e = (0, r.jsxs)(c.Text, {
                variant: "text-md/medium",
                color: "text-default",
                className: v.nw,
                children: [null != p && (0, r.jsx)(p, { size: "xs" }), f],
            });
            return null != h
                ? (0, r.jsx)(u.m_, { text: h, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [p, f, h]),
        S = i.useMemo(
            () =>
                null != s
                    ? (0, r.jsx)("span", { className: v.nr, children: s })
                    : null != n
                      ? (0, r.jsx)("img", { alt: "", src: n, className: v.nr })
                      : null,
            [n, s],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(v.kL, A),
                children: [
                    null != _ && (0, r.jsx)("div", { className: v.Kk, children: _ }),
                    (0, r.jsxs)("div", {
                        className: v.Qs,
                        children: [
                            null != t &&
                                (0, r.jsxs)(c.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    className: v.wx,
                                    children: [S, t],
                                }),
                            (0, r.jsxs)("div", {
                                className: v.zH,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: v.Qq,
                                        children: [
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                lineClamp: 2,
                                                children: l,
                                            }),
                                            null != d &&
                                                (0, r.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: d,
                                                }),
                                            null != I &&
                                                (0, r.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: I,
                                                }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: v.p6,
                                        children: [
                                            T,
                                            null != m &&
                                                (0, r.jsx)(c.Text, {
                                                    variant: E ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: a()(v.Jb, { [v.Nc]: E }),
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
                (0, r.jsx)(c.Text, { variant: "text-sm/medium", color: "text-muted", className: v.dx, children: o }),
        ],
    });
}
function C(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return y.intl.format(S.default["2PiTTi"], {
                username: A.Ay.getUserTag(t.user),
                nickname: A.Ay.getName(t.user),
                avatar: (0, r.jsx)(d.A, { user: t.user, size: c._3J.SIZE_16, className: v.RG }),
            });
        case "guildSubscription":
            return y.intl.format(S.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, r.jsx)(p.Ay, { guild: t.guild, size: p.Ay.Sizes.SMOL, className: v.RG }),
            });
        case "boost":
            return y.intl.format(S.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, r.jsx)(p.Ay, { guild: t.guild, size: p.Ay.Sizes.SMOL, className: v.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, E.xb)(t);
    }
}
function R(e) {
    let { color: t, Icon: n } = e;
    return (0, r.jsx)(c.hLv, {
        color: t,
        className: v.nC,
        children: (0, r.jsx)(n, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function O() {
    return (0, r.jsx)(R, { color: "nitro-pink", Icon: c.tvc });
}
function b() {
    return (0, r.jsx)(R, { color: "nitro-green", Icon: c.tvc });
}
function D() {
    return (0, r.jsx)(R, { color: "pink", Icon: c._Jp });
}
function L() {
    return (0, r.jsx)(c.k9F, { size: "lg", color: "var(--icon-muted)" });
}
function w() {
    return (0, r.jsx)("div", {
        className: v.CX,
        children: (0, r.jsx)(c.tvc, { size: "lg", color: "var(--neutral-1)" }),
    });
}
let M = {
        [I.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
        [I.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
        [I.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
    },
    x = (e) => e in M,
    P = (e, t) =>
        null == t
            ? null
            : "headerBackground" === e
              ? (t.headerBackground ?? t.thumbnail)
              : (t.thumbnail ?? t.headerBackground);
function k(e) {
    let { skuId: t, productLine: n, applicationId: s, storeListing: a } = e,
        o = (0, l.bG)([m.A], () => a ?? m.A.getForSKU(t), [a, t]),
        u = M[n].preferredAssetType,
        c = i.useMemo(() => P(u, o), [u, o]);
    return null != c
        ? (0, r.jsx)("img", { src: (0, g.YE)(s, c, 64), alt: "", className: v.gw })
        : n === I.EZt.APPLICATION
          ? (0, r.jsx)(L, {})
          : n === I.EZt.GUILD_ROLE
            ? (0, r.jsx)(f.h, { width: 48, height: 48 })
            : null;
}
function U(e) {
    let { sku: t, premiumType: n, product: i, storeListing: s } = e;
    return n === T.PremiumTypes.TIER_0
        ? (0, r.jsx)(b, {})
        : n === T.PremiumTypes.TIER_2
          ? (0, r.jsx)(O, {})
          : i?.type === o.R.BUNDLE
            ? (0, r.jsx)(_.a, { product: i, fallbackLabel: null })
            : null == t
              ? null
              : x(t.productLine)
                ? (0, r.jsx)(k, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: s,
                  })
                : (0, r.jsx)(h.r$, { sku: t, slayerProductPreviewClassName: v.gw });
}
