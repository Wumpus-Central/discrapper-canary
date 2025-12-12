n.d(t, { Z: () => y });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(607070),
    c = n(70097),
    u = n(622909),
    d = n(639119),
    f = n(767714),
    p = n(165583),
    _ = n(981631),
    m = n(474936),
    h = n(388032),
    g = n(87911);
let E = "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
    b = 32;
function y(e) {
    var t, n;
    let { onDismiss: i } = e,
        y = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        O = h.intl.string(h.t.eikz43),
        v = (0, d.N)(),
        S = (0, u.N)(),
        I = (null == v ? void 0 : v.subscription_trial) != null || null != S,
        T = {
            object: _.qAy.BUTTON_CTA,
            section: _.jXE.SUPER_REACTION_PICKER,
        };
    return (0, r.jsxs)("div", {
        className: g.wrapper,
        children: [
            (0, r.jsx)(s.P3F, {
                onClick: i,
                className: g.closeButton,
                "aria-label": h.intl.string(h.t.WAI6xu),
                children: (0, r.jsx)(s.Dio, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, r.jsxs)("div", {
                className: g.content,
                children: [
                    (0, r.jsx)("div", {
                        className: g.contentFill,
                        children: (0, r.jsx)(c.Z, {
                            className: a()(g.banner, { [g.hasTrialOffer]: I }),
                            src: E,
                            loop: !0,
                            autoPlay: !y,
                            muted: !0,
                            controls: !0,
                        }),
                    }),
                    I
                        ? (0, r.jsx)(p.ZP, {
                              type: m.cd.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier:
                                  null != (n = null == v || null == (t = v.subscription_trial) ? void 0 : t.sku_id)
                                      ? n
                                      : m.Si.TIER_2,
                              headingText: h.intl.string(h.t.Wfl5zp),
                              analyticsLocationObject: T,
                              discountOffer: S,
                              trialOffer: v,
                              children: O,
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: g.header,
                                      children: [
                                          (0, r.jsx)(s.SrA, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: g.nitroWheel,
                                              width: b,
                                              height: b,
                                          }),
                                          (0, r.jsx)(s.Heading, {
                                              className: g.headerText,
                                              variant: "heading-xl/bold",
                                              children: h.intl.string(h.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      className: g.subheaderText,
                                      variant: "text-md/normal",
                                      children: O,
                                  }),
                                  (0, r.jsx)("div", {
                                      className: g.ctaActionWrapper,
                                      children: (0, r.jsx)(f.Z, {
                                          subscriptionTier: m.Si.TIER_2,
                                          textOptions: { textOverride: h.intl.string(h.t.sEAnVH) },
                                      }),
                                  }),
                              ],
                          }),
                ],
            }),
        ],
    });
}
