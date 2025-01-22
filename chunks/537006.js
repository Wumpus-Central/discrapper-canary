var i = r(200651),
    a = r(120356),
    o = r.n(a),
    s = r(704215),
    l = r(481060),
    u = r(906732),
    c = r(335131),
    d = r(243778),
    f = r(197115),
    p = r(703656),
    h = r(785717),
    _ = r(652853),
    m = r(475413),
    g = r(228168),
    E = r(981631),
    v = r(921944),
    y = r(474936),
    b = r(388032),
    I = r(411981);
function T(e) {
    let { onClose: n } = e;
    return (0, i.jsx)(l.Clickable, {
        'aria-label': b.intl.string(b.t.WAI6xs),
        onClick: n,
        className: I.upsellCloseIconWrapper,
        children: (0, i.jsx)(l.XSmallIcon, {
            size: 'xs',
            className: I.upsellCloseIcon,
            color: 'currentColor'
        })
    });
}
function S(e) {
    let { tiny: n, isPremiumUser: r, onInteraction: a } = e,
        { analyticsLocations: o, newestAnalyticsLocation: s } = (0, u.ZP)(),
        { trackUserProfileAction: d } = (0, h.KZ)();
    return (0, i.jsxs)('div', {
        className: I.upsellButtons,
        children: [
            (0, i.jsx)('div', {
                className: I.upsellButtonWrapper,
                children: r
                    ? (0, i.jsxs)(l.ShinyButton, {
                          onlyShineOnHover: !0,
                          size: n ? l.Button.Sizes.TINY : l.Button.Sizes.SMALL,
                          look: l.Button.Looks.FILLED,
                          color: l.Button.Colors.PRIMARY,
                          className: I.upsellButton,
                          innerClassName: I.viewPremiumPerksButtonInner,
                          buttonShineClassName: I.viewPremiumPerksButtonShine,
                          onClick: () => {
                              d({ action: g.yM.VIEW_PREMIUM_PERKS }), (0, p.uL)(E.Z5c.APPLICATION_STORE), null == a || a();
                          },
                          children: [
                              (0, i.jsx)(l.NitroWheelIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              b.intl.string(b.t['0Q61kJ'])
                          ]
                      })
                    : (0, i.jsx)(f.Z, {
                          onClick: () => {
                              d({ action: g.yM.GET_PREMIUM }), null == a || a();
                          },
                          buttonText: b.intl.string(b.t.x6rkDg),
                          subscriptionTier: y.Si.TIER_2,
                          premiumModalAnalyticsLocation: { section: E.jXE.USER_PROFILE },
                          className: I.upsellButton,
                          size: n ? l.Button.Sizes.TINY : l.Button.Sizes.SMALL,
                          look: l.Button.Looks.FILLED,
                          color: l.Button.Colors.PRIMARY,
                          onlyShineOnHover: !0
                      })
            }),
            (0, i.jsx)('div', {
                className: I.upsellButtonWrapper,
                children: (0, i.jsx)(m.tG, {
                    icon: l.ShopIcon,
                    action: g.yM.VISIT_SHOP,
                    text: b.intl.string(b.t.b2d0Nz),
                    look: l.Button.Looks.FILLED,
                    color: l.Button.Colors.PRIMARY,
                    size: n ? l.Button.Sizes.TINY : l.Button.Sizes.SMALL,
                    className: I.upsellButton,
                    onClick: () => {
                        (0, c.mK)({
                            analyticsLocations: o,
                            openInLayer: !1,
                            analyticsSource: s
                        }),
                            null == a || a();
                    }
                })
            })
        ]
    });
}
function A(e) {
    let { isPremiumUser: n, onInteraction: r, className: a } = e,
        { profileType: u } = (0, _.z)(),
        c = u === g.y0.FULL_SIZE;
    return (0, i.jsx)(d.ZP, {
        contentTypes: [s.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS],
        children: (e) => {
            let { visibleContent: u, markAsDismissed: d } = e;
            if (u !== s.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) return null;
            {
                let e = (0, i.jsx)('div', {
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: b.intl.string(b.t.EIYbj4)
                        })
                    }),
                    s = (0, i.jsx)(T, { onClose: () => d(v.L.USER_DISMISS) }),
                    u = (0, i.jsx)(S, {
                        isPremiumUser: n,
                        onInteraction: r,
                        tiny: c
                    });
                return c
                    ? (0, i.jsx)('div', {
                          className: o()(I.upsellContainer, a),
                          children: (0, i.jsxs)('div', {
                              className: o()(I.upsellContent, I.upsellRowContent),
                              children: [
                                  e,
                                  (0, i.jsxs)('div', {
                                      className: I.upsellRowRight,
                                      children: [(0, i.jsx)('div', { children: u }), (0, i.jsx)('div', { children: s })]
                                  })
                              ]
                          })
                      })
                    : (0, i.jsx)('div', {
                          className: o()(I.upsellContainer, a),
                          children: (0, i.jsxs)('div', {
                              className: o()(I.upsellContent, I.upsellDefaultContent),
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: I.upsellHeader,
                                      children: [e, (0, i.jsx)('div', { children: s })]
                                  }),
                                  u
                              ]
                          })
                      });
            }
        }
    });
}
n.Z = A;
