n.d(t, { Z: () => b });
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
    p = n(197115),
    _ = n(981631),
    h = n(474936),
    m = n(388032),
    g = n(822382);
let E = 'https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4',
    v = 32;
function b(e) {
    var t, n;
    let { onDismiss: i } = e,
        b = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        y = m.NW.string(m.t['eikz4+']),
        O = (0, d.N)(),
        S = (0, u.Ng)(),
        I = (null == O ? void 0 : O.subscription_trial) != null || null != S,
        T = {
            object: _.qAy.BUTTON_CTA,
            section: _.jXE.SUPER_REACTION_PICKER
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
                            className: o()(g.banner, { [g.hasTrialOffer]: I }),
                            src: E,
                            loop: !0,
                            autoPlay: !b,
                            muted: !0,
                            controls: !0
                        })
                    }),
                    I
                        ? (0, r.jsx)(f.ZP, {
                              type: h.cd.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: null !== (n = null == O ? void 0 : null === (t = O.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : h.Si.TIER_2,
                              headingText: m.NW.string(m.t.Wfl5zs),
                              analyticsLocationObject: T,
                              discountOffer: S,
                              trialOffer: O,
                              children: y
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
                                              width: v,
                                              height: v
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
                                      children: y
                                  }),
                                  (0, r.jsx)('div', {
                                      className: g.ctaActionWrapper,
                                      children: (0, r.jsx)(p.Z, {
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
