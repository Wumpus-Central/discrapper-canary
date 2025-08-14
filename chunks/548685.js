r.d(t, { Z: () => P }), r(388685);
var n = r(255367),
    l = r(73800),
    a = r(120356),
    i = r.n(a),
    o = r(442837),
    s = r(481060),
    c = r(782568),
    u = r(607070),
    d = r(594174),
    p = r(451478),
    g = r(626135),
    f = r(63063),
    b = r(74538),
    h = r(381585),
    m = r(597688),
    _ = r(38900),
    v = r(709999),
    O = r(328626),
    C = r(849275),
    E = r(619899),
    S = r(642909),
    y = r(981631),
    x = r(388032),
    j = r(345213),
    T = r(310582);
let P = (e) => {
    var t;
    let {
            isLoading: r,
            title: a,
            sortedSkuIds: P,
            numVisibleItems: L,
            hasSorting: k,
            prioritizeUserDiscounts: I,
            tab: N,
            buttonContainerClassName: A,
        } = e,
        w = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        B = b.ZP.canUseCollectibles(w),
        R = (0, S.G)("FeedBlock"),
        {
            sortType: Z,
            setSortType: D,
            sortedItems: M,
            sortOptions: F,
            shuffleProducts: H,
            showRecommendationOption: W,
        } = (0, C.Z)(P, B, I),
        V = (0, E.St)(M),
        U = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        z = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        G = !U && z,
        { animationPhase: q, startAnimation: K } = (0, O.y)(),
        Y = (0, h.sp)(),
        X = null != (t = null == Y ? void 0 : Y.sessionId) ? t : "",
        J = l.useRef(null),
        Q = l.useCallback(
            (e) => {
                K({
                    isShuffling: !1,
                    onOutroComplete: () => D(e),
                }),
                    g.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: X,
                        sort_type: e,
                    });
            },
            [K, D, X],
        );
    return null == w
        ? null
        : (0, n.jsxs)("div", {
              className: i()(T.popularPicksSection, T.centeredSection),
              children: [
                  (0, n.jsxs)("div", {
                      className: T.blockHeader,
                      children: [
                          (0, n.jsxs)("div", {
                              className: T.headerLeft,
                              children: [
                                  (0, n.jsx)(s.X6q, {
                                      variant: "heading-lg/semibold",
                                      children: a,
                                  }),
                                  W &&
                                      (0, n.jsx)(s.ua7, {
                                          text: x.intl.string(x.t["3taPdn"]),
                                          position: "top",
                                          "aria-label": x.intl.string(x.t["3taPdn"]),
                                          children: (e) => {
                                              var t, r;
                                              return (0, n.jsx)(
                                                  s.P3F,
                                                  ((t = (function (e) {
                                                      for (var t = 1; t < arguments.length; t++) {
                                                          var r = null != arguments[t] ? arguments[t] : {},
                                                              n = Object.keys(r);
                                                          "function" == typeof Object.getOwnPropertySymbols &&
                                                              (n = n.concat(
                                                                  Object.getOwnPropertySymbols(r).filter(function (e) {
                                                                      return Object.getOwnPropertyDescriptor(r, e)
                                                                          .enumerable;
                                                                  }),
                                                              )),
                                                              n.forEach(function (t) {
                                                                  var n;
                                                                  (n = r[t]),
                                                                      t in e
                                                                          ? Object.defineProperty(e, t, {
                                                                                value: n,
                                                                                enumerable: !0,
                                                                                configurable: !0,
                                                                                writable: !0,
                                                                            })
                                                                          : (e[t] = n);
                                                              });
                                                      }
                                                      return e;
                                                  })({}, e)),
                                                  (r = r =
                                                      {
                                                          onClick: () =>
                                                              (0, c.Z)(
                                                                  f.Z.getArticleURL(y.BhN.DATA_USED_FOR_RECOMMENDED),
                                                              ),
                                                          className: T.informationIcon,
                                                          children: (0, n.jsx)(s.d3s, { size: "sm" }),
                                                      }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                                      : (function (e, t) {
                                                            var r = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var n = Object.getOwnPropertySymbols(e);
                                                                r.push.apply(r, n);
                                                            }
                                                            return r;
                                                        })(Object(r)).forEach(function (e) {
                                                            Object.defineProperty(
                                                                t,
                                                                e,
                                                                Object.getOwnPropertyDescriptor(r, e),
                                                            );
                                                        }),
                                                  t),
                                              );
                                          },
                                      }),
                              ],
                          }),
                          k
                              ? (0, n.jsxs)("div", {
                                    className: i()(T.headerRight, { [j.shopTakeOver]: R }),
                                    children: [
                                        (0, n.jsx)(s.Text, {
                                            variant: "text-md/medium",
                                            children: x.intl.string(x.t.uaX709),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: A,
                                            children: (0, n.jsx)(s.PhF, {
                                                options: F,
                                                select: Q,
                                                className: T.sortSelect,
                                                popoutClassName: i()({ [j.shopTakeOver]: R }),
                                                isSelected: (e) => e === Z,
                                                serialize: (e) => e,
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: A,
                                            children: (0, n.jsx)(s.zxk, {
                                                variant: "secondary",
                                                text: x.intl.string(x.t.X3tnc3),
                                                buttonRef: J,
                                                onClick: () => {
                                                    K({
                                                        isShuffling: !0,
                                                        onOutroComplete: H,
                                                        returnRef: J,
                                                    }),
                                                        g.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                            page_session_id: X,
                                                        });
                                                },
                                                disabled: q !== O.g.MOUNTED && q !== O.g.FINISHED,
                                            }),
                                        }),
                                    ],
                                })
                              : null,
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: T.feed,
                      children: r
                          ? (0, n.jsx)(n.Fragment, {
                                children: [...Array(12)].map((e, t) => (0, n.jsx)(_.K, {}, t + 1)),
                            })
                          : V.slice(0, L).map((e, t) => {
                                let r,
                                    l = m.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (G)
                                    if (q === O.g.SHUFFLE_OUT)
                                        return (0, n.jsx)(
                                            "div",
                                            { className: T.shuffleOutro },
                                            "".concat(e.skuId, "-").concat(t),
                                        );
                                    else
                                        q === O.g.SORT_OUT
                                            ? (r = T.sortChangedOutro)
                                            : q === O.g.SHUFFLE_IN
                                              ? (r = T.shuffleIntro)
                                              : q === O.g.SORT_IN && (r = T.sortChangedIntro);
                                return (0, n.jsx)(
                                    h.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children: (0, n.jsx)(v.Z, {
                                            product: e,
                                            category: l,
                                            user: w,
                                            tab: N,
                                            className: r,
                                        }),
                                    },
                                    null == e ? void 0 : e.skuId,
                                );
                            }),
                  }),
              ],
          });
};
