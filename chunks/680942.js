r.d(t, { Z: () => g });
var n = r(200651),
    l = r(192379),
    i = r(481060),
    a = r(727637),
    o = r(906732),
    s = r(333867),
    c = r(677232),
    d = r(884697),
    u = r(228624),
    p = r(67409),
    f = r(474936),
    h = r(231338),
    C = r(388032),
    m = r(275509);
let b = {
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
    g = (e) => {
        let { product: t, selectedVariantIndex: r, returnRef: g, onSuccess: v, tooltipDelay: x, isGiftEasterEggEnabled: _, disableCustomColor: j = !1 } = e,
            { analyticsLocations: y } = (0, o.ZP)(),
            O = l.useRef(null),
            k = (0, a.Z)(O),
            P = j ? h.BR.DARK : h.BR.LIGHT,
            S = (0, u.hv)('CollectiblesShopGiftButton');
        return (0, d.x6)(t)
            ? null
            : (0, n.jsx)(i.ua7, {
                  text: C.NW.string(C.t['JCFN//']),
                  delay: x,
                  children: (e) => {
                      var l, a;
                      return (0, n.jsx)(
                          i.zxk,
                          ((l = (function (e) {
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
                                  buttonRef: O,
                                  className: m.giftButton,
                                  color: j ? i.Ttl.BRAND : i.Ttl.CUSTOM,
                                  look: i.zxk.Looks.FILLED,
                                  size: i.PhG.ICON,
                                  innerClassName: m.giftButtonInner,
                                  'aria-label': C.NW.string(C.t.PEjaCw),
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          (0, s.Z)({
                                              skuId: (0, p.S)({
                                                  product: t,
                                                  selectedVariantIndex: r
                                              }),
                                              isGift: !0,
                                              giftingOrigin: f.Wt.SHOP_PAGE,
                                              analyticsLocations: y,
                                              returnRef: g,
                                              variantsReturnStyle: S,
                                              onClose:
                                                  null != v
                                                      ? (e) => {
                                                            e && v();
                                                        }
                                                      : void 0
                                          });
                                  },
                                  children: _
                                      ? (0, n.jsx)(c.Z, {
                                            hovered: k,
                                            isContentDismissed: !0,
                                            themeOverride: P,
                                            boxColors: b
                                        })
                                      : (0, n.jsx)(i.OgN, {
                                            size: 'md',
                                            color: 'currentColor'
                                        })
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                              : (function (e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var n = Object.getOwnPropertySymbols(e);
                                        r.push.apply(r, n);
                                    }
                                    return r;
                                })(Object(a)).forEach(function (e) {
                                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                                }),
                          l)
                      );
                  }
              });
    };
