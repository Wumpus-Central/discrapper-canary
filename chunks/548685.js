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
    _ = r(675997),
    v = r(243126),
    O = r(38900),
    C = r(709999),
    E = r(328626),
    S = r(619899),
    y = r(981631),
    x = r(388032),
    j = r(138954),
    T = r(253032);
let P = (e) => {
    var t;
    let {
            isLoading: r,
            title: a,
            sortedSkuIds: P,
            numVisibleItems: L,
            hasSorting: k,
            tab: I,
            buttonContainerClassName: N,
        } = e,
        A = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        w = b.ZP.canUseCollectibles(A),
        { enableShopTakeOver: B } = _.Z.useConfig({ location: "FeedBlock" }),
        {
            sortType: R,
            setSortType: Z,
            sortedItems: D,
            sortOptions: M,
            shuffleProducts: F,
            showRecommendationOption: H,
        } = (0, v.N)(P, w),
        W = (0, S.St)(D),
        V = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        U = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        z = !V && U,
        { animationPhase: G, startAnimation: q } = (0, E.y)(),
        K = (0, h.sp)(),
        Y = null != (t = null == K ? void 0 : K.sessionId) ? t : "",
        X = l.useRef(null),
        J = l.useCallback(
            (e) => {
                q({
                    isShuffling: !1,
                    onOutroComplete: () => Z(e),
                }),
                    g.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: Y,
                        sort_type: e,
                    });
            },
            [q, Z, Y],
        );
    return null == A
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
                                  H &&
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
                                    className: i()(T.headerRight, { [j.shopTakeOver]: B }),
                                    children: [
                                        (0, n.jsx)(s.Text, {
                                            variant: "text-md/medium",
                                            children: x.intl.string(x.t.uaX709),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: N,
                                            children: (0, n.jsx)(s.PhF, {
                                                options: M,
                                                select: J,
                                                className: T.sortSelect,
                                                popoutClassName: i()({ [j.shopTakeOver]: B }),
                                                isSelected: (e) => e === R,
                                                serialize: (e) => e,
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: N,
                                            children: (0, n.jsx)(s.zxk, {
                                                variant: "secondary",
                                                text: x.intl.string(x.t.X3tnc3),
                                                buttonRef: X,
                                                onClick: () => {
                                                    q({
                                                        isShuffling: !0,
                                                        onOutroComplete: F,
                                                        returnRef: X,
                                                    }),
                                                        g.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                            page_session_id: Y,
                                                        });
                                                },
                                                disabled: G !== E.g.MOUNTED && G !== E.g.FINISHED,
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
                                children: [...Array(12)].map((e, t) => (0, n.jsx)(O.K, {}, t + 1)),
                            })
                          : W.slice(0, L).map((e, t) => {
                                let r,
                                    l = m.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (z)
                                    if (G === E.g.SHUFFLE_OUT)
                                        return (0, n.jsx)(
                                            "div",
                                            { className: T.shuffleOutro },
                                            "".concat(e.skuId, "-").concat(t),
                                        );
                                    else
                                        G === E.g.SORT_OUT
                                            ? (r = T.sortChangedOutro)
                                            : G === E.g.SHUFFLE_IN
                                              ? (r = T.shuffleIntro)
                                              : G === E.g.SORT_IN && (r = T.sortChangedIntro);
                                return (0, n.jsx)(
                                    h.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children: (0, n.jsx)(C.Z, {
                                            product: e,
                                            category: l,
                                            user: A,
                                            tab: I,
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
