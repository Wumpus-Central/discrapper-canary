r.d(t, { Z: () => x });
var n = r(255367);
r(73800);
var i = r(442837),
    o = r(159691),
    a = r(481060),
    l = r(607070),
    s = r(906732),
    d = r(821982),
    C = r(832149),
    c = r(600164),
    u = r(286961),
    p = r(594174),
    _ = r(27034),
    f = r(215023),
    m = r(317112);
function x(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: r, selectedGiftingPromotionReward: x } = e,
        h = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        j = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
        { analyticsLocations: L } = (0, s.ZP)(),
        b = a.EFr.SIZE_32,
        g = (0, d.Z)(null == x ? void 0 : x.assetId, b, !j),
        y = (0, u.Z)(),
        S = null == y ? void 0 : y.giftPurchaseConfirmation;
    return null == r || null == S
        ? null
        : (0, n.jsx)(_.O3, {
              children: (0, n.jsx)(a.mzw, {
                  align: c.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, n.jsxs)("div", {
                      className: m.promotionalFooter,
                      children: [
                          (0, n.jsx)(a.Xo$, {
                              "aria-label": null == h ? void 0 : h.username,
                              size: b,
                              src: null == h ? void 0 : h.getAvatarURL(void 0, (0, a.pxk)(b), !j),
                              avatarDecoration: g,
                          }),
                          (0, n.jsx)(o.zx, {
                              variant: "primary",
                              text: S.collectRewardButtonText(),
                              onClick: () => {
                                  t(),
                                      (0, C.Z)({
                                          product: r,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: L,
                                          purchaseType: f.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
