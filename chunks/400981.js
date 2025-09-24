n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(159691),
    o = n(481060),
    l = n(607070),
    s = n(906732),
    C = n(821982),
    d = n(832149),
    c = n(600164),
    u = n(347896),
    p = n(594174),
    _ = n(614277),
    f = n(215023),
    h = n(473936);
function m(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: m } = e,
        x = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        j = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
        { analyticsLocations: b } = (0, s.ZP)(),
        g = o.EFr.SIZE_32,
        L = (0, C.Z)(null == m ? void 0 : m.assetId, g, !j),
        y = (0, u.Z)(),
        v = null == y ? void 0 : y.giftPurchaseConfirmation;
    return null == n || null == v
        ? null
        : (0, r.jsx)(_.O3, {
              children: (0, r.jsx)(o.mzw, {
                  align: c.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)("div", {
                      className: h.promotionalFooter,
                      children: [
                          (0, r.jsx)(o.Xo$, {
                              "aria-label": null == x ? void 0 : x.username,
                              size: g,
                              src: null == x ? void 0 : x.getAvatarURL(void 0, (0, o.pxk)(g), !j),
                              avatarDecoration: L,
                          }),
                          (0, r.jsx)(a.zxk, {
                              variant: "primary",
                              text: v.collectRewardButtonText(),
                              onClick: () => {
                                  t(),
                                      (0, d.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: b,
                                          purchaseType: f.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
