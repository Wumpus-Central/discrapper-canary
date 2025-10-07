n.d(t, { Z: () => P }), n(388685);
var r = n(951288),
    l = n(647438),
    s = n(120356),
    a = n.n(s),
    i = n(442837),
    o = n(481060),
    c = n(782568),
    u = n(607070),
    d = n(594174),
    g = n(451478),
    p = n(626135),
    f = n(63063),
    C = n(74538),
    h = n(381585),
    _ = n(597688),
    m = n(128922),
    b = n(38900),
    E = n(709999),
    S = n(653126),
    v = n(401975),
    x = n(328626),
    O = n(849275),
    T = n(619899),
    y = n(642909),
    L = n(981631),
    j = n(388032),
    k = n(345213),
    I = n(310582);
let P = (e) => {
    var t;
    let {
            isLoading: n,
            title: s,
            sortedSkuIds: P,
            numVisibleItems: N,
            hasSorting: B,
            prioritizeUserDiscounts: A,
            tab: R,
            buttonContainerClassName: Z,
        } = e,
        w = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        H = C.ZP.canUseCollectibles(w),
        F = (0, y.G)("FeedBlock"),
        {
            sortType: D,
            setSortType: M,
            sortedItems: W,
            sortOptions: U,
            shuffleProducts: V,
            showRecommendationOption: z,
        } = (0, O.Z)(P, H, A),
        G = (0, T.St)(W),
        K = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
        q = (0, i.e7)([g.Z], () => g.Z.isFocused()),
        Y = !K && q,
        { animationPhase: X, startAnimation: Q } = (0, x.y)(),
        J = (0, h.sp)(),
        $ = null != (t = null == J ? void 0 : J.sessionId) ? t : "",
        ee = l.useRef(null),
        et = l.useCallback(
            (e) => {
                Q({
                    isShuffling: !1,
                    onOutroComplete: () => M(e),
                }),
                    p.default.track(L.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: $,
                        sort_type: e,
                    });
            },
            [Q, M, $],
        ),
        en = m.Z.useConfig({ location: "FeedBlock" }).showCardsV2;
    return null == w
        ? null
        : (0, r.jsxs)("div", {
              className: a()(I.popularPicksSection, I.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: I.blockHeader,
                      children: [
                          (0, r.jsxs)("div", {
                              className: I.headerLeft,
                              children: [
                                  (0, r.jsx)(o.X6q, {
                                      variant: "heading-lg/semibold",
                                      children: s,
                                  }),
                                  z &&
                                      (0, r.jsx)(o.ua7, {
                                          text: j.intl.string(j.t["3taPdn"]),
                                          position: "top",
                                          "aria-label": j.intl.string(j.t["3taPdn"]),
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
                                                                  f.Z.getArticleURL(L.BhN.DATA_USED_FOR_RECOMMENDED),
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
                          B
                              ? (0, r.jsxs)("div", {
                                    className: a()(I.headerRight, { [k.shopTakeOver]: F }),
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-md/medium",
                                            children: j.intl.string(j.t.uaX709),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: Z,
                                            children: (0, r.jsx)(o.PhF, {
                                                options: U,
                                                select: et,
                                                className: I.sortSelect,
                                                popoutClassName: a()({ [k.shopTakeOver]: F }),
                                                isSelected: (e) => e === D,
                                                serialize: (e) => e,
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: Z,
                                            children: (0, r.jsx)(o.zxk, {
                                                variant: "secondary",
                                                text: j.intl.string(j.t.X3tnc3),
                                                buttonRef: ee,
                                                onClick: () => {
                                                    Q({
                                                        isShuffling: !0,
                                                        onOutroComplete: V,
                                                        returnRef: ee,
                                                    }),
                                                        p.default.track(L.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                            page_session_id: $,
                                                        });
                                                },
                                                disabled: X !== x.g.MOUNTED && X !== x.g.FINISHED,
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
                                    en ? (0, r.jsx)(v.Z, {}, t + 1) : (0, r.jsx)(b.K, {}, t + 1),
                                ),
                            })
                          : G.slice(0, N).map((e, t) => {
                                let n,
                                    l = _.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (Y)
                                    if (X === x.g.SHUFFLE_OUT)
                                        return en
                                            ? (0, r.jsx)(
                                                  "div",
                                                  {
                                                      className: I.shuffleOutro,
                                                      children: (0, r.jsx)(v.Z, { skipPulseAnimation: !0 }),
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
                                        X === x.g.SORT_OUT
                                            ? (n = I.sortChangedOutro)
                                            : X === x.g.SHUFFLE_IN
                                              ? (n = I.shuffleIntro)
                                              : X === x.g.SORT_IN && (n = I.sortChangedIntro);
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
                                                      children: (0, r.jsx)(S.Z, {
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
