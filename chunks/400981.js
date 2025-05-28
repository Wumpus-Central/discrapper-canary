n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var l = n(442837),
    s = n(481060),
    r = n(607070),
    a = n(906732),
    o = n(821982),
    C = n(832149),
    d = n(600164),
    c = n(286961),
    u = n(594174),
    p = n(614277),
    x = n(215023),
    h = n(317112);
function f(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: f } = e,
        j = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        m = (0, l.e7)([r.Z], () => r.Z.useReducedMotion),
        { analyticsLocations: _ } = (0, a.ZP)(),
        g = s.EFr.SIZE_32,
        L = (0, o.Z)(null == f ? void 0 : f.assetId, g, !m),
        E = (0, c.Z)(),
        y = null == E ? void 0 : E.giftPurchaseConfirmation;
    return null == n || null == y
        ? null
        : (0, i.jsx)(p.O3, {
              children: (0, i.jsx)(s.mzw, {
                  align: d.Z.Align.CENTER,
                  children: (0, i.jsxs)('div', {
                      className: h.promotionalFooter,
                      children: [
                          (0, i.jsx)(s.Xo$, {
                              'aria-label': null == j ? void 0 : j.username,
                              size: g,
                              src: null == j ? void 0 : j.getAvatarURL(void 0, (0, s.pxk)(g), !m),
                              avatarDecoration: L
                          }),
                          (0, i.jsx)(s.zxk, {
                              onClick: () => {
                                  t(),
                                      (0, C.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: _,
                                          purchaseType: x.o8.PROMOTIONAL
                                      });
                              },
                              children: y.collectRewardButtonText()
                          })
                      ]
                  })
              })
          });
}
