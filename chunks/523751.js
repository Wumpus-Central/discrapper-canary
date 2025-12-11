n.d(t, { Z: () => j });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(780384),
    u = n(481060),
    d = n(436774),
    f = n(623624),
    p = n(297700),
    _ = n(210887),
    m = n(271383),
    h = n(594174),
    g = n(665786),
    E = n(697725),
    b = n(267642),
    y = n(284363),
    O = n(854218),
    v = n(682947),
    S = n(981631),
    I = n(388032),
    T = n(903442);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let D = {
    [y.Q.STAFF]: {
        IconComponent: u.Ymb,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css,
    },
    [y.Q.VERIFIED_AND_PARTNERED]: {
        IconComponent: u.kmB,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css,
    },
    [y.Q.VERIFIED]: {
        IconComponent: u.kmB,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css,
    },
    [y.Q.PARTNERED]: {
        IconComponent: (0, u.GSL)(g.Z),
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css,
    },
    [y.Q.COMMUNITY]: {
        IconComponent: u.tvw,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: d.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2,
    },
    [y.Q.DISCOVERABLE]: {
        IconComponent: u.enf,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: d.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2,
    },
    [y.Q.NONE]: {},
};
function x(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)("div", {
        className: T.tooltipPremiumFooterContainer,
        children: [
            (0, r.jsxs)("div", {
                className: o()(T.tooltipPremiumFooterSegment, T.tooltipPremiumFooterTierSegment),
                children: [
                    (0, r.jsx)(E.Z, {
                        width: 18,
                        height: 18,
                        className: T.gemIcon,
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: b.nW(t.premiumTier),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: T.tooltipPremiumFooterSegment,
                children: (0, r.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: I.intl.format(I.t["dR/SVH"], { count: t.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function L(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: i, tooltipSubtitle: a, tooltipDescription: o } = (0, v.G)(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: T.tooltipBodyContainer,
                children: [
                    (0, r.jsx)(u.Text, {
                        color: "interactive-text-active",
                        variant: "text-xs/bold",
                        children: i,
                    }),
                    null != a
                        ? (0, r.jsx)(u.Text, {
                              color: "text-muted",
                              variant: "text-xs/medium",
                              children: a,
                          })
                        : null,
                    null != o
                        ? (0, r.jsx)(u.Text, {
                              color: "text-muted",
                              variant: "text-xs/medium",
                              children: o,
                          })
                        : null,
                ],
            }),
            n.premium ? (0, r.jsx)(x, { guildTraits: n }) : null,
        ],
    });
}
function j(e) {
    let t, n;
    var a,
        {
            guild: o,
            tooltipColor: l = u.aML.Colors.BRAND,
            tooltipPosition: d,
            className: g,
            flowerStarClassName: E,
            iconClassName: b,
            badgeStrokeColor: v,
            badgeColor: I,
            disableBoostClick: C,
            "aria-label": N = !1,
        } = e;
    let w =
            null !=
            (a = R(e, [
                "guild",
                "tooltipColor",
                "tooltipPosition",
                "className",
                "flowerStarClassName",
                "iconClassName",
                "badgeStrokeColor",
                "badgeColor",
                "disableBoostClick",
                "aria-label",
            ]).size)
                ? a
                : 18,
        x = (0, s.e7)([h.default, m.ZP], () => {
            let e = h.default.getCurrentUser();
            return m.ZP.isMember(null == o ? void 0 : o.id, null == e ? void 0 : e.id);
        }),
        j = (0, s.e7)([_.Z], () => _.Z.theme),
        M = (0, O.XX)(o),
        k = (0, y.i)(M),
        U = i.useMemo(() => M.premium && x && !C, [C, M.premium, x]),
        G = i.useCallback(
            (e) => {
                U &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, f.f)({
                        guildId: o.id,
                        location: {
                            section: S.jXE.GUILD_HEADER,
                            object: S.qAy.BOOST_GEM_ICON,
                        },
                    }));
            },
            [U, o.id],
        );
    if (k === y.Q.NONE) return null;
    let {
        IconComponent: Z,
        backgroundDarkColor: B,
        backgroundLightColor: F,
        foregroundDarkColor: V,
        foregroundLightColor: H,
        premiumBackgroundColor: Y,
        premiumForegroundColor: W,
        sizeAdjustment: K,
    } = D[k];
    if (null == Z) return null;
    M.premium && ((t = W), (n = Y));
    let z = (0, c.wj)(j) ? V : H,
        q = (0, c.wj)(j) ? B : F;
    (t = null != t ? t : z), (n = null != n ? n : q);
    let Q = Math.floor(0.75 * w) - (null != K ? K : 0);
    return (0, r.jsx)(u.aML, {
        color: l,
        position: d,
        "aria-label": N,
        text: (0, r.jsx)(L, {
            badgeType: k,
            guildTraits: M,
        }),
        tooltipContentClassName: T.tooltipRemovePadding,
        children: (e) =>
            (0, r.jsx)(u.P3F, {
                onClick: G,
                tabIndex: U ? 0 : -1,
                children: (0, r.jsx)(
                    p.Z,
                    P(A({}, e), {
                        className: g,
                        flowerStarClassName: E,
                        allowFullSizedIcon: !0,
                        color: null != n ? n : I,
                        stroke: v,
                        size: w,
                        children: (0, r.jsx)(Z, {
                            size: "custom",
                            width: Q,
                            height: Q,
                            className: b,
                            color: null != t ? t : "currentColor",
                        }),
                    }),
                ),
            }),
    });
}
