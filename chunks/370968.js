"use strict";
n.d(t, { A: () => S });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(939249),
    l = n(789645),
    u = n(403581),
    c = n(534514),
    d = n(834730),
    _ = n(775602),
    f = n(607470),
    p = n(422936),
    h = n(234419),
    E = n(725807),
    m = n(811611),
    g = n(652215),
    A = n(788868),
    I = n(985018),
    T = n(151867);
function S(e) {
    let { onDismiss: t } = e,
        n = (0, a.bG)([_.A], () => _.A.useReducedMotion),
        i = I.intl.string(I.t.eikz43),
        S = (0, h.V)(),
        y = (0, p.O)(),
        N = S?.subscription_trial != null || null != y,
        v = { object: g.ZSU.BUTTON_CTA, section: g.JJy.SUPER_REACTION_PICKER };
    return (0, r.jsxs)("div", {
        className: T.iE,
        children: [
            (0, r.jsx)(o.D, {
                onClick: t,
                className: T.b,
                "aria-label": I.intl.string(I.t.WAI6xu),
                children: (0, r.jsx)(l.P, { size: "md", color: "currentColor" }),
            }),
            (0, r.jsxs)("div", {
                className: T.Qs,
                children: [
                    (0, r.jsx)("div", {
                        className: T.jo,
                        children: (0, r.jsx)(f.A, {
                            className: s()(T.vK, { [T.Vk]: N }),
                            src: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                            loop: !0,
                            autoPlay: !n,
                            muted: !0,
                            controls: !0,
                            disablePictureInPicture: !0,
                        }),
                    }),
                    N
                        ? (0, r.jsx)(m.Ay, {
                              type: A.e.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: S?.subscription_trial?.sku_id ?? A.pe.TIER_2,
                              headingText: I.intl.string(I.t.Wfl5zp),
                              analyticsLocationObject: v,
                              discountOffer: y,
                              trialOffer: S,
                              children: i,
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: T.wx,
                                      children: [
                                          (0, r.jsx)(u.t, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: T.ax,
                                              width: 32,
                                              height: 32,
                                          }),
                                          (0, r.jsx)(c.D, {
                                              className: T.TK,
                                              variant: "heading-xl/bold",
                                              children: I.intl.string(I.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(d.E, { className: T.Fb, variant: "text-md/normal", children: i }),
                                  (0, r.jsx)("div", {
                                      className: T.sk,
                                      children: (0, r.jsx)(E.A, {
                                          subscriptionTier: A.pe.TIER_2,
                                          textOptions: { textOverride: I.intl.string(I.t.sEAnVH) },
                                      }),
                                  }),
                              ],
                          }),
                ],
            }),
        ],
    });
}
