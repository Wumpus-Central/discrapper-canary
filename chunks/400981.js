n.d(t, { Z: () => f });
var l = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    r = n(607070),
    a = n(906732),
    o = n(821982),
    C = n(832149),
    d = n(600164),
    c = n(286961),
    u = n(594174),
    p = n(614277),
    x = n(782471);
function f(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: f } = e,
        h = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        _ = (0, i.e7)([r.Z], () => r.Z.useReducedMotion),
        { analyticsLocations: j } = (0, a.ZP)(),
        m = s.EFr.SIZE_32,
        L = (0, o.Z)(null == f ? void 0 : f.assetId, m, !_),
        g = (0, c.Z)(),
        E = null == g ? void 0 : g.giftPurchaseConfirmation;
    return null == n || null == E
        ? null
        : (0, l.jsx)(p.O3, {
              children: (0, l.jsx)(s.mzw, {
                  align: d.Z.Align.CENTER,
                  children: (0, l.jsxs)('div', {
                      className: x.promotionalFooter,
                      children: [
                          (0, l.jsx)(s.Xo$, {
                              'aria-label': null == h ? void 0 : h.username,
                              size: m,
                              src: null == h ? void 0 : h.getAvatarURL(void 0, (0, s.pxk)(m), !_),
                              avatarDecoration: L
                          }),
                          (0, l.jsx)(s.zxk, {
                              onClick: () => {
                                  t(),
                                      (0, C.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: j
                                      });
                              },
                              children: E.collectRewardButtonText()
                          })
                      ]
                  })
              })
          });
}
