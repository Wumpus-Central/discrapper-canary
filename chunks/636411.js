r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(442837),
    l = r(481060),
    u = r(607070),
    c = r(70097),
    d = r(104494),
    f = r(639119),
    p = r(165583),
    h = r(197115),
    _ = r(981631),
    m = r(474936),
    g = r(388032),
    E = r(923026);
let v = 'https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4',
    y = 32;
function b(e) {
    var n, r;
    let { onDismiss: a } = e,
        b = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        I = g.intl.string(g.t['eikz4+']),
        T = (0, f.N)(),
        S = (0, d.Ng)(),
        A = (null == T ? void 0 : T.subscription_trial) != null || null != S,
        C = {
            object: _.qAy.BUTTON_CTA,
            section: _.jXE.SUPER_REACTION_PICKER
        };
    return (0, i.jsxs)('div', {
        className: E.wrapper,
        children: [
            (0, i.jsx)(l.Clickable, {
                onClick: a,
                className: E.closeButton,
                'aria-label': g.intl.string(g.t.WAI6xs),
                children: (0, i.jsx)(l.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                className: E.content,
                children: [
                    (0, i.jsx)('div', {
                        className: E.contentFill,
                        children: (0, i.jsx)(c.Z, {
                            className: o()(E.banner, { [E.hasTrialOffer]: A }),
                            src: v,
                            loop: !0,
                            autoPlay: !b,
                            muted: !0,
                            controls: !0
                        })
                    }),
                    A
                        ? (0, i.jsx)(p.ZP, {
                              type: m.cd.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: null !== (r = null == T ? void 0 : null === (n = T.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== r ? r : m.Si.TIER_2,
                              headingText: g.intl.string(g.t.Wfl5zs),
                              analyticsLocationObject: C,
                              discountOffer: S,
                              trialOffer: T,
                              children: I
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: E.header,
                                      children: [
                                          (0, i.jsx)(l.NitroWheelIcon, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              className: E.nitroWheel,
                                              width: y,
                                              height: y
                                          }),
                                          (0, i.jsx)(l.Heading, {
                                              className: E.headerText,
                                              variant: 'heading-xl/bold',
                                              children: g.intl.string(g.t.Wfl5zs)
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(l.Text, {
                                      className: E.subheaderText,
                                      variant: 'text-md/normal',
                                      children: I
                                  }),
                                  (0, i.jsx)('div', {
                                      className: E.ctaActionWrapper,
                                      children: (0, i.jsx)(h.Z, {
                                          subscriptionTier: m.Si.TIER_2,
                                          buttonText: g.intl.string(g.t.sEAnVF)
                                      })
                                  })
                              ]
                          })
                ]
            })
        ]
    });
}
