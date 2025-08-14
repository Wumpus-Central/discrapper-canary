n.d(r, { Z: () => m });
var t = n(255367);
n(73800);
var i = n(442837),
    o = n(159691),
    a = n(481060),
    l = n(607070),
    s = n(906732),
    C = n(821982),
    d = n(832149),
    c = n(600164),
    p = n(286961),
    u = n(594174),
    _ = n(27034),
    x = n(215023),
    f = n(473936);
function m(e) {
    let { onClose: r, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: m } = e,
        h = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        j = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
        { analyticsLocations: L } = (0, s.ZP)(),
        g = a.EFr.SIZE_32,
        b = (0, C.Z)(null == m ? void 0 : m.assetId, g, !j),
        y = (0, p.Z)(),
        S = null == y ? void 0 : y.giftPurchaseConfirmation;
    return null == n || null == S
        ? null
        : (0, t.jsx)(_.O3, {
              children: (0, t.jsx)(a.mzw, {
                  align: c.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, t.jsxs)("div", {
                      className: f.promotionalFooter,
                      children: [
                          (0, t.jsx)(a.Xo$, {
                              "aria-label": null == h ? void 0 : h.username,
                              size: g,
                              src: null == h ? void 0 : h.getAvatarURL(void 0, (0, a.pxk)(g), !j),
                              avatarDecoration: b,
                          }),
                          (0, t.jsx)(o.zx, {
                              variant: "primary",
                              text: S.collectRewardButtonText(),
                              onClick: () => {
                                  r(),
                                      (0, d.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: L,
                                          purchaseType: x.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
