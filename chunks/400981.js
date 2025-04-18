n.d(t, { Z: () => h });
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
    x = n(800808);
function h(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: h } = e,
        f = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        j = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        { analyticsLocations: m } = (0, o.ZP)(),
        L = l.EFr.SIZE_32,
        g = (0, a.Z)(null == h ? void 0 : h.assetId, L, !j),
        S = (0, c.Z)(),
        E = null == S ? void 0 : S.giftPurchaseConfirmation;
    return null == n || null == E
        ? null
        : (0, r.jsx)(p.O3, {
              children: (0, r.jsx)(l.mzw, {
                  align: d.Z.Align.CENTER,
                  children: (0, r.jsxs)('div', {
                      className: x.promotionalFooter,
                      children: [
                          (0, r.jsx)(l.Xo$, {
                              'aria-label': null == f ? void 0 : f.username,
                              size: L,
                              src: null == f ? void 0 : f.getAvatarURL(void 0, (0, l.pxk)(L), !j),
                              avatarDecoration: g
                          }),
                          (0, r.jsx)(l.zxk, {
                              onClick: () => {
                                  t(),
                                      (0, C.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: m,
                                          purchaseType: _.o8.PROMOTIONAL
                                      });
                              },
                              children: E.collectRewardButtonText()
                          })
                      ]
                  })
              })
          });
}
