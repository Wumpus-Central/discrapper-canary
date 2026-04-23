n.d(t, { DH: () => U, JW: () => v, WH: () => F, a6: () => D, f7: () => b, jw: () => G, oo: () => j });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    o = n.n(i),
    l = n(575593),
    s = n(17928),
    d = n(990078),
    u = n(834730),
    c = n(778712),
    _ = n(315629),
    p = n(403581),
    C = n(104510),
    h = n(323384),
    E = n(966327),
    m = n(14702),
    A = n(575926),
    I = n(548118),
    T = n(319820),
    y = n(328968),
    g = n(403362),
    S = n(371794),
    N = n(427262),
    f = n(652215),
    R = n(788868),
    L = n(327105),
    O = n(985018),
    P = n(617956);
function b(e) {
    let {
            header: t,
            headerIconSrc: n,
            headerIconComponent: i,
            bottomSubText: l,
            label: s,
            description: c,
            graphic: _,
            price: p,
            PriceIcon: C,
            priceTooltip: h,
            priceSubText: E,
            priceSubTextHasStrikethrough: m = !0,
            target: A,
            className: I,
        } = e,
        T = (0, r.jsx)(M, { target: A }),
        y = a.useMemo(() => {
            let e = (0, r.jsxs)(u.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: P.nw,
                children: [null != C && (0, r.jsx)(C, { size: "xs" }), p],
            });
            return null != h
                ? (0, r.jsx)(d.m, { text: h, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [C, p, h]),
        g = a.useMemo(
            () =>
                null != i
                    ? (0, r.jsx)("span", { className: P.nr, children: i })
                    : null != n
                      ? (0, r.jsx)("img", { alt: "", src: n, className: P.nr })
                      : null,
            [n, i],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(P.kL, I),
                children: [
                    null != _ && (0, r.jsx)("div", { className: P.Kk, children: _ }),
                    (0, r.jsxs)("div", {
                        className: P.Qs,
                        children: [
                            null != t &&
                                (0, r.jsxs)(u.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    className: P.wx,
                                    children: [g, t],
                                }),
                            (0, r.jsxs)("div", {
                                className: P.zH,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: P.Qq,
                                        children: [
                                            (0, r.jsx)(u.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                lineClamp: 2,
                                                children: s,
                                            }),
                                            null != c &&
                                                (0, r.jsx)(u.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: c,
                                                }),
                                            null != T &&
                                                (0, r.jsx)(u.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: T,
                                                }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: P.p6,
                                        children: [
                                            y,
                                            null != E &&
                                                (0, r.jsx)(u.E, {
                                                    variant: m ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: o()(P.Jb, { [P.Nc]: m }),
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
            null != l &&
                (0, r.jsx)(u.E, { variant: "text-sm/medium", color: "text-muted", className: P.dx, children: l }),
        ],
    });
}
function M(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return O.intl.format(L.default["2PiTTi"], {
                username: N.Ay.getUserTag(t.user),
                nickname: N.Ay.getName(t.user),
                avatar: (0, r.jsx)(E.A, { user: t.user, size: c._3.SIZE_16, className: P.RG }),
            });
        case "guildSubscription":
            return O.intl.format(L.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, r.jsx)(I.Ay, { guild: t.guild, size: I.Ay.Sizes.SMOL, className: P.RG }),
            });
        case "boost":
            return O.intl.format(L.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, r.jsx)(I.Ay, { guild: t.guild, size: I.Ay.Sizes.SMOL, className: P.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, g.xb)(t);
    }
}
function x(e) {
    let { color: t, Icon: n } = e;
    return (0, r.jsx)(_.h, {
        color: t,
        className: P.nC,
        children: (0, r.jsx)(n, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function v() {
    return (0, r.jsx)(x, { color: "nitro-pink", Icon: p.t });
}
function U() {
    return (0, r.jsx)(x, { color: "nitro-green", Icon: p.t });
}
function D() {
    return (0, r.jsx)(x, { color: "pink", Icon: C._ });
}
function G() {
    return (0, r.jsx)(h.k, { size: "lg", color: "var(--icon-muted)" });
}
function j() {
    return (0, r.jsx)("div", { className: P.CX, children: (0, r.jsx)(p.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let w = {
    [f.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [f.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [f.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function B(e) {
    let { skuId: t, productLine: n, applicationId: i, storeListing: o } = e,
        l = (0, s.bG)([y.A], () => o ?? y.A.getForSKU(t), [o, t]),
        d = w[n].preferredAssetType,
        u = a.useMemo(
            () =>
                null == l
                    ? null
                    : "headerBackground" === d
                      ? (l.headerBackground ?? l.thumbnail)
                      : (l.thumbnail ?? l.headerBackground),
            [d, l],
        );
    return null != u
        ? (0, r.jsx)("img", { src: (0, S.YE)(i, u, 64), alt: "", className: P.gw })
        : n === f.EZt.APPLICATION
          ? (0, r.jsx)(G, {})
          : n === f.EZt.GUILD_ROLE
            ? (0, r.jsx)(A.h, { width: 48, height: 48 })
            : null;
}
function F(e) {
    let { sku: t, premiumType: n, product: a, storeListing: i } = e;
    return n === R.PremiumTypes.TIER_0
        ? (0, r.jsx)(U, {})
        : n === R.PremiumTypes.TIER_2
          ? (0, r.jsx)(v, {})
          : a?.type === l.R.BUNDLE
            ? (0, r.jsx)(m.a, { product: a, fallbackLabel: null, staticPreviewClassName: P.C0 })
            : null == t
              ? null
              : t.productLine in w
                ? (0, r.jsx)(B, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: i,
                  })
                : (0, r.jsx)(T.r$, { sku: t, slayerProductPreviewClassName: P.gw });
}
