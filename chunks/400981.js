n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(979554),
    a = n(442837),
    s = n(159691),
    o = n(481060),
    u = n(607070),
    c = n(906732),
    d = n(821982),
    p = n(583434),
    m = n(832149),
    h = n(600164),
    f = n(4242),
    g = n(566697),
    y = n(347896),
    j = n(594174),
    v = n(614277),
    b = n(215023),
    O = n(350928);
function S(e) {
    let { reward: t, purchase: n, onClose: S } = e,
        x = (0, a.e7)([j.default], () => j.default.getCurrentUser()),
        P = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        { analyticsLocations: E } = (0, c.ZP)(),
        w = o.EFr.SIZE_32,
        I = (0, d.Z)(t.assetId, w, !P),
        T = (0, y.Z)(),
        k = null == T ? void 0 : T.giftPurchaseConfirmation,
        { product: C, isFetching: N } = (0, p.T)(n.skuId),
        M = t.type === i.Z.NAMEPLATE,
        [_, A] = l.useState(!1),
        R = l.useMemo(() => {
            var e, n;
            return M && null != t.assetId
                ? {
                      src: t.assetId,
                      palette: (0, f.t1)(null != (n = t.palette) ? n : "sky"),
                      imgAlt: null == (e = t.a11yLabel) ? void 0 : e.call(t),
                  }
                : null;
        }, [M, t]);
    return null == k
        ? null
        : (0, r.jsx)(v.O3, {
              children: (0, r.jsx)(o.mzw, {
                  align: h.Z.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)("div", {
                      className: O.promotionalFooter,
                      children: [
                          M && null != R
                              ? (0, r.jsx)("div", {
                                    className: O.nameplatePreviewContainer,
                                    onMouseEnter: () => A(!0),
                                    onMouseLeave: () => A(!1),
                                    children: (0, r.jsx)(g.R, {
                                        user: x,
                                        nameplate: null,
                                        nameplateData: R,
                                        showPlaceholderUser: !0,
                                        nameplatePreviewSize: "xsmall",
                                        isHighlighted: _,
                                    }),
                                })
                              : (0, r.jsx)(o.Xo$, {
                                    "aria-label": null == x ? void 0 : x.username,
                                    size: w,
                                    src: null == x ? void 0 : x.getAvatarURL(void 0, (0, o.dcp)(w), !P),
                                    avatarDecoration: I,
                                }),
                          (0, r.jsx)(s.zxk, {
                              variant: "primary",
                              text: k.collectRewardButtonText(),
                              loading: N,
                              onClick: () => {
                                  null != C &&
                                      (S(),
                                      (0, m.Z)({
                                          product: C,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: E,
                                          purchaseType: b.o8.PROMOTIONAL,
                                      }));
                              },
                          }),
                      ],
                  }),
              }),
          });
}
