n.d(t, { Z: () => P }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(979554),
    i = n(442837),
    o = n(159691),
    s = n(481060),
    d = n(607070),
    c = n(906732),
    u = n(821982),
    p = n(832149),
    m = n(600164),
    h = n(4242),
    f = n(566697),
    b = n(347896),
    g = n(594174),
    v = n(614277),
    x = n(215023),
    y = n(473936);
function P(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: P } = e,
        S = (0, i.e7)([g.default], () => g.default.getCurrentUser()),
        j = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        { analyticsLocations: _ } = (0, c.ZP)(),
        w = s.EFr.SIZE_32,
        O = (0, u.Z)(null == P ? void 0 : P.assetId, w, !j),
        C = (0, b.Z)(),
        k = null == C ? void 0 : C.giftPurchaseConfirmation,
        E = (null == P ? void 0 : P.type) === a.Z.NAMEPLATE,
        [I, T] = l.useState(!1),
        N = l.useMemo(() => {
            var e, t;
            return E && (null == P ? void 0 : P.assetId) != null
                ? {
                      src: P.assetId,
                      palette: (0, h.t1)(null != (t = P.palette) ? t : "sky"),
                      imgAlt: null == (e = P.a11yLabel) ? void 0 : e.call(P),
                  }
                : null;
        }, [E, P]);
    return null == n || null == k
        ? null
        : (0, r.jsx)(v.O3, {
              children: (0, r.jsx)(s.mzw, {
                  align: m.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)("div", {
                      className: y.promotionalFooter,
                      children: [
                          E && null != N
                              ? (0, r.jsx)("div", {
                                    className: y.nameplatePreviewContainer,
                                    onMouseEnter: () => T(!0),
                                    onMouseLeave: () => T(!1),
                                    children: (0, r.jsx)(f.R, {
                                        user: S,
                                        nameplate: null,
                                        nameplateData: N,
                                        showPlaceholderUser: !0,
                                        nameplatePreviewSize: "xsmall",
                                        isHighlighted: I,
                                    }),
                                })
                              : (0, r.jsx)(s.Xo$, {
                                    "aria-label": null == S ? void 0 : S.username,
                                    size: w,
                                    src: null == S ? void 0 : S.getAvatarURL(void 0, (0, s.pxk)(w), !j),
                                    avatarDecoration: O,
                                }),
                          (0, r.jsx)(o.zxk, {
                              variant: "primary",
                              text: k.collectRewardButtonText(),
                              onClick: () => {
                                  t(),
                                      (0, p.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: _,
                                          purchaseType: x.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
