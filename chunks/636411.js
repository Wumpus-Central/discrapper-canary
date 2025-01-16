r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(442837),
    l = r(481060),
    u = r(607070),
    c = r(70097),
    d = r(104494),
    f = r(639119),
    _ = r(165583),
    h = r(197115),
    p = r(981631),
    m = r(474936),
    g = r(388032),
    E = r(923026);
let v = 'https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4',
    I = 32;
function T(e) {
    var n, r;
    let { onDismiss: a } = e,
        T = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        b = g.intl.string(g.t['eikz4+']),
        y = (0, f.N)(),
        S = (0, d.Ng)(),
        A = (null == y ? void 0 : y.subscription_trial) != null || null != S,
        N = {
            object: p.qAy.BUTTON_CTA,
            section: p.jXE.SUPER_REACTION_PICKER
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
                            className: s()(E.banner, { [E.hasTrialOffer]: A }),
                            src: v,
                            loop: !0,
                            autoPlay: !T,
                            muted: !0,
                            controls: !0
                        })
                    }),
                    A
                        ? (0, i.jsx)(_.ZP, {
                              type: m.cd.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: null !== (r = null == y ? void 0 : null === (n = y.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== r ? r : m.Si.TIER_2,
                              headingText: g.intl.string(g.t.Wfl5zs),
                              analyticsLocationObject: N,
                              discountOffer: S,
                              trialOffer: y,
                              children: b
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
                                              width: I,
                                              height: I
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
                                      children: b
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
