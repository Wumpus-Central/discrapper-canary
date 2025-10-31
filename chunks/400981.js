n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(159691),
    a = n(481060),
    s = n(607070),
    o = n(906732),
    d = n(821982),
    c = n(832149),
    C = n(600164),
    u = n(347896),
    p = n(594174),
    h = n(614277),
    m = n(215023),
    _ = n(473936);
function f(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: f } = e,
        x = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        j = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        { analyticsLocations: g } = (0, o.ZP)(),
        b = a.EFr.SIZE_32,
        L = (0, d.Z)(null == f ? void 0 : f.assetId, b, !j),
        v = (0, u.Z)(),
        y = null == v ? void 0 : v.giftPurchaseConfirmation;
    return null == n || null == y
        ? null
        : (0, r.jsx)(h.O3, {
              children: (0, r.jsx)(a.mzw, {
                  align: C.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)("div", {
                      className: _.promotionalFooter,
                      children: [
                          (0, r.jsx)(a.Xo$, {
                              "aria-label": null == x ? void 0 : x.username,
                              size: b,
                              src: null == x ? void 0 : x.getAvatarURL(void 0, (0, a.pxk)(b), !j),
                              avatarDecoration: L,
                          }),
                          (0, r.jsx)(l.zxk, {
                              variant: "primary",
                              text: y.collectRewardButtonText(),
                              onClick: () => {
                                  t(),
                                      (0, c.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: g,
                                          purchaseType: m.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
