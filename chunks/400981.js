t.d(n, { Z: () => f });
var i = t(255367);
t(73800);
var l = t(442837),
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
        j = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        m = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        { analyticsLocations: _ } = (0, a.ZP)(),
        L = r.EFr.SIZE_32,
        g = (0, o.Z)(null == f ? void 0 : f.assetId, L, !m),
        y = (0, c.Z)(),
        E = null == y ? void 0 : y.giftPurchaseConfirmation;
    return null == t || null == E
        ? null
        : (0, i.jsx)(p.O3, {
              children: (0, i.jsx)(r.mzw, {
                  align: d.Z.Align.CENTER,
                  children: (0, i.jsxs)('div', {
                      className: h.promotionalFooter,
                      children: [
                          (0, i.jsx)(r.Xo$, {
                              'aria-label': null == j ? void 0 : j.username,
                              size: L,
                              src: null == j ? void 0 : j.getAvatarURL(void 0, (0, r.pxk)(L), !m),
                              avatarDecoration: g
                          }),
                          (0, i.jsx)(r.zxk, {
                              onClick: () => {
                                  n(),
                                      (0, C.Z)({
                                          product: t,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: _,
                                          purchaseType: x.o8.PROMOTIONAL
                                      });
                              },
                              children: E.collectRewardButtonText()
                          })
                      ]
                  })
              })
          });
}
