(n.d(t, {
    Z: () => w,
    p: () => P
}),
    n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(355467),
    f = n(37234),
    _ = n(410030),
    p = n(174609),
    h = n(703656),
    m = n(626135),
    g = n(74538),
    E = n(357355),
    b = n(47280),
    y = n(639119),
    O = n(740594),
    v = n(767714),
    I = n(302945),
    T = n(474936),
    S = n(981631),
    A = n(388032),
    N = n(338704),
    C = n(229191),
    R = n(308362),
    P = (function (e) {
        return ((e[(e.NONE = 0)] = 'NONE'), (e[(e.PARENT_CONTAINER = 1)] = 'PARENT_CONTAINER'), (e[(e.TAB_PARENT_CONTAINER = 2)] = 'TAB_PARENT_CONTAINER'), e);
    })({});
function w(e) {
    let { containerContext: t, image: n, title: a, description: P, enableSocialProof: w, analyticsLocationSection: D, upsellViewedTrackingData: L, onClose: x, onDisplay: M, onLearnMore: k, isEmojiPickerOverlay: j = !1 } = e,
        U = (0, s.e7)([E.Z], () => E.Z.affinities),
        G = (0, s.e7)([E.Z], () => E.Z.hasFetched);
    (i.useEffect(() => {
        !G && w && d.MH();
    }, [G, w]),
        i.useEffect(() => {
            (m.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, L), null == M || M());
        }, [M, L]));
    let B = U.length > 1 && w,
        V = () => (2 === t ? C.hasTabParentContainer : 1 === t ? C.hasParentContainer : C.noParentContainer),
        F = () => {
            (m.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: D,
                location_object: S.qAy.NAVIGATION_LINK
            }),
                null == k || k(),
                (0, p.Z)(),
                x(),
                (0, f.xf)(),
                (0, h.uL)(S.Z5c.APPLICATION_STORE));
        },
        Z = (0, y.N)(),
        H = i.useCallback(() => {
            var e;
            return null != (e = (0, g.fr)(Z)) ? e : A.intl.string(A.t.pj0XBA);
        }, [Z]),
        Y = (0, l.ap)((0, _.ZP)());
    return (0, b.Z)({ location: 'PremiumUpsellPickerOverlay' }) && j
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.ZMr, {
                      onClick: x,
                      isVisible: !0
                  }),
                  (0, r.jsxs)('div', {
                      className: o()(N.container, V()),
                      children: [
                          (0, r.jsxs)('div', {
                              className: N.content,
                              children: [
                                  (0, r.jsx)(u.olH, {
                                      onClick: x,
                                      className: N.closeButton
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: N.contentContainer,
                                      children: [
                                          (0, r.jsx)('img', {
                                              className: N.image,
                                              src: R,
                                              alt: 'Nitro Perk'
                                          }),
                                          (0, r.jsx)(u.X6q, {
                                              className: N.title,
                                              variant: 'heading-xl/bold',
                                              color: 'header-primary',
                                              children: a
                                          }),
                                          (0, r.jsx)(u.Text, {
                                              variant: 'text-md/medium',
                                              color: 'text-secondary',
                                              className: N.body,
                                              children: P
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: N.footer,
                              children: (0, r.jsxs)('div', {
                                  className: N.buttonContainer,
                                  children: [
                                      (0, r.jsx)(c.zx, {
                                          color: Y ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE,
                                          look: c.zx.Looks.LINK,
                                          onClick: F,
                                          children: (0, r.jsx)(u.Text, {
                                              variant: 'text-md/medium',
                                              color: 'text-primary',
                                              children: A.intl.string(A.t.ZnqyZ2)
                                          })
                                      }),
                                      (0, r.jsx)(O.Z, {
                                          premiumModalAnalyticsLocation: {
                                              section: D,
                                              object: S.qAy.BUTTON_CTA
                                          },
                                          subscriptionTier: T.Si.TIER_2,
                                          color: c.zx.Colors.CUSTOM,
                                          onClick: () => {
                                              x();
                                          },
                                          text: H(),
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
                  (0, r.jsx)(u.ZMr, {
                      onClick: x,
                      isVisible: !0
                  }),
                  (0, r.jsxs)('div', {
                      className: o()(C.container, V()),
                      children: [
                          (0, r.jsx)(u.olH, {
                              onClick: x,
                              className: C.closeButton
                          }),
                          (0, r.jsxs)('div', {
                              className: C.contentContainer,
                              children: [
                                  (0, r.jsx)('img', {
                                      className: C.image,
                                      width: n.width,
                                      height: n.height,
                                      src: n.url,
                                      alt: 'Nitro Perk'
                                  }),
                                  (0, r.jsx)(u.X6q, {
                                      className: o()(C.title, { [C.titleNoSocialProof]: !B }),
                                      variant: 'heading-xl/bold',
                                      children: a
                                  }),
                                  B && (0, r.jsx)(I.Z, { affinities: U }),
                                  (0, r.jsx)(u.Text, {
                                      variant: 'text-sm/medium',
                                      className: C.body,
                                      children: P
                                  })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: C.ctaContainer,
                              children: [
                                  (0, r.jsx)(c.zx, {
                                      className: C.secondaryCTA,
                                      size: c.zx.Sizes.SMALL,
                                      color: c.zx.Colors.CUSTOM,
                                      look: c.zx.Looks.LINK,
                                      onClick: F,
                                      children: A.intl.string(A.t.ZnqyZ2)
                                  }),
                                  (0, r.jsx)(v.Z, {
                                      showGradient: !0,
                                      premiumModalAnalyticsLocation: {
                                          section: D,
                                          object: S.qAy.BUTTON_CTA
                                      },
                                      subscriptionTier: T.Si.TIER_2,
                                      size: c.zx.Sizes.SMALL,
                                      color: c.zx.Colors.CUSTOM,
                                      onClick: () => {
                                          x();
                                      },
                                      textOptions: { textOverride: H() }
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
