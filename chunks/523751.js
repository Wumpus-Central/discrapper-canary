n.d(t, { Z: () => k });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(780384),
    u = n(481060),
    d = n(436774),
    _ = n(623624),
    f = n(297700),
    p = n(210887),
    h = n(271383),
    m = n(594174),
    g = n(665786),
    E = n(697725),
    b = n(267642),
    y = n(284363),
    O = n(854218),
    v = n(682947),
    I = n(981631),
    T = n(388032),
    S = n(90235);
function A(e, t, n) {
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
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            }));
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let D = {
    [y.Q.STAFF]: {
        IconComponent: u.Ymb,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [y.Q.VERIFIED_AND_PARTNERED]: {
        IconComponent: u.kmB,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [y.Q.VERIFIED]: {
        IconComponent: u.kmB,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [y.Q.PARTNERED]: {
        IconComponent: (0, u.GSL)(g.Z),
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
    },
    [y.Q.COMMUNITY]: {
        IconComponent: u.tvw,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: d.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [y.Q.DISCOVERABLE]: {
        IconComponent: u.enf,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: d.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [y.Q.NONE]: {}
};
function L(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)('div', {
        className: S.tooltipPremiumFooterContainer,
        children: [
            (0, r.jsxs)('div', {
                className: o()(S.tooltipPremiumFooterSegment, S.tooltipPremiumFooterTierSegment),
                children: [
                    (0, r.jsx)(E.Z, {
                        width: 18,
                        height: 18,
                        className: S.gemIcon
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: 'text-xs/semibold',
                        color: 'always-white',
                        children: b.nW(t.premiumTier)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: S.tooltipPremiumFooterSegment,
                children: (0, r.jsx)(u.Text, {
                    variant: 'text-xs/semibold',
                    color: 'always-white',
                    children: T.intl.format(T.t['dR/SVF'], { count: t.premiumSubscriberCount })
                })
            })
        ]
    });
}
function x(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: i, tooltipSubtitle: a, tooltipDescription: o } = (0, v.G)(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: S.tooltipBodyContainer,
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
            n.premium ? (0, r.jsx)(L, { guildTraits: n }) : null
        ]
    });
}
function k(e) {
    let t, n;
    var a,
        { guild: o, tooltipColor: l = u.ua7.Colors.BRAND, tooltipPosition: d, className: g, flowerStarClassName: E, iconClassName: b, badgeStrokeColor: v, badgeColor: T, disableBoostClick: A, 'aria-label': C = !1 } = e;
    let w = null != (a = P(e, ['guild', 'tooltipColor', 'tooltipPosition', 'className', 'flowerStarClassName', 'iconClassName', 'badgeStrokeColor', 'badgeColor', 'disableBoostClick', 'aria-label']).size) ? a : 18,
        L = (0, s.e7)([m.default, h.ZP], () => {
            let e = m.default.getCurrentUser();
            return h.ZP.isMember(null == o ? void 0 : o.id, null == e ? void 0 : e.id);
        }),
        k = (0, s.e7)([p.Z], () => p.Z.theme),
        M = (0, O.XX)(o),
        j = (0, y.i)(M),
        U = i.useMemo(() => M.premium && L && !A, [A, M.premium, L]),
        G = i.useCallback(
            (e) => {
                U &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, _.f)({
                        guildId: o.id,
                        location: {
                            section: I.jXE.GUILD_HEADER,
                            object: I.qAy.BOOST_GEM_ICON
                        }
                    }));
            },
            [U, o.id]
        );
    if (j === y.Q.NONE) return null;
    let { IconComponent: B, backgroundDarkColor: V, backgroundLightColor: F, foregroundDarkColor: Z, foregroundLightColor: H, premiumBackgroundColor: Y, premiumForegroundColor: W, sizeAdjustment: K } = D[j];
    if (null == B) return null;
    M.premium && ((t = W), (n = Y));
    let z = (0, c.wj)(k) ? Z : H,
        q = (0, c.wj)(k) ? V : F;
    ((t = null != t ? t : z), (n = null != n ? n : q));
    let X = Math.floor(0.75 * w) - (null != K ? K : 0);
    return (0, r.jsx)(u.ua7, {
        color: l,
        position: d,
        'aria-label': C,
        text: (0, r.jsx)(x, {
            badgeType: j,
            guildTraits: M
        }),
        tooltipContentClassName: S.tooltipRemovePadding,
        children: (e) =>
            (0, r.jsx)(u.P3F, {
                onClick: G,
                tabIndex: U ? 0 : -1,
                children: (0, r.jsx)(
                    f.Z,
                    R(N({}, e), {
                        className: g,
                        flowerStarClassName: E,
                        allowFullSizedIcon: !0,
                        color: null != n ? n : T,
                        stroke: v,
                        size: w,
                        children: (0, r.jsx)(B, {
                            size: 'custom',
                            width: X,
                            height: X,
                            className: b,
                            color: null != t ? t : 'currentColor'
                        })
                    })
                )
            })
    });
}
