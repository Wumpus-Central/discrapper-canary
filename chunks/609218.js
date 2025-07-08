(n.d(t, {
    Z: () => P,
    p: () => R
}),
    n(953529));
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
    E = n(47280),
    b = n(639119),
    y = n(740594),
    O = n(767714),
    v = n(302945),
    I = n(474936),
    T = n(981631),
    S = n(388032),
    A = n(338704),
    N = n(229191),
    C = n(308362),
    R = (function (e) {
        return ((e[(e.NONE = 0)] = 'NONE'), (e[(e.PARENT_CONTAINER = 1)] = 'PARENT_CONTAINER'), (e[(e.TAB_PARENT_CONTAINER = 2)] = 'TAB_PARENT_CONTAINER'), e);
    })({});
function P(e) {
    let { containerContext: t, image: n, title: a, description: R, enableSocialProof: P, analyticsLocationSection: w, upsellViewedTrackingData: D, onClose: L, onDisplay: x, onLearnMore: M, isEmojiPickerOverlay: k = !1 } = e,
        j = (0, s.e7)([g.Z], () => g.Z.affinities),
        U = (0, s.e7)([g.Z], () => g.Z.hasFetched);
    (i.useEffect(() => {
        !U && P && u.MH();
    }, [U, P]),
        i.useEffect(() => {
            (h.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, D), null == x || x());
        }, [x, D]));
    let G = j.length > 1 && P,
        B = () => (2 === t ? N.hasTabParentContainer : 1 === t ? N.hasParentContainer : N.noParentContainer),
        V = () => {
            (h.default.track(T.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: w,
                location_object: T.qAy.NAVIGATION_LINK
            }),
                null == M || M(),
                (0, _.Z)(),
                L(),
                (0, d.xf)(),
                (0, p.uL)(T.Z5c.APPLICATION_STORE));
        },
        F = (0, b.N)(),
        Z = i.useCallback(() => {
            var e;
            return null != (e = (0, m.fr)(F)) ? e : S.intl.string(S.t.pj0XBA);
        }, [F]),
        H = (0, l.ap)((0, f.ZP)());
    return (0, E.Z)({ location: 'PremiumUpsellPickerOverlay' }) && k
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.ZMr, {
                      onClick: L,
                      isVisible: !0
                  }),
                  (0, r.jsxs)('div', {
                      className: o()(A.container, B()),
                      children: [
                          (0, r.jsxs)('div', {
                              className: A.content,
                              children: [
                                  (0, r.jsx)(c.olH, {
                                      onClick: L,
                                      className: A.closeButton
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: A.contentContainer,
                                      children: [
                                          (0, r.jsx)('img', {
                                              className: A.image,
                                              src: C,
                                              alt: 'Nitro Perk'
                                          }),
                                          (0, r.jsx)(c.X6q, {
                                              className: A.title,
                                              variant: 'heading-xl/bold',
                                              color: 'header-primary',
                                              children: a
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: 'text-md/medium',
                                              color: 'text-secondary',
                                              className: A.body,
                                              children: R
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: A.footer,
                              children: (0, r.jsxs)('div', {
                                  className: A.buttonContainer,
                                  children: [
                                      (0, r.jsx)(c.zxk, {
                                          color: H ? c.zxk.Colors.PRIMARY : c.zxk.Colors.WHITE,
                                          look: c.zxk.Looks.LINK,
                                          onClick: V,
                                          children: (0, r.jsx)(c.Text, {
                                              variant: 'text-md/medium',
                                              color: 'text-primary',
                                              children: S.intl.string(S.t.ZnqyZ2)
                                          })
                                      }),
                                      (0, r.jsx)(y.Z, {
                                          premiumModalAnalyticsLocation: {
                                              section: w,
                                              object: T.qAy.BUTTON_CTA
                                          },
                                          subscriptionTier: I.Si.TIER_2,
                                          color: c.zxk.Colors.CUSTOM,
                                          onClick: () => {
                                              L();
                                          },
                                          text: Z(),
                                          variant: 'expressive'
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
                  (0, r.jsx)(c.ZMr, {
                      onClick: L,
                      isVisible: !0
                  }),
                  (0, r.jsxs)('div', {
                      className: o()(N.container, B()),
                      children: [
                          (0, r.jsx)(c.olH, {
                              onClick: L,
                              className: N.closeButton
                          }),
                          (0, r.jsxs)('div', {
                              className: N.contentContainer,
                              children: [
                                  (0, r.jsx)('img', {
                                      className: N.image,
                                      width: n.width,
                                      height: n.height,
                                      src: n.url,
                                      alt: 'Nitro Perk'
                                  }),
                                  (0, r.jsx)(c.X6q, {
                                      className: o()(N.title, { [N.titleNoSocialProof]: !G }),
                                      variant: 'heading-xl/bold',
                                      children: a
                                  }),
                                  G && (0, r.jsx)(v.Z, { affinities: j }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      className: N.body,
                                      children: R
                                  })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: N.ctaContainer,
                              children: [
                                  (0, r.jsx)(c.zxk, {
                                      className: N.secondaryCTA,
                                      size: c.zxk.Sizes.SMALL,
                                      color: c.zxk.Colors.CUSTOM,
                                      look: c.zxk.Looks.LINK,
                                      onClick: V,
                                      children: S.intl.string(S.t.ZnqyZ2)
                                  }),
                                  (0, r.jsx)(O.Z, {
                                      showGradient: !0,
                                      premiumModalAnalyticsLocation: {
                                          section: w,
                                          object: T.qAy.BUTTON_CTA
                                      },
                                      subscriptionTier: I.Si.TIER_2,
                                      size: c.zxk.Sizes.SMALL,
                                      color: c.zxk.Colors.CUSTOM,
                                      onClick: () => {
                                          L();
                                      },
                                      textOptions: { textOverride: Z() }
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
