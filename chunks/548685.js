n.d(t, { Z: () => j }), n(388685);
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
    _ = n(243126),
    v = n(38900),
    C = n(709999),
    O = n(328626),
    E = n(619899),
    S = n(981631),
    y = n(388032),
    x = n(806734);
let j = (e) => {
    var t;
    let { isLoading: n, title: a, sortedSkuIds: j, numVisibleItems: T, hasSorting: P, tab: L } = e,
        I = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        k = b.ZP.canUseCollectibles(I),
        {
            sortType: N,
            setSortType: A,
            sortedItems: w,
            sortOptions: B,
            shuffleProducts: R,
            showRecommendationOption: Z,
        } = (0, _.N)(j, k),
        D = (0, E.St)(w),
        F = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        M = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        H = !F && M,
        { animationPhase: W, startAnimation: V } = (0, O.y)(),
        U = (0, h.sp)(),
        z = null != (t = null == U ? void 0 : U.sessionId) ? t : "",
        G = l.useRef(null),
        q = l.useCallback(
            (e) => {
                V({
                    isShuffling: !1,
                    onOutroComplete: () => A(e),
                }),
                    g.default.track(S.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: z,
                        sort_type: e,
                    });
            },
            [V, A, z],
        );
    return null == I
        ? null
        : (0, r.jsxs)("div", {
              className: i()(x.popularPicksSection, x.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: x.blockHeader,
                      children: [
                          (0, r.jsxs)("div", {
                              className: x.headerLeft,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      variant: "heading-lg/semibold",
                                      children: a,
                                  }),
                                  Z &&
                                      (0, r.jsx)(s.ua7, {
                                          text: y.intl.string(y.t["3taPdn"]),
                                          position: "top",
                                          "aria-label": y.intl.string(y.t["3taPdn"]),
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
                                                                  f.Z.getArticleURL(S.BhN.DATA_USED_FOR_RECOMMENDED),
                                                              ),
                                                          className: x.informationIcon,
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
                          P
                              ? (0, r.jsxs)("div", {
                                    className: x.headerRight,
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            variant: "text-md/medium",
                                            children: y.intl.string(y.t.uaX709),
                                        }),
                                        (0, r.jsx)(s.PhF, {
                                            options: B,
                                            select: q,
                                            className: x.sortSelect,
                                            isSelected: (e) => e === N,
                                            serialize: (e) => e,
                                        }),
                                        (0, r.jsx)(s.zxk, {
                                            variant: "secondary",
                                            text: y.intl.string(y.t.X3tnc3),
                                            buttonRef: G,
                                            onClick: () => {
                                                V({
                                                    isShuffling: !0,
                                                    onOutroComplete: R,
                                                    returnRef: G,
                                                }),
                                                    g.default.track(S.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                        page_session_id: z,
                                                    });
                                            },
                                            disabled: W !== O.g.MOUNTED && W !== O.g.FINISHED,
                                        }),
                                    ],
                                })
                              : null,
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: x.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, {
                                children: [...Array(12)].map((e, t) => (0, r.jsx)(v.K, {}, t + 1)),
                            })
                          : D.slice(0, T).map((e, t) => {
                                let n,
                                    l = m.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (H)
                                    if (W === O.g.SHUFFLE_OUT)
                                        return (0, r.jsx)(
                                            "div",
                                            { className: x.shuffleOutro },
                                            "".concat(e.skuId, "-").concat(t),
                                        );
                                    else
                                        W === O.g.SORT_OUT
                                            ? (n = x.sortChangedOutro)
                                            : W === O.g.SHUFFLE_IN
                                              ? (n = x.shuffleIntro)
                                              : W === O.g.SORT_IN && (n = x.sortChangedIntro);
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
                                            user: I,
                                            tab: L,
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
