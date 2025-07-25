n.d(t, { Z: () => P });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(755721),
    u = n(481060),
    d = n(906732),
    f = n(335131),
    _ = n(211644),
    p = n(266454),
    h = n(605236),
    m = n(767714),
    g = n(703656),
    E = n(914010),
    b = n(785717),
    y = n(652853),
    O = n(475413),
    v = n(228168),
    I = n(981631),
    T = n(921944),
    S = n(474936),
    A = n(388032),
    N = n(869310);
function C(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(u.P3F, {
        'aria-label': A.intl.string(A.t.WAI6xs),
        onClick: t,
        className: N.upsellCloseIconWrapper,
        children: (0, r.jsx)(u.Dio, {
            size: 'xs',
            className: N.upsellCloseIcon,
            color: 'currentColor'
        })
    });
}
function R(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: i } = e,
        { analyticsLocations: a, newestAnalyticsLocation: o } = (0, d.ZP)(),
        { trackUserProfileAction: s } = (0, b.KZ)();
    return (0, r.jsxs)('div', {
        className: N.upsellButtons,
        children: [
            (0, r.jsx)('div', {
                className: N.upsellButtonWrapper,
                children: n
                    ? (0, r.jsxs)(u.gtL, {
                          onlyShineOnHover: !0,
                          size: t ? c.zx.Sizes.TINY : c.zx.Sizes.SMALL,
                          look: c.zx.Looks.FILLED,
                          color: c.zx.Colors.PRIMARY,
                          className: N.upsellButton,
                          innerClassName: N.viewPremiumPerksButtonInner,
                          buttonShineClassName: N.viewPremiumPerksButtonShine,
                          onClick: () => {
                              (s({ action: v.yM.VIEW_PREMIUM_PERKS }), (0, g.uL)(I.Z5c.APPLICATION_STORE), null == i || i());
                          },
                          children: [
                              (0, r.jsx)(u.SrA, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              A.intl.string(A.t['0Q61kJ'])
                          ]
                      })
                    : (0, r.jsx)(m.Z, {
                          onClick: () => {
                              (s({ action: v.yM.GET_PREMIUM }), null == i || i());
                          },
                          textOptions: { textOverride: A.intl.string(A.t.x6rkDg) },
                          subscriptionTier: S.Si.TIER_2,
                          premiumModalAnalyticsLocation: { section: I.jXE.USER_PROFILE },
                          className: N.upsellButton,
                          size: t ? c.zx.Sizes.TINY : c.zx.Sizes.SMALL,
                          look: c.zx.Looks.FILLED,
                          color: c.zx.Colors.PRIMARY,
                          onlyShineOnHover: !0
                      })
            }),
            (0, r.jsx)('div', {
                className: N.upsellButtonWrapper,
                children: (0, r.jsx)(O.tG, {
                    icon: u.EOn,
                    action: v.yM.VISIT_SHOP,
                    text: A.intl.string(A.t.b2d0Nz),
                    look: c.zx.Looks.FILLED,
                    color: c.zx.Colors.PRIMARY,
                    themeColor: 'none',
                    size: t ? c.zx.Sizes.TINY : c.zx.Sizes.SMALL,
                    className: N.upsellButton,
                    onClick: () => {
                        ((0, f.mK)({
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
function P(e) {
    let { isPremiumUser: t, onInteraction: n, className: a } = e,
        { themeType: c } = (0, y.z)(),
        d = c === v.lY.MODAL,
        f = (0, p.Nj)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        m = (0, s.e7)([E.Z], () => E.Z.getGuildId());
    if (
        (i.useEffect(() => {
            if (!f)
                return (
                    (0, h.kk)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                    () => {
                        (0, _.gE)({ content: l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
                    }
                );
        }, [f]),
        f)
    )
        return null;
    let g = (0, r.jsx)('div', {
            children: (0, r.jsx)(u.Text, {
                variant: 'text-sm/normal',
                children: A.intl.string(A.t.EIYbj4)
            })
        }),
        b = (0, r.jsx)(C, {
            onClose: () => {
                (0, p.Q3)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: T.L.USER_DISMISS,
                    guildId: m,
                    forceTrack: !0
                });
            }
        }),
        O = (0, r.jsx)(R, {
            isPremiumUser: t,
            onInteraction: n,
            tiny: d
        });
    return d
        ? (0, r.jsx)('div', {
              className: o()(N.upsellContainer, a),
              children: (0, r.jsxs)('div', {
                  className: o()(N.upsellContent, N.upsellRowContent),
                  children: [
                      g,
                      (0, r.jsxs)('div', {
                          className: N.upsellRowRight,
                          children: [(0, r.jsx)('div', { children: O }), (0, r.jsx)('div', { children: b })]
                      })
                  ]
              })
          })
        : (0, r.jsx)('div', {
              className: o()(N.upsellContainer, a),
              children: (0, r.jsxs)('div', {
                  className: o()(N.upsellContent, N.upsellDefaultContent),
                  children: [
                      (0, r.jsxs)('div', {
                          className: N.upsellHeader,
                          children: [g, (0, r.jsx)('div', { children: b })]
                      }),
                      O
                  ]
              })
          });
}
