n.d(t, { Z: () => y });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(104505),
    f = n(527685),
    g = n(335131),
    p = n(597688),
    m = n(1870),
    h = n(834943),
    C = n(832149),
    _ = n(911390),
    b = n(388032),
    v = n(213301),
    x = n(290181),
    E = n(250967),
    O = n(182975),
    S = n(655603);
let y = l.memo(function (e) {
    let { category: t, rewardSkuId: n } = e,
        { hasPromoUpsell: i } = h.Z.useConfig({ location: "RewardProductCard" }),
        y = l.useRef(null),
        { isHoveringOrFocusing: j } = (0, d.Z)(y),
        { readyToClaim: k, collectibleProductSkuIds: I, collectedSkuIds: T } = (0, _.q)(t, n),
        L = !(i || k),
        B = (0, s.e7)([m.Z], () => m.Z.isClaiming === n);
    return L
        ? null
        : (0, r.jsx)("div", {
              ref: y,
              className: a()(v.productCardContainer, x.defaultCursor, { [v.hovered]: j }),
              "aria-label": b.intl.formatToPlainString(b.t.Ez6aHE, { category: t.name }),
              children: (0, r.jsxs)("div", {
                  className: v.productCardContentContainer,
                  children: [
                      (0, r.jsx)("img", {
                          alt: "Reward Bow",
                          src: S.Z,
                          className: x.rewardImage,
                      }),
                      (0, r.jsx)("div", {
                          className: v.headerContainer,
                          children: (0, r.jsx)(u.IGR, {
                              text: b.intl.string(b.t.rykAJ9),
                              disableColor: !0,
                              className: x.unlockRewardBadge,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: v.footerContainer,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: x.footerInfoContainer,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: x.footerInfo,
                                          children: [
                                              (0, r.jsx)(u.Heading, {
                                                  variant: "heading-md/medium",
                                                  color: "text-primary",
                                                  lineClamp: 1,
                                                  className: v.productName,
                                                  children: b.intl.string(b.t["0mDmg/"]),
                                              }),
                                              (0, r.jsx)(c.u, {
                                                  text: k
                                                      ? b.intl.string(b.t.cKH3tk)
                                                      : b.intl.formatToPlainString(b.t["8aMDPc"], {
                                                            totalCount: I.length,
                                                        }),
                                                  align: "right",
                                                  caretConfig: {
                                                      position: "bottom",
                                                      align: "end",
                                                  },
                                                  position: "top",
                                                  children: (0, r.jsx)("span", {
                                                      className: x.questionIconContainer,
                                                      children: (0, r.jsx)(o.idN, { size: "xs" }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)("div", {
                                          className: v.footerInfoShrinkOnHover,
                                          children: (0, r.jsxs)("div", {
                                              className: x.progressContainer,
                                              children: [
                                                  (0, r.jsx)(f.Z, {
                                                      variant: f.y.BLUE,
                                                      progress: T.length,
                                                      maximum: I.length,
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: a()(x.progressTextContainer, {
                                                          [x.readyToClaimText]: k,
                                                      }),
                                                      children: [
                                                          k
                                                              ? (0, r.jsx)(o.kmB, {
                                                                    size: "xs",
                                                                    color: "currentColor",
                                                                })
                                                              : null,
                                                          (0, r.jsx)(o.xvT, {
                                                              variant: "text-xs/medium",
                                                              color: "currentColor",
                                                              children: b.intl.formatToPlainString(b.t["5TwASM"], {
                                                                  collectedCount: T.length,
                                                                  totalCount: I.length,
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: v.footerButtonContainer,
                                  children: (0, r.jsx)(o.hE2, {
                                      wrap: !1,
                                      className: v.footerButtonGroup,
                                      fullWidth: !0,
                                      children: (0, r.jsx)(o.zxk, {
                                          variant: "primary",
                                          onClick: (e) => {
                                              e.stopPropagation(),
                                                  k &&
                                                      (0, g.wW)(t.skuId, n)
                                                          .then(() => {
                                                              let e = p.Z.getProduct(n);
                                                              null != e &&
                                                                  (0, C.Z)({
                                                                      product: e,
                                                                      analyticsLocations: [],
                                                                      overrideGraphic: {
                                                                          type: "video",
                                                                          src: O.Z,
                                                                          fallbackImageSrc: E.Z,
                                                                          loop: !0,
                                                                          loopAt: 6,
                                                                          aspectRatio: "16/9",
                                                                      },
                                                                  });
                                                          })
                                                          .catch(() => {
                                                              (0, u.ZDy)(() =>
                                                                  Promise.resolve((e) =>
                                                                      (0, r.jsx)(o.Modal, {
                                                                          transitionState: e.transitionState,
                                                                          onClose: e.onClose,
                                                                          size: "sm",
                                                                          title: b.intl.string(b.t.SRTlyA),
                                                                          actions: [
                                                                              {
                                                                                  text: b.intl.string(b.t.TyCVIq),
                                                                                  onClick: e.onClose,
                                                                                  variant: "primary",
                                                                              },
                                                                          ],
                                                                          children: (0, r.jsx)("div", {
                                                                              children: b.intl.string(b.t["0YpIF/"]),
                                                                          }),
                                                                      }),
                                                                  ),
                                                              );
                                                          });
                                          },
                                          text: b.intl.string(b.t.VnVTNc),
                                          fullWidth: !0,
                                          disabled: !k,
                                          loading: B,
                                      }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
