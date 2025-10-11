n.d(t, { Z: () => B }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    c = n(782568),
    u = n(607070),
    d = n(594174),
    g = n(451478),
    f = n(626135),
    p = n(63063),
    C = n(74538),
    h = n(381585),
    _ = n(597688),
    m = n(128922),
    b = n(38900),
    E = n(709999),
    v = n(653126),
    S = n(401975),
    O = n(328626),
    x = n(849275),
    y = n(619899),
    j = n(642909),
    T = n(981631),
    L = n(388032),
    k = n(345213),
    I = n(310582);
let B = (e) => {
    var t;
    let {
            isLoading: n,
            title: i,
            sortedSkuIds: B,
            numVisibleItems: P,
            hasSorting: N,
            prioritizeUserDiscounts: A,
            tab: R,
            buttonContainerClassName: Z,
        } = e,
        w = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        H = C.ZP.canUseCollectibles(w),
        F = (0, j.G)("FeedBlock"),
        {
            sortType: D,
            setSortType: M,
            sortedItems: W,
            sortOptions: U,
            shuffleProducts: V,
            showRecommendationOption: G,
        } = (0, x.Z)(B, H, A),
        z = (0, y.St)(W),
        K = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        Y = (0, a.e7)([g.Z], () => g.Z.isFocused()),
        q = !K && Y,
        { animationPhase: Q, startAnimation: J } = (0, O.y)(),
        X = (0, h.sp)(),
        $ = null != (t = null == X ? void 0 : X.sessionId) ? t : "",
        ee = l.useRef(null),
        et = l.useCallback(
            (e) => {
                J({
                    isShuffling: !1,
                    onOutroComplete: () => M(e),
                }),
                    f.default.track(T.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: $,
                        sort_type: e,
                    });
            },
            [J, M, $],
        ),
        en = m.Z.useConfig({ location: "FeedBlock" }).showCardsV2;
    return null == w
        ? null
        : (0, r.jsxs)("div", {
              className: s()(I.popularPicksSection, I.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: I.blockHeader,
                      children: [
                          (0, r.jsxs)("div", {
                              className: I.headerLeft,
                              children: [
                                  (0, r.jsx)(o.Heading, {
                                      variant: "heading-lg/semibold",
                                      children: i,
                                  }),
                                  G &&
                                      (0, r.jsx)(o.ua7, {
                                          "data-migration-pending": !0,
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
                                                                  p.Z.getArticleURL(T.BhN.DATA_USED_FOR_RECOMMENDED),
                                                              ),
                                                          className: I.informationIcon,
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
                                    className: s()(I.headerRight, { [k.shopTakeOver]: F }),
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-md/medium",
                                            children: L.intl.string(L.t.uaX709),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: Z,
                                            children: (0, r.jsx)(o.PhF, {
                                                options: U,
                                                select: et,
                                                className: I.sortSelect,
                                                popoutClassName: s()({ [k.shopTakeOver]: F }),
                                                isSelected: (e) => e === D,
                                                serialize: (e) => e,
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: Z,
                                            children: (0, r.jsx)(o.Button, {
                                                variant: "secondary",
                                                text: L.intl.string(L.t.X3tnc3),
                                                buttonRef: ee,
                                                onClick: () => {
                                                    J({
                                                        isShuffling: !0,
                                                        onOutroComplete: V,
                                                        returnRef: ee,
                                                    }),
                                                        f.default.track(T.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                            page_session_id: $,
                                                        });
                                                },
                                                disabled: Q !== O.g.MOUNTED && Q !== O.g.FINISHED,
                                            }),
                                        }),
                                    ],
                                })
                              : null,
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: I.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, {
                                children: [...Array(12)].map((e, t) =>
                                    en ? (0, r.jsx)(S.Z, {}, t + 1) : (0, r.jsx)(b.K, {}, t + 1),
                                ),
                            })
                          : z.slice(0, P).map((e, t) => {
                                let n,
                                    l = _.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (q)
                                    if (Q === O.g.SHUFFLE_OUT)
                                        return en
                                            ? (0, r.jsx)(
                                                  "div",
                                                  {
                                                      className: I.shuffleOutro,
                                                      children: (0, r.jsx)(S.Z, { skipPulseAnimation: !0 }),
                                                  },
                                                  "".concat(e.skuId, "-").concat(t),
                                              )
                                            : (0, r.jsx)(
                                                  "div",
                                                  {
                                                      className: I.shuffleOutro,
                                                      children: (0, r.jsx)("div", { className: I.placeholderCard }),
                                                  },
                                                  "".concat(e.skuId, "-").concat(t),
                                              );
                                    else
                                        Q === O.g.SORT_OUT
                                            ? (n = I.sortChangedOutro)
                                            : Q === O.g.SHUFFLE_IN
                                              ? (n = I.shuffleIntro)
                                              : Q === O.g.SORT_IN && (n = I.sortChangedIntro);
                                return (0, r.jsx)(
                                    h.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children:
                                            en && (null == e ? void 0 : e.skuId) != null
                                                ? (0, r.jsx)("div", {
                                                      className: n,
                                                      children: (0, r.jsx)(v.Z, {
                                                          skuId: null == e ? void 0 : e.skuId,
                                                      }),
                                                  })
                                                : (0, r.jsx)(E.Z, {
                                                      product: e,
                                                      category: l,
                                                      user: w,
                                                      tab: R,
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
