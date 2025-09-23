n.d(t, { Z: () => x });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(159691),
    o = n(481060),
    a = n(607070),
    s = n(906732),
    C = n(821982),
    d = n(832149),
    c = n(600164),
    u = n(347896),
    p = n(594174),
    _ = n(614277),
    h = n(215023),
    f = n(365112);
function x(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: x } = e,
        m = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        j = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        { analyticsLocations: b } = (0, s.ZP)(),
        g = o.EFr.SIZE_32,
        L = (0, C.Z)(null == x ? void 0 : x.assetId, g, !j),
        y = (0, u.Z)(),
        S = null == y ? void 0 : y.giftPurchaseConfirmation;
    return null == n || null == S
        ? null
        : (0, r.jsx)(_.O3, {
              children: (0, r.jsx)(o.mzw, {
                  align: c.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)("div", {
                      className: f.promotionalFooter,
                      children: [
                          (0, r.jsx)(o.Xo$, {
                              "aria-label": null == m ? void 0 : m.username,
                              size: g,
                              src: null == m ? void 0 : m.getAvatarURL(void 0, (0, o.pxk)(g), !j),
                              avatarDecoration: L,
                          }),
                          (0, r.jsx)(l.zxk, {
                              variant: "primary",
                              text: S.collectRewardButtonText(),
                              onClick: () => {
                                  t(),
                                      (0, d.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: b,
                                          purchaseType: h.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
