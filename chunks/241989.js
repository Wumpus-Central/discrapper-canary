l.d(t, { DH: () => w, JW: () => U, WH: () => W, a6: () => R, f7: () => k, jw: () => M, oo: () => F });
var n = l(477900),
    r = l(582128),
    i = l(503698),
    s = l.n(i),
    a = l(575593),
    c = l(17928),
    u = l(661531),
    o = l(834730),
    d = l(866665),
    m = l(939249),
    x = l(778712),
    h = l(315629),
    p = l(403581),
    v = l(104510),
    j = l(323384),
    f = l(966327),
    g = l(14702),
    N = l(575926),
    E = l(548118),
    b = l(319820),
    T = l(576243),
    S = l(328968),
    A = l(403362),
    C = l(371794),
    y = l(427262),
    D = l(652215),
    P = l(202541),
    I = l(583741),
    _ = l(375708),
    G = l(242695);
function k(e) {
    let {
            header: t,
            headerIconSrc: l,
            headerIconComponent: i,
            bottomSubText: a,
            label: c,
            description: u,
            graphic: x,
            price: h,
            priceStrikethroughText: p,
            PriceIcon: v,
            priceTooltip: j,
            priceSubText: f,
            priceSubTextHasStrikethrough: g = !0,
            omitDefaultIconBackground: N,
            target: E,
            onClick: b,
            className: T,
        } = e,
        S = (0, n.jsx)(L, { target: E }),
        A = r.useMemo(() => {
            let e = (0, n.jsxs)(o.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: G.nw,
                children: [
                    null != v && (0, n.jsx)(v, { size: "xs" }),
                    null != p &&
                        (0, n.jsx)(o.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "text-subtle",
                            className: G.EF,
                            children: p,
                        }),
                    h,
                ],
            });
            return null != j
                ? (0, n.jsx)(d.m, { text: j, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [v, h, p, j]),
        C = r.useMemo(
            () =>
                null != i
                    ? (0, n.jsx)("span", { className: G.nr, children: i })
                    : null != l
                      ? (0, n.jsx)("img", { alt: "", src: l, className: G.nr })
                      : null,
            [l, i],
        ),
        y = (0, n.jsxs)(n.Fragment, {
            children: [
                null != x && (0, n.jsx)("div", { className: s()(G.Kk, { [G.H9]: !N }), children: x }),
                (0, n.jsxs)("div", {
                    className: G.Qs,
                    children: [
                        null != t &&
                            (0, n.jsxs)(o.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                lineClamp: 2,
                                className: G.wx,
                                children: [C, t],
                            }),
                        (0, n.jsxs)("div", {
                            className: G.zH,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: G.Qq,
                                    children: [
                                        (0, n.jsx)(o.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            lineClamp: 2,
                                            children: c,
                                        }),
                                        null != u &&
                                            (0, n.jsx)(o.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 2,
                                                children: u,
                                            }),
                                        null != S &&
                                            (0, n.jsx)(o.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: S,
                                            }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: G.p6,
                                    children: [
                                        A,
                                        null != f &&
                                            (0, n.jsx)(o.E, {
                                                variant: g ? "text-xs/medium" : "text-sm/normal",
                                                color: "text-muted",
                                                className: s()(G.Jb, { [G.Nc]: g }),
                                                children: f,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != b
                ? (0, n.jsx)(m.D, { className: s()(G.kL, G.vk, T), onClick: b, children: y })
                : (0, n.jsx)("div", { className: s()(G.kL, T), children: y }),
            null != a &&
                (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", className: G.dx, children: a }),
        ],
    });
}
function L(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return _.intl.format(I.default["2PiTTi"], {
                username: y.Ay.getUserTag(t.user),
                nickname: y.Ay.getName(t.user),
                avatar: (0, n.jsx)(f.A, { user: t.user, size: x._3.SIZE_16, className: G.RG }),
            });
        case "guildSubscription":
            return _.intl.format(I.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, n.jsx)(E.Ay, { guild: t.guild, size: E.Ay.Sizes.SMOL, className: G.RG }),
            });
        case "boost":
            return _.intl.format(I.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, n.jsx)(E.Ay, { guild: t.guild, size: E.Ay.Sizes.SMOL, className: G.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, A.xb)(t);
    }
}
function O(e) {
    let { color: t, Icon: l } = e;
    return (0, n.jsx)(h.h, {
        color: t,
        className: G.nC,
        children: (0, n.jsx)(l, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function U() {
    return (0, n.jsx)(T.A, { size: 64, iconSize: 32, color: u.A.unsafe_rawColors.NEUTRAL_1 });
}
function w() {
    return (0, n.jsx)("div", {
        className: G.Ty,
        children: (0, n.jsx)(p.t, { size: "lg", color: u.A.colors.ICON_DEFAULT }),
    });
}
function R() {
    return (0, n.jsx)(O, { color: "pink", Icon: v._ });
}
function M() {
    return (0, n.jsx)(j.k, { size: "lg", color: "var(--icon-muted)" });
}
function F() {
    return (0, n.jsx)("div", { className: G.CX, children: (0, n.jsx)(p.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let z = {
    [D.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [D.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [D.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function B(e) {
    let { skuId: t, productLine: l, applicationId: i, storeListing: s } = e,
        a = (0, c.bG)([S.A], () => s ?? S.A.getForSKU(t), [s, t]),
        u = z[l].preferredAssetType,
        o = r.useMemo(
            () =>
                null == a
                    ? null
                    : "headerBackground" === u
                      ? (a.headerBackground ?? a.thumbnail)
                      : (a.thumbnail ?? a.headerBackground),
            [u, a],
        );
    return null != o
        ? (0, n.jsx)("img", { src: (0, C.YE)(i, o, 64), alt: "", className: G.gw })
        : l === D.EZt.APPLICATION
          ? (0, n.jsx)(M, {})
          : l === D.EZt.GUILD_ROLE
            ? (0, n.jsx)(N.h, { width: 48, height: 48 })
            : null;
}
function W(e) {
    let { sku: t, premiumType: l, product: r, storeListing: i } = e;
    return l === P.PremiumTypes.TIER_0
        ? (0, n.jsx)(w, {})
        : l === P.PremiumTypes.TIER_2
          ? (0, n.jsx)(U, {})
          : r?.type === a.R.BUNDLE
            ? (0, n.jsx)(g.a, { product: r, staticPreviewClassName: G.C0 })
            : null == t
              ? null
              : t.productLine in z
                ? (0, n.jsx)(B, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: i,
                  })
                : (0, n.jsx)(b.r$, { sku: t, slayerProductPreviewClassName: G.gw });
}
