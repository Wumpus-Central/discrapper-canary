n.d(t, { Z: () => j }), n(388685);
var r = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    i = n(442837),
    o = n(481060),
    s = n(782568),
    c = n(594174),
    u = n(63063),
    d = n(74538),
    b = n(381585),
    p = n(597688),
    f = n(315066),
    g = n(243126),
    h = n(38900),
    m = n(709999),
    _ = n(619899),
    C = n(215023),
    v = n(981631),
    O = n(388032),
    x = n(806734);
let j = (e) => {
    let { isLoading: t, sortedSkuIds: n, handleTransition: l, numVisibleItems: j, tab: y } = e,
        S = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        k = d.ZP.canUseCollectibles(S),
        P = (0, f.s)('useShopHomeSorting') && y === C.AW.HOME,
        { sortType: E, setSortType: w, sortedItems: B, sortOptions: T, shuffleProducts: I, showRecommendationOption: L } = (0, g.N)(n, k),
        N = (0, _.St)(B);
    return null == S
        ? null
        : (0, r.jsxs)('div', {
              className: a()(x.popularPicksSection, x.centeredSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: x.blockHeader,
                      children: [
                          (0, r.jsxs)('div', {
                              className: x.headerLeft,
                              children: [
                                  (0, r.jsx)(o.X6q, {
                                      variant: 'heading-lg/semibold',
                                      children: y === C.AW.ORBS ? O.intl.string(O.t.dFgeub) : O.intl.string(O.t.NSv5KS)
                                  }),
                                  L &&
                                      (0, r.jsx)(o.ua7, {
                                          text: O.intl.format(O.t.cl8gS0, { helpdeskArticle: u.Z.getArticleURL(v.BhN.DATA_USED_FOR_RECOMMENDED) }),
                                          position: 'top',
                                          'aria-label': O.intl.formatToPlainString(O.t.cl8gS0, { helpdeskArticle: u.Z.getArticleURL(v.BhN.DATA_USED_FOR_RECOMMENDED) }),
                                          children: (e) => {
                                              var t, n;
                                              return (0, r.jsx)(
                                                  o.P3F,
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
                                                          onClick: () => (0, s.Z)(u.Z.getArticleURL(v.BhN.DATA_USED_FOR_RECOMMENDED)),
                                                          className: x.informationIcon,
                                                          children: (0, r.jsx)(o.d3s, { size: 'sm' })
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
                              className: x.headerRight,
                              children: [
                                  P &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-xs/bold',
                                                  className: x.sortByText,
                                                  children: O.intl.string(O.t.uaX709)
                                              }),
                                              (0, r.jsx)(o.PhF, {
                                                  options: T,
                                                  select: (e) => w(e),
                                                  className: x.sortSelect,
                                                  isSelected: (e) => e === E,
                                                  serialize: (e) => e
                                              })
                                          ]
                                      }),
                                  y === C.AW.HOME &&
                                      (P
                                          ? (0, r.jsx)(o.zxk, {
                                                color: o.Ttl.PRIMARY,
                                                look: o.iLD.FILLED,
                                                onClick: () => I(),
                                                children: O.intl.string(O.t.X3tnc3)
                                            })
                                          : (0, r.jsx)(o.zxk, {
                                                color: o.Ttl.PRIMARY,
                                                look: o.iLD.FILLED,
                                                onClick: () => l('shop all top'),
                                                children: O.intl.string(O.t.xFcotb)
                                            }))
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: x.feed,
                      children: t
                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(h.K, {}, t + 1)) })
                          : (0, r.jsx)(r.Fragment, {
                                children: N.slice(0, j).map((e, t) => {
                                    let n = p.Z.getCategoryForProduct(e.skuId);
                                    return null == e || null == n
                                        ? null
                                        : (0, r.jsx)(
                                              b.k0,
                                              {
                                                  newValue: {
                                                      tilePosition: t,
                                                      pageSection: 'popular picks',
                                                      categoryPosition: 2
                                                  },
                                                  children: (0, r.jsx)(
                                                      m.Z,
                                                      {
                                                          product: e,
                                                          category: n,
                                                          user: S,
                                                          tab: y
                                                      },
                                                      e.skuId
                                                  )
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                })
                            })
                  })
              ]
          });
};
