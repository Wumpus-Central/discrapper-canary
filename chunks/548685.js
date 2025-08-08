n.d(t, { Z: () => P }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(442837),
    s = n(481060),
    c = n(782568),
    u = n(607070),
    d = n(594174),
    p = n(451478),
    g = n(626135),
    f = n(63063),
    b = n(74538),
    h = n(381585),
    m = n(597688),
    _ = n(675997),
    v = n(243126),
    O = n(38900),
    C = n(709999),
    E = n(328626),
    S = n(619899),
    y = n(981631),
    x = n(388032),
    j = n(306414),
    T = n(806734);
let P = (e) => {
    var t;
    let { isLoading: n, title: a, sortedSkuIds: P, numVisibleItems: L, hasSorting: k, tab: I } = e,
        N = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        w = b.ZP.canUseCollectibles(N),
        { enableShopTakeOver: A } = _.Z.useConfig({ location: "FeedBlock" }),
        {
            sortType: B,
            setSortType: R,
            sortedItems: Z,
            sortOptions: D,
            shuffleProducts: F,
            showRecommendationOption: M,
        } = (0, v.N)(P, w),
        H = (0, S.St)(Z),
        W = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        V = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        U = !W && V,
        { animationPhase: z, startAnimation: G } = (0, E.y)(),
        q = (0, h.sp)(),
        K = null != (t = null == q ? void 0 : q.sessionId) ? t : "",
        Y = l.useRef(null),
        X = l.useCallback(
            (e) => {
                G({
                    isShuffling: !1,
                    onOutroComplete: () => R(e),
                }),
                    g.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: K,
                        sort_type: e,
                    });
            },
            [G, R, K],
        );
    return null == N
        ? null
        : (0, r.jsxs)("div", {
              className: i()(T.popularPicksSection, T.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: T.blockHeader,
                      children: [
                          (0, r.jsxs)("div", {
                              className: T.headerLeft,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      variant: "heading-lg/semibold",
                                      children: a,
                                  }),
                                  M &&
                                      (0, r.jsx)(s.ua7, {
                                          text: x.intl.string(x.t["3taPdn"]),
                                          position: "top",
                                          "aria-label": x.intl.string(x.t["3taPdn"]),
                                          children: (e) => {
                                              var t, n;
                                              return (0, r.jsx)(
                                                  s.P3F,
                                                  ((t = (function (e) {
                                                      for (var t = 1; t < arguments.length; t++) {
                                                          var n = null != arguments[t] ? arguments[t] : {},
                                                              r = Object.keys(n);
                                                          "function" == typeof Object.getOwnPropertySymbols &&
                                                              (r = r.concat(
                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                      return Object.getOwnPropertyDescriptor(n, e)
                                                                          .enumerable;
                                                                  }),
                                                              )),
                                                              r.forEach(function (t) {
                                                                  var r;
                                                                  (r = n[t]),
                                                                      t in e
                                                                          ? Object.defineProperty(e, t, {
                                                                                value: r,
                                                                                enumerable: !0,
                                                                                configurable: !0,
                                                                                writable: !0,
                                                                            })
                                                                          : (e[t] = r);
                                                              });
                                                      }
                                                      return e;
                                                  })({}, e)),
                                                  (n = n =
                                                      {
                                                          onClick: () =>
                                                              (0, c.Z)(
                                                                  f.Z.getArticleURL(y.BhN.DATA_USED_FOR_RECOMMENDED),
                                                              ),
                                                          className: T.informationIcon,
                                                          children: (0, r.jsx)(s.d3s, { size: "sm" }),
                                                      }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                      : (function (e, t) {
                                                            var n = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var r = Object.getOwnPropertySymbols(e);
                                                                n.push.apply(n, r);
                                                            }
                                                            return n;
                                                        })(Object(n)).forEach(function (e) {
                                                            Object.defineProperty(
                                                                t,
                                                                e,
                                                                Object.getOwnPropertyDescriptor(n, e),
                                                            );
                                                        }),
                                                  t),
                                              );
                                          },
                                      }),
                              ],
                          }),
                          k
                              ? (0, r.jsxs)("div", {
                                    className: i()(T.headerRight, { [j.shopTakeOver]: A }),
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            variant: "text-md/medium",
                                            children: x.intl.string(x.t.uaX709),
                                        }),
                                        (0, r.jsx)(s.PhF, {
                                            className: T.sortSelect,
                                            options: D,
                                            select: X,
                                            isSelected: (e) => e === B,
                                            serialize: (e) => e,
                                            popoutClassName: i()({ [j.shopTakeOver]: A }),
                                        }),
                                        (0, r.jsx)(s.zxk, {
                                            variant: "secondary",
                                            text: x.intl.string(x.t.X3tnc3),
                                            buttonRef: Y,
                                            onClick: () => {
                                                G({
                                                    isShuffling: !0,
                                                    onOutroComplete: F,
                                                    returnRef: Y,
                                                }),
                                                    g.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                        page_session_id: K,
                                                    });
                                            },
                                            disabled: z !== E.g.MOUNTED && z !== E.g.FINISHED,
                                        }),
                                    ],
                                })
                              : null,
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: T.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, {
                                children: [...Array(12)].map((e, t) => (0, r.jsx)(O.K, {}, t + 1)),
                            })
                          : H.slice(0, L).map((e, t) => {
                                let n,
                                    l = m.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (U)
                                    if (z === E.g.SHUFFLE_OUT)
                                        return (0, r.jsx)(
                                            "div",
                                            { className: T.shuffleOutro },
                                            "".concat(e.skuId, "-").concat(t),
                                        );
                                    else
                                        z === E.g.SORT_OUT
                                            ? (n = T.sortChangedOutro)
                                            : z === E.g.SHUFFLE_IN
                                              ? (n = T.shuffleIntro)
                                              : z === E.g.SORT_IN && (n = T.sortChangedIntro);
                                return (0, r.jsx)(
                                    h.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children: (0, r.jsx)(C.Z, {
                                            product: e,
                                            category: l,
                                            user: N,
                                            tab: I,
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
