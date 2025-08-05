n.d(t, { Z: () => j });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(159691),
    s = n(481060),
    a = n(607070),
    o = n(906732),
    C = n(821982),
    d = n(832149),
    c = n(600164),
    u = n(286961),
    p = n(594174),
    x = n(27034),
    h = n(215023),
    f = n(317112);
function j(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: j } = e,
        m = (0, r.e7)([p.default], () => p.default.getCurrentUser()),
        _ = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        { analyticsLocations: L } = (0, o.ZP)(),
        y = s.EFr.SIZE_32,
        E = (0, C.Z)(null == j ? void 0 : j.assetId, y, !_),
        g = (0, u.Z)(),
        b = null == g ? void 0 : g.giftPurchaseConfirmation;
    return null == n || null == b
        ? null
        : (0, i.jsx)(x.O3, {
              children: (0, i.jsx)(s.mzw, {
                  align: c.Z.Align.CENTER,
                  children: (0, i.jsxs)('div', {
                      className: f.promotionalFooter,
                      children: [
                          (0, i.jsx)(s.Xo$, {
                              'aria-label': null == m ? void 0 : m.username,
                              size: y,
                              src: null == m ? void 0 : m.getAvatarURL(void 0, (0, s.pxk)(y), !_),
                              avatarDecoration: E
                          }),
                          (0, i.jsx)(l.zx, {
                              variant: 'primary',
                              text: b.collectRewardButtonText(),
                              onClick: () => {
                                  (t(),
                                      (0, d.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: L,
                                          purchaseType: h.o8.PROMOTIONAL
                                      }));
                              }
                          })
                      ]
                  })
              })
          });
}
