var i = r(200651),
    a = r(120356),
    s = r.n(a),
    o = r(704215),
    l = r(481060),
    u = r(906732),
    c = r(335131),
    d = r(243778),
    f = r(197115),
    _ = r(703656),
    h = r(785717),
    p = r(652853),
    m = r(475413),
    g = r(228168),
    E = r(981631),
    v = r(921944),
    I = r(474936),
    T = r(388032),
    b = r(411981);
function y(e) {
    let { onClose: n } = e;
    return (0, i.jsx)(l.Clickable, {
        'aria-label': T.intl.string(T.t.WAI6xs),
        onClick: n,
        className: b.upsellCloseIconWrapper,
        children: (0, i.jsx)(l.XSmallIcon, {
            size: 'xs',
            className: b.upsellCloseIcon,
            color: 'currentColor'
        })
    });
}
function S(e) {
    let { tiny: n, isPremiumUser: r, onInteraction: a } = e,
        { analyticsLocations: s, newestAnalyticsLocation: o } = (0, u.ZP)(),
        { trackUserProfileAction: d } = (0, h.KZ)();
    return (0, i.jsxs)('div', {
        className: b.upsellButtons,
        children: [
            (0, i.jsx)('div', {
                className: b.upsellButtonWrapper,
                children: r
                    ? (0, i.jsxs)(l.ShinyButton, {
                          onlyShineOnHover: !0,
                          size: n ? l.Button.Sizes.TINY : l.Button.Sizes.SMALL,
                          look: l.Button.Looks.FILLED,
                          color: l.Button.Colors.PRIMARY,
                          className: b.upsellButton,
                          innerClassName: b.viewPremiumPerksButtonInner,
                          buttonShineClassName: b.viewPremiumPerksButtonShine,
                          onClick: () => {
                              d({ action: g.yM.VIEW_PREMIUM_PERKS }), (0, _.uL)(E.Z5c.APPLICATION_STORE), null == a || a();
                          },
                          children: [
                              (0, i.jsx)(l.NitroWheelIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              T.intl.string(T.t['0Q61kJ'])
                          ]
                      })
                    : (0, i.jsx)(f.Z, {
                          onClick: () => {
                              d({ action: g.yM.GET_PREMIUM }), null == a || a();
                          },
                          buttonText: T.intl.string(T.t.x6rkDg),
                          subscriptionTier: I.Si.TIER_2,
                          premiumModalAnalyticsLocation: { section: E.jXE.USER_PROFILE },
                          className: b.upsellButton,
                          size: n ? l.Button.Sizes.TINY : l.Button.Sizes.SMALL,
                          look: l.Button.Looks.FILLED,
                          color: l.Button.Colors.PRIMARY,
                          onlyShineOnHover: !0
                      })
            }),
            (0, i.jsx)('div', {
                className: b.upsellButtonWrapper,
                children: (0, i.jsx)(m.tG, {
                    icon: l.ShopIcon,
                    action: g.yM.VISIT_SHOP,
                    text: T.intl.string(T.t.b2d0Nz),
                    look: l.Button.Looks.FILLED,
                    color: l.Button.Colors.PRIMARY,
                    size: n ? l.Button.Sizes.TINY : l.Button.Sizes.SMALL,
                    className: b.upsellButton,
                    onClick: () => {
                        (0, c.mK)({
                            analyticsLocations: s,
                            openInLayer: !1,
                            analyticsSource: o
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
        { profileType: u } = (0, p.z)(),
        c = u === g.y0.FULL_SIZE;
    return (0, i.jsx)(d.ZP, {
        contentTypes: [o.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS],
        children: (e) => {
            let { visibleContent: u, markAsDismissed: d } = e;
            if (u !== o.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) return null;
            {
                let e = (0, i.jsx)('div', {
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: T.intl.string(T.t.EIYbj4)
                        })
                    }),
                    o = (0, i.jsx)(y, { onClose: () => d(v.L.USER_DISMISS) }),
                    u = (0, i.jsx)(S, {
                        isPremiumUser: n,
                        onInteraction: r,
                        tiny: c
                    });
                return c
                    ? (0, i.jsx)('div', {
                          className: s()(b.upsellContainer, a),
                          children: (0, i.jsxs)('div', {
                              className: s()(b.upsellContent, b.upsellRowContent),
                              children: [
                                  e,
                                  (0, i.jsxs)('div', {
                                      className: b.upsellRowRight,
                                      children: [(0, i.jsx)('div', { children: u }), (0, i.jsx)('div', { children: o })]
                                  })
                              ]
                          })
                      })
                    : (0, i.jsx)('div', {
                          className: s()(b.upsellContainer, a),
                          children: (0, i.jsxs)('div', {
                              className: s()(b.upsellContent, b.upsellDefaultContent),
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: b.upsellHeader,
                                      children: [e, (0, i.jsx)('div', { children: o })]
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
