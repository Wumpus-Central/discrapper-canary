n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(159691),
    l = n(481060),
    o = n(607070),
    s = n(906732),
    d = n(821982),
    C = n(832149),
    c = n(600164),
    u = n(347896),
    p = n(594174),
    _ = n(614277),
    f = n(215023),
    h = n(473936);
function m(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: m } = e,
        x = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        g = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        { analyticsLocations: j } = (0, s.ZP)(),
        b = l.EFr.SIZE_32,
        y = (0, d.Z)(null == m ? void 0 : m.assetId, b, !g),
        L = (0, u.Z)(),
        v = null == L ? void 0 : L.giftPurchaseConfirmation;
    return null == n || null == v
        ? null
        : (0, r.jsx)(_.O3, {
              children: (0, r.jsx)(l.mzw, {
                  align: c.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)("div", {
                      className: h.promotionalFooter,
                      children: [
                          (0, r.jsx)(l.Xo$, {
                              "aria-label": null == x ? void 0 : x.username,
                              size: b,
                              src: null == x ? void 0 : x.getAvatarURL(void 0, (0, l.pxk)(b), !g),
                              avatarDecoration: y,
                          }),
                          (0, r.jsx)(a.zxk, {
                              variant: "primary",
                              text: v.collectRewardButtonText(),
                              onClick: () => {
                                  t(),
                                      (0, C.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: j,
                                          purchaseType: f.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
