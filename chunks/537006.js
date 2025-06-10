n.d(t, { Z: () => C });
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
    _ = n(605236),
    p = n(767714),
    h = n(703656),
    m = n(914010),
    g = n(785717),
    E = n(652853),
    b = n(475413),
    y = n(228168),
    O = n(981631),
    v = n(921944),
    I = n(474936),
    S = n(388032),
    T = n(869310);
function A(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(c.P3F, {
        'aria-label': S.intl.string(S.t.WAI6xs),
        onClick: t,
        className: T.upsellCloseIconWrapper,
        children: (0, r.jsx)(c.Dio, {
            size: 'xs',
            className: T.upsellCloseIcon,
            color: 'currentColor'
        })
    });
}
function N(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: i } = e,
        { analyticsLocations: a, newestAnalyticsLocation: o } = (0, u.ZP)(),
        { trackUserProfileAction: s } = (0, g.KZ)();
    return (0, r.jsxs)('div', {
        className: T.upsellButtons,
        children: [
            (0, r.jsx)('div', {
                className: T.upsellButtonWrapper,
                children: n
                    ? (0, r.jsxs)(c.gtL, {
                          onlyShineOnHover: !0,
                          size: t ? c.zxk.Sizes.TINY : c.zxk.Sizes.SMALL,
                          look: c.zxk.Looks.FILLED,
                          color: c.zxk.Colors.PRIMARY,
                          className: T.upsellButton,
                          innerClassName: T.viewPremiumPerksButtonInner,
                          buttonShineClassName: T.viewPremiumPerksButtonShine,
                          onClick: () => {
                              s({ action: y.yM.VIEW_PREMIUM_PERKS }), (0, h.uL)(O.Z5c.APPLICATION_STORE), null == i || i();
                          },
                          children: [
                              (0, r.jsx)(c.SrA, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              S.intl.string(S.t['0Q61kJ'])
                          ]
                      })
                    : (0, r.jsx)(p.Z, {
                          onClick: () => {
                              s({ action: y.yM.GET_PREMIUM }), null == i || i();
                          },
                          textOptions: { textOverride: S.intl.string(S.t.x6rkDg) },
                          subscriptionTier: I.Si.TIER_2,
                          premiumModalAnalyticsLocation: { section: O.jXE.USER_PROFILE },
                          className: T.upsellButton,
                          size: t ? c.zxk.Sizes.TINY : c.zxk.Sizes.SMALL,
                          look: c.zxk.Looks.FILLED,
                          color: c.zxk.Colors.PRIMARY,
                          onlyShineOnHover: !0
                      })
            }),
            (0, r.jsx)('div', {
                className: T.upsellButtonWrapper,
                children: (0, r.jsx)(b.tG, {
                    icon: c.EOn,
                    action: y.yM.VISIT_SHOP,
                    text: S.intl.string(S.t.b2d0Nz),
                    look: c.zxk.Looks.FILLED,
                    color: c.zxk.Colors.PRIMARY,
                    themeColor: 'none',
                    size: t ? c.zxk.Sizes.TINY : c.zxk.Sizes.SMALL,
                    className: T.upsellButton,
                    onClick: () => {
                        (0, d.mK)({
                            analyticsLocations: a,
                            openInLayer: !1,
                            analyticsSource: o
                        }),
                            null == i || i();
                    }
                })
            })
        ]
    });
}
function C(e) {
    let { isPremiumUser: t, onInteraction: n, className: a } = e,
        { themeType: u } = (0, E.z)(),
        d = u === y.lY.MODAL,
        p = (0, _.wE)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        h = (0, s.e7)([m.Z], () => m.Z.getGuildId());
    if (
        (i.useEffect(() => {
            if (!p)
                return (
                    (0, _.kk)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                    () => {
                        (0, f.gE)({ content: l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
                    }
                );
        }, [p]),
        p)
    )
        return null;
    let g = (0, r.jsx)('div', {
            children: (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                children: S.intl.string(S.t.EIYbj4)
            })
        }),
        b = (0, r.jsx)(A, {
            onClose: () => {
                (0, _.EW)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: v.L.USER_DISMISS,
                    guildId: h,
                    forceTrack: !0
                });
            }
        }),
        O = (0, r.jsx)(N, {
            isPremiumUser: t,
            onInteraction: n,
            tiny: d
        });
    return d
        ? (0, r.jsx)('div', {
              className: o()(T.upsellContainer, a),
              children: (0, r.jsxs)('div', {
                  className: o()(T.upsellContent, T.upsellRowContent),
                  children: [
                      g,
                      (0, r.jsxs)('div', {
                          className: T.upsellRowRight,
                          children: [(0, r.jsx)('div', { children: O }), (0, r.jsx)('div', { children: b })]
                      })
                  ]
              })
          })
        : (0, r.jsx)('div', {
              className: o()(T.upsellContainer, a),
              children: (0, r.jsxs)('div', {
                  className: o()(T.upsellContent, T.upsellDefaultContent),
                  children: [
                      (0, r.jsxs)('div', {
                          className: T.upsellHeader,
                          children: [g, (0, r.jsx)('div', { children: b })]
                      }),
                      O
                  ]
              })
          });
}
