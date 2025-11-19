n.d(t, { Z: () => y }), n(388685);
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
    P = n(215023),
    x = n(365112);
function y(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: y } = e,
        j = (0, i.e7)([g.default], () => g.default.getCurrentUser()),
        S = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        { analyticsLocations: _ } = (0, c.ZP)(),
        O = s.EFr.SIZE_32,
        w = (0, u.Z)(null == y ? void 0 : y.assetId, O, !S),
        C = (0, b.Z)(),
        k = null == C ? void 0 : C.giftPurchaseConfirmation,
        E = (null == y ? void 0 : y.type) === a.Z.NAMEPLATE,
        [I, T] = l.useState(!1),
        N = l.useMemo(() => {
            var e, t;
            return E && (null == y ? void 0 : y.assetId) != null
                ? {
                      src: y.assetId,
                      palette: (0, h.t1)(null != (t = y.palette) ? t : "sky"),
                      imgAlt: null == (e = y.a11yLabel) ? void 0 : e.call(y),
                  }
                : null;
        }, [E, y]);
    return null == n || null == k
        ? null
        : (0, r.jsx)(v.O3, {
              children: (0, r.jsx)(s.mzw, {
                  align: m.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)("div", {
                      className: x.promotionalFooter,
                      children: [
                          E && null != N
                              ? (0, r.jsx)("div", {
                                    className: x.nameplatePreviewContainer,
                                    onMouseEnter: () => T(!0),
                                    onMouseLeave: () => T(!1),
                                    children: (0, r.jsx)(f.R, {
                                        user: j,
                                        nameplate: null,
                                        nameplateData: N,
                                        showPlaceholderUser: !0,
                                        nameplatePreviewSize: "xsmall",
                                        isHighlighted: I,
                                    }),
                                })
                              : (0, r.jsx)(s.Xo$, {
                                    "aria-label": null == j ? void 0 : j.username,
                                    size: O,
                                    src: null == j ? void 0 : j.getAvatarURL(void 0, (0, s.pxk)(O), !S),
                                    avatarDecoration: w,
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
                                          purchaseType: P.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
