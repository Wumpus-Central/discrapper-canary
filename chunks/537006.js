n.d(t, { Z: () => R });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(906732),
    d = n(335131),
    f = n(211644),
    _ = n(266454),
    p = n(605236),
    h = n(767714),
    m = n(703656),
    g = n(914010),
    E = n(785717),
    b = n(652853),
    y = n(475413),
    O = n(228168),
    v = n(981631),
    I = n(921944),
    T = n(474936),
    S = n(388032),
    A = n(869310);
function N(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(c.P3F, {
        'aria-label': S.intl.string(S.t.WAI6xs),
        onClick: t,
        className: A.upsellCloseIconWrapper,
        children: (0, r.jsx)(c.Dio, {
            size: 'xs',
            className: A.upsellCloseIcon,
            color: 'currentColor'
        })
    });
}
function C(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: i } = e,
        { analyticsLocations: a, newestAnalyticsLocation: o } = (0, u.ZP)(),
        { trackUserProfileAction: s } = (0, E.KZ)();
    return (0, r.jsxs)('div', {
        className: A.upsellButtons,
        children: [
            (0, r.jsx)('div', {
                className: A.upsellButtonWrapper,
                children: n
                    ? (0, r.jsxs)(c.gtL, {
                          onlyShineOnHover: !0,
                          size: t ? c.zxk.Sizes.TINY : c.zxk.Sizes.SMALL,
                          look: c.zxk.Looks.FILLED,
                          color: c.zxk.Colors.PRIMARY,
                          className: A.upsellButton,
                          innerClassName: A.viewPremiumPerksButtonInner,
                          buttonShineClassName: A.viewPremiumPerksButtonShine,
                          onClick: () => {
                              (s({ action: O.yM.VIEW_PREMIUM_PERKS }), (0, m.uL)(v.Z5c.APPLICATION_STORE), null == i || i());
                          },
                          children: [
                              (0, r.jsx)(c.SrA, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              S.intl.string(S.t['0Q61kJ'])
                          ]
                      })
                    : (0, r.jsx)(h.Z, {
                          onClick: () => {
                              (s({ action: O.yM.GET_PREMIUM }), null == i || i());
                          },
                          textOptions: { textOverride: S.intl.string(S.t.x6rkDg) },
                          subscriptionTier: T.Si.TIER_2,
                          premiumModalAnalyticsLocation: { section: v.jXE.USER_PROFILE },
                          className: A.upsellButton,
                          size: t ? c.zxk.Sizes.TINY : c.zxk.Sizes.SMALL,
                          look: c.zxk.Looks.FILLED,
                          color: c.zxk.Colors.PRIMARY,
                          onlyShineOnHover: !0
                      })
            }),
            (0, r.jsx)('div', {
                className: A.upsellButtonWrapper,
                children: (0, r.jsx)(y.tG, {
                    icon: c.EOn,
                    action: O.yM.VISIT_SHOP,
                    text: S.intl.string(S.t.b2d0Nz),
                    look: c.zxk.Looks.FILLED,
                    color: c.zxk.Colors.PRIMARY,
                    themeColor: 'none',
                    size: t ? c.zxk.Sizes.TINY : c.zxk.Sizes.SMALL,
                    className: A.upsellButton,
                    onClick: () => {
                        ((0, d.mK)({
                            analyticsLocations: a,
                            openInLayer: !1,
                            analyticsSource: o
                        }),
                            null == i || i());
                    }
                })
            })
        ]
    });
}
function R(e) {
    let { isPremiumUser: t, onInteraction: n, className: a } = e,
        { themeType: u } = (0, b.z)(),
        d = u === O.lY.MODAL,
        h = (0, _.Nj)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        m = (0, s.e7)([g.Z], () => g.Z.getGuildId());
    if (
        (i.useEffect(() => {
            if (!h)
                return (
                    (0, p.kk)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                    () => {
                        (0, f.gE)({ content: l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
                    }
                );
        }, [h]),
        h)
    )
        return null;
    let E = (0, r.jsx)('div', {
            children: (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                children: S.intl.string(S.t.EIYbj4)
            })
        }),
        y = (0, r.jsx)(N, {
            onClose: () => {
                (0, _.Q3)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: I.L.USER_DISMISS,
                    guildId: m,
                    forceTrack: !0
                });
            }
        }),
        v = (0, r.jsx)(C, {
            isPremiumUser: t,
            onInteraction: n,
            tiny: d
        });
    return d
        ? (0, r.jsx)('div', {
              className: o()(A.upsellContainer, a),
              children: (0, r.jsxs)('div', {
                  className: o()(A.upsellContent, A.upsellRowContent),
                  children: [
                      E,
                      (0, r.jsxs)('div', {
                          className: A.upsellRowRight,
                          children: [(0, r.jsx)('div', { children: v }), (0, r.jsx)('div', { children: y })]
                      })
                  ]
              })
          })
        : (0, r.jsx)('div', {
              className: o()(A.upsellContainer, a),
              children: (0, r.jsxs)('div', {
                  className: o()(A.upsellContent, A.upsellDefaultContent),
                  children: [
                      (0, r.jsxs)('div', {
                          className: A.upsellHeader,
                          children: [E, (0, r.jsx)('div', { children: y })]
                      }),
                      v
                  ]
              })
          });
}
