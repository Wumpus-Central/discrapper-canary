t.d(n, { Z: () => f });
var l = t(255367);
t(73800);
var i = t(442837),
    r = t(481060),
    s = t(607070),
    a = t(906732),
    o = t(821982),
    C = t(832149),
    d = t(600164),
    c = t(286961),
    u = t(594174),
    p = t(614277),
    x = t(215023),
    h = t(317112);
function f(e) {
    let { onClose: n, selectedPromotionalDecoPurchaseRecord: t, selectedGiftingPromotionReward: f } = e,
        j = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        _ = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        { analyticsLocations: m } = (0, a.ZP)(),
        L = r.EFr.SIZE_32,
        g = (0, o.Z)(null == f ? void 0 : f.assetId, L, !_),
        y = (0, c.Z)(),
        S = null == y ? void 0 : y.giftPurchaseConfirmation;
    return null == t || null == S
        ? null
        : (0, l.jsx)(p.O3, {
              children: (0, l.jsx)(r.mzw, {
                  align: d.Z.Align.CENTER,
                  children: (0, l.jsxs)('div', {
                      className: h.promotionalFooter,
                      children: [
                          (0, l.jsx)(r.Xo$, {
                              'aria-label': null == j ? void 0 : j.username,
                              size: L,
                              src: null == j ? void 0 : j.getAvatarURL(void 0, (0, r.pxk)(L), !_),
                              avatarDecoration: g
                          }),
                          (0, l.jsx)(r.zxk, {
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
