n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(607070),
    c = n(70097),
    u = n(104494),
    d = n(639119),
    f = n(165583),
    _ = n(197115),
    p = n(981631),
    h = n(474936),
    m = n(388032),
    g = n(645885);
let E = 'https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4',
    b = 32;
function y(e) {
    var t, n;
    let { onDismiss: i } = e,
        y = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        v = m.NW.string(m.t['eikz4+']),
        O = (0, d.N)(),
        I = (0, u.Ng)(),
        S = (null == O ? void 0 : O.subscription_trial) != null || null != I,
        T = {
            object: p.qAy.BUTTON_CTA,
            section: p.jXE.SUPER_REACTION_PICKER
        };
    return (0, r.jsxs)('div', {
        className: g.wrapper,
        children: [
            (0, r.jsx)(s.P3F, {
                onClick: i,
                className: g.closeButton,
                'aria-label': m.NW.string(m.t.WAI6xs),
                children: (0, r.jsx)(s.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                className: g.content,
                children: [
                    (0, r.jsx)('div', {
                        className: g.contentFill,
                        children: (0, r.jsx)(c.Z, {
                            className: o()(g.banner, { [g.hasTrialOffer]: S }),
                            src: E,
                            loop: !0,
                            autoPlay: !y,
                            muted: !0,
                            controls: !0
                        })
                    }),
                    S
                        ? (0, r.jsx)(f.ZP, {
                              type: h.cd.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: null != (n = null == O || null == (t = O.subscription_trial) ? void 0 : t.sku_id) ? n : h.Si.TIER_2,
                              headingText: m.NW.string(m.t.Wfl5zs),
                              analyticsLocationObject: T,
                              discountOffer: I,
                              trialOffer: O,
                              children: v
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: g.header,
                                      children: [
                                          (0, r.jsx)(s.SrA, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              className: g.nitroWheel,
                                              width: b,
                                              height: b
                                          }),
                                          (0, r.jsx)(s.X6q, {
                                              className: g.headerText,
                                              variant: 'heading-xl/bold',
                                              children: m.NW.string(m.t.Wfl5zs)
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      className: g.subheaderText,
                                      variant: 'text-md/normal',
                                      children: v
                                  }),
                                  (0, r.jsx)('div', {
                                      className: g.ctaActionWrapper,
                                      children: (0, r.jsx)(_.Z, {
                                          subscriptionTier: h.Si.TIER_2,
                                          buttonText: m.NW.string(m.t.sEAnVF)
                                      })
                                  })
                              ]
                          })
                ]
            })
        ]
    });
}
