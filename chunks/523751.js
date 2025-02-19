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
    p = n(436774),
    _ = n(623624),
    h = n(297700),
    m = n(210887),
    g = n(271383),
    E = n(594174),
    v = n(665786),
    b = n(697725),
    y = n(267642),
    O = n(284363),
    S = n(854218),
    I = n(981631),
    T = n(388032),
    N = n(26198);
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
                A(e, t, n[t]);
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
    let n = t === S.PZ.PUBLIC ? T.NW.string(T.t.op2cJy) : T.NW.string(T.t.TME4LC);
    switch (e) {
        case O.Q.STAFF:
            return {
                tooltipTitle: T.NW.string(T.t['lMrv9/']),
                tooltipSubtitle: T.NW.string(T.t['lMrv9/']),
                tooltipDescription: T.NW.string(T.t['lMrv9/'])
            };
        case O.Q.VERIFIED:
            return {
                tooltipTitle: T.NW.string(T.t.K7iRio),
                tooltipSubtitle: T.NW.string(T.t.iCehw8),
                tooltipDescription: n
            };
        case O.Q.PARTNERED:
            return {
                tooltipTitle: T.NW.string(T.t.K7iRio),
                tooltipSubtitle: T.NW.string(T.t.hfYfEB),
                tooltipDescription: n
            };
        case O.Q.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: T.NW.string(T.t.K7iRio),
                tooltipSubtitle: T.NW.string(T.t['TX+iFB']),
                tooltipDescription: n
            };
        case O.Q.COMMUNITY:
            return {
                tooltipTitle: T.NW.string(T.t.K7iRio),
                tooltipDescription: T.NW.string(T.t.TME4LC)
            };
        case O.Q.DISCOVERABLE:
            return {
                tooltipTitle: T.NW.string(T.t.K7iRio),
                tooltipDescription: T.NW.string(T.t.op2cJy)
            };
        case O.Q.CLAN:
            return {
                tooltipTitle: T.NW.string(T.t['5K6LdX']),
                tooltipDescription: T.NW.string(T.t.YwZfbm)
            };
        default:
            return { tooltipTitle: T.NW.string(T.t.iZRkCw) };
    }
}
let D = {
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
        premiumBackgroundColor: p.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [O.Q.DISCOVERABLE]: {
        IconComponent: u.enf,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: p.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [O.Q.CLAN]: {},
    [O.Q.NONE]: {}
};
function x(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)('div', {
        className: N.tooltipPremiumFooterContainer,
        children: [
            (0, r.jsxs)('div', {
                className: a()(N.tooltipPremiumFooterSegment, N.tooltipPremiumFooterTierSegment),
                children: [
                    (0, r.jsx)(b.Z, {
                        width: 18,
                        height: 18,
                        className: N.gemIcon
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: 'text-xs/semibold',
                        color: 'always-white',
                        children: y.nW(t.premiumTier)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(N.tooltipPremiumFooterSegment),
                children: (0, r.jsx)(u.Text, {
                    variant: 'text-xs/semibold',
                    color: 'always-white',
                    children: T.NW.format(T.t['dR/SVF'], { count: t.premiumSubscriberCount })
                })
            })
        ]
    });
}
function L(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: i, tooltipSubtitle: o, tooltipDescription: a } = w(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: N.tooltipBodyContainer,
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
            n.premium ? (0, r.jsx)(x, { guildTraits: n }) : null
        ]
    });
}
function M(e) {
    let t,
        n,
        { guild: o, tooltipColor: l = u.ua7.Colors.BRAND, tooltipPosition: p, className: v, flowerStarClassName: b, iconClassName: y, badgeStrokeColor: T, badgeColor: A, size: R = 16, disableBoostClick: w, 'aria-label': x = !1 } = e,
        M = (0, s.e7)([E.default, g.ZP], () => {
            let e = E.default.getCurrentUser();
            return g.ZP.isMember(null == o ? void 0 : o.id, null == e ? void 0 : e.id);
        }),
        k = (0, s.e7)([m.Z], () => m.Z.theme),
        j = (0, S.XX)(o),
        U = (0, O.i)(j),
        G = i.useCallback(
            (e) => {
                j.premium &&
                    M &&
                    !w &&
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
            [j.premium, M, w, o.id]
        );
    if (U === O.Q.NONE) return null;
    if (U === O.Q.CLAN) {
        var B;
        let e = (0, d.ky)(o.id, null === (B = o.profile) || void 0 === B ? void 0 : B.badge, R);
        return null == e
            ? null
            : (0, r.jsx)(u.ua7, {
                  color: l,
                  position: p,
                  'aria-label': x,
                  text: (0, r.jsx)(L, {
                      badgeType: U,
                      guildTraits: j
                  }),
                  tooltipContentClassName: N.tooltipRemovePadding,
                  children: (t) =>
                      (0, r.jsx)(
                          u.P3F,
                          P(C({}, t), {
                              onClick: G,
                              className: a()(N.clanBadgeContainer, v),
                              children: (0, r.jsx)(f.KQ, {
                                  src: e,
                                  size: R
                              })
                          })
                      )
              });
    }
    let { IconComponent: Z, backgroundDarkColor: F, backgroundLightColor: V, foregroundDarkColor: H, foregroundLightColor: W, premiumBackgroundColor: Y, premiumForegroundColor: K, sizeAdjustment: z } = D[U];
    if (null == Z) return null;
    j.premium && ((t = K), (n = Y));
    let q = (0, c.wj)(k) ? H : W,
        Q = (0, c.wj)(k) ? F : V;
    (t = null != t ? t : q), (n = null != n ? n : Q);
    let X = Math.floor(0.75 * R) - (null != z ? z : 0);
    return (0, r.jsx)(u.ua7, {
        color: l,
        position: p,
        'aria-label': x,
        text: (0, r.jsx)(L, {
            badgeType: U,
            guildTraits: j
        }),
        tooltipContentClassName: N.tooltipRemovePadding,
        children: (e) =>
            (0, r.jsx)(u.P3F, {
                onClick: G,
                children: (0, r.jsx)(
                    h.Z,
                    P(C({}, e), {
                        className: v,
                        flowerStarClassName: b,
                        allowFullSizedIcon: !0,
                        color: null != n ? n : A,
                        stroke: T,
                        size: R,
                        children: (0, r.jsx)(Z, {
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
