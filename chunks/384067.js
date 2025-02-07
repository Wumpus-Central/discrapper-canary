n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(622535),
    o = n(481060),
    d = n(597688),
    c = n(297651),
    u = n(388032),
    C = n(218142);
let h = (e) => {
    var t;
    let { wideBannerBlock: n, handleTransition: i } = e,
        h = null === (t = d.Z.getCategoryByStoreListingId(n.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId,
        p = l.useRef(null),
        [m, g] = l.useState();
    l.useEffect(() => {
        let e = p.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && g(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let f = null != h ? h : '',
        { handleCardVisibilityChange: x } = (0, c.E)(f, 'home', 'marketing wide banner'),
        _ = n.bannerUrl;
    return null == _
        ? null
        : (0, r.jsx)(s.$, {
              onChange: x,
              threshold: 0,
              children: (0, r.jsxs)('div', {
                  className: a()(C.row, C.between, C.section, C.bannerBlockContainer),
                  children: [
                      (0, r.jsx)('div', {
                          className: C.wideBannerBackgroundImg,
                          children: (0, r.jsx)('img', {
                              ref: p,
                              src: _,
                              alt: n.title,
                              style: {
                                  width: '100%',
                                  height: null != m ? ''.concat(m, 'px') : 'auto',
                                  objectFit: 'cover',
                                  objectPosition: 'left center',
                                  display: 'block'
                              }
                          })
                      }),
                      (0, r.jsx)('div', {
                          className: C.wideBannerContentContainer,
                          style: { maxHeight: null != m ? ''.concat(m, 'px') : 'auto' },
                          children: (0, r.jsxs)('div', {
                              className: C.wideBannerTextContainer,
                              children: [
                                  (0, r.jsx)(o.X6q, {
                                      style: { color: n.bannerTextColor },
                                      variant: 'heading-lg/semibold',
                                      children: n.title
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      style: { color: n.bannerTextColor },
                                      lineClamp: 2,
                                      variant: 'text-sm/medium',
                                      children: n.body
                                  })
                              ]
                          })
                      }),
                      (0, r.jsx)(o.zxk, {
                          className: C.wideBannerBlockButton,
                          color: o.Ttl.WHITE,
                          onClick: () => i('shop wide banner', f),
                          children: u.intl.string(u.t.jVcuVV)
                      })
                  ]
              })
          });
};
