r.d(n, {
    Z: function () {
        return L;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(442837),
    u = r(692547),
    c = r(780384),
    d = r(481060),
    f = r(353093),
    p = r(979264),
    h = r(436774),
    _ = r(623624),
    m = r(297700),
    g = r(210887),
    E = r(271383),
    v = r(594174),
    y = r(665786),
    b = r(697725),
    I = r(267642),
    T = r(284363),
    S = r(854218),
    A = r(981631),
    C = r(388032),
    N = r(258043);
function R(e, n) {
    let r = n === S.PZ.PUBLIC ? C.intl.string(C.t.op2cJy) : C.intl.string(C.t.TME4LC);
    switch (e) {
        case T.Q.STAFF:
            return {
                tooltipTitle: C.intl.string(C.t['lMrv9/']),
                tooltipSubtitle: C.intl.string(C.t['lMrv9/']),
                tooltipDescription: C.intl.string(C.t['lMrv9/'])
            };
        case T.Q.VERIFIED:
            return {
                tooltipTitle: C.intl.string(C.t.K7iRio),
                tooltipSubtitle: C.intl.string(C.t.iCehw8),
                tooltipDescription: r
            };
        case T.Q.PARTNERED:
            return {
                tooltipTitle: C.intl.string(C.t.K7iRio),
                tooltipSubtitle: C.intl.string(C.t.hfYfEB),
                tooltipDescription: r
            };
        case T.Q.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: C.intl.string(C.t.K7iRio),
                tooltipSubtitle: C.intl.string(C.t['TX+iFB']),
                tooltipDescription: r
            };
        case T.Q.COMMUNITY:
            return {
                tooltipTitle: C.intl.string(C.t.K7iRio),
                tooltipDescription: C.intl.string(C.t.TME4LC)
            };
        case T.Q.DISCOVERABLE:
            return {
                tooltipTitle: C.intl.string(C.t.K7iRio),
                tooltipDescription: C.intl.string(C.t.op2cJy)
            };
        case T.Q.CLAN:
            return {
                tooltipTitle: C.intl.string(C.t['5K6LdX']),
                tooltipDescription: C.intl.string(C.t.YwZfbm)
            };
        default:
            return { tooltipTitle: C.intl.string(C.t.iZRkCw) };
    }
}
let O = {
    [T.Q.STAFF]: {
        IconComponent: d.StaffBadgeIcon,
        foregroundDarkColor: u.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: u.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: u.Z.unsafe_rawColors.GREEN_360.css
    },
    [T.Q.VERIFIED_AND_PARTNERED]: {
        IconComponent: d.CheckmarkSmallIcon,
        foregroundDarkColor: u.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: u.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: u.Z.unsafe_rawColors.GREEN_360.css
    },
    [T.Q.VERIFIED]: {
        IconComponent: d.CheckmarkSmallIcon,
        foregroundDarkColor: u.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: u.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: u.Z.unsafe_rawColors.GREEN_360.css
    },
    [T.Q.PARTNERED]: {
        IconComponent: (0, d.makeIconCompat)(y.Z),
        foregroundDarkColor: u.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: u.Z.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: u.Z.unsafe_rawColors.BRAND_500.css
    },
    [T.Q.COMMUNITY]: {
        IconComponent: d.HomeIcon,
        foregroundDarkColor: u.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: u.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: h.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: u.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [T.Q.DISCOVERABLE]: {
        IconComponent: d.GlobeEarthIcon,
        foregroundDarkColor: u.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: u.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: h.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: u.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [T.Q.CLAN]: {},
    [T.Q.NONE]: {}
};
function D(e) {
    let { guildTraits: n } = e;
    return (0, i.jsxs)('div', {
        className: N.tooltipPremiumFooterContainer,
        children: [
            (0, i.jsxs)('div', {
                className: s()(N.tooltipPremiumFooterSegment, N.tooltipPremiumFooterTierSegment),
                children: [
                    (0, i.jsx)(b.Z, {
                        width: 18,
                        height: 18,
                        className: N.gemIcon
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-xs/semibold',
                        color: 'always-white',
                        children: I.nW(n.premiumTier)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: s()(N.tooltipPremiumFooterSegment),
                children: (0, i.jsx)(d.Text, {
                    variant: 'text-xs/semibold',
                    color: 'always-white',
                    children: C.intl.format(C.t['dR/SVF'], { count: n.premiumSubscriberCount })
                })
            })
        ]
    });
}
function x(e) {
    let { badgeType: n, guildTraits: r } = e,
        { tooltipTitle: a, tooltipSubtitle: o, tooltipDescription: s } = R(n, r.visibility);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: N.tooltipBodyContainer,
                children: [
                    (0, i.jsx)(d.Text, {
                        color: 'interactive-active',
                        variant: 'text-xs/bold',
                        children: a
                    }),
                    null != o
                        ? (0, i.jsx)(d.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: o
                          })
                        : null,
                    null != s
                        ? (0, i.jsx)(d.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: s
                          })
                        : null
                ]
            }),
            r.premium ? (0, i.jsx)(D, { guildTraits: r }) : null
        ]
    });
}
function L(e) {
    let n,
        r,
        { guild: o, tooltipColor: u = d.Tooltip.Colors.BRAND, tooltipPosition: h, className: y, flowerStarClassName: b, iconClassName: I, badgeStrokeColor: C, badgeColor: R, size: D = 16, disableBoostClick: L, 'aria-label': w = !1 } = e,
        P = (0, l.e7)([v.default, E.ZP], () => {
            let e = v.default.getCurrentUser();
            return E.ZP.isMember(null == o ? void 0 : o.id, null == e ? void 0 : e.id);
        }),
        M = (0, l.e7)([g.Z], () => g.Z.theme),
        k = (0, S.XX)(o),
        U = (0, T.i)(k),
        B = a.useCallback(
            (e) => {
                k.premium &&
                    P &&
                    !L &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, _.f)({
                        guildId: o.id,
                        location: {
                            section: A.jXE.GUILD_HEADER,
                            object: A.qAy.BOOST_GEM_ICON
                        }
                    }));
            },
            [k.premium, P, L, o.id]
        );
    if (U === T.Q.NONE) return null;
    if (U === T.Q.CLAN) {
        var G;
        let e = (0, f.ky)(o.id, null === (G = o.profile) || void 0 === G ? void 0 : G.badge, D);
        return null == e
            ? null
            : (0, i.jsx)(d.Tooltip, {
                  color: u,
                  position: h,
                  'aria-label': w,
                  text: (0, i.jsx)(x, {
                      badgeType: U,
                      guildTraits: k
                  }),
                  tooltipContentClassName: N.tooltipRemovePadding,
                  children: (n) =>
                      (0, i.jsx)(d.Clickable, {
                          ...n,
                          onClick: B,
                          className: s()(N.clanBadgeContainer, y),
                          children: (0, i.jsx)(p.KQ, {
                              src: e,
                              size: D
                          })
                      })
              });
    }
    let { IconComponent: Z, backgroundDarkColor: F, backgroundLightColor: V, foregroundDarkColor: j, foregroundLightColor: H, premiumBackgroundColor: Y, premiumForegroundColor: W, sizeAdjustment: K } = O[U];
    if (null == Z) return null;
    k.premium && ((n = W), (r = Y));
    let z = (0, c.wj)(M) ? j : H,
        q = (0, c.wj)(M) ? F : V;
    (n = null != n ? n : z), (r = null != r ? r : q);
    let Q = Math.floor(0.75 * D) - (null != K ? K : 0);
    return (0, i.jsx)(d.Tooltip, {
        color: u,
        position: h,
        'aria-label': w,
        text: (0, i.jsx)(x, {
            badgeType: U,
            guildTraits: k
        }),
        tooltipContentClassName: N.tooltipRemovePadding,
        children: (e) =>
            (0, i.jsx)(d.Clickable, {
                onClick: B,
                children: (0, i.jsx)(m.Z, {
                    ...e,
                    className: y,
                    flowerStarClassName: b,
                    allowFullSizedIcon: !0,
                    color: null != r ? r : R,
                    stroke: C,
                    size: D,
                    children: (0, i.jsx)(Z, {
                        size: 'custom',
                        width: Q,
                        height: Q,
                        className: I,
                        color: null != n ? n : 'currentColor'
                    })
                })
            })
    });
}
