n.d(t, { Z: () => k });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(780384),
    u = n(481060),
    d = n(436774),
    f = n(540059),
    _ = n(623624),
    p = n(297700),
    h = n(210887),
    m = n(271383),
    g = n(594174),
    E = n(665786),
    b = n(697725),
    y = n(267642),
    v = n(284363),
    O = n(854218),
    I = n(682947),
    S = n(981631),
    T = n(388032),
    A = n(90235);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let L = {
    [v.Q.STAFF]: {
        IconComponent: u.Ymb,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [v.Q.VERIFIED_AND_PARTNERED]: {
        IconComponent: u.kmB,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [v.Q.VERIFIED]: {
        IconComponent: u.kmB,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [v.Q.PARTNERED]: {
        IconComponent: (0, u.GSL)(E.Z),
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
    },
    [v.Q.COMMUNITY]: {
        IconComponent: u.tvw,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: d.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [v.Q.DISCOVERABLE]: {
        IconComponent: u.enf,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: d.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [v.Q.NONE]: {}
};
function x(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)('div', {
        className: A.tooltipPremiumFooterContainer,
        children: [
            (0, r.jsxs)('div', {
                className: o()(A.tooltipPremiumFooterSegment, A.tooltipPremiumFooterTierSegment),
                children: [
                    (0, r.jsx)(b.Z, {
                        width: 18,
                        height: 18,
                        className: A.gemIcon
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: 'text-xs/semibold',
                        color: 'always-white',
                        children: y.nW(t.premiumTier)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: A.tooltipPremiumFooterSegment,
                children: (0, r.jsx)(u.Text, {
                    variant: 'text-xs/semibold',
                    color: 'always-white',
                    children: T.intl.format(T.t['dR/SVF'], { count: t.premiumSubscriberCount })
                })
            })
        ]
    });
}
function M(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: i, tooltipSubtitle: a, tooltipDescription: o } = (0, I.G)(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: A.tooltipBodyContainer,
                children: [
                    (0, r.jsx)(u.Text, {
                        color: 'interactive-active',
                        variant: 'text-xs/bold',
                        children: i
                    }),
                    null != a
                        ? (0, r.jsx)(u.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: a
                          })
                        : null,
                    null != o
                        ? (0, r.jsx)(u.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: o
                          })
                        : null
                ]
            }),
            n.premium ? (0, r.jsx)(x, { guildTraits: n }) : null
        ]
    });
}
function k(e) {
    let t, n;
    var a,
        { guild: o, tooltipColor: l = u.ua7.Colors.BRAND, tooltipPosition: d, className: E, flowerStarClassName: b, iconClassName: y, badgeStrokeColor: I, badgeColor: T, disableBoostClick: N, 'aria-label': R = !1 } = e,
        D = w(e, ['guild', 'tooltipColor', 'tooltipPosition', 'className', 'flowerStarClassName', 'iconClassName', 'badgeStrokeColor', 'badgeColor', 'disableBoostClick', 'aria-label']);
    let x = (0, f.Q3)('GuildBadgeV2'),
        k = null != (a = D.size) ? a : x ? 18 : 16,
        j = (0, s.e7)([g.default, m.ZP], () => {
            let e = g.default.getCurrentUser();
            return m.ZP.isMember(null == o ? void 0 : o.id, null == e ? void 0 : e.id);
        }),
        U = (0, s.e7)([h.Z], () => h.Z.theme),
        G = (0, O.XX)(o),
        B = (0, v.i)(G),
        V = i.useMemo(() => G.premium && j && !N, [N, G.premium, j]),
        F = i.useCallback(
            (e) => {
                V &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, _.f)({
                        guildId: o.id,
                        location: {
                            section: S.jXE.GUILD_HEADER,
                            object: S.qAy.BOOST_GEM_ICON
                        }
                    }));
            },
            [V, o.id]
        );
    if (B === v.Q.NONE) return null;
    let { IconComponent: Z, backgroundDarkColor: H, backgroundLightColor: Y, foregroundDarkColor: W, foregroundLightColor: K, premiumBackgroundColor: z, premiumForegroundColor: q, sizeAdjustment: Q } = L[B];
    if (null == Z) return null;
    G.premium && ((t = q), (n = z));
    let X = (0, c.wj)(U) ? W : K,
        J = (0, c.wj)(U) ? H : Y;
    (t = null != t ? t : X), (n = null != n ? n : J);
    let $ = Math.floor(0.75 * k) - (null != Q ? Q : 0);
    return (0, r.jsx)(u.ua7, {
        color: l,
        position: d,
        'aria-label': R,
        text: (0, r.jsx)(M, {
            badgeType: B,
            guildTraits: G
        }),
        tooltipContentClassName: A.tooltipRemovePadding,
        children: (e) =>
            (0, r.jsx)(u.P3F, {
                onClick: F,
                tabIndex: V ? 0 : -1,
                children: (0, r.jsx)(
                    p.Z,
                    P(C({}, e), {
                        className: E,
                        flowerStarClassName: b,
                        allowFullSizedIcon: !0,
                        color: null != n ? n : T,
                        stroke: I,
                        size: k,
                        children: (0, r.jsx)(Z, {
                            size: 'custom',
                            width: $,
                            height: $,
                            className: y,
                            color: null != t ? t : 'currentColor'
                        })
                    })
                )
            })
    });
}
