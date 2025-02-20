n.d(t, { Z: () => I });
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
    p = n(785717),
    _ = n(652853),
    h = n(475413),
    m = n(228168),
    g = n(981631),
    E = n(921944),
    v = n(474936),
    b = n(388032),
    y = n(279074);
function O(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(s.P3F, {
        'aria-label': b.NW.string(b.t.WAI6xs),
        onClick: t,
        className: y.upsellCloseIconWrapper,
        children: (0, r.jsx)(s.Dio, {
            size: 'xs',
            className: y.upsellCloseIcon,
            color: 'currentColor'
        })
    });
}
function S(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: i } = e,
        { analyticsLocations: o, newestAnalyticsLocation: a } = (0, l.ZP)(),
        { trackUserProfileAction: u } = (0, p.KZ)();
    return (0, r.jsxs)('div', {
        className: y.upsellButtons,
        children: [
            (0, r.jsx)('div', {
                className: y.upsellButtonWrapper,
                children: n
                    ? (0, r.jsxs)(s.gtL, {
                          onlyShineOnHover: !0,
                          size: t ? s.zxk.Sizes.TINY : s.zxk.Sizes.SMALL,
                          look: s.zxk.Looks.FILLED,
                          color: s.zxk.Colors.PRIMARY,
                          className: y.upsellButton,
                          innerClassName: y.viewPremiumPerksButtonInner,
                          buttonShineClassName: y.viewPremiumPerksButtonShine,
                          onClick: () => {
                              u({ action: m.yM.VIEW_PREMIUM_PERKS }), (0, f.uL)(g.Z5c.APPLICATION_STORE), null == i || i();
                          },
                          children: [
                              (0, r.jsx)(s.SrA, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              b.NW.string(b.t['0Q61kJ'])
                          ]
                      })
                    : (0, r.jsx)(d.Z, {
                          onClick: () => {
                              u({ action: m.yM.GET_PREMIUM }), null == i || i();
                          },
                          buttonText: b.NW.string(b.t.x6rkDg),
                          subscriptionTier: v.Si.TIER_2,
                          premiumModalAnalyticsLocation: { section: g.jXE.USER_PROFILE },
                          className: y.upsellButton,
                          size: t ? s.zxk.Sizes.TINY : s.zxk.Sizes.SMALL,
                          look: s.zxk.Looks.FILLED,
                          color: s.zxk.Colors.PRIMARY,
                          onlyShineOnHover: !0
                      })
            }),
            (0, r.jsx)('div', {
                className: y.upsellButtonWrapper,
                children: (0, r.jsx)(h.tG, {
                    icon: s.EOn,
                    action: m.yM.VISIT_SHOP,
                    text: b.NW.string(b.t.b2d0Nz),
                    look: s.zxk.Looks.FILLED,
                    color: s.zxk.Colors.PRIMARY,
                    size: t ? s.zxk.Sizes.TINY : s.zxk.Sizes.SMALL,
                    className: y.upsellButton,
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
let I = function (e) {
    let { isPremiumUser: t, onInteraction: n, className: i } = e,
        { profileType: l } = (0, _.z)(),
        c = l === m.y0.FULL_SIZE;
    return (0, r.jsx)(u.ZP, {
        contentTypes: [a.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS],
        children: (e) => {
            let { visibleContent: l, markAsDismissed: u } = e;
            if (l !== a.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) return null;
            {
                let e = (0, r.jsx)('div', {
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: b.NW.string(b.t.EIYbj4)
                        })
                    }),
                    a = (0, r.jsx)(O, { onClose: () => u(E.L.USER_DISMISS) }),
                    l = (0, r.jsx)(S, {
                        isPremiumUser: t,
                        onInteraction: n,
                        tiny: c
                    });
                return c
                    ? (0, r.jsx)('div', {
                          className: o()(y.upsellContainer, i),
                          children: (0, r.jsxs)('div', {
                              className: o()(y.upsellContent, y.upsellRowContent),
                              children: [
                                  e,
                                  (0, r.jsxs)('div', {
                                      className: y.upsellRowRight,
                                      children: [(0, r.jsx)('div', { children: l }), (0, r.jsx)('div', { children: a })]
                                  })
                              ]
                          })
                      })
                    : (0, r.jsx)('div', {
                          className: o()(y.upsellContainer, i),
                          children: (0, r.jsxs)('div', {
                              className: o()(y.upsellContent, y.upsellDefaultContent),
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: y.upsellHeader,
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
