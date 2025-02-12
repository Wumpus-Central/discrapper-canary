n.d(t, { Z: () => h });
var l = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    r = n(607070),
    a = n(906732),
    o = n(821982),
    C = n(832149),
    d = n(600164),
    u = n(286961),
    c = n(594174),
    p = n(614277),
    x = n(772873);
function h(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: h } = e,
        _ = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        f = (0, i.e7)([r.Z], () => r.Z.useReducedMotion),
        { analyticsLocations: j } = (0, a.ZP)(),
        m = s.EFr.SIZE_32,
        L = (0, o.Z)(null == h ? void 0 : h.assetId, m, !f),
        E = (0, u.Z)(),
        g = null == E ? void 0 : E.giftPurchaseConfirmation;
    return null == n || null == g
        ? null
        : (0, l.jsx)(p.O3, {
              children: (0, l.jsx)(s.mzw, {
                  align: d.Z.Align.CENTER,
                  children: (0, l.jsxs)('div', {
                      className: x.promotionalFooter,
                      children: [
                          (0, l.jsx)(s.Xo$, {
                              'aria-label': null == _ ? void 0 : _.username,
                              size: m,
                              src: null == _ ? void 0 : _.getAvatarURL(void 0, (0, s.pxk)(m), !f),
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
                              children: g.collectRewardButtonText()
                          })
                      ]
                  })
              })
          });
}
