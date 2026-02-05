"use strict";
n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(775602),
    u = n(607470),
    c = n(422936),
    d = n(234419),
    _ = n(465794),
    f = n(811611),
    p = n(652215),
    h = n(788868),
    m = n(985018),
    g = n(694230);
let E = "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
    A = 32;
function I(e) {
    let { onDismiss: t } = e,
        n = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        i = m.intl.string(m.t.eikz43),
        I = (0, d.V)(),
        T = (0, c.O)(),
        y = I?.subscription_trial != null || null != T,
        S = { object: p.ZSU.BUTTON_CTA, section: p.JJy.SUPER_REACTION_PICKER };
    return (0, r.jsxs)("div", {
        className: g.iE,
        children: [
            (0, r.jsx)(o.DUT, {
                onClick: t,
                className: g.b,
                "aria-label": m.intl.string(m.t.WAI6xu),
                children: (0, r.jsx)(o.PGe, { size: "md", color: "currentColor" }),
            }),
            (0, r.jsxs)("div", {
                className: g.Qs,
                children: [
                    (0, r.jsx)("div", {
                        className: g.jo,
                        children: (0, r.jsx)(u.A, {
                            className: a()(g.vK, { [g.Vk]: y }),
                            src: E,
                            loop: !0,
                            autoPlay: !n,
                            muted: !0,
                            controls: !0,
                        }),
                    }),
                    y
                        ? (0, r.jsx)(f.Ay, {
                              type: h.e.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: I?.subscription_trial?.sku_id ?? h.pe.TIER_2,
                              headingText: m.intl.string(m.t.Wfl5zp),
                              analyticsLocationObject: S,
                              discountOffer: T,
                              trialOffer: I,
                              children: i,
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: g.wx,
                                      children: [
                                          (0, r.jsx)(o.tvc, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: g.ax,
                                              width: A,
                                              height: A,
                                          }),
                                          (0, r.jsx)(o.Heading, {
                                              className: g.TK,
                                              variant: "heading-xl/bold",
                                              children: m.intl.string(m.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(o.Text, { className: g.Fb, variant: "text-md/normal", children: i }),
                                  (0, r.jsx)("div", {
                                      className: g.sk,
                                      children: (0, r.jsx)(_.A, {
                                          subscriptionTier: h.pe.TIER_2,
                                          textOptions: { textOverride: m.intl.string(m.t.sEAnVH) },
                                      }),
                                  }),
                              ],
                          }),
                ],
            }),
        ],
    });
}
