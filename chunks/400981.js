n.d(t, { Z: () => f });
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
    u = n(347896),
    p = n(594174),
    x = n(27034),
    _ = n(215023),
    h = n(473936);
function f(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: f } = e,
        m = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        j = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        { analyticsLocations: L } = (0, o.ZP)(),
        b = a.EFr.SIZE_32,
        g = (0, C.Z)(null == f ? void 0 : f.assetId, b, !j),
        S = (0, u.Z)(),
        y = null == S ? void 0 : S.giftPurchaseConfirmation;
    return null == n || null == y
        ? null
        : (0, r.jsx)(x.O3, {
              children: (0, r.jsx)(a.mzw, {
                  align: c.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)("div", {
                      className: h.promotionalFooter,
                      children: [
                          (0, r.jsx)(a.Xo$, {
                              "aria-label": null == m ? void 0 : m.username,
                              size: b,
                              src: null == m ? void 0 : m.getAvatarURL(void 0, (0, a.pxk)(b), !j),
                              avatarDecoration: g,
                          }),
                          (0, r.jsx)(l.zxk, {
                              variant: "primary",
                              text: y.collectRewardButtonText(),
                              onClick: () => {
                                  t(),
                                      (0, d.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: L,
                                          purchaseType: _.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
