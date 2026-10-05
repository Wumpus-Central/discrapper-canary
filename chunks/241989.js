n.d(t, { DH: () => w, JW: () => G, WH: () => W, a6: () => M, f7: () => O, jw: () => F, oo: () => U });
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
    j = n(323384),
    v = n(966327),
    g = n(14702),
    E = n(575926),
    N = n(548118),
    A = n(319820),
    T = n(576243),
    b = n(328968),
    I = n(403362),
    C = n(371794),
    _ = n(427262),
    S = n(652215),
    y = n(202541),
    D = n(583741),
    P = n(375708),
    R = n(242695);
function O(e) {
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
            priceTooltip: j,
            priceSubText: v,
            priceSubTextHasStrikethrough: g = !0,
            omitDefaultIconBackground: E,
            target: N,
            onClick: A,
            className: T,
        } = e,
        b = (0, l.jsx)(L, { target: N }),
        I = r.useMemo(() => {
            let e = (0, l.jsxs)(u.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: R.nw,
                children: [
                    null != p && (0, l.jsx)(p, { size: "xs" }),
                    null != h &&
                        (0, l.jsx)(u.E, {
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
                ? (0, l.jsx)(d.m, { text: j, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [p, f, h, j]),
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
                            (0, l.jsxs)(u.E, {
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
                                        null != b &&
                                            (0, l.jsx)(u.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: b,
                                            }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: R.p6,
                                    children: [
                                        I,
                                        null != v &&
                                            (0, l.jsx)(u.E, {
                                                variant: g ? "text-xs/medium" : "text-sm/normal",
                                                color: "text-muted",
                                                className: i()(R.Jb, { [R.Nc]: g }),
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
            null != A
                ? (0, l.jsx)(m.D, { className: i()(R.kL, R.vk, T), onClick: A, children: _ })
                : (0, l.jsx)("div", { className: i()(R.kL, T), children: _ }),
            null != s &&
                (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-muted", className: R.dx, children: s }),
        ],
    });
}
function L(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return P.intl.format(D.default["2PiTTi"], {
                username: _.Ay.getUserTag(t.user),
                nickname: _.Ay.getName(t.user),
                avatar: (0, l.jsx)(v.A, { user: t.user, size: x._3.SIZE_16, className: R.RG }),
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
    return (0, l.jsx)(T.A, { size: 64, iconSize: 32, color: c.A.unsafe_rawColors.NEUTRAL_1 });
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
    [S.EZt.APPLICATION]: { preferredAssetType: "headerBackground" },
    [S.EZt.GUILD_ROLE]: { preferredAssetType: "thumbnail" },
    [S.EZt.GUILD_PRODUCT]: { preferredAssetType: "thumbnail" },
};
function z(e) {
    let { skuId: t, productLine: n, applicationId: a, storeListing: i } = e,
        s = (0, o.bG)([b.A], () => i ?? b.A.getForSKU(t), [i, t]),
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
        ? (0, l.jsx)("img", { src: (0, C.YE)(a, u, 64), alt: "", className: R.gw })
        : n === S.EZt.APPLICATION
          ? (0, l.jsx)(F, {})
          : n === S.EZt.GUILD_ROLE
            ? (0, l.jsx)(E.h, { width: 48, height: 48 })
            : null;
}
function W(e) {
    let { sku: t, premiumType: n, product: r, storeListing: a } = e;
    return n === y.PremiumTypes.TIER_0
        ? (0, l.jsx)(w, {})
        : n === y.PremiumTypes.TIER_2
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
                : (0, l.jsx)(A.r$, { sku: t, slayerProductPreviewClassName: R.gw });
}
