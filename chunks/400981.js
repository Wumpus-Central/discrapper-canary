n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(159691),
    s = n(481060),
    a = n(607070),
    o = n(906732),
    C = n(821982),
    d = n(832149),
    p = n(600164),
    c = n(347896),
    u = n(594174),
    x = n(27034),
    h = n(215023),
    _ = n(473936);
function f(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: f } = e,
        j = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        m = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        { analyticsLocations: L } = (0, o.ZP)(),
        g = s.EFr.SIZE_32,
        b = (0, C.Z)(null == f ? void 0 : f.assetId, g, !m),
        y = (0, c.Z)(),
        S = null == y ? void 0 : y.giftPurchaseConfirmation;
    return null == n || null == S
        ? null
        : (0, r.jsx)(x.O3, {
              children: (0, r.jsx)(s.mzw, {
                  align: p.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)("div", {
                      className: _.promotionalFooter,
                      children: [
                          (0, r.jsx)(s.Xo$, {
                              "aria-label": null == j ? void 0 : j.username,
                              size: g,
                              src: null == j ? void 0 : j.getAvatarURL(void 0, (0, s.pxk)(g), !m),
                              avatarDecoration: b,
                          }),
                          (0, r.jsx)(l.zx, {
                              variant: "primary",
                              text: S.collectRewardButtonText(),
                              onClick: () => {
                                  t(),
                                      (0, d.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: L,
                                          purchaseType: h.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
