n.d(t, { Z: () => P }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
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
    b = n(653126),
    v = n(786040),
    x = n(401975),
    E = n(328626),
    O = n(849275),
    S = n(619899),
    y = n(811847),
    j = n(215023),
    I = n(981631),
    k = n(388032),
    T = n(219588),
    L = n(310582);
let P = (e) => {
    var t;
    let {
            isLoading: n,
            title: i,
            sortedSkuIds: P,
            numVisibleItems: B,
            prioritizeUserDiscounts: N,
            tab: A,
            buttonContainerClassName: R,
            orbsSupportedOnly: Z,
        } = e,
        w = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
        H = h.ZP.canUseCollectibles(w),
        D = (0, y.B)("FeedBlock"),
        {
            sortType: M,
            setSortType: F,
            sortedItems: W,
            sortOptions: V,
            shuffleProducts: U,
            showRecommendationOption: z,
        } = (0, O.Z)({
            sortedSkuIds: P,
            isPremiumUser: H,
            prioritizeUserDiscounts: N,
            orbsSupportedOnly: Z,
        }),
        G = (0, S.St)(W),
        K = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        Y = (0, a.e7)([g.Z], () => g.Z.isFocused()),
        q = !K && Y,
        { animationPhase: J, startAnimation: Q } = (0, E.y)(),
        X = (0, C.sp)(),
        $ = null != (t = null == X ? void 0 : X.sessionId) ? t : "",
        ee = l.useRef(null),
        et = l.useCallback(
            (e) => {
                Q({
                    isShuffling: !1,
                    onOutroComplete: () => F(e),
                }),
                    p.default.track(I.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: $,
                        sort_type: e,
                    });
            },
            [Q, F, $],
        );
    return null == w
        ? null
        : (0, r.jsxs)("div", {
              className: o()(L.popularPicksSection, L.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: L.blockHeader,
                      children: [
                          (0, r.jsxs)("div", {
                              className: L.headerLeft,
                              children: [
                                  (0, r.jsx)(c.Heading, {
                                      variant: "heading-lg/semibold",
                                      children: i,
                                  }),
                                  z &&
                                      (0, r.jsx)(s.u, {
                                          text: k.intl.string(k.t["3taPdj"]),
                                          position: "top",
                                          "aria-label": k.intl.string(k.t["3taPdj"]),
                                          children: (0, r.jsx)(c.P3F, {
                                              onClick: () =>
                                                  (0, u.Z)(m.Z.getArticleURL(I.BhN.DATA_USED_FOR_RECOMMENDED)),
                                              className: L.informationIcon,
                                              children: (0, r.jsx)(c.d3s, { size: "sm" }),
                                          }),
                                      }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: o()(L.headerRight, { [T.customCursors]: D }),
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-md/medium",
                                      children: k.intl.string(k.t.uaX705),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: R,
                                      children: (0, r.jsx)(c.PhF, {
                                          options: V,
                                          select: et,
                                          className: L.sortSelect,
                                          popoutClassName: o()({ [T.customCursors]: D }),
                                          isSelected: (e) => e === M,
                                          serialize: (e) => e,
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: R,
                                      children: (0, r.jsx)(c.Button, {
                                          variant: "secondary",
                                          text: k.intl.string(k.t.X3tnc4),
                                          buttonRef: ee,
                                          onClick: () => {
                                              Q({
                                                  isShuffling: !0,
                                                  onOutroComplete: U,
                                                  returnRef: ee,
                                              }),
                                                  p.default.track(I.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                      page_session_id: $,
                                                  });
                                          },
                                          disabled: J !== E.g.MOUNTED && J !== E.g.FINISHED,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: L.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, {
                                children: [...Array(12)].map((e, t) => (0, r.jsx)(x.Z, {}, t + 1)),
                            })
                          : G.slice(0, B).map((e, t) => {
                                let n,
                                    l = _.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (q)
                                    if (J === E.g.SHUFFLE_OUT)
                                        return (0, r.jsx)(
                                            "div",
                                            {
                                                className: L.shuffleOutro,
                                                children: (0, r.jsx)(x.Z, { skipPulseAnimation: !0 }),
                                            },
                                            "".concat(e.skuId, "-").concat(t),
                                        );
                                    else
                                        J === E.g.SORT_OUT
                                            ? (n = L.sortChangedOutro)
                                            : J === E.g.SHUFFLE_IN
                                              ? (n = L.shuffleIntro)
                                              : J === E.g.SORT_IN && (n = L.sortChangedIntro);
                                return (0, r.jsx)(
                                    C.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children: (0, r.jsx)("div", {
                                            className: n,
                                            children: (0, r.jsx)(b.Z, {
                                                skuId: e.skuId,
                                                prioritizedCurrency: A === j.AW.ORBS ? v.tA.ORBS : void 0,
                                                onClickAnalytics: (0, v.wO)(e, A, X),
                                            }),
                                        }),
                                    },
                                    e.skuId,
                                );
                            }),
                  }),
              ],
          });
};
