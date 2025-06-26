n.d(t, { Z: () => S });
var r = n(255367),
    l = n(73800),
    a = n(979554),
    o = n(481060),
    i = n(727637),
    s = n(906732),
    c = n(333867),
    u = n(677232),
    d = n(626135),
    p = n(381585),
    f = n(884697),
    b = n(228624),
    g = n(410127),
    h = n(67409),
    m = n(981631),
    _ = n(474936),
    C = n(231338),
    v = n(388032),
    O = n(846165);
let x = {
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
        let { product: t, selectedVariantIndex: n, returnRef: S, onSuccess: E, tooltipDelay: y, isGiftEasterEggEnabled: j, color: k = o.Ttl.BRAND } = e,
            { analyticsLocations: P } = (0, s.ZP)(),
            T = l.useRef(null),
            I = (0, i.Z)(T),
            L = (0, b.hv)('CollectiblesShopGiftButton'),
            B = (0, p.sp)(),
            w = (0, g.Z)();
        return (0, f.x6)(t)
            ? null
            : (0, r.jsx)(o.ua7, {
                  text: v.intl.string(v.t['JCFN//']),
                  delay: y,
                  children: (e) => {
                      var l, i;
                      return (0, r.jsx)(
                          o.zxk,
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
                          (i = i =
                              {
                                  buttonRef: T,
                                  className: O.giftButton,
                                  color: k,
                                  look: o.zxk.Looks.FILLED,
                                  size: o.PhG.ICON,
                                  innerClassName: O.giftButtonInner,
                                  'aria-label': v.intl.string(v.t.PEjaCw),
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          d.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                              collectibles_shop_session_id: null == B ? void 0 : B.sessionId,
                                              sku_id: t.skuId,
                                              page_section: null == B ? void 0 : B.pageSection,
                                              page_category: null == B ? void 0 : B.pageCategory,
                                              tile_type: a.Z[t.type],
                                              tile_position: String(null == B ? void 0 : B.tilePosition),
                                              cta_name: 'gift button',
                                              page_type: w || 'home'
                                          }),
                                          (0, c.Z)({
                                              skuId: (0, h.S)({
                                                  product: t,
                                                  selectedVariantIndex: n
                                              }),
                                              isGift: !0,
                                              giftingOrigin: _.Wt.SHOP_PAGE,
                                              analyticsLocations: P,
                                              returnRef: S,
                                              variantsReturnStyle: L,
                                              onClose:
                                                  null != E
                                                      ? (e) => {
                                                            e && E();
                                                        }
                                                      : void 0
                                          });
                                  },
                                  children: j
                                      ? (0, r.jsx)(u.Z, {
                                            hovered: I,
                                            isContentDismissed: !0,
                                            themeOverride: C.BR.DARK,
                                            boxColors: x
                                        })
                                      : (0, r.jsx)(o.OgN, {
                                            size: 'md',
                                            color: 'currentColor'
                                        })
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(i)).forEach(function (e) {
                                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                }),
                          l)
                      );
                  }
              });
    };
