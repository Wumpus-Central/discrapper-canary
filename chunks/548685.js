n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(442837),
    o = n(481060),
    c = n(782568),
    u = n(607070),
    d = n(594174),
    g = n(451478),
    p = n(626135),
    f = n(63063),
    m = n(74538),
    _ = n(381585),
    h = n(597688),
    b = n(38900),
    C = n(709999),
    E = n(328626),
    S = n(849275),
    O = n(619899),
    v = n(642909),
    x = n(981631),
    y = n(388032),
    T = n(345213),
    L = n(310582);
let j = (e) => {
    var t;
    let {
            isLoading: n,
            title: a,
            sortedSkuIds: j,
            numVisibleItems: k,
            hasSorting: I,
            prioritizeUserDiscounts: B,
            tab: N,
            buttonContainerClassName: P,
        } = e,
        A = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        R = m.ZP.canUseCollectibles(A),
        Z = (0, v.G)("FeedBlock"),
        {
            sortType: w,
            setSortType: F,
            sortedItems: D,
            sortOptions: M,
            shuffleProducts: H,
            showRecommendationOption: W,
        } = (0, S.Z)(j, R, B),
        U = (0, O.St)(D),
        V = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
        z = (0, i.e7)([g.Z], () => g.Z.isFocused()),
        G = !V && z,
        { animationPhase: q, startAnimation: K } = (0, E.y)(),
        Y = (0, _.sp)(),
        X = null != (t = null == Y ? void 0 : Y.sessionId) ? t : "",
        Q = l.useRef(null),
        J = l.useCallback(
            (e) => {
                K({
                    isShuffling: !1,
                    onOutroComplete: () => F(e),
                }),
                    p.default.track(x.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: X,
                        sort_type: e,
                    });
            },
            [K, F, X],
        );
    return null == A
        ? null
        : (0, r.jsxs)("div", {
              className: s()(L.popularPicksSection, L.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: L.blockHeader,
                      children: [
                          (0, r.jsxs)("div", {
                              className: L.headerLeft,
                              children: [
                                  (0, r.jsx)(o.X6q, {
                                      variant: "heading-lg/semibold",
                                      children: a,
                                  }),
                                  W &&
                                      (0, r.jsx)(o.ua7, {
                                          text: y.intl.string(y.t["3taPdn"]),
                                          position: "top",
                                          "aria-label": y.intl.string(y.t["3taPdn"]),
                                          children: (e) => {
                                              var t, n;
                                              return (0, r.jsx)(
                                                  o.P3F,
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
                                                                  f.Z.getArticleURL(x.BhN.DATA_USED_FOR_RECOMMENDED),
                                                              ),
                                                          className: L.informationIcon,
                                                          children: (0, r.jsx)(o.d3s, { size: "sm" }),
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
                          I
                              ? (0, r.jsxs)("div", {
                                    className: s()(L.headerRight, { [T.shopTakeOver]: Z }),
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-md/medium",
                                            children: y.intl.string(y.t.uaX709),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: P,
                                            children: (0, r.jsx)(o.PhF, {
                                                options: M,
                                                select: J,
                                                className: L.sortSelect,
                                                popoutClassName: s()({ [T.shopTakeOver]: Z }),
                                                isSelected: (e) => e === w,
                                                serialize: (e) => e,
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: P,
                                            children: (0, r.jsx)(o.zxk, {
                                                variant: "secondary",
                                                text: y.intl.string(y.t.X3tnc3),
                                                buttonRef: Q,
                                                onClick: () => {
                                                    K({
                                                        isShuffling: !0,
                                                        onOutroComplete: H,
                                                        returnRef: Q,
                                                    }),
                                                        p.default.track(x.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                            page_session_id: X,
                                                        });
                                                },
                                                disabled: q !== E.g.MOUNTED && q !== E.g.FINISHED,
                                            }),
                                        }),
                                    ],
                                })
                              : null,
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: L.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, {
                                children: [...Array(12)].map((e, t) => (0, r.jsx)(b.K, {}, t + 1)),
                            })
                          : U.slice(0, k).map((e, t) => {
                                let n,
                                    l = h.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (G)
                                    if (q === E.g.SHUFFLE_OUT)
                                        return (0, r.jsx)(
                                            "div",
                                            { className: L.shuffleOutro },
                                            "".concat(e.skuId, "-").concat(t),
                                        );
                                    else
                                        q === E.g.SORT_OUT
                                            ? (n = L.sortChangedOutro)
                                            : q === E.g.SHUFFLE_IN
                                              ? (n = L.shuffleIntro)
                                              : q === E.g.SORT_IN && (n = L.sortChangedIntro);
                                return (0, r.jsx)(
                                    _.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children: (0, r.jsx)(C.Z, {
                                            product: e,
                                            category: l,
                                            user: A,
                                            tab: N,
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
