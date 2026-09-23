n.d(t, { DH: () => F, JW: () => M, WH: () => $, a6: () => G, f7: () => L, jw: () => O, oo: () => B });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(575593),
    o = n(17928),
    c = n(661531),
    d = n(834730),
    u = n(866665),
    m = n(939249),
    x = n(778712),
    j = n(315629),
    h = n(403581),
    v = n(104510),
    f = n(323384),
    p = n(966327),
    g = n(14702),
    E = n(575926),
    N = n(548118),
    b = n(319820),
    C = n(576243),
    I = n(328968),
    y = n(403362),
    T = n(371794),
    _ = n(427262),
    A = n(652215),
    D = n(202541),
    S = n(583741),
    k = n(375708),
    P = n(242695);
function L(e) {
    let {
            header: t,
            headerIconSrc: n,
            headerIconComponent: s,
            bottomSubText: i,
            label: o,
            description: c,
            graphic: x,
            price: j,
            priceStrikethroughText: h,
            PriceIcon: v,
            priceTooltip: f,
            priceSubText: p,
            priceSubTextHasStrikethrough: g = !0,
            omitDefaultIconBackground: E,
            target: N,
            onClick: b,
            className: C,
        } = e,
        I = (0, l.jsx)(R, { target: N }),
        y = r.useMemo(() => {
            let e = (0, l.jsxs)(d.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: P.nw,
                children: [
                    null != v && (0, l.jsx)(v, { size: "xs" }),
                    null != h &&
                        (0, l.jsx)(d.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "text-subtle",
                            className: P.EF,
                            children: h,
                        }),
                    j,
                ],
            });
            return null != f
                ? (0, l.jsx)(u.m, { text: f, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [v, j, h, f]),
        T = r.useMemo(
            () =>
                null != s
                    ? (0, l.jsx)("span", { className: P.nr, children: s })
                    : null != n
                      ? (0, l.jsx)("img", { alt: "", src: n, className: P.nr })
                      : null,
            [n, s],
        ),
        _ = (0, l.jsxs)(l.Fragment, {
            children: [
                null != x && (0, l.jsx)("div", { className: a()(P.Kk, { [P.H9]: !E }), children: x }),
                (0, l.jsxs)("div", {
                    className: P.Qs,
                    children: [
                        null != t &&
                            (0, l.jsxs)(d.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                lineClamp: 2,
                                className: P.wx,
                                children: [T, t],
                            }),
                        (0, l.jsxs)("div", {
                            className: P.zH,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: P.Qq,
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
                                        null != I &&
                                            (0, l.jsx)(d.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: I,
                                            }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: P.p6,
                                    children: [
                                        y,
                                        null != p &&
                                            (0, l.jsx)(d.E, {
                                                variant: g ? "text-xs/medium" : "text-sm/normal",
                                                color: "text-muted",
                                                className: a()(P.Jb, { [P.Nc]: g }),
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
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != b
                ? (0, l.jsx)(m.D, { className: a()(P.kL, P.vk, C), onClick: b, children: _ })
                : (0, l.jsx)("div", { className: a()(P.kL, C), children: _ }),
            null != i &&
                (0, l.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", className: P.dx, children: i }),
        ],
    });
}
function R(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return k.intl.format(S.default["2PiTTi"], {
                username: _.Ay.getUserTag(t.user),
                nickname: _.Ay.getName(t.user),
                avatar: (0, l.jsx)(p.A, { user: t.user, size: x._3.SIZE_16, className: P.RG }),
            });
        case "guildSubscription":
            return k.intl.format(S.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, l.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: P.RG }),
            });
        case "boost":
            return k.intl.format(S.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, l.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: P.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, y.xb)(t);
    }
}
function w(e) {
    let { color: t, Icon: n } = e;
    return (0, l.jsx)(j.h, {
        color: t,
        className: P.nC,
        children: (0, l.jsx)(n, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function M() {
    return (0, l.jsx)(C.A, { size: 64, iconSize: 32, color: c.A.unsafe_rawColors.NEUTRAL_1 });
}
function F() {
    return (0, l.jsx)("div", {
        className: P.Ty,
        children: (0, l.jsx)(h.t, { size: "lg", color: c.A.colors.ICON_DEFAULT }),
    });
}
function G() {
    return (0, l.jsx)(w, { color: "pink", Icon: v._ });
}
function O() {
    return (0, l.jsx)(f.k, { size: "lg", color: "var(--icon-muted)" });
}
function B() {
    return (0, l.jsx)("div", { className: P.CX, children: (0, l.jsx)(h.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let U = {
    [A.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [A.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [A.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function z(e) {
    let { skuId: t, productLine: n, applicationId: s, storeListing: a } = e,
        i = (0, o.bG)([I.A], () => a ?? I.A.getForSKU(t), [a, t]),
        c = U[n].preferredAssetType,
        d = r.useMemo(
            () =>
                null == i
                    ? null
                    : "headerBackground" === c
                      ? (i.headerBackground ?? i.thumbnail)
                      : (i.thumbnail ?? i.headerBackground),
            [c, i],
        );
    return null != d
        ? (0, l.jsx)("img", { src: (0, T.YE)(s, d, 64), alt: "", className: P.gw })
        : n === A.EZt.APPLICATION
          ? (0, l.jsx)(O, {})
          : n === A.EZt.GUILD_ROLE
            ? (0, l.jsx)(E.h, { width: 48, height: 48 })
            : null;
}
function $(e) {
    let { sku: t, premiumType: n, product: r, storeListing: s } = e;
    return n === D.PremiumTypes.TIER_0
        ? (0, l.jsx)(F, {})
        : n === D.PremiumTypes.TIER_2
          ? (0, l.jsx)(M, {})
          : r?.type === i.R.BUNDLE
            ? (0, l.jsx)(g.a, { product: r, staticPreviewClassName: P.C0 })
            : null == t
              ? null
              : t.productLine in U
                ? (0, l.jsx)(z, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: s,
                  })
                : (0, l.jsx)(b.r$, { sku: t, slayerProductPreviewClassName: P.gw });
}
