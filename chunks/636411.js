n.d(t, { Z: () => y });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(607070),
    u = n(70097),
    c = n(104494),
    d = n(639119),
    f = n(165583),
    _ = n(197115),
    p = n(981631),
    h = n(474936),
    m = n(388032),
    g = n(923026);
let E = 'https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4',
    v = 32;
function y(e) {
    var t, n;
    let { onDismiss: r } = e,
        y = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        I = m.intl.string(m.t['eikz4+']),
        T = (0, d.N)(),
        b = (0, c.Ng)(),
        S = (null == T ? void 0 : T.subscription_trial) != null || null != b,
        A = {
            object: p.qAy.BUTTON_CTA,
            section: p.jXE.SUPER_REACTION_PICKER
        };
    return (0, i.jsxs)('div', {
        className: g.wrapper,
        children: [
            (0, i.jsx)(o.P3F, {
                onClick: r,
                className: g.closeButton,
                'aria-label': m.intl.string(m.t.WAI6xs),
                children: (0, i.jsx)(o.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                className: g.content,
                children: [
                    (0, i.jsx)('div', {
                        className: g.contentFill,
                        children: (0, i.jsx)(u.Z, {
                            className: a()(g.banner, { [g.hasTrialOffer]: S }),
                            src: E,
                            loop: !0,
                            autoPlay: !y,
                            muted: !0,
                            controls: !0
                        })
                    }),
                    S
                        ? (0, i.jsx)(f.ZP, {
                              type: h.cd.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: null !== (n = null == T ? void 0 : null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : h.Si.TIER_2,
                              headingText: m.intl.string(m.t.Wfl5zs),
                              analyticsLocationObject: A,
                              discountOffer: b,
                              trialOffer: T,
                              children: I
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: g.header,
                                      children: [
                                          (0, i.jsx)(o.SrA, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              className: g.nitroWheel,
                                              width: v,
                                              height: v
                                          }),
                                          (0, i.jsx)(o.X6q, {
                                              className: g.headerText,
                                              variant: 'heading-xl/bold',
                                              children: m.intl.string(m.t.Wfl5zs)
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      className: g.subheaderText,
                                      variant: 'text-md/normal',
                                      children: I
                                  }),
                                  (0, i.jsx)('div', {
                                      className: g.ctaActionWrapper,
                                      children: (0, i.jsx)(_.Z, {
                                          subscriptionTier: h.Si.TIER_2,
                                          buttonText: m.intl.string(m.t.sEAnVF)
                                      })
                                  })
                              ]
                          })
                ]
            })
        ]
    });
}
