(r.d(t, { Z: () => j }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    a = r.n(i),
    o = r(442837),
    s = r(481060),
    c = r(782568),
    u = r(607070),
    d = r(594174),
    p = r(451478),
    f = r(626135),
    g = r(63063),
    h = r(74538),
    b = r(381585),
    m = r(597688),
    _ = r(243126),
    O = r(38900),
    C = r(709999),
    v = r(328626),
    E = r(619899),
    S = r(981631),
    y = r(388032),
    x = r(806734);
let j = (e) => {
    var t;
    let { isLoading: r, title: i, sortedSkuIds: j, numVisibleItems: T, hasSorting: P, tab: L } = e,
        k = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        I = h.ZP.canUseCollectibles(k),
        { sortType: N, setSortType: A, sortedItems: B, sortOptions: w, shuffleProducts: R, showRecommendationOption: Z } = (0, _.N)(j, I),
        D = (0, E.St)(B),
        F = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        M = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        H = !F && M,
        { animationPhase: W, startAnimation: V } = (0, v.y)(),
        U = (0, b.sp)(),
        z = null != (t = null == U ? void 0 : U.sessionId) ? t : '',
        G = l.useRef(null),
        q = l.useCallback(
            (e) => {
                (V({
                    isShuffling: !1,
                    onOutroComplete: () => A(e)
                }),
                    f.default.track(S.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: z,
                        sort_type: e
                    }));
            },
            [V, A, z]
        );
    return null == k
        ? null
        : (0, n.jsxs)('div', {
              className: a()(x.popularPicksSection, x.centeredSection),
              children: [
                  (0, n.jsxs)('div', {
                      className: x.blockHeader,
                      children: [
                          (0, n.jsxs)('div', {
                              className: x.headerLeft,
                              children: [
                                  (0, n.jsx)(s.X6q, {
                                      variant: 'heading-lg/semibold',
                                      children: i
                                  }),
                                  Z &&
                                      (0, n.jsx)(s.ua7, {
                                          text: y.intl.string(y.t['3taPdn']),
                                          position: 'top',
                                          'aria-label': y.intl.string(y.t['3taPdn']),
                                          children: (e) => {
                                              var t, r;
                                              return (0, n.jsx)(
                                                  s.P3F,
                                                  ((t = (function (e) {
                                                      for (var t = 1; t < arguments.length; t++) {
                                                          var r = null != arguments[t] ? arguments[t] : {},
                                                              n = Object.keys(r);
                                                          ('function' == typeof Object.getOwnPropertySymbols &&
                                                              (n = n.concat(
                                                                  Object.getOwnPropertySymbols(r).filter(function (e) {
                                                                      return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                                  })
                                                              )),
                                                              n.forEach(function (t) {
                                                                  var n;
                                                                  ((n = r[t]),
                                                                      t in e
                                                                          ? Object.defineProperty(e, t, {
                                                                                value: n,
                                                                                enumerable: !0,
                                                                                configurable: !0,
                                                                                writable: !0
                                                                            })
                                                                          : (e[t] = n));
                                                              }));
                                                      }
                                                      return e;
                                                  })({}, e)),
                                                  (r = r =
                                                      {
                                                          onClick: () => (0, c.Z)(g.Z.getArticleURL(S.BhN.DATA_USED_FOR_RECOMMENDED)),
                                                          className: x.informationIcon,
                                                          children: (0, n.jsx)(s.d3s, { size: 'sm' })
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
                                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                                        }),
                                                  t)
                                              );
                                          }
                                      })
                              ]
                          }),
                          P
                              ? (0, n.jsxs)('div', {
                                    className: x.headerRight,
                                    children: [
                                        (0, n.jsx)(s.Text, {
                                            variant: 'text-md/medium',
                                            children: y.intl.string(y.t.uaX709)
                                        }),
                                        (0, n.jsx)(s.PhF, {
                                            options: w,
                                            select: q,
                                            className: x.sortSelect,
                                            isSelected: (e) => e === N,
                                            serialize: (e) => e
                                        }),
                                        (0, n.jsx)(s.zxk, {
                                            variant: 'secondary',
                                            text: y.intl.string(y.t.X3tnc3),
                                            buttonRef: G,
                                            onClick: () => {
                                                (V({
                                                    isShuffling: !0,
                                                    onOutroComplete: R,
                                                    returnRef: G
                                                }),
                                                    f.default.track(S.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, { page_session_id: z }));
                                            },
                                            disabled: W !== v.g.MOUNTED && W !== v.g.FINISHED
                                        })
                                    ]
                                })
                              : null
                      ]
                  }),
                  (0, n.jsx)('div', {
                      className: x.feed,
                      children: r
                          ? (0, n.jsx)(n.Fragment, { children: [...Array(12)].map((e, t) => (0, n.jsx)(O.K, {}, t + 1)) })
                          : D.slice(0, T).map((e, t) => {
                                let r,
                                    l = m.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (H)
                                    if (W === v.g.SHUFFLE_OUT) return (0, n.jsx)('div', { className: x.shuffleOutro }, ''.concat(e.skuId, '-').concat(t));
                                    else W === v.g.SORT_OUT ? (r = x.sortChangedOutro) : W === v.g.SHUFFLE_IN ? (r = x.shuffleIntro) : W === v.g.SORT_IN && (r = x.sortChangedIntro);
                                return (0, n.jsx)(
                                    b.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: 'popular picks',
                                            categoryPosition: 2
                                        },
                                        children: (0, n.jsx)(C.Z, {
                                            product: e,
                                            category: l,
                                            user: k,
                                            tab: L,
                                            className: r
                                        })
                                    },
                                    null == e ? void 0 : e.skuId
                                );
                            })
                  })
              ]
          });
};
