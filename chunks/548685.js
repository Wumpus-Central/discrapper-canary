(n.d(t, { Z: () => L }), n(388685));
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
    O = n(38900),
    v = n(709999),
    E = n(328626),
    S = n(619899),
    x = n(215023),
    y = n(981631),
    T = n(388032),
    j = n(806734);
let L = (e) => {
    var t;
    let { isLoading: n, sortedSkuIds: i, handleTransition: L, numVisibleItems: P, tab: k } = e,
        I = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        B = h.ZP.canUseCollectibles(I),
        N = (0, _.s)('useShopHomeSorting') && k === x.AW.HOME,
        { sortType: A, setSortType: w, sortedItems: R, sortOptions: Z, shuffleProducts: M, showRecommendationOption: H } = (0, C.N)(i, B),
        D = (0, S.St)(R),
        F = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        W = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        V = !F && W,
        { animationPhase: U, startAnimation: G } = (0, E.y)(),
        z = (0, b.sp)(),
        Y = null != (t = null == z ? void 0 : z.sessionId) ? t : '',
        K = l.useRef(null),
        q = l.useCallback(
            (e) => {
                (G({
                    isShuffling: !1,
                    onOutroComplete: () => w(e)
                }),
                    g.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                        page_session_id: Y,
                        sort_type: e
                    }));
            },
            [G, w, Y]
        );
    return null == I
        ? null
        : (0, r.jsxs)('div', {
              className: a()(j.popularPicksSection, j.centeredSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: j.blockHeader,
                      children: [
                          (0, r.jsxs)('div', {
                              className: j.headerLeft,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      variant: 'heading-lg/semibold',
                                      children: k === x.AW.ORBS ? T.intl.string(T.t.dFgeub) : T.intl.string(T.t.NSv5KS)
                                  }),
                                  H &&
                                      (0, r.jsx)(s.ua7, {
                                          text: T.intl.string(T.t['3taPdn']),
                                          position: 'top',
                                          'aria-label': T.intl.string(T.t['3taPdn']),
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
                                                          onClick: () => (0, c.Z)(f.Z.getArticleURL(y.BhN.DATA_USED_FOR_RECOMMENDED)),
                                                          className: j.informationIcon,
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
                              className: j.headerRight,
                              children: [
                                  N &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-md/medium',
                                                  children: T.intl.string(T.t.uaX709)
                                              }),
                                              (0, r.jsx)(s.PhF, {
                                                  options: Z,
                                                  select: q,
                                                  className: j.sortSelect,
                                                  isSelected: (e) => e === A,
                                                  serialize: (e) => e
                                              })
                                          ]
                                      }),
                                  k === x.AW.HOME &&
                                      (N
                                          ? (0, r.jsx)(s.zxk, {
                                                color: s.Ttl.PRIMARY,
                                                buttonRef: K,
                                                onClick: () => {
                                                    (G({
                                                        isShuffling: !0,
                                                        onOutroComplete: M,
                                                        returnRef: K
                                                    }),
                                                        g.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, { page_session_id: Y }));
                                                },
                                                disabled: U !== E.g.MOUNTED && U !== E.g.FINISHED,
                                                children: T.intl.string(T.t.X3tnc3)
                                            })
                                          : (0, r.jsx)(s.zxk, {
                                                color: s.Ttl.PRIMARY,
                                                look: s.iLD.FILLED,
                                                onClick: () => L('shop all top'),
                                                children: T.intl.string(T.t.xFcotb)
                                            }))
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: j.feed,
                      children: n
                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(O.K, {}, t + 1)) })
                          : D.slice(0, P).map((e, t) => {
                                let n,
                                    l = m.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (V)
                                    if (U === E.g.SHUFFLE_OUT) return (0, r.jsx)('div', { className: j.shuffleOutro }, ''.concat(e.skuId, '-').concat(t));
                                    else U === E.g.SORT_OUT ? (n = j.sortChangedOutro) : U === E.g.SHUFFLE_IN ? (n = j.shuffleIntro) : U === E.g.SORT_IN && (n = j.sortChangedIntro);
                                return (0, r.jsx)(
                                    b.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: 'popular picks',
                                            categoryPosition: 2
                                        },
                                        children: (0, r.jsx)(v.Z, {
                                            product: e,
                                            category: l,
                                            user: I,
                                            tab: k,
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
