n.d(t, { Z: () => E }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    c = n(782568),
    u = n(607070),
    d = n(594174),
    b = n(451478),
    f = n(63063),
    p = n(74538),
    g = n(381585),
    h = n(597688),
    m = n(315066),
    _ = n(243126),
    C = n(38900),
    v = n(709999),
    O = n(328626),
    x = n(619899),
    S = n(215023),
    j = n(981631),
    y = n(388032),
    P = n(379890);
let E = (e) => {
    let { isLoading: t, sortedSkuIds: n, handleTransition: i, numVisibleItems: E, tab: k } = e,
        T = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        w = p.ZP.canUseCollectibles(T),
        I = (0, m.s)('useShopHomeSorting') && k === S.AW.HOME,
        { sortType: B, setSortType: L, sortedItems: N, sortOptions: R, shuffleProducts: A, showRecommendationOption: Z } = (0, _.N)(n, w),
        F = (0, x.St)(N),
        H = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        D = (0, o.e7)([b.Z], () => b.Z.isFocused()),
        M = !H && D,
        { animationPhase: W, startAnimation: V } = (0, O.y)(),
        U = l.useCallback(
            (e) => {
                V({
                    isShuffling: !1,
                    onOutroComplete: () => L(e)
                });
            },
            [V, L]
        );
    return null == T
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
                                      children: k === S.AW.ORBS ? y.intl.string(y.t.dFgeub) : y.intl.string(y.t.NSv5KS)
                                  }),
                                  Z &&
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
                                  I &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-md/medium',
                                                  children: y.intl.string(y.t.uaX709)
                                              }),
                                              (0, r.jsx)(s.PhF, {
                                                  options: R,
                                                  select: U,
                                                  className: P.sortSelect,
                                                  isSelected: (e) => e === B,
                                                  serialize: (e) => e
                                              })
                                          ]
                                      }),
                                  k === S.AW.HOME &&
                                      (I
                                          ? (0, r.jsx)(s.zxk, {
                                                color: s.Ttl.PRIMARY,
                                                look: s.iLD.FILLED,
                                                onClick: () =>
                                                    V({
                                                        isShuffling: !0,
                                                        onOutroComplete: A
                                                    }),
                                                disabled: W !== O.g.MOUNTED && W !== O.g.FINISHED,
                                                children: y.intl.string(y.t.X3tnc3)
                                            })
                                          : (0, r.jsx)(s.zxk, {
                                                color: s.Ttl.PRIMARY,
                                                look: s.iLD.FILLED,
                                                onClick: () => i('shop all top'),
                                                children: y.intl.string(y.t.xFcotb)
                                            }))
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: P.feed,
                      children: t
                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(C.K, {}, t + 1)) })
                          : F.slice(0, E).map((e, t) => {
                                let n,
                                    l = h.Z.getCategoryForProduct(e.skuId);
                                if (null == e || null == l) return null;
                                if (M)
                                    if (W === O.g.SHUFFLE_OUT) return (0, r.jsx)('div', { className: P.shuffleOutro }, ''.concat(e.skuId, '-').concat(t));
                                    else W === O.g.SORT_OUT ? (n = P.sortChangedOutro) : W === O.g.SHUFFLE_IN ? (n = P.shuffleIntro) : W === O.g.SORT_IN && (n = P.sortChangedIntro);
                                return (0, r.jsx)(
                                    g.k0,
                                    {
                                        newValue: {
                                            tilePosition: t,
                                            pageSection: 'popular picks',
                                            categoryPosition: 2
                                        },
                                        children: (0, r.jsx)(v.Z, {
                                            product: e,
                                            category: l,
                                            user: T,
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
