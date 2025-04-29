n.d(t, { Z: () => S });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(704215),
    s = n(481060),
    l = n(906732),
    c = n(335131),
    u = n(243778),
    d = n(197115),
    f = n(703656),
    _ = n(785717),
    p = n(652853),
    h = n(475413),
    m = n(228168),
    g = n(981631),
    E = n(921944),
    b = n(474936),
    y = n(388032),
    O = n(869310);
function v(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(s.P3F, {
        'aria-label': y.intl.string(y.t.WAI6xs),
        onClick: t,
        className: O.upsellCloseIconWrapper,
        children: (0, r.jsx)(s.Dio, {
            size: 'xs',
            className: O.upsellCloseIcon,
            color: 'currentColor'
        })
    });
}
function I(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: i } = e,
        { analyticsLocations: o, newestAnalyticsLocation: a } = (0, l.ZP)(),
        { trackUserProfileAction: u } = (0, _.KZ)();
    return (0, r.jsxs)('div', {
        className: O.upsellButtons,
        children: [
            (0, r.jsx)('div', {
                className: O.upsellButtonWrapper,
                children: n
                    ? (0, r.jsxs)(s.gtL, {
                          onlyShineOnHover: !0,
                          size: t ? s.zxk.Sizes.TINY : s.zxk.Sizes.SMALL,
                          look: s.zxk.Looks.FILLED,
                          color: s.zxk.Colors.PRIMARY,
                          className: O.upsellButton,
                          innerClassName: O.viewPremiumPerksButtonInner,
                          buttonShineClassName: O.viewPremiumPerksButtonShine,
                          onClick: () => {
                              u({ action: m.yM.VIEW_PREMIUM_PERKS }), (0, f.uL)(g.Z5c.APPLICATION_STORE), null == i || i();
                          },
                          children: [
                              (0, r.jsx)(s.SrA, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              y.intl.string(y.t['0Q61kJ'])
                          ]
                      })
                    : (0, r.jsx)(d.Z, {
                          onClick: () => {
                              u({ action: m.yM.GET_PREMIUM }), null == i || i();
                          },
                          buttonText: y.intl.string(y.t.x6rkDg),
                          subscriptionTier: b.Si.TIER_2,
                          premiumModalAnalyticsLocation: { section: g.jXE.USER_PROFILE },
                          className: O.upsellButton,
                          size: t ? s.zxk.Sizes.TINY : s.zxk.Sizes.SMALL,
                          look: s.zxk.Looks.FILLED,
                          color: s.zxk.Colors.PRIMARY,
                          onlyShineOnHover: !0
                      })
            }),
            (0, r.jsx)('div', {
                className: O.upsellButtonWrapper,
                children: (0, r.jsx)(h.tG, {
                    icon: s.EOn,
                    action: m.yM.VISIT_SHOP,
                    text: y.intl.string(y.t.b2d0Nz),
                    look: s.zxk.Looks.FILLED,
                    color: s.zxk.Colors.PRIMARY,
                    themeColor: 'none',
                    size: t ? s.zxk.Sizes.TINY : s.zxk.Sizes.SMALL,
                    className: O.upsellButton,
                    onClick: () => {
                        (0, c.mK)({
                            analyticsLocations: o,
                            openInLayer: !1,
                            analyticsSource: a
                        }),
                            null == i || i();
                    }
                })
            })
        ]
    });
}
let S = function (e) {
    let { isPremiumUser: t, onInteraction: n, className: i } = e,
        { themeType: l } = (0, p.z)(),
        c = l === m.lY.MODAL;
    return (0, r.jsx)(u.ZP, {
        contentTypes: [a.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS],
        children: (e) => {
            let { visibleContent: l, markAsDismissed: u } = e;
            if (l !== a.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) return null;
            {
                let e = (0, r.jsx)('div', {
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: y.intl.string(y.t.EIYbj4)
                        })
                    }),
                    a = (0, r.jsx)(v, { onClose: () => u(E.L.USER_DISMISS) }),
                    l = (0, r.jsx)(I, {
                        isPremiumUser: t,
                        onInteraction: n,
                        tiny: c
                    });
                return c
                    ? (0, r.jsx)('div', {
                          className: o()(O.upsellContainer, i),
                          children: (0, r.jsxs)('div', {
                              className: o()(O.upsellContent, O.upsellRowContent),
                              children: [
                                  e,
                                  (0, r.jsxs)('div', {
                                      className: O.upsellRowRight,
                                      children: [(0, r.jsx)('div', { children: l }), (0, r.jsx)('div', { children: a })]
                                  })
                              ]
                          })
                      })
                    : (0, r.jsx)('div', {
                          className: o()(O.upsellContainer, i),
                          children: (0, r.jsxs)('div', {
                              className: o()(O.upsellContent, O.upsellDefaultContent),
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: O.upsellHeader,
                                      children: [e, (0, r.jsx)('div', { children: a })]
                                  }),
                                  l
                              ]
                          })
                      });
            }
        }
    });
};
