n.d(t, { Z: () => S });
var i = n(200651),
    r = n(120356),
    a = n.n(r),
    s = n(704215),
    o = n(481060),
    l = n(906732),
    u = n(335131),
    c = n(243778),
    d = n(197115),
    f = n(703656),
    _ = n(785717),
    p = n(652853),
    h = n(475413),
    m = n(228168),
    g = n(981631),
    E = n(921944),
    v = n(474936),
    y = n(388032),
    I = n(411981);
function T(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(o.P3F, {
        'aria-label': y.intl.string(y.t.WAI6xs),
        onClick: t,
        className: I.upsellCloseIconWrapper,
        children: (0, i.jsx)(o.Dio, {
            size: 'xs',
            className: I.upsellCloseIcon,
            color: 'currentColor'
        })
    });
}
function b(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: r } = e,
        { analyticsLocations: a, newestAnalyticsLocation: s } = (0, l.ZP)(),
        { trackUserProfileAction: c } = (0, _.KZ)();
    return (0, i.jsxs)('div', {
        className: I.upsellButtons,
        children: [
            (0, i.jsx)('div', {
                className: I.upsellButtonWrapper,
                children: n
                    ? (0, i.jsxs)(o.gtL, {
                          onlyShineOnHover: !0,
                          size: t ? o.zxk.Sizes.TINY : o.zxk.Sizes.SMALL,
                          look: o.zxk.Looks.FILLED,
                          color: o.zxk.Colors.PRIMARY,
                          className: I.upsellButton,
                          innerClassName: I.viewPremiumPerksButtonInner,
                          buttonShineClassName: I.viewPremiumPerksButtonShine,
                          onClick: () => {
                              c({ action: m.yM.VIEW_PREMIUM_PERKS }), (0, f.uL)(g.Z5c.APPLICATION_STORE), null == r || r();
                          },
                          children: [
                              (0, i.jsx)(o.SrA, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              y.intl.string(y.t['0Q61kJ'])
                          ]
                      })
                    : (0, i.jsx)(d.Z, {
                          onClick: () => {
                              c({ action: m.yM.GET_PREMIUM }), null == r || r();
                          },
                          buttonText: y.intl.string(y.t.x6rkDg),
                          subscriptionTier: v.Si.TIER_2,
                          premiumModalAnalyticsLocation: { section: g.jXE.USER_PROFILE },
                          className: I.upsellButton,
                          size: t ? o.zxk.Sizes.TINY : o.zxk.Sizes.SMALL,
                          look: o.zxk.Looks.FILLED,
                          color: o.zxk.Colors.PRIMARY,
                          onlyShineOnHover: !0
                      })
            }),
            (0, i.jsx)('div', {
                className: I.upsellButtonWrapper,
                children: (0, i.jsx)(h.tG, {
                    icon: o.EOn,
                    action: m.yM.VISIT_SHOP,
                    text: y.intl.string(y.t.b2d0Nz),
                    look: o.zxk.Looks.FILLED,
                    color: o.zxk.Colors.PRIMARY,
                    size: t ? o.zxk.Sizes.TINY : o.zxk.Sizes.SMALL,
                    className: I.upsellButton,
                    onClick: () => {
                        (0, u.mK)({
                            analyticsLocations: a,
                            openInLayer: !1,
                            analyticsSource: s
                        }),
                            null == r || r();
                    }
                })
            })
        ]
    });
}
let S = function (e) {
    let { isPremiumUser: t, onInteraction: n, className: r } = e,
        { profileType: l } = (0, p.z)(),
        u = l === m.y0.FULL_SIZE;
    return (0, i.jsx)(c.ZP, {
        contentTypes: [s.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS],
        children: (e) => {
            let { visibleContent: l, markAsDismissed: c } = e;
            if (l !== s.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) return null;
            {
                let e = (0, i.jsx)('div', {
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: y.intl.string(y.t.EIYbj4)
                        })
                    }),
                    s = (0, i.jsx)(T, { onClose: () => c(E.L.USER_DISMISS) }),
                    l = (0, i.jsx)(b, {
                        isPremiumUser: t,
                        onInteraction: n,
                        tiny: u
                    });
                return u
                    ? (0, i.jsx)('div', {
                          className: a()(I.upsellContainer, r),
                          children: (0, i.jsxs)('div', {
                              className: a()(I.upsellContent, I.upsellRowContent),
                              children: [
                                  e,
                                  (0, i.jsxs)('div', {
                                      className: I.upsellRowRight,
                                      children: [(0, i.jsx)('div', { children: l }), (0, i.jsx)('div', { children: s })]
                                  })
                              ]
                          })
                      })
                    : (0, i.jsx)('div', {
                          className: a()(I.upsellContainer, r),
                          children: (0, i.jsxs)('div', {
                              className: a()(I.upsellContent, I.upsellDefaultContent),
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: I.upsellHeader,
                                      children: [e, (0, i.jsx)('div', { children: s })]
                                  }),
                                  l
                              ]
                          })
                      });
            }
        }
    });
};
