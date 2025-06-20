t.d(n, { Z: () => j });
var i = t(255367);
t(73800);
var l = t(442837),
    s = t(481060),
    r = t(607070),
    a = t(906732),
    o = t(821982),
    C = t(832149),
    d = t(600164),
    c = t(286961),
    u = t(594174),
    p = t(614277),
    x = t(215023),
    h = t(317112);
function j(e) {
    let { onClose: n, selectedPromotionalDecoPurchaseRecord: t, selectedGiftingPromotionReward: j } = e,
        f = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        _ = (0, l.e7)([r.Z], () => r.Z.useReducedMotion),
        { analyticsLocations: m } = (0, a.ZP)(),
        L = s.EFr.SIZE_32,
        g = (0, o.Z)(null == j ? void 0 : j.assetId, L, !_),
        y = (0, c.Z)(),
        S = null == y ? void 0 : y.giftPurchaseConfirmation;
    return null == t || null == S
        ? null
        : (0, i.jsx)(p.O3, {
              children: (0, i.jsx)(s.mzw, {
                  align: d.Z.Align.CENTER,
                  children: (0, i.jsxs)('div', {
                      className: h.promotionalFooter,
                      children: [
                          (0, i.jsx)(s.Xo$, {
                              'aria-label': null == f ? void 0 : f.username,
                              size: L,
                              src: null == f ? void 0 : f.getAvatarURL(void 0, (0, s.pxk)(L), !_),
                              avatarDecoration: g
                          }),
                          (0, i.jsx)(s.zxk, {
                              onClick: () => {
                                  n(),
                                      (0, C.Z)({
                                          product: t,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: m,
                                          purchaseType: x.o8.PROMOTIONAL
                                      });
                              },
                              children: S.collectRewardButtonText()
                          })
                      ]
                  })
              })
          });
}
