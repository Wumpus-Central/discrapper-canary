var r = n(200651),
    a = n(192379),
    i = n(481060),
    l = n(727637),
    s = n(906732),
    o = n(333867),
    c = n(685311),
    d = n(884697),
    u = n(228624),
    m = n(67409),
    h = n(474936),
    g = n(231338),
    p = n(388032),
    f = n(74483);
let C = {
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
};
t.Z = (e) => {
    let { product: t, selectedVariantIndex: n, returnRef: b, onSuccess: v, tooltipDelay: x, isGiftEasterEggEnabled: _, disableCustomColor: k = !1 } = e,
        { analyticsLocations: I } = (0, s.ZP)(),
        S = a.useRef(null),
        E = (0, l.Z)(S),
        j = k ? g.BR.DARK : g.BR.LIGHT,
        T = (0, u.hv)('CollectiblesShopGiftButton');
    return (0, d.x6)(t)
        ? null
        : (0, r.jsx)(i.Tooltip, {
              text: p.intl.string(p.t['JCFN//']),
              delay: x,
              children: (e) =>
                  (0, r.jsx)(i.Button, {
                      ...e,
                      buttonRef: S,
                      className: f.giftButton,
                      color: k ? i.ButtonColors.BRAND : i.ButtonColors.CUSTOM,
                      look: i.Button.Looks.FILLED,
                      size: i.ButtonSizes.ICON,
                      innerClassName: f.giftButtonInner,
                      'aria-label': p.intl.string(p.t.PEjaCw),
                      onClick: (e) => {
                          e.stopPropagation(),
                              (0, o.Z)({
                                  skuId: (0, m.S)({
                                      product: t,
                                      selectedVariantIndex: n
                                  }),
                                  isGift: !0,
                                  giftingOrigin: h.Wt.SHOP_PAGE,
                                  analyticsLocations: I,
                                  returnRef: b,
                                  variantsReturnStyle: T,
                                  onClose:
                                      null != v
                                          ? (e) => {
                                                e && v();
                                            }
                                          : void 0
                              });
                      },
                      children: _
                          ? (0, r.jsx)(c.e, {
                                hovered: E,
                                isContentDismissed: !0,
                                themeOverride: j,
                                boxColors: C
                            })
                          : (0, r.jsx)(i.GiftIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
          });
};
