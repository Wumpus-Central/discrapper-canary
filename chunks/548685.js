n.d(t, { Z: () => B }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    i = n(199849),
    c = n(28664),
    u = n(481060),
    d = n(782568),
    f = n(607070),
    g = n(594174),
    b = n(451478),
    p = n(626135),
    m = n(63063),
    h = n(74538),
    C = n(381585),
    E = n(597688),
    v = n(653126),
    S = n(786040),
    _ = n(401975),
    x = n(328626),
    O = n(849275),
    y = n(619899),
    k = n(811847),
    T = n(215023),
    j = n(981631),
    L = n(388032),
    I = n(868090),
    A = n(222194);
let B = (e) => {
    var t;
    let {
            isLoading: n,
            title: a,
            sortedSkuIds: B,
            numVisibleItems: N,
            prioritizeUserDiscounts: R,
            tab: P,
            buttonContainerClassName: w,
            orbsSupportedOnly: Z,
        } = e,
        D = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        H = h.ZP.canUseCollectibles(D),
        M = (0, k.B)("FeedBlock"),
        {
            sortType: F,
            setSortType: W,
            sortedItems: U,
            sortOptions: z,
            shuffleProducts: V,
            showRecommendationOption: G,
        } = (0, O.Z)({
            sortedSkuIds: B,
            isPremiumUser: H,
            prioritizeUserDiscounts: R,
            orbsSupportedOnly: Z,
        }),
        K = (0, y.St)(U),
        Y = (0, o.e7)([f.Z], () => f.Z.useReducedMotion),
        q = (0, o.e7)([b.Z], () => b.Z.isFocused()),
        Q = !Y && q,
        { animationPhase: J, startAnimation: X } = (0, x.y)(),
        $ = (0, C.sp)(),
        ee = null != (t = null == $ ? void 0 : $.sessionId) ? t : "",
        et = l.useRef(null),
        en = l.useCallback(
            (e) => {
                X({
                    isShuffling: !1,
                    onOutroComplete: () => W(e),
                }),
                    p.default.track(j.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: ee,
                        sort_type: e,
                    });
            },
            [X, W, ee],
        );
    return null == D
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
                                  (0, r.jsx)(u.Heading, {
                                      variant: "heading-lg/semibold",
                                      children: a,
                                  }),
                                  G &&
                                      (0, r.jsx)(c.u, {
                                          text: L.intl.string(L.t["3taPdj"]),
                                          position: "top",
                                          "aria-label": L.intl.string(L.t["3taPdj"]),
                                          children: (0, r.jsx)(u.P3F, {
                                              onClick: () =>
                                                  (0, d.Z)(m.Z.getArticleURL(j.BhN.DATA_USED_FOR_RECOMMENDED)),
                                              className: A.informationIcon,
                                              children: (0, r.jsx)(u.d3s, { size: "sm" }),
                                          }),
                                      }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: s()(A.headerRight, { [I.customCursors]: M }),
                              children: [
                                  (0, r.jsx)(u.Text, {
                                      variant: "text-md/medium",
                                      children: L.intl.string(L.t.uaX705),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: w,
                                      children: (0, r.jsx)(i.B6, {
                                          options: z,
                                          select: en,
                                          className: A.sortSelect,
                                          popoutClassName: s()({ [I.customCursors]: M }),
                                          isSelected: (e) => e === F,
                                          serialize: (e) => e,
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: w,
                                      children: (0, r.jsx)(u.Button, {
                                          variant: "secondary",
                                          text: L.intl.string(L.t.X3tnc4),
                                          buttonRef: et,
                                          onClick: () => {
                                              X({
                                                  isShuffling: !0,
                                                  onOutroComplete: V,
                                                  returnRef: et,
                                              }),
                                                  p.default.track(j.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                      page_session_id: ee,
                                                  });
                                          },
                                          disabled: J !== x.g.MOUNTED && J !== x.g.FINISHED,
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
                                children: [...Array(12)].map((e, t) => (0, r.jsx)(_.Z, {}, t + 1)),
                            })
                          : K.slice(0, N).map((e, t) => {
                                let n,
                                    l = E.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (Q)
                                    if (J === x.g.SHUFFLE_OUT)
                                        return (0, r.jsx)(
                                            "div",
                                            {
                                                className: A.shuffleOutro,
                                                children: (0, r.jsx)(_.Z, { skipPulseAnimation: !0 }),
                                            },
                                            "".concat(e.skuId, "-").concat(t),
                                        );
                                    else
                                        J === x.g.SORT_OUT
                                            ? (n = A.sortChangedOutro)
                                            : J === x.g.SHUFFLE_IN
                                              ? (n = A.shuffleIntro)
                                              : J === x.g.SORT_IN && (n = A.sortChangedIntro);
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
                                            children: (0, r.jsx)(v.Z, {
                                                skuId: e.skuId,
                                                prioritizedCurrency: P === T.AW.ORBS ? S.tA.ORBS : void 0,
                                                onClickAnalytics: (0, S.wO)(e, P, $),
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
