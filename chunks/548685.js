n.d(t, { Z: () => N }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    o = n(442837),
    a = n(481060),
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
    S = n(786040),
    O = n(401975),
    x = n(328626),
    y = n(849275),
    j = n(619899),
    k = n(642909),
    T = n(215023),
    L = n(981631),
    I = n(388032),
    B = n(345213),
    A = n(310582);
let N = (e) => {
    var t;
    let {
            isLoading: n,
            title: i,
            sortedSkuIds: N,
            numVisibleItems: P,
            prioritizeUserDiscounts: R,
            tab: Z,
            buttonContainerClassName: w,
            orbsSupportedOnly: H,
        } = e,
        F = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        D = C.ZP.canUseCollectibles(F),
        M = (0, k.G)("FeedBlock"),
        {
            sortType: W,
            setSortType: U,
            sortedItems: V,
            sortOptions: z,
            shuffleProducts: G,
            showRecommendationOption: K,
        } = (0, y.Z)({
            sortedSkuIds: N,
            isPremiumUser: D,
            prioritizeUserDiscounts: R,
            orbsSupportedOnly: H,
        }),
        Y = (0, j.St)(V),
        q = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        Q = (0, o.e7)([g.Z], () => g.Z.isFocused()),
        J = !q && Q,
        { animationPhase: X, startAnimation: $ } = (0, x.y)(),
        ee = (0, h.sp)(),
        et = null != (t = null == ee ? void 0 : ee.sessionId) ? t : "",
        en = l.useRef(null),
        er = l.useCallback(
            (e) => {
                $({
                    isShuffling: !1,
                    onOutroComplete: () => U(e),
                }),
                    f.default.track(L.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: et,
                        sort_type: e,
                    });
            },
            [$, U, et],
        ),
        el = m.Z.useConfig({ location: "FeedBlock" }).showCardsV2;
    return null == F
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
                                  (0, r.jsx)(a.Heading, {
                                      variant: "heading-lg/semibold",
                                      children: i,
                                  }),
                                  K &&
                                      (0, r.jsx)(a.aML, {
                                          "data-migration-pending": !0,
                                          text: I.intl.string(I.t["3taPdn"]),
                                          position: "top",
                                          "aria-label": I.intl.string(I.t["3taPdn"]),
                                          children: (e) => {
                                              var t, n;
                                              return (0, r.jsx)(
                                                  a.P3F,
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
                                                                  p.Z.getArticleURL(L.BhN.DATA_USED_FOR_RECOMMENDED),
                                                              ),
                                                          className: A.informationIcon,
                                                          children: (0, r.jsx)(a.d3s, { size: "sm" }),
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
                          (0, r.jsxs)("div", {
                              className: s()(A.headerRight, { [B.shopTakeOver]: M }),
                              children: [
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-md/medium",
                                      children: I.intl.string(I.t.uaX709),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: w,
                                      children: (0, r.jsx)(a.PhF, {
                                          options: z,
                                          select: er,
                                          className: A.sortSelect,
                                          popoutClassName: s()({ [B.shopTakeOver]: M }),
                                          isSelected: (e) => e === W,
                                          serialize: (e) => e,
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: w,
                                      children: (0, r.jsx)(a.Button, {
                                          variant: "secondary",
                                          text: I.intl.string(I.t.X3tnc3),
                                          buttonRef: en,
                                          onClick: () => {
                                              $({
                                                  isShuffling: !0,
                                                  onOutroComplete: G,
                                                  returnRef: en,
                                              }),
                                                  f.default.track(L.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                                                      page_session_id: et,
                                                  });
                                          },
                                          disabled: X !== x.g.MOUNTED && X !== x.g.FINISHED,
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
                                children: [...Array(12)].map((e, t) =>
                                    el ? (0, r.jsx)(O.Z, {}, t + 1) : (0, r.jsx)(b.K, {}, t + 1),
                                ),
                            })
                          : Y.slice(0, P).map((e, t) => {
                                let n,
                                    l = _.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (J)
                                    if (X === x.g.SHUFFLE_OUT)
                                        return el
                                            ? (0, r.jsx)(
                                                  "div",
                                                  {
                                                      className: A.shuffleOutro,
                                                      children: (0, r.jsx)(O.Z, { skipPulseAnimation: !0 }),
                                                  },
                                                  "".concat(e.skuId, "-").concat(t),
                                              )
                                            : (0, r.jsx)(
                                                  "div",
                                                  {
                                                      className: A.shuffleOutro,
                                                      children: (0, r.jsx)("div", { className: A.placeholderCard }),
                                                  },
                                                  "".concat(e.skuId, "-").concat(t),
                                              );
                                    else
                                        X === x.g.SORT_OUT
                                            ? (n = A.sortChangedOutro)
                                            : X === x.g.SHUFFLE_IN
                                              ? (n = A.shuffleIntro)
                                              : X === x.g.SORT_IN && (n = A.sortChangedIntro);
                                return (0, r.jsx)(
                                    h.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: "popular picks",
                                            categoryPosition: 2,
                                        },
                                        children:
                                            el && (null == e ? void 0 : e.skuId) != null
                                                ? (0, r.jsx)("div", {
                                                      className: n,
                                                      children: (0, r.jsx)(v.Z, {
                                                          skuId: null == e ? void 0 : e.skuId,
                                                          prioritizedCurrency: Z === T.AW.ORBS ? S.tA.ORBS : void 0,
                                                          onClickAnalytics: (0, S.wO)(e, Z, ee),
                                                      }),
                                                  })
                                                : (0, r.jsx)(E.Z, {
                                                      product: e,
                                                      category: l,
                                                      user: F,
                                                      tab: Z,
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
