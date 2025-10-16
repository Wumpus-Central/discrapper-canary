n.d(t, { Z: () => P }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    o = n(442837),
    a = n(28664),
    c = n(481060),
    u = n(782568),
    d = n(607070),
    g = n(594174),
    f = n(451478),
    p = n(626135),
    C = n(63063),
    h = n(74538),
    _ = n(381585),
    m = n(597688),
    b = n(128922),
    E = n(38900),
    v = n(709999),
    x = n(653126),
    O = n(786040),
    S = n(401975),
    y = n(328626),
    k = n(849275),
    T = n(619899),
    j = n(642909),
    L = n(215023),
    I = n(981631),
    B = n(388032),
    A = n(345213),
    N = n(310582);
let P = (e) => {
    var t;
    let {
            isLoading: n,
            title: i,
            sortedSkuIds: P,
            numVisibleItems: R,
            prioritizeUserDiscounts: Z,
            tab: w,
            buttonContainerClassName: H,
            orbsSupportedOnly: M,
        } = e,
        D = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        F = h.ZP.canUseCollectibles(D),
        W = (0, j.G)("FeedBlock"),
        {
            sortType: U,
            setSortType: V,
            sortedItems: z,
            sortOptions: G,
            shuffleProducts: K,
            showRecommendationOption: Y,
        } = (0, k.Z)({
            sortedSkuIds: P,
            isPremiumUser: F,
            prioritizeUserDiscounts: Z,
            orbsSupportedOnly: M,
        }),
        q = (0, T.St)(z),
        Q = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        J = (0, o.e7)([f.Z], () => f.Z.isFocused()),
        X = !Q && J,
        { animationPhase: $, startAnimation: ee } = (0, y.y)(),
        et = (0, _.sp)(),
        en = null != (t = null == et ? void 0 : et.sessionId) ? t : "",
        er = l.useRef(null),
        el = l.useCallback(
            (e) => {
                ee({
                    isShuffling: !1,
                    onOutroComplete: () => V(e),
                }),
                    p.default.track(I.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: en,
                        sort_type: e,
                    });
            },
            [ee, V, en],
        ),
        ei = b.Z.useConfig({ location: "FeedBlock" }).showCardsV2;
    return null == D
        ? null
        : (0, r.jsxs)("div", {
              className: s()(N.popularPicksSection, N.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: N.blockHeader,
                      children: [
                          (0, r.jsxs)("div", {
                              className: N.headerLeft,
                              children: [
                                  (0, r.jsx)(c.Heading, {
                                      variant: "heading-lg/semibold",
                                      children: i,
                                  }),
                                  Y &&
                                      (0, r.jsx)(a.u, {
                                          text: B.intl.string(B.t["3taPdn"]),
                                          position: "top",
                                          "aria-label": B.intl.string(B.t["3taPdn"]),
                                          children: (0, r.jsx)(c.P3F, {
                                              onClick: () =>
                                                  (0, u.Z)(C.Z.getArticleURL(I.BhN.DATA_USED_FOR_RECOMMENDED)),
                                              className: N.informationIcon,
                                              children: (0, r.jsx)(c.d3s, { size: "sm" }),
                                          }),
                                      }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: s()(N.headerRight, { [A.shopTakeOver]: W }),
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-md/medium",
                                      children: B.intl.string(B.t.uaX709),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: H,
                                      children: (0, r.jsx)(c.PhF, {
                                          options: G,
                                          select: el,
                                          className: N.sortSelect,
                                          popoutClassName: s()({ [A.shopTakeOver]: W }),
                                          isSelected: (e) => e === U,
                                          serialize: (e) => e,
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: H,
                                      children: (0, r.jsx)(c.Button, {
                                          variant: "secondary",
                                          text: B.intl.string(B.t.X3tnc3),
                                          buttonRef: er,
                                          onClick: () => {
                                              ee({
                                                  isShuffling: !0,
                                                  onOutroComplete: K,
                                                  returnRef: er,
                                              }),
                                                  p.default.track(I.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
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
                      className: N.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, {
                                children: [...Array(12)].map((e, t) =>
                                    ei ? (0, r.jsx)(S.Z, {}, t + 1) : (0, r.jsx)(E.K, {}, t + 1),
                                ),
                            })
                          : q.slice(0, R).map((e, t) => {
                                let n,
                                    l = m.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (X)
                                    if ($ === y.g.SHUFFLE_OUT)
                                        return ei
                                            ? (0, r.jsx)(
                                                  "div",
                                                  {
                                                      className: N.shuffleOutro,
                                                      children: (0, r.jsx)(S.Z, { skipPulseAnimation: !0 }),
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
                                        $ === y.g.SORT_OUT
                                            ? (n = N.sortChangedOutro)
                                            : $ === y.g.SHUFFLE_IN
                                              ? (n = N.shuffleIntro)
                                              : $ === y.g.SORT_IN && (n = N.sortChangedIntro);
                                return (0, r.jsx)(
                                    _.k0,
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
                                                          prioritizedCurrency: w === L.AW.ORBS ? O.tA.ORBS : void 0,
                                                          onClickAnalytics: (0, O.wO)(e, w, et),
                                                      }),
                                                  })
                                                : (0, r.jsx)(v.Z, {
                                                      product: e,
                                                      category: l,
                                                      user: D,
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
