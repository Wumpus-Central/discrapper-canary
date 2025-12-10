n.d(t, { Z: () => A }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    s = n(442837),
    a = n(199849),
    c = n(28664),
    u = n(481060),
    d = n(782568),
    g = n(607070),
    f = n(594174),
    p = n(451478),
    m = n(626135),
    h = n(63063),
    C = n(74538),
    _ = n(381585),
    b = n(597688),
    v = n(653126),
    E = n(786040),
    S = n(401975),
    O = n(328626),
    x = n(849275),
    y = n(619899),
    j = n(811847),
    k = n(215023),
    T = n(981631),
    I = n(388032),
    L = n(219588),
    B = n(310582);
let A = (e) => {
    var t;
    let {
            isLoading: n,
            title: i,
            sortedSkuIds: A,
            numVisibleItems: N,
            prioritizeUserDiscounts: P,
            tab: R,
            buttonContainerClassName: Z,
            orbsSupportedOnly: w,
        } = e,
        H = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        D = C.ZP.canUseCollectibles(H),
        M = (0, j.B)("FeedBlock"),
        {
            sortType: F,
            setSortType: W,
            sortedItems: U,
            sortOptions: V,
            shuffleProducts: z,
            showRecommendationOption: G,
        } = (0, x.Z)({
            sortedSkuIds: A,
            isPremiumUser: D,
            prioritizeUserDiscounts: P,
            orbsSupportedOnly: w,
        }),
        K = (0, y.St)(U),
        Y = (0, s.e7)([g.Z], () => g.Z.useReducedMotion),
        q = (0, s.e7)([p.Z], () => p.Z.isFocused()),
        Q = !Y && q,
        { animationPhase: X, startAnimation: J } = (0, O.y)(),
        $ = (0, _.sp)(),
        ee = null != (t = null == $ ? void 0 : $.sessionId) ? t : "",
        et = l.useRef(null),
        en = l.useCallback(
            (e) => {
                J({
                    isShuffling: !1,
                    onOutroComplete: () => W(e),
                }),
                    m.default.track(T.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: ee,
                        sort_type: e,
                    });
            },
            [J, W, ee],
        );
    return null == H
        ? null
        : (0, r.jsxs)("div", {
              className: o()(B.popularPicksSection, B.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: B.blockHeader,
                      children: [
                          (0, r.jsxs)("div", {
                              className: B.headerLeft,
                              children: [
                                  (0, r.jsx)(u.Heading, {
                                      variant: "heading-lg/semibold",
                                      children: i,
                                  }),
                                  G &&
                                      (0, r.jsx)(c.u, {
                                          text: I.intl.string(I.t["3taPdj"]),
                                          position: "top",
                                          "aria-label": I.intl.string(I.t["3taPdj"]),
                                          children: (0, r.jsx)(u.P3F, {
                                              onClick: () =>
                                                  (0, d.Z)(h.Z.getArticleURL(T.BhN.DATA_USED_FOR_RECOMMENDED)),
                                              className: B.informationIcon,
                                              children: (0, r.jsx)(u.d3s, { size: "sm" }),
                                          }),
                                      }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: o()(B.headerRight, { [L.customCursors]: M }),
                              children: [
                                  (0, r.jsx)(u.Text, {
                                      variant: "text-md/medium",
                                      children: I.intl.string(I.t.uaX705),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: Z,
                                      children: (0, r.jsx)(a.B6, {
                                          options: V,
                                          select: en,
                                          className: B.sortSelect,
                                          popoutClassName: o()({ [L.customCursors]: M }),
                                          isSelected: (e) => e === F,
                                          serialize: (e) => e,
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: Z,
                                      children: (0, r.jsx)(u.Button, {
                                          variant: "secondary",
                                          text: I.intl.string(I.t.X3tnc4),
                                          buttonRef: et,
                                          onClick: () => {
                                              J({
                                                  isShuffling: !0,
                                                  onOutroComplete: z,
                                                  returnRef: et,
                                              }),
                                                  m.default.track(T.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                      page_session_id: ee,
                                                  });
                                          },
                                          disabled: X !== O.g.MOUNTED && X !== O.g.FINISHED,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: B.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, {
                                children: [...Array(12)].map((e, t) => (0, r.jsx)(S.Z, {}, t + 1)),
                            })
                          : K.slice(0, N).map((e, t) => {
                                let n,
                                    l = b.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (Q)
                                    if (X === O.g.SHUFFLE_OUT)
                                        return (0, r.jsx)(
                                            "div",
                                            {
                                                className: B.shuffleOutro,
                                                children: (0, r.jsx)(S.Z, { skipPulseAnimation: !0 }),
                                            },
                                            "".concat(e.skuId, "-").concat(t),
                                        );
                                    else
                                        X === O.g.SORT_OUT
                                            ? (n = B.sortChangedOutro)
                                            : X === O.g.SHUFFLE_IN
                                              ? (n = B.shuffleIntro)
                                              : X === O.g.SORT_IN && (n = B.sortChangedIntro);
                                return (0, r.jsx)(
                                    _.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children: (0, r.jsx)("div", {
                                            className: n,
                                            children: (0, r.jsx)(v.Z, {
                                                skuId: e.skuId,
                                                prioritizedCurrency: R === k.AW.ORBS ? E.tA.ORBS : void 0,
                                                onClickAnalytics: (0, E.wO)(e, R, $),
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
