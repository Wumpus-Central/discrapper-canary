n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(782568),
    u = n(607070),
    d = n(594174),
    g = n(451478),
    p = n(626135),
    f = n(63063),
    h = n(74538),
    C = n(381585),
    _ = n(597688),
    m = n(128922),
    b = n(38900),
    E = n(709999),
    S = n(653126),
    v = n(328626),
    x = n(849275),
    O = n(619899),
    T = n(642909),
    y = n(981631),
    L = n(388032),
    j = n(345213),
    k = n(310582);
let I = (e) => {
    var t;
    let {
            isLoading: n,
            title: i,
            sortedSkuIds: I,
            numVisibleItems: P,
            hasSorting: N,
            prioritizeUserDiscounts: A,
            tab: B,
            buttonContainerClassName: R,
        } = e,
        Z = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
        w = h.ZP.canUseCollectibles(Z),
        F = (0, T.G)("FeedBlock"),
        {
            sortType: M,
            setSortType: H,
            sortedItems: D,
            sortOptions: W,
            shuffleProducts: U,
            showRecommendationOption: V,
        } = (0, x.Z)(I, w, A),
        z = (0, O.St)(D),
        G = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        q = (0, s.e7)([g.Z], () => g.Z.isFocused()),
        K = !G && q,
        { animationPhase: Y, startAnimation: X } = (0, v.y)(),
        Q = (0, C.sp)(),
        J = null != (t = null == Q ? void 0 : Q.sessionId) ? t : "",
        $ = l.useRef(null),
        ee = l.useCallback(
            (e) => {
                X({
                    isShuffling: !1,
                    onOutroComplete: () => H(e),
                }),
                    p.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: J,
                        sort_type: e,
                    });
            },
            [X, H, J],
        ),
        et = m.Z.useConfig({ location: "FeedBlock" }).showCardsV2;
    return null == Z
        ? null
        : (0, r.jsxs)("div", {
              className: a()(k.popularPicksSection, k.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: k.blockHeader,
                      children: [
                          (0, r.jsxs)("div", {
                              className: k.headerLeft,
                              children: [
                                  (0, r.jsx)(o.X6q, {
                                      variant: "heading-lg/semibold",
                                      children: i,
                                  }),
                                  V &&
                                      (0, r.jsx)(o.ua7, {
                                          text: L.intl.string(L.t["3taPdn"]),
                                          position: "top",
                                          "aria-label": L.intl.string(L.t["3taPdn"]),
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
                                                                  f.Z.getArticleURL(y.BhN.DATA_USED_FOR_RECOMMENDED),
                                                              ),
                                                          className: k.informationIcon,
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
                          N
                              ? (0, r.jsxs)("div", {
                                    className: a()(k.headerRight, { [j.shopTakeOver]: F }),
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-md/medium",
                                            children: L.intl.string(L.t.uaX709),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: R,
                                            children: (0, r.jsx)(o.PhF, {
                                                options: W,
                                                select: ee,
                                                className: k.sortSelect,
                                                popoutClassName: a()({ [j.shopTakeOver]: F }),
                                                isSelected: (e) => e === M,
                                                serialize: (e) => e,
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: R,
                                            children: (0, r.jsx)(o.zxk, {
                                                variant: "secondary",
                                                text: L.intl.string(L.t.X3tnc3),
                                                buttonRef: $,
                                                onClick: () => {
                                                    X({
                                                        isShuffling: !0,
                                                        onOutroComplete: U,
                                                        returnRef: $,
                                                    }),
                                                        p.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                            page_session_id: J,
                                                        });
                                                },
                                                disabled: Y !== v.g.MOUNTED && Y !== v.g.FINISHED,
                                            }),
                                        }),
                                    ],
                                })
                              : null,
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: k.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, {
                                children: [...Array(12)].map((e, t) => (0, r.jsx)(b.K, {}, t + 1)),
                            })
                          : z.slice(0, P).map((e, t) => {
                                let n,
                                    l = _.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (K)
                                    if (Y === v.g.SHUFFLE_OUT)
                                        return (0, r.jsx)(
                                            "div",
                                            { className: k.shuffleOutro },
                                            "".concat(e.skuId, "-").concat(t),
                                        );
                                    else
                                        Y === v.g.SORT_OUT
                                            ? (n = k.sortChangedOutro)
                                            : Y === v.g.SHUFFLE_IN
                                              ? (n = k.shuffleIntro)
                                              : Y === v.g.SORT_IN && (n = k.sortChangedIntro);
                                return (0, r.jsx)(
                                    C.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children: et
                                            ? (0, r.jsx)(S.Z, { skuId: null == e ? void 0 : e.skuId })
                                            : (0, r.jsx)(E.Z, {
                                                  product: e,
                                                  category: l,
                                                  user: Z,
                                                  tab: B,
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
