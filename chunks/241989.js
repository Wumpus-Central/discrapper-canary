n.d(t, { DH: () => w, JW: () => G, WH: () => W, a6: () => M, f7: () => L, jw: () => U, oo: () => F });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(575593),
    o = n(17928),
    u = n(661531),
    c = n(834730),
    d = n(866665),
    m = n(939249),
    x = n(778712),
    f = n(315629),
    p = n(403581),
    h = n(104510),
    v = n(323384),
    j = n(966327),
    g = n(14702),
    E = n(575926),
    N = n(548118),
    b = n(319820),
    T = n(576243),
    A = n(328968),
    I = n(403362),
    C = n(371794),
    _ = n(427262),
    y = n(652215),
    S = n(202541),
    D = n(649975),
    P = n(375708),
    R = n(242695);
function L(e) {
    let {
            header: t,
            headerIconSrc: n,
            headerIconComponent: a,
            bottomSubText: s,
            label: o,
            description: u,
            graphic: x,
            price: f,
            priceStrikethroughText: p,
            PriceIcon: h,
            priceTooltip: v,
            priceSubText: j,
            priceSubTextHasStrikethrough: g = !0,
            omitDefaultIconBackground: E,
            target: N,
            onClick: b,
            className: T,
        } = e,
        A = (0, l.jsx)(O, { target: N }),
        I = r.useMemo(() => {
            let e = (0, l.jsxs)(c.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: R.nw,
                children: [
                    null != h && (0, l.jsx)(h, { size: "xs" }),
                    null != p &&
                        (0, l.jsx)(c.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "text-subtle",
                            className: R.EF,
                            children: p,
                        }),
                    f,
                ],
            });
            return null != v
                ? (0, l.jsx)(d.m, { text: v, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [h, f, p, v]),
        C = r.useMemo(
            () =>
                null != a
                    ? (0, l.jsx)("span", { className: R.nr, children: a })
                    : null != n
                      ? (0, l.jsx)("img", { alt: "", src: n, className: R.nr })
                      : null,
            [n, a],
        ),
        _ = (0, l.jsxs)(l.Fragment, {
            children: [
                null != x && (0, l.jsx)("div", { className: i()(R.Kk, { [R.H9]: !E }), children: x }),
                (0, l.jsxs)("div", {
                    className: R.Qs,
                    children: [
                        null != t &&
                            (0, l.jsxs)(c.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                lineClamp: 2,
                                className: R.wx,
                                children: [C, t],
                            }),
                        (0, l.jsxs)("div", {
                            className: R.zH,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: R.Qq,
                                    children: [
                                        (0, l.jsx)(c.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            lineClamp: 2,
                                            children: o,
                                        }),
                                        null != u &&
                                            (0, l.jsx)(c.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 2,
                                                children: u,
                                            }),
                                        null != A &&
                                            (0, l.jsx)(c.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: A,
                                            }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: R.p6,
                                    children: [
                                        I,
                                        null != j &&
                                            (0, l.jsx)(c.E, {
                                                variant: g ? "text-xs/medium" : "text-sm/normal",
                                                color: "text-muted",
                                                className: i()(R.Jb, { [R.Nc]: g }),
                                                children: j,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != b
                ? (0, l.jsx)(m.D, { className: i()(R.kL, R.vk, T), onClick: b, children: _ })
                : (0, l.jsx)("div", { className: i()(R.kL, T), children: _ }),
            null != s &&
                (0, l.jsx)(c.E, { variant: "text-sm/medium", color: "text-muted", className: R.dx, children: s }),
        ],
    });
}
function O(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return P.intl.format(D.default["2PiTTi"], {
                username: _.Ay.getUserTag(t.user),
                nickname: _.Ay.getName(t.user),
                avatar: (0, l.jsx)(j.A, { user: t.user, size: x._3.SIZE_16, className: R.RG }),
            });
        case "guildSubscription":
            return P.intl.format(D.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, l.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: R.RG }),
            });
        case "boost":
            return P.intl.format(D.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, l.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: R.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, I.xb)(t);
    }
}
function k(e) {
    let { color: t, Icon: n } = e;
    return (0, l.jsx)(f.h, {
        color: t,
        className: R.nC,
        children: (0, l.jsx)(n, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function G() {
    return (0, l.jsx)(T.A, { size: 64, iconSize: 32, color: u.A.unsafe_rawColors.NEUTRAL_1 });
}
function w() {
    return (0, l.jsx)("div", {
        className: R.Ty,
        children: (0, l.jsx)(p.t, { size: "lg", color: u.A.colors.ICON_DEFAULT }),
    });
}
function M() {
    return (0, l.jsx)(k, { color: "pink", Icon: h._ });
}
function U() {
    return (0, l.jsx)(v.k, { size: "lg", color: "var(--icon-muted)" });
}
function F() {
    return (0, l.jsx)("div", { className: R.CX, children: (0, l.jsx)(p.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let B = {
    [y.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [y.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [y.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function z(e) {
    let { skuId: t, productLine: n, applicationId: a, storeListing: i } = e,
        s = (0, o.bG)([A.A], () => i ?? A.A.getForSKU(t), [i, t]),
        u = B[n].preferredAssetType,
        c = r.useMemo(
            () =>
                null == s
                    ? null
                    : "headerBackground" === u
                      ? (s.headerBackground ?? s.thumbnail)
                      : (s.thumbnail ?? s.headerBackground),
            [u, s],
        );
    return null != c
        ? (0, l.jsx)("img", { src: (0, C.YE)(a, c, 64), alt: "", className: R.gw })
        : n === y.EZt.APPLICATION
          ? (0, l.jsx)(U, {})
          : n === y.EZt.GUILD_ROLE
            ? (0, l.jsx)(E.h, { width: 48, height: 48 })
            : null;
}
function W(e) {
    let { sku: t, premiumType: n, product: r, storeListing: a } = e;
    return n === S.PremiumTypes.TIER_0
        ? (0, l.jsx)(w, {})
        : n === S.PremiumTypes.TIER_2
          ? (0, l.jsx)(G, {})
          : r?.type === s.R.BUNDLE
            ? (0, l.jsx)(g.a, { product: r, staticPreviewClassName: R.C0 })
            : null == t
              ? null
              : t.productLine in B
                ? (0, l.jsx)(z, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: a,
                  })
                : (0, l.jsx)(b.r$, { sku: t, slayerProductPreviewClassName: R.gw });
}
