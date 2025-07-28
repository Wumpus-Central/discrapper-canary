(r.d(t, { Z: () => P }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(442837),
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
    _ = r(315066),
    O = r(243126),
    C = r(38900),
    v = r(709999),
    E = r(328626),
    S = r(619899),
    y = r(215023),
    x = r(981631),
    j = r(388032),
    T = r(806734);
let P = (e) => {
    var t;
    let { isLoading: r, sortedSkuIds: i, handleTransition: P, numVisibleItems: L, tab: k } = e,
        I = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        N = h.ZP.canUseCollectibles(I),
        A = (0, _.s)('useShopHomeSorting') && k === y.AW.HOME,
        { sortType: B, setSortType: w, sortedItems: R, sortOptions: Z, shuffleProducts: D, showRecommendationOption: F } = (0, O.N)(i, N),
        H = (0, S.St)(R),
        M = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        W = (0, a.e7)([p.Z], () => p.Z.isFocused()),
        V = !M && W,
        { animationPhase: U, startAnimation: z } = (0, E.y)(),
        G = (0, b.sp)(),
        q = null != (t = null == G ? void 0 : G.sessionId) ? t : '',
        Y = l.useRef(null),
        K = l.useCallback(
            (e) => {
                (z({
                    isShuffling: !1,
                    onOutroComplete: () => w(e)
                }),
                    f.default.track(x.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: q,
                        sort_type: e
                    }));
            },
            [z, w, q]
        );
    return null == I
        ? null
        : (0, n.jsxs)('div', {
              className: o()(T.popularPicksSection, T.centeredSection),
              children: [
                  (0, n.jsxs)('div', {
                      className: T.blockHeader,
                      children: [
                          (0, n.jsxs)('div', {
                              className: T.headerLeft,
                              children: [
                                  (0, n.jsx)(s.X6q, {
                                      variant: 'heading-lg/semibold',
                                      children: k === y.AW.ORBS ? j.intl.string(j.t.dFgeub) : j.intl.string(j.t.NSv5KS)
                                  }),
                                  F &&
                                      (0, n.jsx)(s.ua7, {
                                          text: j.intl.string(j.t['3taPdn']),
                                          position: 'top',
                                          'aria-label': j.intl.string(j.t['3taPdn']),
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
                                                          onClick: () => (0, c.Z)(g.Z.getArticleURL(x.BhN.DATA_USED_FOR_RECOMMENDED)),
                                                          className: T.informationIcon,
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
                          (0, n.jsxs)('div', {
                              className: T.headerRight,
                              children: [
                                  A &&
                                      (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(s.Text, {
                                                  variant: 'text-md/medium',
                                                  children: j.intl.string(j.t.uaX709)
                                              }),
                                              (0, n.jsx)(s.PhF, {
                                                  options: Z,
                                                  select: K,
                                                  className: T.sortSelect,
                                                  isSelected: (e) => e === B,
                                                  serialize: (e) => e
                                              })
                                          ]
                                      }),
                                  k === y.AW.HOME &&
                                      (A
                                          ? (0, n.jsx)(s.zxk, {
                                                variant: 'secondary',
                                                text: j.intl.string(j.t.X3tnc3),
                                                buttonRef: Y,
                                                onClick: () => {
                                                    (z({
                                                        isShuffling: !0,
                                                        onOutroComplete: D,
                                                        returnRef: Y
                                                    }),
                                                        f.default.track(x.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, { page_session_id: q }));
                                                },
                                                disabled: U !== E.g.MOUNTED && U !== E.g.FINISHED
                                            })
                                          : (0, n.jsx)(s.zxk, {
                                                variant: 'secondary',
                                                text: j.intl.string(j.t.xFcotb),
                                                onClick: () => P('shop all top')
                                            }))
                              ]
                          })
                      ]
                  }),
                  (0, n.jsx)('div', {
                      className: T.feed,
                      children: r
                          ? (0, n.jsx)(n.Fragment, { children: [...Array(12)].map((e, t) => (0, n.jsx)(C.K, {}, t + 1)) })
                          : H.slice(0, L).map((e, t) => {
                                let r,
                                    l = m.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (V)
                                    if (U === E.g.SHUFFLE_OUT) return (0, n.jsx)('div', { className: T.shuffleOutro }, ''.concat(e.skuId, '-').concat(t));
                                    else U === E.g.SORT_OUT ? (r = T.sortChangedOutro) : U === E.g.SHUFFLE_IN ? (r = T.shuffleIntro) : U === E.g.SORT_IN && (r = T.sortChangedIntro);
                                return (0, n.jsx)(
                                    b.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: 'popular picks',
                                            categoryPosition: 2
                                        },
                                        children: (0, n.jsx)(v.Z, {
                                            product: e,
                                            category: l,
                                            user: I,
                                            tab: k,
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
