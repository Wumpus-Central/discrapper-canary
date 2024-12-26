r.d(n, {
    Z: function () {
        return x;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(442837),
    u = r(692547),
    c = r(780384),
    d = r(481060),
    f = r(353093),
    _ = r(979264),
    h = r(436774),
    p = r(623624),
    m = r(297700),
    g = r(210887),
    E = r(271383),
    v = r(594174),
    I = r(665786),
    T = r(697725),
    b = r(267642),
    y = r(284363),
    S = r(854218),
    A = r(981631),
    N = r(388032),
    C = r(258043);
function R(e, n) {
    let r = n === S.PZ.PUBLIC ? N.intl.string(N.t.op2cJy) : N.intl.string(N.t.TME4LC);
    switch (e) {
        case y.Q.STAFF:
            return {
                tooltipTitle: N.intl.string(N.t['lMrv9/']),
                tooltipSubtitle: N.intl.string(N.t['lMrv9/']),
                tooltipDescription: N.intl.string(N.t['lMrv9/'])
            };
        case y.Q.VERIFIED:
            return {
                tooltipTitle: N.intl.string(N.t.K7iRio),
                tooltipSubtitle: N.intl.string(N.t.iCehw8),
                tooltipDescription: r
            };
        case y.Q.PARTNERED:
            return {
                tooltipTitle: N.intl.string(N.t.K7iRio),
                tooltipSubtitle: N.intl.string(N.t.hfYfEB),
                tooltipDescription: r
            };
        case y.Q.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: N.intl.string(N.t.K7iRio),
                tooltipSubtitle: N.intl.string(N.t['TX+iFB']),
                tooltipDescription: r
            };
        case y.Q.COMMUNITY:
            return {
                tooltipTitle: N.intl.string(N.t.K7iRio),
                tooltipDescription: N.intl.string(N.t.TME4LC)
            };
        case y.Q.DISCOVERABLE:
            return {
                tooltipTitle: N.intl.string(N.t.K7iRio),
                tooltipDescription: N.intl.string(N.t.op2cJy)
            };
        case y.Q.CLAN:
            return {
                tooltipTitle: N.intl.string(N.t['5K6LdX']),
                tooltipDescription: N.intl.string(N.t.YwZfbm)
            };
        default:
            return { tooltipTitle: N.intl.string(N.t.iZRkCw) };
    }
}
let O = {
    [y.Q.STAFF]: {
        IconComponent: d.StaffBadgeIcon,
        foregroundDarkColor: u.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: u.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: u.Z.unsafe_rawColors.GREEN_360.css
    },
    [y.Q.VERIFIED_AND_PARTNERED]: {
        IconComponent: d.CheckmarkSmallIcon,
        foregroundDarkColor: u.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: u.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: u.Z.unsafe_rawColors.GREEN_360.css
    },
    [y.Q.VERIFIED]: {
        IconComponent: d.CheckmarkSmallIcon,
        foregroundDarkColor: u.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: u.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: u.Z.unsafe_rawColors.GREEN_360.css
    },
    [y.Q.PARTNERED]: {
        IconComponent: (0, d.makeIconCompat)(I.Z),
        foregroundDarkColor: u.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: u.Z.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: u.Z.unsafe_rawColors.BRAND_500.css
    },
    [y.Q.COMMUNITY]: {
        IconComponent: d.HomeIcon,
        foregroundDarkColor: u.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: u.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: h.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: u.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [y.Q.DISCOVERABLE]: {
        IconComponent: d.GlobeEarthIcon,
        foregroundDarkColor: u.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: u.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: u.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: h.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: u.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [y.Q.CLAN]: {},
    [y.Q.NONE]: {}
};
function D(e) {
    let { guildTraits: n } = e;
    return (0, i.jsxs)('div', {
        className: C.tooltipPremiumFooterContainer,
        children: [
            (0, i.jsxs)('div', {
                className: o()(C.tooltipPremiumFooterSegment, C.tooltipPremiumFooterTierSegment),
                children: [
                    (0, i.jsx)(T.Z, {
                        width: 18,
                        height: 18,
                        className: C.gemIcon
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-xs/semibold',
                        color: 'always-white',
                        children: b.nW(n.premiumTier)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: o()(C.tooltipPremiumFooterSegment),
                children: (0, i.jsx)(d.Text, {
                    variant: 'text-xs/semibold',
                    color: 'always-white',
                    children: N.intl.format(N.t['dR/SVF'], { count: n.premiumSubscriberCount })
                })
            })
        ]
    });
}
function L(e) {
    let { badgeType: n, guildTraits: r } = e,
        { tooltipTitle: a, tooltipSubtitle: s, tooltipDescription: o } = R(n, r.visibility);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: C.tooltipBodyContainer,
                children: [
                    (0, i.jsx)(d.Text, {
                        color: 'interactive-active',
                        variant: 'text-xs/bold',
                        children: a
                    }),
                    null != s
                        ? (0, i.jsx)(d.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: s
                          })
                        : null,
                    null != o
                        ? (0, i.jsx)(d.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: o
                          })
                        : null
                ]
            }),
            r.premium ? (0, i.jsx)(D, { guildTraits: r }) : null
        ]
    });
}
function x(e) {
    let n,
        r,
        { guild: s, tooltipColor: u = d.Tooltip.Colors.BRAND, tooltipPosition: h, className: I, flowerStarClassName: T, iconClassName: b, badgeStrokeColor: N, badgeColor: R, size: D = 16, disableBoostClick: x, 'aria-label': w = !1 } = e,
        P = (0, l.e7)([v.default, E.ZP], () => {
            let e = v.default.getCurrentUser();
            return E.ZP.isMember(null == s ? void 0 : s.id, null == e ? void 0 : e.id);
        }),
        M = (0, l.e7)([g.Z], () => g.Z.theme),
        k = (0, S.XX)(s),
        U = (0, y.i)(k),
        B = a.useCallback(
            (e) => {
                k.premium &&
                    P &&
                    !x &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, p.f)({
                        guildId: s.id,
                        location: {
                            section: A.jXE.GUILD_HEADER,
                            object: A.qAy.BOOST_GEM_ICON
                        }
                    }));
            },
            [k.premium, P, x, s.id]
        );
    if (U === y.Q.NONE) return null;
    if (U === y.Q.CLAN) {
        var G;
        let e = (0, f.ky)(s.id, null === (G = s.profile) || void 0 === G ? void 0 : G.badge, D);
        return null == e
            ? null
            : (0, i.jsx)(d.Tooltip, {
                  color: u,
                  position: h,
                  'aria-label': w,
                  text: (0, i.jsx)(L, {
                      badgeType: U,
                      guildTraits: k
                  }),
                  tooltipContentClassName: C.tooltipRemovePadding,
                  children: (n) =>
                      (0, i.jsx)(d.Clickable, {
                          ...n,
                          onClick: B,
                          className: o()(C.clanBadgeContainer, I),
                          children: (0, i.jsx)(_.KQ, {
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
        text: (0, i.jsx)(L, {
            badgeType: U,
            guildTraits: k
        }),
        tooltipContentClassName: C.tooltipRemovePadding,
        children: (e) =>
            (0, i.jsx)(d.Clickable, {
                onClick: B,
                children: (0, i.jsx)(m.Z, {
                    ...e,
                    className: I,
                    flowerStarClassName: T,
                    allowFullSizedIcon: !0,
                    color: null != r ? r : R,
                    stroke: N,
                    size: D,
                    children: (0, i.jsx)(Z, {
                        size: 'custom',
                        width: Q,
                        height: Q,
                        className: b,
                        color: null != n ? n : 'currentColor'
                    })
                })
            })
    });
}
