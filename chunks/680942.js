n.d(t, { Z: () => S });
var r = n(255367),
    l = n(73800),
    a = n(979554),
    i = n(481060),
    o = n(727637),
    s = n(906732),
    c = n(333867),
    u = n(677232),
    d = n(626135),
    p = n(381585),
    f = n(884697),
    g = n(228624),
    b = n(67409),
    h = n(981631),
    m = n(474936),
    _ = n(231338),
    C = n(388032),
    v = n(846165);
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
    S = (e) => {
        let { product: t, selectedVariantIndex: n, returnRef: S, onSuccess: x, tooltipDelay: E, isGiftEasterEggEnabled: y, color: j = i.Ttl.BRAND } = e,
            { analyticsLocations: P } = (0, s.ZP)(),
            k = l.useRef(null),
            T = (0, o.Z)(k),
            I = (0, g.hv)('CollectiblesShopGiftButton'),
            L = (0, p.sp)();
        return (0, f.x6)(t)
            ? null
            : (0, r.jsx)(i.ua7, {
                  text: C.intl.string(C.t['JCFN//']),
                  delay: E,
                  children: (e) => {
                      var l, o;
                      return (0, r.jsx)(
                          i.zxk,
                          ((l = (function (e) {
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
                          (o = o =
                              {
                                  buttonRef: k,
                                  className: v.giftButton,
                                  color: j,
                                  look: i.zxk.Looks.FILLED,
                                  size: i.PhG.ICON,
                                  innerClassName: v.giftButtonInner,
                                  'aria-label': C.intl.string(C.t.PEjaCw),
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          d.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                              collectibles_shop_session_id: null == L ? void 0 : L.sessionId,
                                              sku_id: t.skuId,
                                              page_section: null == L ? void 0 : L.pageSection,
                                              page_category: null == L ? void 0 : L.pageCategory,
                                              tile_type: a.Z[t.type],
                                              tile_position: String(null == L ? void 0 : L.tilePosition),
                                              cta_name: 'gift button'
                                          }),
                                          (0, c.Z)({
                                              skuId: (0, b.S)({
                                                  product: t,
                                                  selectedVariantIndex: n
                                              }),
                                              isGift: !0,
                                              giftingOrigin: m.Wt.SHOP_PAGE,
                                              analyticsLocations: P,
                                              returnRef: S,
                                              variantsReturnStyle: I,
                                              onClose:
                                                  null != x
                                                      ? (e) => {
                                                            e && x();
                                                        }
                                                      : void 0
                                          });
                                  },
                                  children: y
                                      ? (0, r.jsx)(u.Z, {
                                            hovered: T,
                                            isContentDismissed: !0,
                                            themeOverride: _.BR.DARK,
                                            boxColors: O
                                        })
                                      : (0, r.jsx)(i.OgN, {
                                            size: 'md',
                                            color: 'currentColor'
                                        })
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(o)).forEach(function (e) {
                                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                }),
                          l)
                      );
                  }
              });
    };
