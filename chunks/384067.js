n.d(t, { Z: () => m }), n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(622535),
    o = n(481060),
    d = n(597688),
    c = n(297651),
    u = n(215023),
    C = n(388032),
    h = n(472739);
let m = (e) => {
    var t;
    let { wideBannerBlock: n, handleTransition: i, tab: m } = e,
        p = null === (t = d.Z.getCategoryByStoreListingId(n.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId,
        g = r.useRef(null),
        [f, x] = r.useState();
    r.useEffect(() => {
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
    let b = null != p ? p : '',
        { handleCardVisibilityChange: v } = (0, c.E)(b, 'home', 'marketing wide banner'),
        _ = n.bannerUrl;
    return null == _
        ? null
        : (0, l.jsx)(s.$, {
              onChange: v,
              threshold: 0,
              children: (0, l.jsxs)('div', {
                  className: a()(h.row, h.between, h.section, h.bannerBlockContainer),
                  children: [
                      (0, l.jsx)('div', {
                          className: h.wideBannerBackgroundImg,
                          children: (0, l.jsx)('img', {
                              ref: g,
                              src: _,
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
                      (0, l.jsx)('div', {
                          className: h.wideBannerContentContainer,
                          style: { maxHeight: null != f ? ''.concat(f, 'px') : 'auto' },
                          children: (0, l.jsxs)('div', {
                              className: h.wideBannerTextContainer,
                              children: [
                                  (0, l.jsx)(o.X6q, {
                                      style: { color: n.bannerTextColor },
                                      variant: m === u.AW.ORBS ? 'heading-xl/bold' : 'heading-lg/semibold',
                                      children: n.title
                                  }),
                                  (0, l.jsx)(o.Text, {
                                      style: { color: m === u.AW.ORBS ? 'rgba(255, 255, 255, 0.65)' : n.bannerTextColor },
                                      lineClamp: 2,
                                      variant: m === u.AW.ORBS ? 'text-md/medium' : 'text-sm/medium',
                                      children: n.body
                                  })
                              ]
                          })
                      }),
                      !0 !== n.disableCta &&
                          (0, l.jsx)(o.zxk, {
                              className: h.wideBannerBlockButton,
                              color: o.Ttl.WHITE,
                              onClick: () => i('shop wide banner', b),
                              children: C.intl.string(C.t.jVcuVV)
                          })
                  ]
              })
          });
};
