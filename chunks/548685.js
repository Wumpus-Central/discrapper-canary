n.d(t, { Z: () => R }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(685816),
    a = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(782568),
    g = n(607070),
    p = n(594174),
    f = n(451478),
    C = n(626135),
    h = n(63063),
    _ = n(74538),
    m = n(381585),
    b = n(597688),
    v = n(128922),
    E = n(38900),
    x = n(709999),
    O = n(653126),
    S = n(786040),
    y = n(401975),
    j = n(328626),
    k = n(849275),
    T = n(619899),
    L = n(642909),
    I = n(215023),
    B = n(981631),
    A = n(388032),
    P = n(345213),
    N = n(310582);
let R = (e) => {
    var t;
    let {
            isLoading: n,
            title: i,
            sortedSkuIds: R,
            numVisibleItems: Z,
            prioritizeUserDiscounts: w,
            tab: H,
            buttonContainerClassName: M,
            orbsSupportedOnly: D,
        } = e,
        F = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
        W = _.ZP.canUseCollectibles(F),
        V = (0, L.G)("FeedBlock"),
        {
            sortType: U,
            setSortType: z,
            sortedItems: G,
            sortOptions: K,
            shuffleProducts: Y,
            showRecommendationOption: q,
        } = (0, k.Z)({
            sortedSkuIds: R,
            isPremiumUser: W,
            prioritizeUserDiscounts: w,
            orbsSupportedOnly: D,
        }),
        J = (0, T.St)(G),
        Q = (0, a.e7)([g.Z], () => g.Z.useReducedMotion),
        X = (0, a.e7)([f.Z], () => f.Z.isFocused()),
        $ = !Q && X,
        { animationPhase: ee, startAnimation: et } = (0, j.y)(),
        en = (0, m.sp)(),
        er = null != (t = null == en ? void 0 : en.sessionId) ? t : "",
        el = l.useRef(null),
        ei = l.useCallback(
            (e) => {
                et({
                    isShuffling: !1,
                    onOutroComplete: () => z(e),
                }),
                    C.default.track(B.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: er,
                        sort_type: e,
                    });
            },
            [et, z, er],
        ),
        eo = v.Z.useConfig({ location: "FeedBlock" }).showCardsV2;
    return null == F
        ? null
        : (0, r.jsxs)("div", {
              className: o()(N.popularPicksSection, N.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: N.blockHeader,
                      children: [
                          (0, r.jsxs)("div", {
                              className: N.headerLeft,
                              children: [
                                  (0, r.jsx)(u.Heading, {
                                      variant: "heading-lg/semibold",
                                      children: i,
                                  }),
                                  q &&
                                      (0, r.jsx)(c.u, {
                                          text: A.intl.string(A.t["3taPdj"]),
                                          position: "top",
                                          "aria-label": A.intl.string(A.t["3taPdj"]),
                                          children: (0, r.jsx)(u.P3F, {
                                              onClick: () =>
                                                  (0, d.Z)(h.Z.getArticleURL(B.BhN.DATA_USED_FOR_RECOMMENDED)),
                                              className: N.informationIcon,
                                              children: (0, r.jsx)(u.d3s, { size: "sm" }),
                                          }),
                                      }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: o()(N.headerRight, { [P.shopTakeOver]: V }),
                              children: [
                                  (0, r.jsx)(u.Text, {
                                      variant: "text-md/medium",
                                      children: A.intl.string(A.t.uaX705),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: M,
                                      children: (0, r.jsx)(u.PhF, {
                                          options: K,
                                          select: ei,
                                          className: N.sortSelect,
                                          popoutClassName: o()({ [P.shopTakeOver]: V }),
                                          isSelected: (e) => e === U,
                                          serialize: (e) => e,
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: M,
                                      children: (0, r.jsx)(u.Button, {
                                          variant: "secondary",
                                          text: A.intl.string(A.t.X3tnc4),
                                          buttonRef: el,
                                          onClick: () => {
                                              et({
                                                  isShuffling: !0,
                                                  onOutroComplete: Y,
                                                  returnRef: el,
                                              }),
                                                  C.default.track(B.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                      page_session_id: er,
                                                  });
                                          },
                                          disabled: ee !== j.g.MOUNTED && ee !== j.g.FINISHED,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: N.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, {
                                children: [...Array(12)].map((e, t) =>
                                    eo ? (0, r.jsx)(y.Z, {}, t + 1) : (0, r.jsx)(E.K, {}, t + 1),
                                ),
                            })
                          : J.slice(0, Z).map((e, t) => {
                                let n,
                                    l = b.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if ($)
                                    if (ee === j.g.SHUFFLE_OUT)
                                        return eo
                                            ? (0, r.jsx)(
                                                  "div",
                                                  {
                                                      className: N.shuffleOutro,
                                                      children: (0, r.jsx)(y.Z, { skipPulseAnimation: !0 }),
                                                  },
                                                  "".concat(e.skuId, "-").concat(t),
                                              )
                                            : (0, r.jsx)(
                                                  "div",
                                                  {
                                                      className: N.shuffleOutro,
                                                      children: (0, r.jsx)("div", { className: N.placeholderCard }),
                                                  },
                                                  "".concat(e.skuId, "-").concat(t),
                                              );
                                    else
                                        ee === j.g.SORT_OUT
                                            ? (n = N.sortChangedOutro)
                                            : ee === j.g.SHUFFLE_IN
                                              ? (n = N.shuffleIntro)
                                              : ee === j.g.SORT_IN && (n = N.sortChangedIntro);
                                return (0, r.jsx)(
                                    m.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children:
                                            eo && (null == e ? void 0 : e.skuId) != null
                                                ? (0, r.jsx)("div", {
                                                      className: n,
                                                      children: (0, r.jsx)(O.Z, {
                                                          skuId: null == e ? void 0 : e.skuId,
                                                          prioritizedCurrency: H === I.AW.ORBS ? S.tA.ORBS : void 0,
                                                          onClickAnalytics: (0, S.wO)(e, H, en),
                                                      }),
                                                  })
                                                : (0, r.jsx)(x.Z, {
                                                      product: e,
                                                      category: l,
                                                      user: F,
                                                      tab: H,
                                                      className: n,
                                                      shopBlockType: s.z.FEED,
                                                  }),
                                    },
                                    null == e ? void 0 : e.skuId,
                                );
                            }),
                  }),
              ],
          });
};
