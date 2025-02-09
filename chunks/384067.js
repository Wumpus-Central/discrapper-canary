n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(622535),
    o = n(481060),
    d = n(597688),
    c = n(297651),
    u = n(215023),
    C = n(388032),
    h = n(957726);
let p = (e) => {
    var t;
    let { wideBannerBlock: n, handleTransition: i, tab: p } = e,
        m = null === (t = d.Z.getCategoryByStoreListingId(n.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId,
        g = l.useRef(null),
        [f, x] = l.useState();
    l.useEffect(() => {
        let e = g.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && x(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let _ = null != m ? m : '',
        { handleCardVisibilityChange: b } = (0, c.E)(_, 'home', 'marketing wide banner'),
        v = n.bannerUrl;
    return null == v
        ? null
        : (0, r.jsx)(s.$, {
              onChange: b,
              threshold: 0,
              children: (0, r.jsxs)('div', {
                  className: a()(h.row, h.between, h.section, h.bannerBlockContainer),
                  children: [
                      (0, r.jsx)('div', {
                          className: h.wideBannerBackgroundImg,
                          children: (0, r.jsx)('img', {
                              ref: g,
                              src: v,
                              alt: n.title,
                              style: {
                                  width: '100%',
                                  height: null != f ? ''.concat(f, 'px') : 'auto',
                                  objectFit: 'cover',
                                  objectPosition: 'left center',
                                  display: 'block'
                              }
                          })
                      }),
                      (0, r.jsx)('div', {
                          className: h.wideBannerContentContainer,
                          style: { maxHeight: null != f ? ''.concat(f, 'px') : 'auto' },
                          children: (0, r.jsxs)('div', {
                              className: h.wideBannerTextContainer,
                              children: [
                                  (0, r.jsx)(o.X6q, {
                                      style: { color: n.bannerTextColor },
                                      variant: p === u.AW.ORBS ? 'heading-xxl/bold' : 'heading-lg/semibold',
                                      children: n.title
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      style: { color: n.bannerTextColor },
                                      lineClamp: 2,
                                      variant: p === u.AW.ORBS ? 'text-md/medium' : 'text-sm/medium',
                                      children: n.body
                                  })
                              ]
                          })
                      }),
                      !0 !== n.disableCta &&
                          (0, r.jsx)(o.zxk, {
                              className: h.wideBannerBlockButton,
                              color: o.Ttl.WHITE,
                              onClick: () => i('shop wide banner', _),
                              children: C.intl.string(C.t.jVcuVV)
                          })
                  ]
              })
          });
};
