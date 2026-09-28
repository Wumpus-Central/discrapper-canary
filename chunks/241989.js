n.d(t, { DH: () => M, JW: () => L, WH: () => W, a6: () => O, f7: () => G, jw: () => F, oo: () => U });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(575593),
    o = n(17928),
    c = n(661531),
    u = n(834730),
    d = n(866665),
    m = n(939249),
    x = n(778712),
    f = n(315629),
    h = n(403581),
    p = n(104510),
    v = n(323384),
    j = n(966327),
    g = n(14702),
    E = n(575926),
    b = n(548118),
    N = n(319820),
    T = n(576243),
    C = n(328968),
    y = n(403362),
    I = n(371794),
    _ = n(427262),
    D = n(652215),
    A = n(202541),
    S = n(583741),
    P = n(375708),
    k = n(242695);
function G(e) {
    let {
            header: t,
            headerIconSrc: n,
            headerIconComponent: a,
            bottomSubText: s,
            label: o,
            description: c,
            graphic: x,
            price: f,
            priceStrikethroughText: h,
            PriceIcon: p,
            priceTooltip: v,
            priceSubText: j,
            priceSubTextHasStrikethrough: g = !0,
            omitDefaultIconBackground: E,
            target: b,
            onClick: N,
            className: T,
        } = e,
        C = (0, l.jsx)(R, { target: b }),
        y = r.useMemo(() => {
            let e = (0, l.jsxs)(u.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: k.nw,
                children: [
                    null != p && (0, l.jsx)(p, { size: "xs" }),
                    null != h &&
                        (0, l.jsx)(u.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "text-subtle",
                            className: k.EF,
                            children: h,
                        }),
                    f,
                ],
            });
            return null != v
                ? (0, l.jsx)(d.m, { text: v, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [p, f, h, v]),
        I = r.useMemo(
            () =>
                null != a
                    ? (0, l.jsx)("span", { className: k.nr, children: a })
                    : null != n
                      ? (0, l.jsx)("img", { alt: "", src: n, className: k.nr })
                      : null,
            [n, a],
        ),
        _ = (0, l.jsxs)(l.Fragment, {
            children: [
                null != x && (0, l.jsx)("div", { className: i()(k.Kk, { [k.H9]: !E }), children: x }),
                (0, l.jsxs)("div", {
                    className: k.Qs,
                    children: [
                        null != t &&
                            (0, l.jsxs)(u.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                lineClamp: 2,
                                className: k.wx,
                                children: [I, t],
                            }),
                        (0, l.jsxs)("div", {
                            className: k.zH,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: k.Qq,
                                    children: [
                                        (0, l.jsx)(u.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            lineClamp: 2,
                                            children: o,
                                        }),
                                        null != c &&
                                            (0, l.jsx)(u.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 2,
                                                children: c,
                                            }),
                                        null != C &&
                                            (0, l.jsx)(u.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: C,
                                            }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: k.p6,
                                    children: [
                                        y,
                                        null != j &&
                                            (0, l.jsx)(u.E, {
                                                variant: g ? "text-xs/medium" : "text-sm/normal",
                                                color: "text-muted",
                                                className: i()(k.Jb, { [k.Nc]: g }),
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
            null != N
                ? (0, l.jsx)(m.D, { className: i()(k.kL, k.vk, T), onClick: N, children: _ })
                : (0, l.jsx)("div", { className: i()(k.kL, T), children: _ }),
            null != s &&
                (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-muted", className: k.dx, children: s }),
        ],
    });
}
function R(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return P.intl.format(S.default["2PiTTi"], {
                username: _.Ay.getUserTag(t.user),
                nickname: _.Ay.getName(t.user),
                avatar: (0, l.jsx)(j.A, { user: t.user, size: x._3.SIZE_16, className: k.RG }),
            });
        case "guildSubscription":
            return P.intl.format(S.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, l.jsx)(b.Ay, { guild: t.guild, size: b.Ay.Sizes.SMOL, className: k.RG }),
            });
        case "boost":
            return P.intl.format(S.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, l.jsx)(b.Ay, { guild: t.guild, size: b.Ay.Sizes.SMOL, className: k.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, y.xb)(t);
    }
}
function w(e) {
    let { color: t, Icon: n } = e;
    return (0, l.jsx)(f.h, {
        color: t,
        className: k.nC,
        children: (0, l.jsx)(n, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function L() {
    return (0, l.jsx)(T.A, { size: 64, iconSize: 32, color: c.A.unsafe_rawColors.NEUTRAL_1 });
}
function M() {
    return (0, l.jsx)("div", {
        className: k.Ty,
        children: (0, l.jsx)(h.t, { size: "lg", color: c.A.colors.ICON_DEFAULT }),
    });
}
function O() {
    return (0, l.jsx)(w, { color: "pink", Icon: p._ });
}
function F() {
    return (0, l.jsx)(v.k, { size: "lg", color: "var(--icon-muted)" });
}
function U() {
    return (0, l.jsx)("div", { className: k.CX, children: (0, l.jsx)(h.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let B = {
    [D.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [D.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [D.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function z(e) {
    let { skuId: t, productLine: n, applicationId: a, storeListing: i } = e,
        s = (0, o.bG)([C.A], () => i ?? C.A.getForSKU(t), [i, t]),
        c = B[n].preferredAssetType,
        u = r.useMemo(
            () =>
                null == s
                    ? null
                    : "headerBackground" === c
                      ? (s.headerBackground ?? s.thumbnail)
                      : (s.thumbnail ?? s.headerBackground),
            [c, s],
        );
    return null != u
        ? (0, l.jsx)("img", { src: (0, I.YE)(a, u, 64), alt: "", className: k.gw })
        : n === D.EZt.APPLICATION
          ? (0, l.jsx)(F, {})
          : n === D.EZt.GUILD_ROLE
            ? (0, l.jsx)(E.h, { width: 48, height: 48 })
            : null;
}
function W(e) {
    let { sku: t, premiumType: n, product: r, storeListing: a } = e;
    return n === A.PremiumTypes.TIER_0
        ? (0, l.jsx)(M, {})
        : n === A.PremiumTypes.TIER_2
          ? (0, l.jsx)(L, {})
          : r?.type === s.R.BUNDLE
            ? (0, l.jsx)(g.a, { product: r, staticPreviewClassName: k.C0 })
            : null == t
              ? null
              : t.productLine in B
                ? (0, l.jsx)(z, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: a,
                  })
                : (0, l.jsx)(N.r$, { sku: t, slayerProductPreviewClassName: k.gw });
}
