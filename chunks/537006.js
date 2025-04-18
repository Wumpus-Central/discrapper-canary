n.d(t, { Z: () => S });
var r = n(200651),
    i = n(120356),
    a = n.n(i),
    o = n(704215),
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
    v = n(869310);
function O(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(s.P3F, {
        'aria-label': y.NW.string(y.t.WAI6xs),
        onClick: t,
        className: v.upsellCloseIconWrapper,
        children: (0, r.jsx)(s.Dio, {
            size: 'xs',
            className: v.upsellCloseIcon,
            color: 'currentColor'
        })
    });
}
function I(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: i } = e,
        { analyticsLocations: a, newestAnalyticsLocation: o } = (0, l.ZP)(),
        { trackUserProfileAction: u } = (0, _.KZ)();
    return (0, r.jsxs)('div', {
        className: v.upsellButtons,
        children: [
            (0, r.jsx)('div', {
                className: v.upsellButtonWrapper,
                children: n
                    ? (0, r.jsxs)(s.gtL, {
                          onlyShineOnHover: !0,
                          size: t ? s.zxk.Sizes.TINY : s.zxk.Sizes.SMALL,
                          look: s.zxk.Looks.FILLED,
                          color: s.zxk.Colors.PRIMARY,
                          className: v.upsellButton,
                          innerClassName: v.viewPremiumPerksButtonInner,
                          buttonShineClassName: v.viewPremiumPerksButtonShine,
                          onClick: () => {
                              u({ action: m.yM.VIEW_PREMIUM_PERKS }), (0, f.uL)(g.Z5c.APPLICATION_STORE), null == i || i();
                          },
                          children: [
                              (0, r.jsx)(s.SrA, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              y.NW.string(y.t['0Q61kJ'])
                          ]
                      })
                    : (0, r.jsx)(d.Z, {
                          onClick: () => {
                              u({ action: m.yM.GET_PREMIUM }), null == i || i();
                          },
                          buttonText: y.NW.string(y.t.x6rkDg),
                          subscriptionTier: b.Si.TIER_2,
                          premiumModalAnalyticsLocation: { section: g.jXE.USER_PROFILE },
                          className: v.upsellButton,
                          size: t ? s.zxk.Sizes.TINY : s.zxk.Sizes.SMALL,
                          look: s.zxk.Looks.FILLED,
                          color: s.zxk.Colors.PRIMARY,
                          onlyShineOnHover: !0
                      })
            }),
            (0, r.jsx)('div', {
                className: v.upsellButtonWrapper,
                children: (0, r.jsx)(h.tG, {
                    icon: s.EOn,
                    action: m.yM.VISIT_SHOP,
                    text: y.NW.string(y.t.b2d0Nz),
                    look: s.zxk.Looks.FILLED,
                    color: s.zxk.Colors.PRIMARY,
                    themeColor: 'none',
                    size: t ? s.zxk.Sizes.TINY : s.zxk.Sizes.SMALL,
                    className: v.upsellButton,
                    onClick: () => {
                        (0, c.mK)({
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
let S = function (e) {
    let { isPremiumUser: t, onInteraction: n, className: i } = e,
        { profileType: l } = (0, p.z)(),
        c = l === m.y0.FULL_SIZE;
    return (0, r.jsx)(u.ZP, {
        contentTypes: [o.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS],
        children: (e) => {
            let { visibleContent: l, markAsDismissed: u } = e;
            if (l !== o.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) return null;
            {
                let e = (0, r.jsx)('div', {
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: y.NW.string(y.t.EIYbj4)
                        })
                    }),
                    o = (0, r.jsx)(O, { onClose: () => u(E.L.USER_DISMISS) }),
                    l = (0, r.jsx)(I, {
                        isPremiumUser: t,
                        onInteraction: n,
                        tiny: c
                    });
                return c
                    ? (0, r.jsx)('div', {
                          className: a()(v.upsellContainer, i),
                          children: (0, r.jsxs)('div', {
                              className: a()(v.upsellContent, v.upsellRowContent),
                              children: [
                                  e,
                                  (0, r.jsxs)('div', {
                                      className: v.upsellRowRight,
                                      children: [(0, r.jsx)('div', { children: l }), (0, r.jsx)('div', { children: o })]
                                  })
                              ]
                          })
                      })
                    : (0, r.jsx)('div', {
                          className: a()(v.upsellContainer, i),
                          children: (0, r.jsxs)('div', {
                              className: a()(v.upsellContent, v.upsellDefaultContent),
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: v.upsellHeader,
                                      children: [e, (0, r.jsx)('div', { children: o })]
                                  }),
                                  l
                              ]
                          })
                      });
            }
        }
    });
};
