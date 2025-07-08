(n.d(t, { Z: () => P }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(782568),
    u = n(607070),
    d = n(594174),
    p = n(451478),
    f = n(626135),
    g = n(63063),
    h = n(74538),
    b = n(381585),
    m = n(597688),
    _ = n(315066),
    C = n(243126),
    O = n(38900),
    E = n(709999),
    v = n(328626),
    S = n(619899),
    x = n(215023),
    y = n(981631),
    j = n(388032),
    T = n(806734);
let P = (e) => {
    var t;
    let { isLoading: n, sortedSkuIds: o, handleTransition: P, numVisibleItems: L, tab: I } = e,
        k = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        N = h.ZP.canUseCollectibles(k),
        B = (0, _.s)('useShopHomeSorting') && I === x.AW.HOME,
        { sortType: A, setSortType: R, sortedItems: w, sortOptions: Z, shuffleProducts: F, showRecommendationOption: D } = (0, C.N)(o, N),
        M = (0, S.St)(w),
        H = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        W = (0, a.e7)([p.Z], () => p.Z.isFocused()),
        V = !H && W,
        { animationPhase: U, startAnimation: G } = (0, v.y)(),
        z = (0, b.sp)(),
        Y = null != (t = null == z ? void 0 : z.sessionId) ? t : '',
        q = l.useRef(null),
        K = l.useCallback(
            (e) => {
                (G({
                    isShuffling: !1,
                    onOutroComplete: () => R(e)
                }),
                    f.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: Y,
                        sort_type: e
                    }));
            },
            [G, R, Y]
        );
    return null == k
        ? null
        : (0, r.jsxs)('div', {
              className: i()(T.popularPicksSection, T.centeredSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: T.blockHeader,
                      children: [
                          (0, r.jsxs)('div', {
                              className: T.headerLeft,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      variant: 'heading-lg/semibold',
                                      children: I === x.AW.ORBS ? j.intl.string(j.t.dFgeub) : j.intl.string(j.t.NSv5KS)
                                  }),
                                  D &&
                                      (0, r.jsx)(s.ua7, {
                                          text: j.intl.string(j.t['3taPdn']),
                                          position: 'top',
                                          'aria-label': j.intl.string(j.t['3taPdn']),
                                          children: (e) => {
                                              var t, n;
                                              return (0, r.jsx)(
                                                  s.P3F,
                                                  ((t = (function (e) {
                                                      for (var t = 1; t < arguments.length; t++) {
                                                          var n = null != arguments[t] ? arguments[t] : {},
                                                              r = Object.keys(n);
                                                          ('function' == typeof Object.getOwnPropertySymbols &&
                                                              (r = r.concat(
                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                  })
                                                              )),
                                                              r.forEach(function (t) {
                                                                  var r;
                                                                  ((r = n[t]),
                                                                      t in e
                                                                          ? Object.defineProperty(e, t, {
                                                                                value: r,
                                                                                enumerable: !0,
                                                                                configurable: !0,
                                                                                writable: !0
                                                                            })
                                                                          : (e[t] = r));
                                                              }));
                                                      }
                                                      return e;
                                                  })({}, e)),
                                                  (n = n =
                                                      {
                                                          onClick: () => (0, c.Z)(g.Z.getArticleURL(y.BhN.DATA_USED_FOR_RECOMMENDED)),
                                                          className: T.informationIcon,
                                                          children: (0, r.jsx)(s.d3s, { size: 'sm' })
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
                                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                        }),
                                                  t)
                                              );
                                          }
                                      })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: T.headerRight,
                              children: [
                                  B &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-md/medium',
                                                  children: j.intl.string(j.t.uaX709)
                                              }),
                                              (0, r.jsx)(s.PhF, {
                                                  options: Z,
                                                  select: K,
                                                  className: T.sortSelect,
                                                  isSelected: (e) => e === A,
                                                  serialize: (e) => e
                                              })
                                          ]
                                      }),
                                  I === x.AW.HOME &&
                                      (B
                                          ? (0, r.jsx)(s.zxk, {
                                                color: s.Ttl.PRIMARY,
                                                buttonRef: q,
                                                onClick: () => {
                                                    (G({
                                                        isShuffling: !0,
                                                        onOutroComplete: F,
                                                        returnRef: q
                                                    }),
                                                        f.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, { page_session_id: Y }));
                                                },
                                                disabled: U !== v.g.MOUNTED && U !== v.g.FINISHED,
                                                children: j.intl.string(j.t.X3tnc3)
                                            })
                                          : (0, r.jsx)(s.zxk, {
                                                color: s.Ttl.PRIMARY,
                                                look: s.iLD.FILLED,
                                                onClick: () => P('shop all top'),
                                                children: j.intl.string(j.t.xFcotb)
                                            }))
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: T.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(O.K, {}, t + 1)) })
                          : M.slice(0, L).map((e, t) => {
                                let n,
                                    l = m.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (V)
                                    if (U === v.g.SHUFFLE_OUT) return (0, r.jsx)('div', { className: T.shuffleOutro }, ''.concat(e.skuId, '-').concat(t));
                                    else U === v.g.SORT_OUT ? (n = T.sortChangedOutro) : U === v.g.SHUFFLE_IN ? (n = T.shuffleIntro) : U === v.g.SORT_IN && (n = T.sortChangedIntro);
                                return (0, r.jsx)(
                                    b.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: 'popular picks',
                                            categoryPosition: 2
                                        },
                                        children: (0, r.jsx)(E.Z, {
                                            product: e,
                                            category: l,
                                            user: k,
                                            tab: I,
                                            className: n
                                        })
                                    },
                                    null == e ? void 0 : e.skuId
                                );
                            })
                  })
              ]
          });
};
