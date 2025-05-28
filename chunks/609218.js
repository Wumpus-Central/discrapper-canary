n.d(t, {
    Z: () => P,
    p: () => C
}),
    n(953529);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(355467),
    d = n(37234),
    f = n(410030),
    _ = n(174609),
    p = n(703656),
    h = n(626135),
    m = n(74538),
    g = n(357355),
    E = n(314528),
    b = n(639119),
    y = n(767714),
    O = n(302945),
    v = n(474936),
    I = n(981631),
    S = n(388032),
    T = n(520303),
    A = n(229191),
    N = n(308362),
    C = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.PARENT_CONTAINER = 1)] = 'PARENT_CONTAINER'), (e[(e.TAB_PARENT_CONTAINER = 2)] = 'TAB_PARENT_CONTAINER'), e;
    })({});
function P(e) {
    let { containerContext: t, image: n, title: a, description: C, enableSocialProof: P, analyticsLocationSection: R, upsellViewedTrackingData: w, onClose: D, onDisplay: L, onLearnMore: x, isEmojiPickerOverlay: k = !1 } = e,
        M = (0, s.e7)([g.Z], () => g.Z.affinities),
        j = (0, s.e7)([g.Z], () => g.Z.hasFetched);
    i.useEffect(() => {
        !j && P && u.MH();
    }, [j, P]),
        i.useEffect(() => {
            h.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, w), null == L || L();
        }, [L, w]);
    let U = M.length > 1 && P,
        G = () => (2 === t ? A.hasTabParentContainer : 1 === t ? A.hasParentContainer : A.noParentContainer),
        B = () => {
            h.default.track(I.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: R,
                location_object: I.qAy.NAVIGATION_LINK
            }),
                null == x || x(),
                (0, _.Z)(),
                D(),
                (0, d.xf)(),
                (0, p.uL)(I.Z5c.APPLICATION_STORE);
        },
        F = (0, b.N)(),
        V = i.useCallback(() => {
            var e;
            return null != (e = (0, m.fr)(F)) ? e : S.intl.string(S.t.pj0XBA);
        }, [F]),
        Z = (0, l.ap)((0, f.ZP)()),
        H = (0, E.Z)({ location: 'PremiumUpsellPickerOverlay' }) && k;
    return H
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.YMn, {
                      backdropStyle: c.fCB.DARK,
                      onClose: D,
                      'aria-label': S.intl.string(S.t.cpT0Cg),
                      isVisible: !0
                  }),
                  (0, r.jsxs)('div', {
                      className: o()(T.container, G()),
                      children: [
                          (0, r.jsxs)('div', {
                              className: T.content,
                              children: [
                                  (0, r.jsx)(c.olH, {
                                      onClick: D,
                                      className: T.closeButton
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: T.contentContainer,
                                      children: [
                                          (0, r.jsx)('img', {
                                              className: T.image,
                                              src: N,
                                              alt: 'Nitro Perk'
                                          }),
                                          (0, r.jsx)(c.X6q, {
                                              className: T.title,
                                              variant: 'heading-xl/bold',
                                              color: 'header-primary',
                                              children: a
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: 'text-md/medium',
                                              color: 'text-secondary',
                                              className: T.body,
                                              children: C
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: T.footer,
                              children: (0, r.jsxs)('div', {
                                  className: T.buttonContainer,
                                  children: [
                                      (0, r.jsx)(c.zxk, {
                                          color: Z ? c.zxk.Colors.PRIMARY : c.zxk.Colors.WHITE,
                                          look: c.zxk.Looks.LINK,
                                          onClick: B,
                                          children: (0, r.jsx)(c.Text, {
                                              variant: 'text-md/medium',
                                              color: 'text-primary',
                                              children: S.intl.string(S.t.ZnqyZ2)
                                          })
                                      }),
                                      (0, r.jsx)(y.Z, {
                                          showGradient: !0,
                                          premiumModalAnalyticsLocation: {
                                              section: R,
                                              object: I.qAy.BUTTON_CTA
                                          },
                                          subscriptionTier: v.Si.TIER_2,
                                          size: c.zxk.Sizes.SMALL,
                                          color: c.zxk.Colors.CUSTOM,
                                          onClick: () => {
                                              D();
                                          },
                                          textOptions: { expressiveButtonText: V() },
                                          useExpressiveButton: H
                                      })
                                  ]
                              })
                          })
                      ]
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.YMn, {
                      backdropStyle: c.fCB.DARK,
                      onClose: D,
                      'aria-label': S.intl.string(S.t.cpT0Cg),
                      isVisible: !0
                  }),
                  (0, r.jsxs)('div', {
                      className: o()(A.container, G()),
                      children: [
                          (0, r.jsx)(c.olH, {
                              onClick: D,
                              className: A.closeButton
                          }),
                          (0, r.jsxs)('div', {
                              className: A.contentContainer,
                              children: [
                                  (0, r.jsx)('img', {
                                      className: A.image,
                                      width: n.width,
                                      height: n.height,
                                      src: n.url,
                                      alt: 'Nitro Perk'
                                  }),
                                  (0, r.jsx)(c.X6q, {
                                      className: o()(A.title, { [A.titleNoSocialProof]: !U }),
                                      variant: 'heading-xl/bold',
                                      children: a
                                  }),
                                  U && (0, r.jsx)(O.Z, { affinities: M }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      className: A.body,
                                      children: C
                                  })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: A.ctaContainer,
                              children: [
                                  (0, r.jsx)(c.zxk, {
                                      className: A.secondaryCTA,
                                      size: c.zxk.Sizes.SMALL,
                                      color: c.zxk.Colors.CUSTOM,
                                      look: c.zxk.Looks.LINK,
                                      onClick: B,
                                      children: S.intl.string(S.t.ZnqyZ2)
                                  }),
                                  (0, r.jsx)(y.Z, {
                                      showGradient: !0,
                                      premiumModalAnalyticsLocation: {
                                          section: R,
                                          object: I.qAy.BUTTON_CTA
                                      },
                                      subscriptionTier: v.Si.TIER_2,
                                      size: c.zxk.Sizes.SMALL,
                                      color: c.zxk.Colors.CUSTOM,
                                      onClick: () => {
                                          D();
                                      },
                                      textOptions: { textOverride: V() }
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
