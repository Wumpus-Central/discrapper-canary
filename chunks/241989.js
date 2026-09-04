l.d(t, { DH: () => w, JW: () => U, WH: () => $, a6: () => R, f7: () => G, jw: () => M, oo: () => F });
var n = l(477900),
    r = l(582128),
    i = l(503698),
    s = l.n(i),
    a = l(575593),
    u = l(17928),
    c = l(661531),
    o = l(834730),
    d = l(866665),
    m = l(939249),
    x = l(778712),
    h = l(315629),
    p = l(403581),
    v = l(104510),
    f = l(323384),
    j = l(966327),
    g = l(14702),
    b = l(575926),
    N = l(548118),
    E = l(319820),
    T = l(576243),
    S = l(328968),
    y = l(403362),
    A = l(371794),
    C = l(427262),
    D = l(652215),
    I = l(202541),
    P = l(583741),
    k = l(375708),
    _ = l(242695);
function G(e) {
    let {
            header: t,
            headerIconSrc: l,
            headerIconComponent: i,
            bottomSubText: a,
            label: u,
            description: c,
            graphic: x,
            price: h,
            priceStrikethroughText: p,
            PriceIcon: v,
            priceTooltip: f,
            priceSubText: j,
            priceSubTextHasStrikethrough: g = !0,
            omitDefaultIconBackground: b,
            target: N,
            onClick: E,
            className: T,
        } = e,
        S = (0, n.jsx)(L, { target: N }),
        y = r.useMemo(() => {
            let e = (0, n.jsxs)(o.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: _.nw,
                children: [
                    null != v && (0, n.jsx)(v, { size: "xs" }),
                    null != p &&
                        (0, n.jsx)(o.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "text-subtle",
                            className: _.EF,
                            children: p,
                        }),
                    h,
                ],
            });
            return null != f
                ? (0, n.jsx)(d.m, { text: f, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [v, h, p, f]),
        A = r.useMemo(
            () =>
                null != i
                    ? (0, n.jsx)("span", { className: _.nr, children: i })
                    : null != l
                      ? (0, n.jsx)("img", { alt: "", src: l, className: _.nr })
                      : null,
            [l, i],
        ),
        C = (0, n.jsxs)(n.Fragment, {
            children: [
                null != x && (0, n.jsx)("div", { className: s()(_.Kk, { [_.H9]: !b }), children: x }),
                (0, n.jsxs)("div", {
                    className: _.Qs,
                    children: [
                        null != t &&
                            (0, n.jsxs)(o.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                lineClamp: 2,
                                className: _.wx,
                                children: [A, t],
                            }),
                        (0, n.jsxs)("div", {
                            className: _.zH,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: _.Qq,
                                    children: [
                                        (0, n.jsx)(o.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            lineClamp: 2,
                                            children: u,
                                        }),
                                        null != c &&
                                            (0, n.jsx)(o.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 2,
                                                children: c,
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
                                    className: _.p6,
                                    children: [
                                        y,
                                        null != j &&
                                            (0, n.jsx)(o.E, {
                                                variant: g ? "text-xs/medium" : "text-sm/normal",
                                                color: "text-muted",
                                                className: s()(_.Jb, { [_.Nc]: g }),
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
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != E
                ? (0, n.jsx)(m.D, { className: s()(_.kL, _.vk, T), onClick: E, children: C })
                : (0, n.jsx)("div", { className: s()(_.kL, T), children: C }),
            null != a &&
                (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", className: _.dx, children: a }),
        ],
    });
}
function L(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return k.intl.format(P.default["2PiTTi"], {
                username: C.Ay.getUserTag(t.user),
                nickname: C.Ay.getName(t.user),
                avatar: (0, n.jsx)(j.A, { user: t.user, size: x._3.SIZE_16, className: _.RG }),
            });
        case "guildSubscription":
            return k.intl.format(P.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, n.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: _.RG }),
            });
        case "boost":
            return k.intl.format(P.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, n.jsx)(N.Ay, { guild: t.guild, size: N.Ay.Sizes.SMOL, className: _.RG, active: !0 }),
            });
        case void 0:
            return null;
        default:
            (0, y.xb)(t);
    }
}
function O(e) {
    let { color: t, Icon: l } = e;
    return (0, n.jsx)(h.h, {
        color: t,
        className: _.nC,
        children: (0, n.jsx)(l, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function U() {
    return (0, n.jsx)(T.A, { size: 64, iconSize: 32, color: c.A.unsafe_rawColors.NEUTRAL_1 });
}
function w() {
    return (0, n.jsx)("div", {
        className: _.Ty,
        children: (0, n.jsx)(p.t, { size: "lg", color: c.A.colors.ICON_DEFAULT }),
    });
}
function R() {
    return (0, n.jsx)(O, { color: "pink", Icon: v._ });
}
function M() {
    return (0, n.jsx)(f.k, { size: "lg", color: "var(--icon-muted)" });
}
function F() {
    return (0, n.jsx)("div", { className: _.CX, children: (0, n.jsx)(p.t, { size: "lg", color: "var(--neutral-1)" }) });
}
let z = {
    [D.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [D.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [D.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function B(e) {
    let { skuId: t, productLine: l, applicationId: i, storeListing: s } = e,
        a = (0, u.bG)([S.A], () => s ?? S.A.getForSKU(t), [s, t]),
        c = z[l].preferredAssetType,
        o = r.useMemo(
            () =>
                null == a
                    ? null
                    : "headerBackground" === c
                      ? (a.headerBackground ?? a.thumbnail)
                      : (a.thumbnail ?? a.headerBackground),
            [c, a],
        );
    return null != o
        ? (0, n.jsx)("img", { src: (0, A.YE)(i, o, 64), alt: "", className: _.gw })
        : l === D.EZt.APPLICATION
          ? (0, n.jsx)(M, {})
          : l === D.EZt.GUILD_ROLE
            ? (0, n.jsx)(b.h, { width: 48, height: 48 })
            : null;
}
function $(e) {
    let { sku: t, premiumType: l, product: r, storeListing: i } = e;
    return l === I.PremiumTypes.TIER_0
        ? (0, n.jsx)(w, {})
        : l === I.PremiumTypes.TIER_2
          ? (0, n.jsx)(U, {})
          : r?.type === a.R.BUNDLE
            ? (0, n.jsx)(g.a, { product: r, staticPreviewClassName: _.C0 })
            : null == t
              ? null
              : t.productLine in z
                ? (0, n.jsx)(B, {
                      skuId: t.id,
                      productLine: t.productLine,
                      applicationId: t.applicationId,
                      storeListing: i,
                  })
                : (0, n.jsx)(E.r$, { sku: t, slayerProductPreviewClassName: _.gw });
}
