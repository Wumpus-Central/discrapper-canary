n.d(t, { Z: () => x });
var r = n(200651),
    l = n(192379),
    i = n(481060),
    s = n(727637),
    a = n(906732),
    o = n(333867),
    d = n(677232),
    c = n(884697),
    u = n(228624),
    C = n(67409),
    h = n(474936),
    p = n(231338),
    m = n(388032),
    f = n(290057);
let g = {
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
    x = (e) => {
        let { product: t, selectedVariantIndex: n, returnRef: x, onSuccess: b, tooltipDelay: _, isGiftEasterEggEnabled: v, disableCustomColor: j = !1 } = e,
            { analyticsLocations: k } = (0, a.ZP)(),
            E = l.useRef(null),
            L = (0, s.Z)(E),
            S = j ? p.BR.DARK : p.BR.LIGHT,
            T = (0, u.hv)('CollectiblesShopGiftButton');
        return (0, c.x6)(t)
            ? null
            : (0, r.jsx)(i.ua7, {
                  text: m.intl.string(m.t['JCFN//']),
                  delay: _,
                  children: (e) =>
                      (0, r.jsx)(i.zxk, {
                          ...e,
                          buttonRef: E,
                          className: f.giftButton,
                          color: j ? i.Ttl.BRAND : i.Ttl.CUSTOM,
                          look: i.zxk.Looks.FILLED,
                          size: i.PhG.ICON,
                          innerClassName: f.giftButtonInner,
                          'aria-label': m.intl.string(m.t.PEjaCw),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, o.Z)({
                                      skuId: (0, C.S)({
                                          product: t,
                                          selectedVariantIndex: n
                                      }),
                                      isGift: !0,
                                      giftingOrigin: h.Wt.SHOP_PAGE,
                                      analyticsLocations: k,
                                      returnRef: x,
                                      variantsReturnStyle: T,
                                      onClose:
                                          null != b
                                              ? (e) => {
                                                    e && b();
                                                }
                                              : void 0
                                  });
                          },
                          children: v
                              ? (0, r.jsx)(d.Z, {
                                    hovered: L,
                                    isContentDismissed: !0,
                                    themeOverride: S,
                                    boxColors: g
                                })
                              : (0, r.jsx)(i.OgN, {
                                    size: 'md',
                                    color: 'currentColor'
                                })
                      })
              });
    };
