n.d(t, { DH: () => D, JW: () => P, WH: () => B, a6: () => M, f7: () => O, jw: () => F, oo: () => G });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(575593),
    o = n(311907),
    u = n(990078),
    c = n(834730),
    d = n(778712),
    _ = n(315629),
    p = n(403581),
    h = n(104510),
    m = n(323384),
    A = n(966327),
    f = n(14702),
    g = n(575926),
    E = n(263063),
    C = n(319820),
    I = n(328968),
    v = n(403362),
    y = n(371794),
    T = n(427262),
    x = n(652215),
    b = n(788868),
    S = n(327105),
    N = n(985018),
    L = n(617956);
function O(e) {
    let {
            header: t,
            headerIconSrc: n,
            headerIconComponent: i,
            bottomSubText: s,
            label: o,
            description: d,
            graphic: _,
            price: p,
            PriceIcon: h,
            priceTooltip: m,
            priceSubText: A,
            priceSubTextHasStrikethrough: f = !0,
            target: g,
            className: E,
        } = e,
        C = (0, r.jsx)(R, { target: g }),
        I = l.useMemo(() => {
            let e = (0, r.jsxs)(c.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: L.nw,
                children: [null != h && (0, r.jsx)(h, { size: "xs" }), p],
            });
            return null != m
                ? (0, r.jsx)(u.m, { text: m, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [h, p, m]),
        v = l.useMemo(
            () =>
                null != i
                    ? (0, r.jsx)("span", { className: L.nr, children: i })
                    : null != n
                      ? (0, r.jsx)("img", { alt: "", src: n, className: L.nr })
                      : null,
            [n, i],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(L.kL, E),
                children: [
                    null != _ && (0, r.jsx)("div", { className: L.Kk, children: _ }),
                    (0, r.jsxs)("div", {
                        className: L.Qs,
                        children: [
                            null != t &&
                                (0, r.jsxs)(c.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    className: L.wx,
                                    children: [v, t],
                                }),
                            (0, r.jsxs)("div", {
                                className: L.zH,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: L.Qq,
                                        children: [
                                            (0, r.jsx)(c.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                lineClamp: 2,
                                                children: o,
                                            }),
                                            null != d &&
                                                (0, r.jsx)(c.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: d,
                                                }),
                                            null != C &&
                                                (0, r.jsx)(c.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: C,
                                                }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: L.p6,
                                        children: [
                                            I,
                                            null != A &&
                                                (0, r.jsx)(c.E, {
                                                    variant: f ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: a()(L.Jb, { [L.Nc]: f }),
                                                    children: A,
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
                (0, r.jsx)(c.E, { variant: "text-sm/medium", color: "text-muted", className: L.dx, children: s }),
        ],
    });
}
function R(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return N.intl.format(S.default["2PiTTi"], {
                username: T.Ay.getUserTag(t.user),
                nickname: T.Ay.getName(t.user),
                avatar: (0, r.jsx)(A.A, { user: t.user, size: d._3.SIZE_16, className: L.RG }),
            });
        case "guildSubscription":
            return N.intl.format(S.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, r.jsx)(E.Ay, { guild: t.guild, size: E.Ay.Sizes.SMOL, className: L.RG }),
            });
        case "boost":
            return N.intl.format(S.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, r.jsx)(E.Ay, { guild: t.guild, size: E.Ay.Sizes.SMOL, className: L.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, v.xb)(t);
    }
}
function j(e) {
    let { color: t, Icon: n } = e;
    return (0, r.jsx)(_.h, {
        color: t,
        className: L.nC,
        children: (0, r.jsx)(n, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function P() {
    return (0, r.jsx)(j, { color: "nitro-pink", Icon: p.t });
}
function D() {
    return (0, r.jsx)(j, { color: "nitro-green", Icon: p.t });
}
function M() {
    return (0, r.jsx)(j, { color: "pink", Icon: h._ });
}
function F() {
    return (0, r.jsx)(m.k, { size: "lg", color: "var(--icon-muted)" });
}
function G() {
    return (0, r.jsx)("div", { className: L.CX, children: (0, r.jsx)(p.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let w = {
    [x.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [x.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [x.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function U(e) {
    let { skuId: t, productLine: n, applicationId: i, storeListing: a } = e,
        s = (0, o.bG)([I.A], () => a ?? I.A.getForSKU(t), [a, t]),
        u = w[n].preferredAssetType,
        c = l.useMemo(
            () =>
                null == s
                    ? null
                    : "headerBackground" === u
                      ? (s.headerBackground ?? s.thumbnail)
                      : (s.thumbnail ?? s.headerBackground),
            [u, s],
        );
    return null != c
        ? (0, r.jsx)("img", { src: (0, y.YE)(i, c, 64), alt: "", className: L.gw })
        : n === x.EZt.APPLICATION
          ? (0, r.jsx)(F, {})
          : n === x.EZt.GUILD_ROLE
            ? (0, r.jsx)(g.h, { width: 48, height: 48 })
            : null;
}
function B(e) {
    let { sku: t, premiumType: n, product: l, storeListing: i } = e;
    return n === b.PremiumTypes.TIER_0
        ? (0, r.jsx)(D, {})
        : n === b.PremiumTypes.TIER_2
          ? (0, r.jsx)(P, {})
          : l?.type === s.R.BUNDLE
            ? (0, r.jsx)(f.a, { product: l, fallbackLabel: null, staticPreviewClassName: L.C0 })
            : null == t
              ? null
              : t.productLine in w
                ? (0, r.jsx)(U, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: i,
                  })
                : (0, r.jsx)(C.r$, { sku: t, slayerProductPreviewClassName: L.gw });
}
