n.d(t, { Z: () => L });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(692547),
    u = n(780384),
    c = n(481060),
    d = n(353093),
    f = n(979264),
    _ = n(436774),
    p = n(623624),
    h = n(297700),
    m = n(210887),
    g = n(271383),
    E = n(594174),
    v = n(665786),
    y = n(697725),
    I = n(267642),
    T = n(284363),
    b = n(854218),
    S = n(981631),
    A = n(388032),
    N = n(496973);
function C(e, t) {
    let n = t === b.PZ.PUBLIC ? A.intl.string(A.t.op2cJy) : A.intl.string(A.t.TME4LC);
    switch (e) {
        case T.Q.STAFF:
            return {
                tooltipTitle: A.intl.string(A.t['lMrv9/']),
                tooltipSubtitle: A.intl.string(A.t['lMrv9/']),
                tooltipDescription: A.intl.string(A.t['lMrv9/'])
            };
        case T.Q.VERIFIED:
            return {
                tooltipTitle: A.intl.string(A.t.K7iRio),
                tooltipSubtitle: A.intl.string(A.t.iCehw8),
                tooltipDescription: n
            };
        case T.Q.PARTNERED:
            return {
                tooltipTitle: A.intl.string(A.t.K7iRio),
                tooltipSubtitle: A.intl.string(A.t.hfYfEB),
                tooltipDescription: n
            };
        case T.Q.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: A.intl.string(A.t.K7iRio),
                tooltipSubtitle: A.intl.string(A.t['TX+iFB']),
                tooltipDescription: n
            };
        case T.Q.COMMUNITY:
            return {
                tooltipTitle: A.intl.string(A.t.K7iRio),
                tooltipDescription: A.intl.string(A.t.TME4LC)
            };
        case T.Q.DISCOVERABLE:
            return {
                tooltipTitle: A.intl.string(A.t.K7iRio),
                tooltipDescription: A.intl.string(A.t.op2cJy)
            };
        case T.Q.CLAN:
            return {
                tooltipTitle: A.intl.string(A.t['5K6LdX']),
                tooltipDescription: A.intl.string(A.t.YwZfbm)
            };
        default:
            return { tooltipTitle: A.intl.string(A.t.iZRkCw) };
    }
}
let R = {
    [T.Q.STAFF]: {
        IconComponent: c.Ymb,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [T.Q.VERIFIED_AND_PARTNERED]: {
        IconComponent: c.kmB,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [T.Q.VERIFIED]: {
        IconComponent: c.kmB,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [T.Q.PARTNERED]: {
        IconComponent: (0, c.GSL)(v.Z),
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
    },
    [T.Q.COMMUNITY]: {
        IconComponent: c.tvw,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: _.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [T.Q.DISCOVERABLE]: {
        IconComponent: c.enf,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: _.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [T.Q.CLAN]: {},
    [T.Q.NONE]: {}
};
function O(e) {
    let { guildTraits: t } = e;
    return (0, i.jsxs)('div', {
        className: N.tooltipPremiumFooterContainer,
        children: [
            (0, i.jsxs)('div', {
                className: s()(N.tooltipPremiumFooterSegment, N.tooltipPremiumFooterTierSegment),
                children: [
                    (0, i.jsx)(y.Z, {
                        width: 18,
                        height: 18,
                        className: N.gemIcon
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/semibold',
                        color: 'always-white',
                        children: I.nW(t.premiumTier)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: s()(N.tooltipPremiumFooterSegment),
                children: (0, i.jsx)(c.Text, {
                    variant: 'text-xs/semibold',
                    color: 'always-white',
                    children: A.intl.format(A.t['dR/SVF'], { count: t.premiumSubscriberCount })
                })
            })
        ]
    });
}
function D(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: r, tooltipSubtitle: a, tooltipDescription: s } = C(t, n.visibility);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: N.tooltipBodyContainer,
                children: [
                    (0, i.jsx)(c.Text, {
                        color: 'interactive-active',
                        variant: 'text-xs/bold',
                        children: r
                    }),
                    null != a
                        ? (0, i.jsx)(c.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: a
                          })
                        : null,
                    null != s
                        ? (0, i.jsx)(c.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: s
                          })
                        : null
                ]
            }),
            n.premium ? (0, i.jsx)(O, { guildTraits: n }) : null
        ]
    });
}
function L(e) {
    let t,
        n,
        { guild: a, tooltipColor: l = c.ua7.Colors.BRAND, tooltipPosition: _, className: v, flowerStarClassName: y, iconClassName: I, badgeStrokeColor: A, badgeColor: C, size: O = 16, disableBoostClick: L, 'aria-label': x = !1 } = e,
        P = (0, o.e7)([E.default, g.ZP], () => {
            let e = E.default.getCurrentUser();
            return g.ZP.isMember(null == a ? void 0 : a.id, null == e ? void 0 : e.id);
        }),
        w = (0, o.e7)([m.Z], () => m.Z.theme),
        M = (0, b.XX)(a),
        k = (0, T.i)(M),
        U = r.useCallback(
            (e) => {
                M.premium &&
                    P &&
                    !L &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, p.f)({
                        guildId: a.id,
                        location: {
                            section: S.jXE.GUILD_HEADER,
                            object: S.qAy.BOOST_GEM_ICON
                        }
                    }));
            },
            [M.premium, P, L, a.id]
        );
    if (k === T.Q.NONE) return null;
    if (k === T.Q.CLAN) {
        var G;
        let e = (0, d.ky)(a.id, null === (G = a.profile) || void 0 === G ? void 0 : G.badge, O);
        return null == e
            ? null
            : (0, i.jsx)(c.ua7, {
                  color: l,
                  position: _,
                  'aria-label': x,
                  text: (0, i.jsx)(D, {
                      badgeType: k,
                      guildTraits: M
                  }),
                  tooltipContentClassName: N.tooltipRemovePadding,
                  children: (t) =>
                      (0, i.jsx)(c.P3F, {
                          ...t,
                          onClick: U,
                          className: s()(N.clanBadgeContainer, v),
                          children: (0, i.jsx)(f.KQ, {
                              src: e,
                              size: O
                          })
                      })
              });
    }
    let { IconComponent: B, backgroundDarkColor: Z, backgroundLightColor: F, foregroundDarkColor: V, foregroundLightColor: j, premiumBackgroundColor: H, premiumForegroundColor: Y, sizeAdjustment: W } = R[k];
    if (null == B) return null;
    M.premium && ((t = Y), (n = H));
    let K = (0, u.wj)(w) ? V : j,
        z = (0, u.wj)(w) ? Z : F;
    (t = null != t ? t : K), (n = null != n ? n : z);
    let q = Math.floor(0.75 * O) - (null != W ? W : 0);
    return (0, i.jsx)(c.ua7, {
        color: l,
        position: _,
        'aria-label': x,
        text: (0, i.jsx)(D, {
            badgeType: k,
            guildTraits: M
        }),
        tooltipContentClassName: N.tooltipRemovePadding,
        children: (e) =>
            (0, i.jsx)(c.P3F, {
                onClick: U,
                children: (0, i.jsx)(h.Z, {
                    ...e,
                    className: v,
                    flowerStarClassName: y,
                    allowFullSizedIcon: !0,
                    color: null != n ? n : C,
                    stroke: A,
                    size: O,
                    children: (0, i.jsx)(B, {
                        size: 'custom',
                        width: q,
                        height: q,
                        className: I,
                        color: null != t ? t : 'currentColor'
                    })
                })
            })
    });
}
