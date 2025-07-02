(n.d(t, { Z: () => k }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    c = n(782568),
    u = n(607070),
    d = n(594174),
    p = n(451478),
    g = n(626135),
    f = n(63063),
    h = n(74538),
    b = n(381585),
    m = n(597688),
    _ = n(315066),
    C = n(243126),
    v = n(38900),
    O = n(709999),
    x = n(328626),
    S = n(619899),
    E = n(215023),
    j = n(981631),
    y = n(388032),
    P = n(806734);
let k = (e) => {
    var t;
    let { isLoading: n, sortedSkuIds: i, handleTransition: k, numVisibleItems: T, tab: L } = e,
        I = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        B = h.ZP.canUseCollectibles(I),
        N = (0, _.s)('useShopHomeSorting') && L === E.AW.HOME,
        { sortType: w, setSortType: A, sortedItems: Z, sortOptions: R, shuffleProducts: H, showRecommendationOption: M } = (0, C.N)(i, B),
        D = (0, S.St)(Z),
        F = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        W = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        V = !F && W,
        { animationPhase: U, startAnimation: z } = (0, x.y)(),
        G = (0, b.sp)(),
        q = null != (t = null == G ? void 0 : G.sessionId) ? t : '',
        Y = l.useRef(null),
        K = l.useCallback(
            (e) => {
                (z({
                    isShuffling: !1,
                    onOutroComplete: () => A(e)
                }),
                    g.default.track(j.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: q,
                        sort_type: e
                    }));
            },
            [z, A, q]
        );
    return null == I
        ? null
        : (0, r.jsxs)('div', {
              className: a()(P.popularPicksSection, P.centeredSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: P.blockHeader,
                      children: [
                          (0, r.jsxs)('div', {
                              className: P.headerLeft,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      variant: 'heading-lg/semibold',
                                      children: L === E.AW.ORBS ? y.intl.string(y.t.dFgeub) : y.intl.string(y.t.NSv5KS)
                                  }),
                                  M &&
                                      (0, r.jsx)(s.ua7, {
                                          text: y.intl.string(y.t['3taPdn']),
                                          position: 'top',
                                          'aria-label': y.intl.string(y.t['3taPdn']),
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
                                                          onClick: () => (0, c.Z)(f.Z.getArticleURL(j.BhN.DATA_USED_FOR_RECOMMENDED)),
                                                          className: P.informationIcon,
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
                              className: P.headerRight,
                              children: [
                                  N &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-md/medium',
                                                  children: y.intl.string(y.t.uaX709)
                                              }),
                                              (0, r.jsx)(s.PhF, {
                                                  options: R,
                                                  select: K,
                                                  className: P.sortSelect,
                                                  isSelected: (e) => e === w,
                                                  serialize: (e) => e
                                              })
                                          ]
                                      }),
                                  L === E.AW.HOME &&
                                      (N
                                          ? (0, r.jsx)(s.zxk, {
                                                color: s.Ttl.PRIMARY,
                                                buttonRef: Y,
                                                onClick: () => {
                                                    (z({
                                                        isShuffling: !0,
                                                        onOutroComplete: H,
                                                        returnRef: Y
                                                    }),
                                                        g.default.track(j.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, { page_session_id: q }));
                                                },
                                                disabled: U !== x.g.MOUNTED && U !== x.g.FINISHED,
                                                children: y.intl.string(y.t.X3tnc3)
                                            })
                                          : (0, r.jsx)(s.zxk, {
                                                color: s.Ttl.PRIMARY,
                                                look: s.iLD.FILLED,
                                                onClick: () => k('shop all top'),
                                                children: y.intl.string(y.t.xFcotb)
                                            }))
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: P.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(v.K, {}, t + 1)) })
                          : D.slice(0, T).map((e, t) => {
                                let n,
                                    l = m.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (V)
                                    if (U === x.g.SHUFFLE_OUT) return (0, r.jsx)('div', { className: P.shuffleOutro }, ''.concat(e.skuId, '-').concat(t));
                                    else U === x.g.SORT_OUT ? (n = P.sortChangedOutro) : U === x.g.SHUFFLE_IN ? (n = P.shuffleIntro) : U === x.g.SORT_IN && (n = P.sortChangedIntro);
                                return (0, r.jsx)(
                                    b.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: 'popular picks',
                                            categoryPosition: 2
                                        },
                                        children: (0, r.jsx)(O.Z, {
                                            product: e,
                                            category: l,
                                            user: I,
                                            tab: L,
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
