n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(159691),
    l = n(481060),
    s = n(607070),
    o = n(906732),
    d = n(821982),
    c = n(832149),
    C = n(600164),
    u = n(347896),
    p = n(594174),
    h = n(614277),
    _ = n(215023),
    m = n(473936);
function f(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: f } = e,
        x = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        g = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        { analyticsLocations: j } = (0, o.ZP)(),
        b = l.EFr.SIZE_32,
        v = (0, d.Z)(null == f ? void 0 : f.assetId, b, !g),
        S = (0, u.Z)(),
        L = null == S ? void 0 : S.giftPurchaseConfirmation;
    return null == n || null == L
        ? null
        : (0, r.jsx)(h.O3, {
              children: (0, r.jsx)(l.mzw, {
                  align: C.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)("div", {
                      className: m.promotionalFooter,
                      children: [
                          (0, r.jsx)(l.Xo$, {
                              "aria-label": null == x ? void 0 : x.username,
                              size: b,
                              src: null == x ? void 0 : x.getAvatarURL(void 0, (0, l.pxk)(b), !g),
                              avatarDecoration: v,
                          }),
                          (0, r.jsx)(a.zxk, {
                              variant: "primary",
                              text: L.collectRewardButtonText(),
                              onClick: () => {
                                  t(),
                                      (0, c.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: j,
                                          purchaseType: _.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
