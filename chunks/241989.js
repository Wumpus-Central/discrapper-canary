l.d(t, { DH: () => w, JW: () => U, WH: () => $, a6: () => R, f7: () => G, jw: () => M, oo: () => F });
var n = l(477900),
    r = l(582128),
    s = l(503698),
    i = l.n(s),
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
    j = l(323384),
    f = l(966327),
    g = l(14702),
    N = l(575926),
    b = l(548118),
    E = l(319820),
    T = l(576243),
    S = l(328968),
    y = l(403362),
    A = l(371794),
    C = l(427262),
    D = l(652215),
    I = l(202541),
    P = l(649975),
    k = l(375708),
    _ = l(242695);
function G(e) {
    let {
            header: t,
            headerIconSrc: l,
            headerIconComponent: s,
            bottomSubText: a,
            label: u,
            description: c,
            graphic: x,
            price: h,
            priceStrikethroughText: p,
            PriceIcon: v,
            priceTooltip: j,
            priceSubText: f,
            priceSubTextHasStrikethrough: g = !0,
            omitDefaultIconBackground: N,
            target: b,
            onClick: E,
            className: T,
        } = e,
        S = (0, n.jsx)(L, { target: b }),
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
            return null != j
                ? (0, n.jsx)(d.m, { text: j, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [v, h, p, j]),
        A = r.useMemo(
            () =>
                null != s
                    ? (0, n.jsx)("span", { className: _.nr, children: s })
                    : null != l
                      ? (0, n.jsx)("img", { alt: "", src: l, className: _.nr })
                      : null,
            [l, s],
        ),
        C = (0, n.jsxs)(n.Fragment, {
            children: [
                null != x && (0, n.jsx)("div", { className: i()(_.Kk, { [_.H9]: !N }), children: x }),
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
                                        null != f &&
                                            (0, n.jsx)(o.E, {
                                                variant: g ? "text-xs/medium" : "text-sm/normal",
                                                color: "text-muted",
                                                className: i()(_.Jb, { [_.Nc]: g }),
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
            null != E
                ? (0, n.jsx)(m.D, { className: i()(_.kL, _.vk, T), onClick: E, children: C })
                : (0, n.jsx)("div", { className: i()(_.kL, T), children: C }),
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
                avatar: (0, n.jsx)(f.A, { user: t.user, size: x._3.SIZE_16, className: _.RG }),
            });
        case "guildSubscription":
            return k.intl.format(P.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, n.jsx)(b.Ay, { guild: t.guild, size: b.Ay.Sizes.SMOL, className: _.RG }),
            });
        case "boost":
            return k.intl.format(P.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, n.jsx)(b.Ay, { guild: t.guild, size: b.Ay.Sizes.SMOL, className: _.RG, active: !0 }),
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
    return (0, n.jsx)(j.k, { size: "lg", color: "var(--icon-muted)" });
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
    let { skuId: t, productLine: l, applicationId: s, storeListing: i } = e,
        a = (0, u.bG)([S.A], () => i ?? S.A.getForSKU(t), [i, t]),
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
        ? (0, n.jsx)("img", { src: (0, A.YE)(s, o, 64), alt: "", className: _.gw })
        : l === D.EZt.APPLICATION
          ? (0, n.jsx)(M, {})
          : l === D.EZt.GUILD_ROLE
            ? (0, n.jsx)(N.h, { width: 48, height: 48 })
            : null;
}
function $(e) {
    let { sku: t, premiumType: l, product: r, storeListing: s } = e;
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
                      storeListing: s,
                  })
                : (0, n.jsx)(E.r$, { sku: t, slayerProductPreviewClassName: _.gw });
}
