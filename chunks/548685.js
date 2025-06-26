n.d(t, { Z: () => P }), n(388685);
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
    f = n(626135),
    b = n(63063),
    g = n(74538),
    h = n(381585),
    m = n(597688),
    _ = n(315066),
    C = n(243126),
    v = n(38900),
    O = n(709999),
    E = n(328626),
    x = n(619899),
    S = n(215023),
    j = n(981631),
    y = n(388032),
    k = n(806734);
let P = (e) => {
    var t;
    let { isLoading: n, sortedSkuIds: a, handleTransition: P, numVisibleItems: T, tab: I } = e,
        L = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        B = g.ZP.canUseCollectibles(L),
        N = (0, _.s)('useShopHomeSorting') && I === S.AW.HOME,
        { sortType: A, setSortType: w, sortedItems: Z, sortOptions: R, shuffleProducts: F, showRecommendationOption: D } = (0, C.N)(a, B),
        H = (0, x.St)(Z),
        M = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        W = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        V = !M && W,
        { animationPhase: U, startAnimation: G } = (0, E.y)(),
        z = (0, h.sp)(),
        q = null != (t = null == z ? void 0 : z.sessionId) ? t : '',
        Y = l.useRef(null),
        K = l.useCallback(
            (e) => {
                G({
                    isShuffling: !1,
                    onOutroComplete: () => w(e)
                }),
                    f.default.track(j.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: q,
                        sort_type: e
                    });
            },
            [G, w, q]
        );
    return null == L
        ? null
        : (0, r.jsxs)('div', {
              className: i()(k.popularPicksSection, k.centeredSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: k.blockHeader,
                      children: [
                          (0, r.jsxs)('div', {
                              className: k.headerLeft,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      variant: 'heading-lg/semibold',
                                      children: I === S.AW.ORBS ? y.intl.string(y.t.dFgeub) : y.intl.string(y.t.NSv5KS)
                                  }),
                                  D &&
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
                                                          'function' == typeof Object.getOwnPropertySymbols &&
                                                              (r = r.concat(
                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                  })
                                                              )),
                                                              r.forEach(function (t) {
                                                                  var r;
                                                                  (r = n[t]),
                                                                      t in e
                                                                          ? Object.defineProperty(e, t, {
                                                                                value: r,
                                                                                enumerable: !0,
                                                                                configurable: !0,
                                                                                writable: !0
                                                                            })
                                                                          : (e[t] = r);
                                                              });
                                                      }
                                                      return e;
                                                  })({}, e)),
                                                  (n = n =
                                                      {
                                                          onClick: () => (0, c.Z)(b.Z.getArticleURL(j.BhN.DATA_USED_FOR_RECOMMENDED)),
                                                          className: k.informationIcon,
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
                              className: k.headerRight,
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
                                                  className: k.sortSelect,
                                                  isSelected: (e) => e === A,
                                                  serialize: (e) => e
                                              })
                                          ]
                                      }),
                                  I === S.AW.HOME &&
                                      (N
                                          ? (0, r.jsx)(s.zxk, {
                                                color: s.Ttl.PRIMARY,
                                                buttonRef: Y,
                                                onClick: () => {
                                                    G({
                                                        isShuffling: !0,
                                                        onOutroComplete: F,
                                                        returnRef: Y
                                                    }),
                                                        f.default.track(j.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, { page_session_id: q });
                                                },
                                                disabled: U !== E.g.MOUNTED && U !== E.g.FINISHED,
                                                children: y.intl.string(y.t.X3tnc3)
                                            })
                                          : (0, r.jsx)(s.zxk, {
                                                color: s.Ttl.PRIMARY,
                                                look: s.iLD.FILLED,
                                                onClick: () => P('shop all top'),
                                                children: y.intl.string(y.t.xFcotb)
                                            }))
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: k.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(v.K, {}, t + 1)) })
                          : H.slice(0, T).map((e, t) => {
                                let n,
                                    l = m.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (V)
                                    if (U === E.g.SHUFFLE_OUT) return (0, r.jsx)('div', { className: k.shuffleOutro }, ''.concat(e.skuId, '-').concat(t));
                                    else U === E.g.SORT_OUT ? (n = k.sortChangedOutro) : U === E.g.SHUFFLE_IN ? (n = k.shuffleIntro) : U === E.g.SORT_IN && (n = k.sortChangedIntro);
                                return (0, r.jsx)(
                                    h.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: 'popular picks',
                                            categoryPosition: 2
                                        },
                                        children: (0, r.jsx)(O.Z, {
                                            product: e,
                                            category: l,
                                            user: L,
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
