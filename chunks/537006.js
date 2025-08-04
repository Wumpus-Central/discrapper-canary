n.d(t, { Z: () => w });
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
    _ = n(313201),
    p = n(211644),
    h = n(266454),
    m = n(605236),
    g = n(767714),
    E = n(703656),
    b = n(914010),
    y = n(785717),
    O = n(652853),
    v = n(475413),
    I = n(228168),
    T = n(981631),
    S = n(921944),
    A = n(474936),
    N = n(388032),
    C = n(869310);
function R(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(u.P3F, {
        'aria-label': N.intl.string(N.t.WAI6xs),
        onClick: t,
        className: C.upsellCloseIconWrapper,
        children: (0, r.jsx)(u.Dio, {
            size: 'xs',
            className: C.upsellCloseIcon,
            color: 'currentColor'
        })
    });
}
function P(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: i } = e,
        { analyticsLocations: a, newestAnalyticsLocation: o } = (0, d.ZP)(),
        { trackUserProfileAction: s } = (0, y.KZ)();
    return (0, r.jsxs)('div', {
        className: C.upsellButtons,
        children: [
            (0, r.jsx)('div', {
                className: C.upsellButtonWrapper,
                children: n
                    ? (0, r.jsxs)(u.gtL, {
                          onlyShineOnHover: !0,
                          size: t ? c.zx.Sizes.TINY : c.zx.Sizes.SMALL,
                          look: c.zx.Looks.FILLED,
                          color: c.zx.Colors.PRIMARY,
                          className: C.upsellButton,
                          innerClassName: C.viewPremiumPerksButtonInner,
                          buttonShineClassName: C.viewPremiumPerksButtonShine,
                          onClick: () => {
                              (s({ action: I.yM.VIEW_PREMIUM_PERKS }), (0, E.uL)(T.Z5c.APPLICATION_STORE), null == i || i());
                          },
                          children: [
                              (0, r.jsx)(u.SrA, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              N.intl.string(N.t['0Q61kJ'])
                          ]
                      })
                    : (0, r.jsx)(g.Z, {
                          onClick: () => {
                              (s({ action: I.yM.GET_PREMIUM }), null == i || i());
                          },
                          textOptions: { textOverride: N.intl.string(N.t.x6rkDg) },
                          subscriptionTier: A.Si.TIER_2,
                          premiumModalAnalyticsLocation: { section: T.jXE.USER_PROFILE },
                          className: C.upsellButton,
                          size: t ? c.zx.Sizes.TINY : c.zx.Sizes.SMALL,
                          look: c.zx.Looks.FILLED,
                          color: c.zx.Colors.PRIMARY,
                          onlyShineOnHover: !0
                      })
            }),
            (0, r.jsx)('div', {
                className: C.upsellButtonWrapper,
                children: (0, r.jsx)(v.tG, {
                    icon: u.EOn,
                    action: I.yM.VISIT_SHOP,
                    text: N.intl.string(N.t.b2d0Nz),
                    look: c.zx.Looks.FILLED,
                    color: c.zx.Colors.PRIMARY,
                    themeColor: 'none',
                    size: t ? c.zx.Sizes.TINY : c.zx.Sizes.SMALL,
                    className: C.upsellButton,
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
function w(e) {
    let { isPremiumUser: t, onInteraction: n, className: a } = e,
        c = (0, _.Dt)(),
        { themeType: d } = (0, O.z)(),
        f = d === I.lY.MODAL,
        g = (0, h.Nj)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        E = (0, s.e7)([b.Z], () => b.Z.getGuildId());
    if (
        (i.useEffect(() => {
            if (!g)
                return (
                    (0, m.kk)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                    () => {
                        (0, p.gE)({ content: l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
                    }
                );
        }, [g]),
        g)
    )
        return null;
    let y = (0, r.jsx)(u.X6q, {
            variant: 'text-sm/normal',
            id: c,
            children: N.intl.string(N.t.EIYbj4)
        }),
        v = (0, r.jsx)(R, {
            onClose: () => {
                (0, h.Q3)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: S.L.USER_DISMISS,
                    guildId: E,
                    forceTrack: !0
                });
            }
        }),
        T = (0, r.jsx)(P, {
            isPremiumUser: t,
            onInteraction: n,
            tiny: f
        });
    return f
        ? (0, r.jsx)('aside', {
              className: o()(C.upsellContainer, a),
              'aria-labelledby': c,
              children: (0, r.jsxs)('div', {
                  className: o()(C.upsellContent, C.upsellRowContent),
                  children: [
                      y,
                      (0, r.jsxs)('div', {
                          className: C.upsellRowRight,
                          children: [(0, r.jsx)('div', { children: T }), (0, r.jsx)('div', { children: v })]
                      })
                  ]
              })
          })
        : (0, r.jsx)('aside', {
              className: o()(C.upsellContainer, a),
              'aria-labelledby': c,
              children: (0, r.jsxs)('div', {
                  className: o()(C.upsellContent, C.upsellDefaultContent),
                  children: [
                      (0, r.jsxs)('div', {
                          className: C.upsellHeader,
                          children: [y, (0, r.jsx)('div', { children: v })]
                      }),
                      T
                  ]
              })
          });
}
