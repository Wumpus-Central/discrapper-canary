n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(979554),
    a = n(442837),
    s = n(159691),
    o = n(481060),
    u = n(607070),
    c = n(906732),
    d = n(821982),
    p = n(832149),
    m = n(600164),
    h = n(4242),
    f = n(566697),
    g = n(347896),
    y = n(594174),
    j = n(614277),
    v = n(215023),
    b = n(350928);
function O(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: O } = e,
        S = (0, a.e7)([y.default], () => y.default.getCurrentUser()),
        P = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        { analyticsLocations: x } = (0, c.ZP)(),
        E = o.EFr.SIZE_32,
        w = (0, d.Z)(null == O ? void 0 : O.assetId, E, !P),
        I = (0, g.Z)(),
        T = null == I ? void 0 : I.giftPurchaseConfirmation,
        k = (null == O ? void 0 : O.type) === i.Z.NAMEPLATE,
        [C, N] = l.useState(!1),
        M = l.useMemo(() => {
            var e, t;
            return k && (null == O ? void 0 : O.assetId) != null
                ? {
                      src: O.assetId,
                      palette: (0, h.t1)(null != (t = O.palette) ? t : "sky"),
                      imgAlt: null == (e = O.a11yLabel) ? void 0 : e.call(O),
                  }
                : null;
        }, [k, O]);
    return null == n || null == T
        ? null
        : (0, r.jsx)(j.O3, {
              children: (0, r.jsx)(o.mzw, {
                  align: m.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)("div", {
                      className: b.promotionalFooter,
                      children: [
                          k && null != M
                              ? (0, r.jsx)("div", {
                                    className: b.nameplatePreviewContainer,
                                    onMouseEnter: () => N(!0),
                                    onMouseLeave: () => N(!1),
                                    children: (0, r.jsx)(f.R, {
                                        user: S,
                                        nameplate: null,
                                        nameplateData: M,
                                        showPlaceholderUser: !0,
                                        nameplatePreviewSize: "xsmall",
                                        isHighlighted: C,
                                    }),
                                })
                              : (0, r.jsx)(o.Xo$, {
                                    "aria-label": null == S ? void 0 : S.username,
                                    size: E,
                                    src: null == S ? void 0 : S.getAvatarURL(void 0, (0, o.dcp)(E), !P),
                                    avatarDecoration: w,
                                }),
                          (0, r.jsx)(s.zxk, {
                              variant: "primary",
                              text: T.collectRewardButtonText(),
                              onClick: () => {
                                  t(),
                                      (0, p.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: x,
                                          purchaseType: v.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
