t.d(n, { Z: () => j });
var i = t(255367);
t(73800);
var l = t(442837),
    r = t(755721),
    s = t(481060),
    a = t(607070),
    o = t(906732),
    C = t(821982),
    d = t(832149),
    c = t(600164),
    u = t(286961),
    p = t(594174),
    x = t(27034),
    h = t(215023),
    f = t(317112);
function j(e) {
    let { onClose: n, selectedPromotionalDecoPurchaseRecord: t, selectedGiftingPromotionReward: j } = e,
        m = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        _ = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
        { analyticsLocations: L } = (0, o.ZP)(),
        g = s.EFr.SIZE_32,
        y = (0, C.Z)(null == j ? void 0 : j.assetId, g, !_),
        E = (0, u.Z)(),
        S = null == E ? void 0 : E.giftPurchaseConfirmation;
    return null == t || null == S
        ? null
        : (0, i.jsx)(x.O3, {
              children: (0, i.jsx)(s.mzw, {
                  align: c.Z.Align.CENTER,
                  children: (0, i.jsxs)('div', {
                      className: f.promotionalFooter,
                      children: [
                          (0, i.jsx)(s.Xo$, {
                              'aria-label': null == m ? void 0 : m.username,
                              size: g,
                              src: null == m ? void 0 : m.getAvatarURL(void 0, (0, s.pxk)(g), !_),
                              avatarDecoration: y
                          }),
                          (0, i.jsx)(r.zx, {
                              onClick: () => {
                                  (n(),
                                      (0, d.Z)({
                                          product: t,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: L,
                                          purchaseType: h.o8.PROMOTIONAL
                                      }));
                              },
                              children: S.collectRewardButtonText()
                          })
                      ]
                  })
              })
          });
}
