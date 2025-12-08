n.d(t, { Z: () => S }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(979554),
    a = n(442837),
    s = n(159691),
    o = n(481060),
    u = n(607070),
    c = n(906732),
    d = n(821982),
    m = n(832149),
    p = n(600164),
    h = n(4242),
    f = n(566697),
    g = n(347896),
    v = n(594174),
    j = n(614277),
    y = n(215023),
    b = n(473936);
function S(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: S } = e,
        x = (0, a.e7)([v.default], () => v.default.getCurrentUser()),
        P = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        { analyticsLocations: O } = (0, c.ZP)(),
        E = o.EFr.SIZE_32,
        I = (0, d.Z)(null == S ? void 0 : S.assetId, E, !P),
        w = (0, g.Z)(),
        T = null == w ? void 0 : w.giftPurchaseConfirmation,
        k = (null == S ? void 0 : S.type) === i.Z.NAMEPLATE,
        [C, N] = r.useState(!1),
        M = r.useMemo(() => {
            var e, t;
            return k && (null == S ? void 0 : S.assetId) != null
                ? {
                      src: S.assetId,
                      palette: (0, h.t1)(null != (t = S.palette) ? t : "sky"),
                      imgAlt: null == (e = S.a11yLabel) ? void 0 : e.call(S),
                  }
                : null;
        }, [k, S]);
    return null == n || null == T
        ? null
        : (0, l.jsx)(j.O3, {
              children: (0, l.jsx)(o.mzw, {
                  align: p.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, l.jsxs)("div", {
                      className: b.promotionalFooter,
                      children: [
                          k && null != M
                              ? (0, l.jsx)("div", {
                                    className: b.nameplatePreviewContainer,
                                    onMouseEnter: () => N(!0),
                                    onMouseLeave: () => N(!1),
                                    children: (0, l.jsx)(f.R, {
                                        user: x,
                                        nameplate: null,
                                        nameplateData: M,
                                        showPlaceholderUser: !0,
                                        nameplatePreviewSize: "xsmall",
                                        isHighlighted: C,
                                    }),
                                })
                              : (0, l.jsx)(o.Xo$, {
                                    "aria-label": null == x ? void 0 : x.username,
                                    size: E,
                                    src: null == x ? void 0 : x.getAvatarURL(void 0, (0, o.dcp)(E), !P),
                                    avatarDecoration: I,
                                }),
                          (0, l.jsx)(s.zxk, {
                              variant: "primary",
                              text: T.collectRewardButtonText(),
                              onClick: () => {
                                  t(),
                                      (0, m.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: O,
                                          purchaseType: y.o8.PROMOTIONAL,
                                      });
                              },
                          }),
                      ],
                  }),
              }),
          });
}
