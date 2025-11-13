n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var l = n(442837),
    a = n(159691),
    i = n(481060),
    o = n(607070),
    s = n(906732),
    d = n(821982),
    c = n(832149),
    u = n(600164),
    p = n(347896),
    m = n(594174),
    h = n(614277),
    f = n(215023),
    b = n(473936);
function g(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: g } = e,
        v = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
        x = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        { analyticsLocations: j } = (0, s.ZP)(),
        y = i.EFr.SIZE_32,
        P = (0, d.Z)(null == g ? void 0 : g.assetId, y, !x),
        S = (0, p.Z)(),
        _ = null == S ? void 0 : S.giftPurchaseConfirmation;
    return null == n || null == _
        ? null
        : (0, r.jsx)(h.O3, {
              children: (0, r.jsx)(i.mzw, {
                  align: u.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)("div", {
                      className: b.promotionalFooter,
                      children: [
                          (0, r.jsx)(i.Xo$, {
                              "aria-label": null == v ? void 0 : v.username,
                              size: y,
                              src: null == v ? void 0 : v.getAvatarURL(void 0, (0, i.pxk)(y), !x),
                              avatarDecoration: P,
                          }),
                          (0, r.jsx)(a.zxk, {
                              variant: "primary",
                              text: _.collectRewardButtonText(),
                              onClick: () => {
                                  t(),
                                      (0, c.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: j,
                                          purchaseType: f.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
