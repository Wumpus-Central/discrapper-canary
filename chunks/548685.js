n.d(t, { Z: () => A }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(28664),
    c = n(481060),
    u = n(782568),
    d = n(607070),
    f = n(594174),
    g = n(451478),
    p = n(626135),
    m = n(63063),
    h = n(74538),
    C = n(381585),
    _ = n(597688),
    b = n(128922),
    v = n(38900),
    x = n(709999),
    E = n(653126),
    O = n(786040),
    S = n(401975),
    y = n(328626),
    j = n(849275),
    k = n(619899),
    I = n(811847),
    T = n(215023),
    L = n(981631),
    P = n(388032),
    B = n(219588),
    N = n(310582);
let A = (e) => {
    var t;
    let {
            isLoading: n,
            title: i,
            sortedSkuIds: A,
            numVisibleItems: R,
            prioritizeUserDiscounts: Z,
            tab: w,
            buttonContainerClassName: D,
            orbsSupportedOnly: H,
        } = e,
        M = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        F = h.ZP.canUseCollectibles(M),
        W = (0, I.B)("FeedBlock"),
        {
            sortType: V,
            setSortType: U,
            sortedItems: z,
            sortOptions: G,
            shuffleProducts: K,
            showRecommendationOption: Y,
        } = (0, j.Z)({
            sortedSkuIds: A,
            isPremiumUser: F,
            prioritizeUserDiscounts: Z,
            orbsSupportedOnly: H,
        }),
        q = (0, k.St)(z),
        J = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        Q = (0, o.e7)([g.Z], () => g.Z.isFocused()),
        X = !J && Q,
        { animationPhase: $, startAnimation: ee } = (0, y.y)(),
        et = (0, C.sp)(),
        en = null != (t = null == et ? void 0 : et.sessionId) ? t : "",
        er = l.useRef(null),
        el = l.useCallback(
            (e) => {
                ee({
                    isShuffling: !1,
                    onOutroComplete: () => U(e),
                }),
                    p.default.track(L.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
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
              className: a()(N.popularPicksSection, N.centeredSection),
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
                                      (0, r.jsx)(s.u, {
                                          text: P.intl.string(P.t["3taPdj"]),
                                          position: "top",
                                          "aria-label": P.intl.string(P.t["3taPdj"]),
                                          children: (0, r.jsx)(c.P3F, {
                                              onClick: () =>
                                                  (0, u.Z)(m.Z.getArticleURL(L.BhN.DATA_USED_FOR_RECOMMENDED)),
                                              className: N.informationIcon,
                                              children: (0, r.jsx)(c.d3s, { size: "sm" }),
                                          }),
                                      }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: a()(N.headerRight, { [B.customCursors]: W }),
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-md/medium",
                                      children: P.intl.string(P.t.uaX705),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: D,
                                      children: (0, r.jsx)(c.PhF, {
                                          options: G,
                                          select: el,
                                          className: N.sortSelect,
                                          popoutClassName: a()({ [B.customCursors]: W }),
                                          isSelected: (e) => e === V,
                                          serialize: (e) => e,
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: D,
                                      children: (0, r.jsx)(c.Button, {
                                          variant: "secondary",
                                          text: P.intl.string(P.t.X3tnc4),
                                          buttonRef: er,
                                          onClick: () => {
                                              ee({
                                                  isShuffling: !0,
                                                  onOutroComplete: K,
                                                  returnRef: er,
                                              }),
                                                  p.default.track(L.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
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
                                    ei ? (0, r.jsx)(S.Z, {}, t + 1) : (0, r.jsx)(v.K, {}, t + 1),
                                ),
                            })
                          : q.slice(0, R).map((e, t) => {
                                let n,
                                    l = _.Z.getCategoryForProduct(e.skuId);
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
                                    C.k0,
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
                                                      children: (0, r.jsx)(E.Z, {
                                                          skuId: null == e ? void 0 : e.skuId,
                                                          prioritizedCurrency: w === T.AW.ORBS ? O.tA.ORBS : void 0,
                                                          onClickAnalytics: (0, O.wO)(e, w, et),
                                                      }),
                                                  })
                                                : (0, r.jsx)(x.Z, {
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
