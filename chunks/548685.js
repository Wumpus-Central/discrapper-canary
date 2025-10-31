n.d(t, { Z: () => N }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(28664),
    c = n(481060),
    u = n(782568),
    d = n(607070),
    p = n(594174),
    g = n(451478),
    f = n(626135),
    h = n(63063),
    C = n(74538),
    m = n(381585),
    _ = n(597688),
    b = n(128922),
    v = n(38900),
    E = n(709999),
    x = n(653126),
    O = n(786040),
    S = n(401975),
    y = n(328626),
    j = n(849275),
    k = n(619899),
    I = n(811847),
    T = n(215023),
    L = n(981631),
    B = n(388032),
    P = n(219588),
    A = n(310582);
let N = (e) => {
    var t;
    let {
            isLoading: n,
            title: i,
            sortedSkuIds: N,
            numVisibleItems: Z,
            prioritizeUserDiscounts: R,
            tab: w,
            buttonContainerClassName: H,
            orbsSupportedOnly: D,
        } = e,
        M = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
        F = C.ZP.canUseCollectibles(M),
        W = (0, I.B)("FeedBlock"),
        {
            sortType: V,
            setSortType: U,
            sortedItems: z,
            sortOptions: G,
            shuffleProducts: K,
            showRecommendationOption: Y,
        } = (0, j.Z)({
            sortedSkuIds: N,
            isPremiumUser: F,
            prioritizeUserDiscounts: R,
            orbsSupportedOnly: D,
        }),
        q = (0, k.St)(z),
        J = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        Q = (0, a.e7)([g.Z], () => g.Z.isFocused()),
        X = !J && Q,
        { animationPhase: $, startAnimation: ee } = (0, y.y)(),
        et = (0, m.sp)(),
        en = null != (t = null == et ? void 0 : et.sessionId) ? t : "",
        er = l.useRef(null),
        el = l.useCallback(
            (e) => {
                ee({
                    isShuffling: !1,
                    onOutroComplete: () => U(e),
                }),
                    f.default.track(L.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: en,
                        sort_type: e,
                    });
            },
            [ee, U, en],
        ),
        ei = b.Z.useConfig({ location: "FeedBlock" }).showCardsV2;
    return null == M
        ? null
        : (0, r.jsxs)("div", {
              className: s()(A.popularPicksSection, A.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: A.blockHeader,
                      children: [
                          (0, r.jsxs)("div", {
                              className: A.headerLeft,
                              children: [
                                  (0, r.jsx)(c.Heading, {
                                      variant: "heading-lg/semibold",
                                      children: i,
                                  }),
                                  Y &&
                                      (0, r.jsx)(o.u, {
                                          text: B.intl.string(B.t["3taPdj"]),
                                          position: "top",
                                          "aria-label": B.intl.string(B.t["3taPdj"]),
                                          children: (0, r.jsx)(c.P3F, {
                                              onClick: () =>
                                                  (0, u.Z)(h.Z.getArticleURL(L.BhN.DATA_USED_FOR_RECOMMENDED)),
                                              className: A.informationIcon,
                                              children: (0, r.jsx)(c.d3s, { size: "sm" }),
                                          }),
                                      }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: s()(A.headerRight, { [P.customCursors]: W }),
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-md/medium",
                                      children: B.intl.string(B.t.uaX705),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: H,
                                      children: (0, r.jsx)(c.PhF, {
                                          options: G,
                                          select: el,
                                          className: A.sortSelect,
                                          popoutClassName: s()({ [P.customCursors]: W }),
                                          isSelected: (e) => e === V,
                                          serialize: (e) => e,
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: H,
                                      children: (0, r.jsx)(c.Button, {
                                          variant: "secondary",
                                          text: B.intl.string(B.t.X3tnc4),
                                          buttonRef: er,
                                          onClick: () => {
                                              ee({
                                                  isShuffling: !0,
                                                  onOutroComplete: K,
                                                  returnRef: er,
                                              }),
                                                  f.default.track(L.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                      page_session_id: en,
                                                  });
                                          },
                                          disabled: $ !== y.g.MOUNTED && $ !== y.g.FINISHED,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: A.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, {
                                children: [...Array(12)].map((e, t) =>
                                    ei ? (0, r.jsx)(S.Z, {}, t + 1) : (0, r.jsx)(v.K, {}, t + 1),
                                ),
                            })
                          : q.slice(0, Z).map((e, t) => {
                                let n,
                                    l = _.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (X)
                                    if ($ === y.g.SHUFFLE_OUT)
                                        return ei
                                            ? (0, r.jsx)(
                                                  "div",
                                                  {
                                                      className: A.shuffleOutro,
                                                      children: (0, r.jsx)(S.Z, { skipPulseAnimation: !0 }),
                                                  },
                                                  "".concat(e.skuId, "-").concat(t),
                                              )
                                            : (0, r.jsx)(
                                                  "div",
                                                  {
                                                      className: A.shuffleOutro,
                                                      children: (0, r.jsx)("div", { className: A.placeholderCard }),
                                                  },
                                                  "".concat(e.skuId, "-").concat(t),
                                              );
                                    else
                                        $ === y.g.SORT_OUT
                                            ? (n = A.sortChangedOutro)
                                            : $ === y.g.SHUFFLE_IN
                                              ? (n = A.shuffleIntro)
                                              : $ === y.g.SORT_IN && (n = A.sortChangedIntro);
                                return (0, r.jsx)(
                                    m.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children:
                                            ei && (null == e ? void 0 : e.skuId) != null
                                                ? (0, r.jsx)("div", {
                                                      className: n,
                                                      children: (0, r.jsx)(x.Z, {
                                                          skuId: null == e ? void 0 : e.skuId,
                                                          prioritizedCurrency: w === T.AW.ORBS ? O.tA.ORBS : void 0,
                                                          onClickAnalytics: (0, O.wO)(e, w, et),
                                                      }),
                                                  })
                                                : (0, r.jsx)(E.Z, {
                                                      product: e,
                                                      category: l,
                                                      user: M,
                                                      tab: w,
                                                      className: n,
                                                  }),
                                    },
                                    null == e ? void 0 : e.skuId,
                                );
                            }),
                  }),
              ],
          });
};
