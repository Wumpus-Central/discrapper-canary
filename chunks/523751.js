n.d(t, { Z: () => M });
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
    p = n(623624),
    h = n(297700),
    g = n(210887),
    m = n(271383),
    E = n(594174),
    v = n(665786),
    b = n(697725),
    y = n(267642),
    O = n(284363),
    S = n(854218),
    I = n(682947),
    T = n(981631),
    N = n(388032),
    A = n(574360);
function C(e, t, n) {
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
function R(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = {
    [O.Q.STAFF]: {
        IconComponent: u.Ymb,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [O.Q.VERIFIED_AND_PARTNERED]: {
        IconComponent: u.kmB,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [O.Q.VERIFIED]: {
        IconComponent: u.kmB,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [O.Q.PARTNERED]: {
        IconComponent: (0, u.GSL)(v.Z),
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
    },
    [O.Q.COMMUNITY]: {
        IconComponent: u.tvw,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: _.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [O.Q.DISCOVERABLE]: {
        IconComponent: u.enf,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: _.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [O.Q.CLAN]: {},
    [O.Q.NONE]: {}
};
function L(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)('div', {
        className: A.tooltipPremiumFooterContainer,
        children: [
            (0, r.jsxs)('div', {
                className: a()(A.tooltipPremiumFooterSegment, A.tooltipPremiumFooterTierSegment),
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
                className: a()(A.tooltipPremiumFooterSegment),
                children: (0, r.jsx)(u.Text, {
                    variant: 'text-xs/semibold',
                    color: 'always-white',
                    children: N.NW.format(N.t['dR/SVF'], { count: t.premiumSubscriberCount })
                })
            })
        ]
    });
}
function x(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: i, tooltipSubtitle: o, tooltipDescription: a } = (0, I.G)(t, n.visibility);
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
            n.premium ? (0, r.jsx)(L, { guildTraits: n }) : null
        ]
    });
}
function M(e) {
    let t,
        n,
        { guild: o, tooltipColor: l = u.ua7.Colors.BRAND, tooltipPosition: _, className: v, flowerStarClassName: b, iconClassName: y, badgeStrokeColor: I, badgeColor: N, size: C = 16, disableBoostClick: P, 'aria-label': L = !1 } = e,
        M = (0, s.e7)([E.default, m.ZP], () => {
            let e = E.default.getCurrentUser();
            return m.ZP.isMember(null == o ? void 0 : o.id, null == e ? void 0 : e.id);
        }),
        k = (0, s.e7)([g.Z], () => g.Z.theme),
        j = (0, S.XX)(o),
        U = (0, O.i)(j),
        G = i.useCallback(
            (e) => {
                j.premium &&
                    M &&
                    !P &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, p.f)({
                        guildId: o.id,
                        location: {
                            section: T.jXE.GUILD_HEADER,
                            object: T.qAy.BOOST_GEM_ICON
                        }
                    }));
            },
            [j.premium, M, P, o.id]
        );
    if (U === O.Q.NONE) return null;
    if (U === O.Q.CLAN) {
        var B;
        let e = (0, d.ky)(o.id, null === (B = o.profile) || void 0 === B ? void 0 : B.badge, C);
        return null == e
            ? null
            : (0, r.jsx)(u.ua7, {
                  color: l,
                  position: _,
                  'aria-label': L,
                  text: (0, r.jsx)(x, {
                      badgeType: U,
                      guildTraits: j
                  }),
                  tooltipContentClassName: A.tooltipRemovePadding,
                  children: (t) =>
                      (0, r.jsx)(
                          u.P3F,
                          D(R({}, t), {
                              onClick: G,
                              className: a()(A.clanBadgeContainer, v),
                              children: (0, r.jsx)(f.KQ, {
                                  src: e,
                                  size: C
                              })
                          })
                      )
              });
    }
    let { IconComponent: V, backgroundDarkColor: F, backgroundLightColor: Z, foregroundDarkColor: H, foregroundLightColor: W, premiumBackgroundColor: Y, premiumForegroundColor: K, sizeAdjustment: z } = w[U];
    if (null == V) return null;
    j.premium && ((t = K), (n = Y));
    let q = (0, c.wj)(k) ? H : W,
        Q = (0, c.wj)(k) ? F : Z;
    (t = null != t ? t : q), (n = null != n ? n : Q);
    let X = Math.floor(0.75 * C) - (null != z ? z : 0);
    return (0, r.jsx)(u.ua7, {
        color: l,
        position: _,
        'aria-label': L,
        text: (0, r.jsx)(x, {
            badgeType: U,
            guildTraits: j
        }),
        tooltipContentClassName: A.tooltipRemovePadding,
        children: (e) =>
            (0, r.jsx)(u.P3F, {
                onClick: G,
                children: (0, r.jsx)(
                    h.Z,
                    D(R({}, e), {
                        className: v,
                        flowerStarClassName: b,
                        allowFullSizedIcon: !0,
                        color: null != n ? n : N,
                        stroke: I,
                        size: C,
                        children: (0, r.jsx)(V, {
                            size: 'custom',
                            width: X,
                            height: X,
                            className: y,
                            color: null != t ? t : 'currentColor'
                        })
                    })
                )
            })
    });
}
