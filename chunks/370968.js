"use strict";
n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    l = n(775602),
    u = n(607470),
    c = n(422936),
    d = n(234419),
    _ = n(725807),
    f = n(811611),
    h = n(652215),
    p = n(788868),
    m = n(985018),
    E = n(380875);
let g = "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
    A = 32;
function I(e) {
    let { onDismiss: t } = e,
        n = (0, a.bG)([l.A], () => l.A.useReducedMotion),
        i = m.intl.string(m.t.eikz43),
        I = (0, d.V)(),
        T = (0, c.O)(),
        S = I?.subscription_trial != null || null != T,
        y = { object: h.ZSU.BUTTON_CTA, section: h.JJy.SUPER_REACTION_PICKER };
    return (0, r.jsxs)("div", {
        className: E.iE,
        children: [
            (0, r.jsx)(o.DUT, {
                onClick: t,
                className: E.b,
                "aria-label": m.intl.string(m.t.WAI6xu),
                children: (0, r.jsx)(o.PGe, { size: "md", color: "currentColor" }),
            }),
            (0, r.jsxs)("div", {
                className: E.Qs,
                children: [
                    (0, r.jsx)("div", {
                        className: E.jo,
                        children: (0, r.jsx)(u.A, {
                            className: s()(E.vK, { [E.Vk]: S }),
                            src: g,
                            loop: !0,
                            autoPlay: !n,
                            muted: !0,
                            controls: !0,
                        }),
                    }),
                    S
                        ? (0, r.jsx)(f.Ay, {
                              type: p.e.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: I?.subscription_trial?.sku_id ?? p.pe.TIER_2,
                              headingText: m.intl.string(m.t.Wfl5zp),
                              analyticsLocationObject: y,
                              discountOffer: T,
                              trialOffer: I,
                              children: i,
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: E.wx,
                                      children: [
                                          (0, r.jsx)(o.tvc, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: E.ax,
                                              width: A,
                                              height: A,
                                          }),
                                          (0, r.jsx)(o.Heading, {
                                              className: E.TK,
                                              variant: "heading-xl/bold",
                                              children: m.intl.string(m.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(o.Text, { className: E.Fb, variant: "text-md/normal", children: i }),
                                  (0, r.jsx)("div", {
                                      className: E.sk,
                                      children: (0, r.jsx)(_.A, {
                                          subscriptionTier: p.pe.TIER_2,
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
