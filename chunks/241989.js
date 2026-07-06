l.d(t, { DH: () => F, JW: () => D, WH: () => O, a6: () => P, f7: () => L, jw: () => U, oo: () => G });
var s = l(627968),
    n = l(64700),
    a = l(503698),
    r = l.n(a),
    i = l(575593),
    d = l(17928),
    c = l(661531),
    u = l(990078),
    o = l(834730),
    m = l(778712),
    x = l(315629),
    j = l(403581),
    h = l(104510),
    v = l(323384),
    g = l(966327),
    p = l(456839),
    f = l(575926),
    N = l(548118),
    b = l(319820),
    E = l(576243),
    C = l(328968),
    T = l(403362),
    y = l(371794),
    A = l(427262),
    k = l(652215),
    w = l(202541),
    I = l(327105),
    S = l(375708),
    _ = l(617956);
function L(e) {
    let {
            header: t,
            headerIconSrc: l,
            headerIconComponent: a,
            bottomSubText: i,
            label: d,
            description: c,
            graphic: m,
            price: x,
            priceStrikethroughText: j,
            PriceIcon: h,
            priceTooltip: v,
            priceSubText: g,
            priceSubTextHasStrikethrough: p = !0,
            omitDefaultIconBackground: f,
            target: N,
            className: b,
        } = e,
        E = (0, s.jsx)(z, { target: N }),
        C = n.useMemo(() => {
            let e = (0, s.jsxs)(o.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: _.nw,
                children: [
                    null != h && (0, s.jsx)(h, { size: "xs" }),
                    null != j &&
                        (0, s.jsx)(o.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "text-subtle",
                            className: _.EF,
                            children: j,
                        }),
                    x,
                ],
            });
            return null != v
                ? (0, s.jsx)(u.m, { text: v, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [h, x, j, v]),
        T = n.useMemo(
            () =>
                null != a
                    ? (0, s.jsx)("span", { className: _.nr, children: a })
                    : null != l
                      ? (0, s.jsx)("img", { alt: "", src: l, className: _.nr })
                      : null,
            [l, a],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: r()(_.kL, b),
                children: [
                    null != m && (0, s.jsx)("div", { className: r()(_.Kk, { [_.H9]: !f }), children: m }),
                    (0, s.jsxs)("div", {
                        className: _.Qs,
                        children: [
                            null != t &&
                                (0, s.jsxs)(o.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    className: _.wx,
                                    children: [T, t],
                                }),
                            (0, s.jsxs)("div", {
                                className: _.zH,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: _.Qq,
                                        children: [
                                            (0, s.jsx)(o.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                lineClamp: 2,
                                                children: d,
                                            }),
                                            null != c &&
                                                (0, s.jsx)(o.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: c,
                                                }),
                                            null != E &&
                                                (0, s.jsx)(o.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: E,
                                                }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: _.p6,
                                        children: [
                                            C,
                                            null != g &&
                                                (0, s.jsx)(o.E, {
                                                    variant: p ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: r()(_.Jb, { [_.Nc]: p }),
                                                    children: g,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != i &&
                (0, s.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", className: _.dx, children: i }),
        ],
    });
}
function z(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return S.intl.format(I.default["2PiTTi"], {
                username: A.Ay.getUserTag(t.user),
                nickname: A.Ay.getName(t.user),
                avatar: (0, s.jsx)(g.A, { user: t.user, size: m._3.SIZE_16, className: _.RG }),
            });
        case "guildSubscription":
            return S.intl.format(I.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, s.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: _.RG }),
            });
        case "boost":
            return S.intl.format(I.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, s.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: _.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, T.xb)(t);
    }
}
function M(e) {
    let { color: t, Icon: l } = e;
    return (0, s.jsx)(x.h, {
        color: t,
        className: _.nC,
        children: (0, s.jsx)(l, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function D() {
    return (0, s.jsx)(E.A, { size: 64, iconSize: 32, color: c.A.unsafe_rawColors.NEUTRAL_1 });
}
function F() {
    return (0, s.jsx)("div", {
        className: _.Ty,
        children: (0, s.jsx)(j.t, { size: "lg", color: c.A.colors.ICON_DEFAULT }),
    });
}
function P() {
    return (0, s.jsx)(M, { color: "pink", Icon: h._ });
}
function U() {
    return (0, s.jsx)(v.k, { size: "lg", color: "var(--icon-muted)" });
}
function G() {
    return (0, s.jsx)("div", { className: _.CX, children: (0, s.jsx)(j.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let R = {
    [k.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [k.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [k.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function B(e) {
    let { skuId: t, productLine: l, applicationId: a, storeListing: r } = e,
        i = (0, d.bG)([C.A], () => r ?? C.A.getForSKU(t), [r, t]),
        c = R[l].preferredAssetType,
        u = n.useMemo(
            () =>
                null == i
                    ? null
                    : "headerBackground" === c
                      ? (i.headerBackground ?? i.thumbnail)
                      : (i.thumbnail ?? i.headerBackground),
            [c, i],
        );
    return null != u
        ? (0, s.jsx)("img", { src: (0, y.YE)(a, u, 64), alt: "", className: _.gw })
        : l === k.EZt.APPLICATION
          ? (0, s.jsx)(U, {})
          : l === k.EZt.GUILD_ROLE
            ? (0, s.jsx)(f.h, { width: 48, height: 48 })
            : null;
}
function O(e) {
    let { sku: t, premiumType: l, product: n, storeListing: a } = e;
    return l === w.PremiumTypes.TIER_0
        ? (0, s.jsx)(F, {})
        : l === w.PremiumTypes.TIER_2
          ? (0, s.jsx)(D, {})
          : n?.type === i.R.BUNDLE
            ? (0, s.jsx)(p.a, { product: n, staticPreviewClassName: _.C0 })
            : null == t
              ? null
              : t.productLine in R
                ? (0, s.jsx)(B, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: a,
                  })
                : (0, s.jsx)(b.r$, { sku: t, slayerProductPreviewClassName: _.gw });
}
