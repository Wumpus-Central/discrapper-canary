n.d(t, { Z: () => _ });
var r = n(200651),
    l = n(192379),
    a = n(481060),
    o = n(727637),
    i = n(906732),
    s = n(333867),
    c = n(677232),
    u = n(884697),
    d = n(228624),
    b = n(67409),
    p = n(474936),
    f = n(231338),
    g = n(388032),
    h = n(846165);
let m = {
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
    _ = (e) => {
        let { product: t, selectedVariantIndex: n, returnRef: _, onSuccess: v, tooltipDelay: C, isGiftEasterEggEnabled: x, color: O = a.Ttl.BRAND } = e,
            { analyticsLocations: y } = (0, i.ZP)(),
            j = l.useRef(null),
            k = (0, o.Z)(j),
            S = (0, d.hv)('CollectiblesShopGiftButton');
        return (0, u.x6)(t)
            ? null
            : (0, r.jsx)(a.ua7, {
                  text: g.NW.string(g.t['JCFN//']),
                  delay: C,
                  children: (e) => {
                      var l, o;
                      return (0, r.jsx)(
                          a.zxk,
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
                                  buttonRef: j,
                                  className: h.giftButton,
                                  color: O,
                                  look: a.zxk.Looks.FILLED,
                                  size: a.PhG.ICON,
                                  innerClassName: h.giftButtonInner,
                                  'aria-label': g.NW.string(g.t.PEjaCw),
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          (0, s.Z)({
                                              skuId: (0, b.S)({
                                                  product: t,
                                                  selectedVariantIndex: n
                                              }),
                                              isGift: !0,
                                              giftingOrigin: p.Wt.SHOP_PAGE,
                                              analyticsLocations: y,
                                              returnRef: _,
                                              variantsReturnStyle: S,
                                              onClose:
                                                  null != v
                                                      ? (e) => {
                                                            e && v();
                                                        }
                                                      : void 0
                                          });
                                  },
                                  children: x
                                      ? (0, r.jsx)(c.Z, {
                                            hovered: k,
                                            isContentDismissed: !0,
                                            themeOverride: f.BR.DARK,
                                            boxColors: m
                                        })
                                      : (0, r.jsx)(a.OgN, {
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
