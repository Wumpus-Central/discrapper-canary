r.d(t, { Z: () => j });
var n = r(255367),
    i = r(73800),
    o = r(979554),
    l = r(481060),
    a = r(727637),
    s = r(906732),
    c = r(333867),
    u = r(677232),
    d = r(626135),
    p = r(381585),
    b = r(884697),
    v = r(228624),
    f = r(410127),
    m = r(67409),
    h = r(981631),
    g = r(474936),
    x = r(231338),
    _ = r(388032),
    y = r(846165);
let O = {
        dark: [
            {
                box: '#FFF19E',
                ribbon: '#FF484B'
            },
            {
                box: '#17B5E2',
                ribbon: '#FFFFFF'
            },
            {
                box: '#FFE1A6',
                ribbon: '#C29CFF'
            },
            {
                box: '#60DA81',
                ribbon: '#FFF597'
            },
            {
                box: '#E4578A',
                ribbon: '#BEC4FF'
            },
            {
                box: '#AFE0FC',
                ribbon: '#FF9356'
            },
            {
                box: '#DB6D6D',
                ribbon: '#67DA9C'
            }
        ],
        light: [
            {
                box: '#FFF19E',
                ribbon: '#FF484B'
            },
            {
                box: '#025D90',
                ribbon: '#70FFF8'
            },
            {
                box: '#C29CFF',
                ribbon: '#255FA3'
            },
            {
                box: '#6AC082',
                ribbon: '#DED052'
            },
            {
                box: '#AC448B',
                ribbon: '#4845B8'
            },
            {
                box: '#175B82',
                ribbon: '#F9D249'
            },
            {
                box: '#B54141',
                ribbon: '#026530'
            }
        ]
    },
    j = (e) => {
        let { product: t, selectedVariantIndex: r, returnRef: j, onSuccess: P, tooltipDelay: C, isGiftEasterEggEnabled: w, color: k = l.Ttl.BRAND } = e,
            { analyticsLocations: E } = (0, s.ZP)(),
            S = i.useRef(null),
            I = (0, a.Z)(S),
            N = (0, v.hv)('CollectiblesShopGiftButton'),
            F = (0, p.sp)(),
            B = (0, f.Z)();
        return (0, b.x6)(t)
            ? null
            : (0, n.jsx)(l.ua7, {
                  text: _.intl.string(_.t['JCFN//']),
                  delay: C,
                  children: (e) => {
                      var i, a;
                      return (0, n.jsx)(
                          l.zxk,
                          ((i = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = null != arguments[t] ? arguments[t] : {},
                                      n = Object.keys(r);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (n = n.concat(
                                          Object.getOwnPropertySymbols(r).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                          })
                                      )),
                                      n.forEach(function (t) {
                                          var n;
                                          (n = r[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: n,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = n);
                                      });
                              }
                              return e;
                          })({}, e)),
                          (a = a =
                              {
                                  buttonRef: S,
                                  className: y.giftButton,
                                  color: k,
                                  look: l.zxk.Looks.FILLED,
                                  size: l.PhG.ICON,
                                  innerClassName: y.giftButtonInner,
                                  'aria-label': _.intl.string(_.t.PEjaCw),
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          d.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                              collectibles_shop_session_id: null == F ? void 0 : F.sessionId,
                                              sku_id: t.skuId,
                                              page_section: null == F ? void 0 : F.pageSection,
                                              page_category: null == F ? void 0 : F.pageCategory,
                                              tile_type: o.Z[t.type],
                                              tile_position: String(null == F ? void 0 : F.tilePosition),
                                              cta_name: 'gift button',
                                              page_type: B || 'home'
                                          }),
                                          (0, c.Z)({
                                              skuId: (0, m.S)({
                                                  product: t,
                                                  selectedVariantIndex: r
                                              }),
                                              isGift: !0,
                                              giftingOrigin: g.Wt.SHOP_PAGE,
                                              analyticsLocations: E,
                                              returnRef: j,
                                              variantsReturnStyle: N,
                                              onClose:
                                                  null != P
                                                      ? (e) => {
                                                            e && P();
                                                        }
                                                      : void 0
                                          });
                                  },
                                  children: w
                                      ? (0, n.jsx)(u.Z, {
                                            hovered: I,
                                            isContentDismissed: !0,
                                            themeOverride: x.BR.DARK,
                                            boxColors: O
                                        })
                                      : (0, n.jsx)(l.OgN, {
                                            size: 'md',
                                            color: 'currentColor'
                                        })
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                              : (function (e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var n = Object.getOwnPropertySymbols(e);
                                        r.push.apply(r, n);
                                    }
                                    return r;
                                })(Object(a)).forEach(function (e) {
                                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                }),
                          i)
                      );
                  }
              });
    };
