n.d(t, { DH: () => w, JW: () => G, WH: () => W, a6: () => M, f7: () => O, jw: () => F, oo: () => U });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(575593),
    o = n(17928),
    c = n(661531),
    d = n(834730),
    u = n(866665),
    m = n(939249),
    x = n(778712),
    f = n(315629),
    h = n(403581),
    p = n(104510),
    j = n(323384),
    v = n(966327),
    g = n(14702),
    E = n(575926),
    N = n(548118),
    T = n(319820),
    b = n(576243),
    A = n(328968),
    I = n(403362),
    C = n(371794),
    _ = n(427262),
    y = n(652215),
    D = n(202541),
    S = n(583741),
    P = n(375708),
    R = n(242695);
function O(e) {
    let {
            header: t,
            headerIconSrc: n,
            headerIconComponent: r,
            bottomSubText: i,
            label: o,
            description: c,
            graphic: x,
            price: f,
            priceStrikethroughText: h,
            PriceIcon: p,
            priceTooltip: j,
            priceSubText: v,
            priceSubTextHasStrikethrough: g = !0,
            omitDefaultIconBackground: E,
            target: N,
            onClick: T,
            className: b,
        } = e,
        A = (0, l.jsx)(L, { target: N }),
        I = a.useMemo(() => {
            let e = (0, l.jsxs)(d.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: R.nw,
                children: [
                    null != p && (0, l.jsx)(p, { size: "xs" }),
                    null != h &&
                        (0, l.jsx)(d.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "text-subtle",
                            className: R.EF,
                            children: h,
                        }),
                    f,
                ],
            });
            return null != j
                ? (0, l.jsx)(u.m, { text: j, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [p, f, h, j]),
        C = a.useMemo(
            () =>
                null != r
                    ? (0, l.jsx)("span", { className: R.nr, children: r })
                    : null != n
                      ? (0, l.jsx)("img", { alt: "", src: n, className: R.nr })
                      : null,
            [n, r],
        ),
        _ = (0, l.jsxs)(l.Fragment, {
            children: [
                null != x && (0, l.jsx)("div", { className: s()(R.Kk, { [R.H9]: !E }), children: x }),
                (0, l.jsxs)("div", {
                    className: R.Qs,
                    children: [
                        null != t &&
                            (0, l.jsxs)(d.E, {
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
                                        (0, l.jsx)(d.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            lineClamp: 2,
                                            children: o,
                                        }),
                                        null != c &&
                                            (0, l.jsx)(d.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 2,
                                                children: c,
                                            }),
                                        null != A &&
                                            (0, l.jsx)(d.E, {
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
                                        null != v &&
                                            (0, l.jsx)(d.E, {
                                                variant: g ? "text-xs/medium" : "text-sm/normal",
                                                color: "text-muted",
                                                className: s()(R.Jb, { [R.Nc]: g }),
                                                children: v,
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
            null != T
                ? (0, l.jsx)(m.D, { className: s()(R.kL, R.vk, b), onClick: T, children: _ })
                : (0, l.jsx)("div", { className: s()(R.kL, b), children: _ }),
            null != i &&
                (0, l.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", className: R.dx, children: i }),
        ],
    });
}
function L(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return P.intl.format(S.default["2PiTTi"], {
                username: _.Ay.getUserTag(t.user),
                nickname: _.Ay.getName(t.user),
                avatar: (0, l.jsx)(v.A, { user: t.user, size: x._3.SIZE_16, className: R.RG }),
            });
        case "guildSubscription":
            return P.intl.format(S.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, l.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: R.RG }),
            });
        case "boost":
            return P.intl.format(S.default["8imbq5"], {
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
    return (0, l.jsx)(b.A, { size: 64, iconSize: 32, color: c.A.unsafe_rawColors.NEUTRAL_1 });
}
function w() {
    return (0, l.jsx)("div", {
        className: R.Ty,
        children: (0, l.jsx)(h.t, { size: "lg", color: c.A.colors.ICON_DEFAULT }),
    });
}
function M() {
    return (0, l.jsx)(k, { color: "pink", Icon: p._ });
}
function F() {
    return (0, l.jsx)(j.k, { size: "lg", color: "var(--icon-muted)" });
}
function U() {
    return (0, l.jsx)("div", { className: R.CX, children: (0, l.jsx)(h.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let B = {
    [y.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [y.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [y.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function z(e) {
    let { skuId: t, productLine: n, applicationId: r, storeListing: s } = e,
        i = (0, o.bG)([A.A], () => s ?? A.A.getForSKU(t), [s, t]),
        c = B[n].preferredAssetType,
        d = a.useMemo(
            () =>
                null == i
                    ? null
                    : "headerBackground" === c
                      ? (i.headerBackground ?? i.thumbnail)
                      : (i.thumbnail ?? i.headerBackground),
            [c, i],
        );
    return null != d
        ? (0, l.jsx)("img", { src: (0, C.YE)(r, d, 64), alt: "", className: R.gw })
        : n === y.EZt.APPLICATION
          ? (0, l.jsx)(F, {})
          : n === y.EZt.GUILD_ROLE
            ? (0, l.jsx)(E.h, { width: 48, height: 48 })
            : null;
}
function W(e) {
    let { sku: t, premiumType: n, product: a, storeListing: r } = e;
    return n === D.PremiumTypes.TIER_0
        ? (0, l.jsx)(w, {})
        : n === D.PremiumTypes.TIER_2
          ? (0, l.jsx)(G, {})
          : a?.type === i.R.BUNDLE
            ? (0, l.jsx)(g.a, { product: a, staticPreviewClassName: R.C0 })
            : null == t
              ? null
              : t.productLine in B
                ? (0, l.jsx)(z, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: r,
                  })
                : (0, l.jsx)(T.r$, { sku: t, slayerProductPreviewClassName: R.gw });
}
