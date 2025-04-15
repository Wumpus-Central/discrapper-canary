n.d(t, { Z: () => U });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(692547),
    c = n(780384),
    u = n(481060),
    d = n(353093),
    f = n(979264),
    _ = n(436774),
    p = n(540059),
    h = n(623624),
    m = n(297700),
    g = n(210887),
    E = n(271383),
    b = n(594174),
    y = n(665786),
    v = n(697725),
    O = n(267642),
    I = n(284363),
    S = n(854218),
    T = n(682947),
    N = n(981631),
    A = n(388032),
    C = n(90235);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let M = {
    [I.Q.STAFF]: {
        IconComponent: u.Ymb,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [I.Q.VERIFIED_AND_PARTNERED]: {
        IconComponent: u.kmB,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [I.Q.VERIFIED]: {
        IconComponent: u.kmB,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [I.Q.PARTNERED]: {
        IconComponent: (0, u.GSL)(y.Z),
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
    },
    [I.Q.COMMUNITY]: {
        IconComponent: u.tvw,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: _.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [I.Q.DISCOVERABLE]: {
        IconComponent: u.enf,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: _.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [I.Q.CLAN]: {},
    [I.Q.NONE]: {}
};
function k(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)('div', {
        className: C.tooltipPremiumFooterContainer,
        children: [
            (0, r.jsxs)('div', {
                className: a()(C.tooltipPremiumFooterSegment, C.tooltipPremiumFooterTierSegment),
                children: [
                    (0, r.jsx)(v.Z, {
                        width: 18,
                        height: 18,
                        className: C.gemIcon
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: 'text-xs/semibold',
                        color: 'always-white',
                        children: O.nW(t.premiumTier)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: C.tooltipPremiumFooterSegment,
                children: (0, r.jsx)(u.Text, {
                    variant: 'text-xs/semibold',
                    color: 'always-white',
                    children: A.NW.format(A.t['dR/SVF'], { count: t.premiumSubscriberCount })
                })
            })
        ]
    });
}
function j(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: i, tooltipSubtitle: o, tooltipDescription: a } = (0, T.G)(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: C.tooltipBodyContainer,
                children: [
                    (0, r.jsx)(u.Text, {
                        color: 'interactive-active',
                        variant: 'text-xs/bold',
                        children: i
                    }),
                    null != o
                        ? (0, r.jsx)(u.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: o
                          })
                        : null,
                    null != a
                        ? (0, r.jsx)(u.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: a
                          })
                        : null
                ]
            }),
            n.premium ? (0, r.jsx)(k, { guildTraits: n }) : null
        ]
    });
}
function U(e) {
    let t, n;
    var o,
        l,
        { guild: _, tooltipColor: y = u.ua7.Colors.BRAND, tooltipPosition: v, className: O, flowerStarClassName: T, iconClassName: A, badgeStrokeColor: R, badgeColor: w, disableBoostClick: x, 'aria-label': k = !1 } = e,
        U = L(e, ['guild', 'tooltipColor', 'tooltipPosition', 'className', 'flowerStarClassName', 'iconClassName', 'badgeStrokeColor', 'badgeColor', 'disableBoostClick', 'aria-label']);
    let G = (0, p.Q3)('GuildBadgeV2'),
        B = null != (o = U.size) ? o : G ? 18 : 16,
        F = (0, s.e7)([b.default, E.ZP], () => {
            let e = b.default.getCurrentUser();
            return E.ZP.isMember(null == _ ? void 0 : _.id, null == e ? void 0 : e.id);
        }),
        V = (0, s.e7)([g.Z], () => g.Z.theme),
        Z = (0, S.XX)(_),
        H = (0, I.i)(Z),
        W = i.useMemo(() => Z.premium && F && !x, [x, Z.premium, F]),
        Y = i.useCallback(
            (e) => {
                W &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, h.f)({
                        guildId: _.id,
                        location: {
                            section: N.jXE.GUILD_HEADER,
                            object: N.qAy.BOOST_GEM_ICON
                        }
                    }));
            },
            [W, _.id]
        );
    if (H === I.Q.NONE) return null;
    if (H === I.Q.CLAN) {
        let e = (0, d.ky)(_.id, null == (l = _.profile) ? void 0 : l.badge, B);
        return null == e
            ? null
            : (0, r.jsx)(u.ua7, {
                  color: y,
                  position: v,
                  'aria-label': k,
                  text: (0, r.jsx)(j, {
                      badgeType: H,
                      guildTraits: Z
                  }),
                  tooltipContentClassName: C.tooltipRemovePadding,
                  children: (t) =>
                      (0, r.jsx)(
                          u.P3F,
                          D(P({}, t), {
                              onClick: Y,
                              className: a()(C.clanBadgeContainer, O),
                              children: (0, r.jsx)(f.KQ, {
                                  src: e,
                                  size: B
                              })
                          })
                      )
              });
    }
    let { IconComponent: K, backgroundDarkColor: z, backgroundLightColor: q, foregroundDarkColor: Q, foregroundLightColor: X, premiumBackgroundColor: J, premiumForegroundColor: $, sizeAdjustment: ee } = M[H];
    if (null == K) return null;
    Z.premium && ((t = $), (n = J));
    let et = (0, c.wj)(V) ? Q : X,
        en = (0, c.wj)(V) ? z : q;
    (t = null != t ? t : et), (n = null != n ? n : en);
    let er = Math.floor(0.75 * B) - (null != ee ? ee : 0);
    return (0, r.jsx)(u.ua7, {
        color: y,
        position: v,
        'aria-label': k,
        text: (0, r.jsx)(j, {
            badgeType: H,
            guildTraits: Z
        }),
        tooltipContentClassName: C.tooltipRemovePadding,
        children: (e) =>
            (0, r.jsx)(u.P3F, {
                onClick: Y,
                tabIndex: W ? 0 : -1,
                children: (0, r.jsx)(
                    m.Z,
                    D(P({}, e), {
                        className: O,
                        flowerStarClassName: T,
                        allowFullSizedIcon: !0,
                        color: null != n ? n : w,
                        stroke: R,
                        size: B,
                        children: (0, r.jsx)(K, {
                            size: 'custom',
                            width: er,
                            height: er,
                            className: A,
                            color: null != t ? t : 'currentColor'
                        })
                    })
                )
            })
    });
}
