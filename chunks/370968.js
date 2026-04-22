"use strict";
n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(311907),
    a = n(939249),
    o = n(789645),
    c = n(403581),
    u = n(534514),
    d = n(834730),
    h = n(775602),
    m = n(607470),
    p = n(422936),
    f = n(234419),
    g = n(725807),
    _ = n(811611),
    x = n(652215),
    A = n(788868),
    C = n(985018),
    E = n(151867);
function I(e) {
    let { onDismiss: t } = e,
        n = (0, r.bG)([h.A], () => h.A.useReducedMotion),
        l = C.intl.string(C.t.eikz43),
        I = (0, f.V)(),
        v = (0, p.O)(),
        y = I?.subscription_trial != null || null != v,
        S = { object: x.ZSU.BUTTON_CTA, section: x.JJy.SUPER_REACTION_PICKER };
    return (0, i.jsxs)("div", {
        className: E.iE,
        children: [
            (0, i.jsx)(a.D, {
                onClick: t,
                className: E.b,
                "aria-label": C.intl.string(C.t.WAI6xu),
                children: (0, i.jsx)(o.P, { size: "md", color: "currentColor" }),
            }),
            (0, i.jsxs)("div", {
                className: E.Qs,
                children: [
                    (0, i.jsx)("div", {
                        className: E.jo,
                        children: (0, i.jsx)(m.A, {
                            className: s()(E.vK, { [E.Vk]: y }),
                            src: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                            loop: !0,
                            autoPlay: !n,
                            muted: !0,
                            controls: !0,
                            disablePictureInPicture: !0,
                        }),
                    }),
                    y
                        ? (0, i.jsx)(_.Ay, {
                              type: A.e.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: I?.subscription_trial?.sku_id ?? A.pe.TIER_2,
                              headingText: C.intl.string(C.t.Wfl5zp),
                              analyticsLocationObject: S,
                              discountOffer: v,
                              trialOffer: I,
                              children: l,
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: E.wx,
                                      children: [
                                          (0, i.jsx)(c.t, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: E.ax,
                                              width: 32,
                                              height: 32,
                                          }),
                                          (0, i.jsx)(u.D, {
                                              className: E.TK,
                                              variant: "heading-xl/bold",
                                              children: C.intl.string(C.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(d.E, { className: E.Fb, variant: "text-md/normal", children: l }),
                                  (0, i.jsx)("div", {
                                      className: E.sk,
                                      children: (0, i.jsx)(g.A, {
                                          subscriptionTier: A.pe.TIER_2,
                                          textOptions: { textOverride: C.intl.string(C.t.sEAnVH) },
                                      }),
                                  }),
                              ],
                          }),
                ],
            }),
        ],
    });
}
