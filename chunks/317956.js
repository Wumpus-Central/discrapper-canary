r.d(t, { Z: () => g });
var n = r(200651),
    i = r(192379),
    o = r(481060),
    l = r(727637),
    a = r(906732),
    s = r(333867),
    c = r(677232),
    u = r(884697),
    d = r(228624),
    p = r(67409),
    b = r(474936),
    v = r(231338),
    f = r(388032),
    m = r(240590);
let h = {
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
        let { product: t, selectedVariantIndex: r, returnRef: g, onSuccess: x, tooltipDelay: y, isGiftEasterEggEnabled: _, color: O = o.Ttl.BRAND } = e,
            { analyticsLocations: j } = (0, a.ZP)(),
            P = i.useRef(null),
            C = (0, l.Z)(P),
            w = (0, d.hv)('CollectiblesShopGiftButton');
        return (0, u.x6)(t)
            ? null
            : (0, n.jsx)(o.ua7, {
                  text: f.NW.string(f.t['JCFN//']),
                  delay: y,
                  children: (e) => {
                      var i, l;
                      return (0, n.jsx)(
                          o.zxk,
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
                          (l = l =
                              {
                                  buttonRef: P,
                                  className: m.giftButton,
                                  color: O,
                                  look: o.zxk.Looks.FILLED,
                                  size: o.PhG.ICON,
                                  innerClassName: m.giftButtonInner,
                                  'aria-label': f.NW.string(f.t.PEjaCw),
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          (0, s.Z)({
                                              skuId: (0, p.S)({
                                                  product: t,
                                                  selectedVariantIndex: r
                                              }),
                                              isGift: !0,
                                              giftingOrigin: b.Wt.SHOP_PAGE,
                                              analyticsLocations: j,
                                              returnRef: g,
                                              variantsReturnStyle: w,
                                              onClose:
                                                  null != x
                                                      ? (e) => {
                                                            e && x();
                                                        }
                                                      : void 0
                                          });
                                  },
                                  children: _
                                      ? (0, n.jsx)(c.Z, {
                                            hovered: C,
                                            isContentDismissed: !0,
                                            themeOverride: v.BR.DARK,
                                            boxColors: h
                                        })
                                      : (0, n.jsx)(o.OgN, {
                                            size: 'md',
                                            color: 'currentColor'
                                        })
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                              : (function (e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var n = Object.getOwnPropertySymbols(e);
                                        r.push.apply(r, n);
                                    }
                                    return r;
                                })(Object(l)).forEach(function (e) {
                                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                }),
                          i)
                      );
                  }
              });
    };
