n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    s = n(607070),
    o = n(906732),
    a = n(821982),
    C = n(832149),
    d = n(600164),
    c = n(286961),
    u = n(594174),
    p = n(614277),
    _ = n(215023),
    x = n(317112);
function f(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: f } = e,
        h = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        m = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        { analyticsLocations: j } = (0, o.ZP)(),
        L = l.EFr.SIZE_32,
        g = (0, a.Z)(null == f ? void 0 : f.assetId, L, !m),
        S = (0, c.Z)(),
        y = null == S ? void 0 : S.giftPurchaseConfirmation;
    return null == n || null == y
        ? null
        : (0, r.jsx)(p.O3, {
              children: (0, r.jsx)(l.mzw, {
                  align: d.Z.Align.CENTER,
                  children: (0, r.jsxs)('div', {
                      className: x.promotionalFooter,
                      children: [
                          (0, r.jsx)(l.Xo$, {
                              'aria-label': null == h ? void 0 : h.username,
                              size: L,
                              src: null == h ? void 0 : h.getAvatarURL(void 0, (0, l.pxk)(L), !m),
                              avatarDecoration: g
                          }),
                          (0, r.jsx)(l.zxk, {
                              onClick: () => {
                                  t(),
                                      (0, C.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: j,
                                          purchaseType: _.o8.PROMOTIONAL
                                      });
                              },
                              children: y.collectRewardButtonText()
                          })
                      ]
                  })
              })
          });
}
