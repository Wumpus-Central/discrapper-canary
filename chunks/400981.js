n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(159691),
    a = n(481060),
    s = n(607070),
    o = n(906732),
    C = n(821982),
    d = n(832149),
    c = n(600164),
    p = n(347896),
    u = n(594174),
    x = n(27034),
    f = n(215023),
    h = n(473936);
function _(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: _ } = e,
        j = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        m = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        { analyticsLocations: L } = (0, o.ZP)(),
        b = a.EFr.SIZE_32,
        g = (0, C.Z)(null == _ ? void 0 : _.assetId, b, !m),
        y = (0, p.Z)(),
        S = null == y ? void 0 : y.giftPurchaseConfirmation;
    return null == n || null == S
        ? null
        : (0, r.jsx)(x.O3, {
              children: (0, r.jsx)(a.mzw, {
                  align: c.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)("div", {
                      className: h.promotionalFooter,
                      children: [
                          (0, r.jsx)(a.Xo$, {
                              "aria-label": null == j ? void 0 : j.username,
                              size: b,
                              src: null == j ? void 0 : j.getAvatarURL(void 0, (0, a.pxk)(b), !m),
                              avatarDecoration: g,
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
                                          purchaseType: f.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
