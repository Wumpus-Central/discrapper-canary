t.d(r, { Z: () => x });
var n = t(255367);
t(73800);
var i = t(442837),
    l = t(159691),
    o = t(481060),
    a = t(607070),
    s = t(906732),
    d = t(821982),
    C = t(832149),
    c = t(600164),
    u = t(286961),
    p = t(594174),
    _ = t(27034),
    f = t(215023),
    m = t(317112);
function x(e) {
    let { onClose: r, selectedPromotionalDecoPurchaseRecord: t, selectedGiftingPromotionReward: x } = e,
        h = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        j = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        { analyticsLocations: L } = (0, s.ZP)(),
        b = o.EFr.SIZE_32,
        g = (0, d.Z)(null == x ? void 0 : x.assetId, b, !j),
        y = (0, u.Z)(),
        S = null == y ? void 0 : y.giftPurchaseConfirmation;
    return null == t || null == S
        ? null
        : (0, n.jsx)(_.O3, {
              children: (0, n.jsx)(o.mzw, {
                  align: c.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, n.jsxs)("div", {
                      className: m.promotionalFooter,
                      children: [
                          (0, n.jsx)(o.Xo$, {
                              "aria-label": null == h ? void 0 : h.username,
                              size: b,
                              src: null == h ? void 0 : h.getAvatarURL(void 0, (0, o.pxk)(b), !j),
                              avatarDecoration: g,
                          }),
                          (0, n.jsx)(l.zx, {
                              variant: "primary",
                              text: S.collectRewardButtonText(),
                              onClick: () => {
                                  r(),
                                      (0, C.Z)({
                                          product: t,
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
