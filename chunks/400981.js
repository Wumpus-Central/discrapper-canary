t.d(n, { Z: () => h });
var r = t(951288);
t(647438);
var i = t(442837),
    l = t(159691),
    s = t(481060),
    a = t(607070),
    o = t(906732),
    C = t(821982),
    d = t(832149),
    p = t(600164),
    c = t(347896),
    u = t(594174),
    x = t(27034),
    _ = t(215023),
    f = t(473936);
function h(e) {
    let { onClose: n, selectedPromotionalDecoPurchaseRecord: t, selectedGiftingPromotionReward: h } = e,
        j = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        L = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        { analyticsLocations: m } = (0, o.ZP)(),
        g = s.EFr.SIZE_32,
        S = (0, C.Z)(null == h ? void 0 : h.assetId, g, !L),
        y = (0, c.Z)(),
        E = null == y ? void 0 : y.giftPurchaseConfirmation;
    return null == t || null == E
        ? null
        : (0, r.jsx)(x.O3, {
              children: (0, r.jsx)(s.mzw, {
                  align: p.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)("div", {
                      className: f.promotionalFooter,
                      children: [
                          (0, r.jsx)(s.Xo$, {
                              "aria-label": null == j ? void 0 : j.username,
                              size: g,
                              src: null == j ? void 0 : j.getAvatarURL(void 0, (0, s.pxk)(g), !L),
                              avatarDecoration: S,
                          }),
                          (0, r.jsx)(l.zx, {
                              variant: "primary",
                              text: E.collectRewardButtonText(),
                              onClick: () => {
                                  n(),
                                      (0, d.Z)({
                                          product: t,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: m,
                                          purchaseType: _.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
