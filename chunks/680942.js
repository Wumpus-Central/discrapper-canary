n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    l = n(727637),
    a = n(906732),
    s = n(333867),
    c = n(677232),
    u = n(884697),
    d = n(228624),
    _ = n(67409),
    p = n(474936),
    E = n(231338),
    f = n(388032),
    h = n(535156);
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
    b = (e) => {
        let { product: t, selectedVariantIndex: n, returnRef: b, onSuccess: O, tooltipDelay: g, isGiftEasterEggEnabled: N, color: I = o.Ttl.BRAND } = e,
            { analyticsLocations: T } = (0, a.ZP)(),
            C = i.useRef(null),
            S = (0, l.Z)(C),
            y = (0, d.hv)('CollectiblesShopGiftButton');
        return (0, u.x6)(t)
            ? null
            : (0, r.jsx)(o.ua7, {
                  text: f.NW.string(f.t['JCFN//']),
                  delay: g,
                  children: (e) => {
                      var i, l;
                      return (0, r.jsx)(
                          o.zxk,
                          ((i = (function (e) {
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
                          (l = l =
                              {
                                  buttonRef: C,
                                  className: h.giftButton,
                                  color: I,
                                  look: o.zxk.Looks.FILLED,
                                  size: o.PhG.ICON,
                                  innerClassName: h.giftButtonInner,
                                  'aria-label': f.NW.string(f.t.PEjaCw),
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          (0, s.Z)({
                                              skuId: (0, _.S)({
                                                  product: t,
                                                  selectedVariantIndex: n
                                              }),
                                              isGift: !0,
                                              giftingOrigin: p.Wt.SHOP_PAGE,
                                              analyticsLocations: T,
                                              returnRef: b,
                                              variantsReturnStyle: y,
                                              onClose:
                                                  null != O
                                                      ? (e) => {
                                                            e && O();
                                                        }
                                                      : void 0
                                          });
                                  },
                                  children: N
                                      ? (0, r.jsx)(c.Z, {
                                            hovered: S,
                                            isContentDismissed: !0,
                                            themeOverride: E.BR.DARK,
                                            boxColors: m
                                        })
                                      : (0, r.jsx)(o.OgN, {
                                            size: 'md',
                                            color: 'currentColor'
                                        })
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(l)).forEach(function (e) {
                                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                }),
                          i)
                      );
                  }
              });
    };
