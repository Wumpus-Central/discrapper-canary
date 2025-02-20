r.d(t, { Z: () => h }), r(47120);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    a = r.n(i),
    o = r(622535),
    s = r(481060),
    c = r(597688),
    d = r(297651),
    u = r(215023),
    p = r(388032),
    f = r(974492);
let h = (e) => {
    var t;
    let { wideBannerBlock: r, handleTransition: i, tab: h } = e,
        C = null === (t = c.Z.getCategoryByStoreListingId(r.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId,
        m = l.useRef(null),
        [b, g] = l.useState();
    l.useEffect(() => {
        let e = m.current;
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
    let v = null != C ? C : '',
        { handleCardVisibilityChange: x } = (0, d.E)(v, 'home', 'marketing wide banner'),
        _ = r.bannerUrl;
    return null == _
        ? null
        : (0, n.jsx)(o.$, {
              onChange: x,
              threshold: 0,
              children: (0, n.jsxs)('div', {
                  className: a()(f.row, f.between, f.section, f.bannerBlockContainer),
                  children: [
                      (0, n.jsx)('div', {
                          className: f.wideBannerBackgroundImg,
                          children: (0, n.jsx)('img', {
                              ref: m,
                              src: _,
                              alt: r.title,
                              style: {
                                  width: '100%',
                                  height: null != b ? ''.concat(b, 'px') : 'auto',
                                  objectFit: 'cover',
                                  objectPosition: 'left center',
                                  display: 'block'
                              }
                          })
                      }),
                      (0, n.jsx)('div', {
                          className: f.wideBannerContentContainer,
                          style: { maxHeight: null != b ? ''.concat(b, 'px') : 'auto' },
                          children: (0, n.jsxs)('div', {
                              className: f.wideBannerTextContainer,
                              children: [
                                  (0, n.jsx)(s.X6q, {
                                      style: { color: r.bannerTextColor },
                                      variant: h === u.AW.ORBS ? 'heading-xl/bold' : 'heading-lg/semibold',
                                      children: r.title
                                  }),
                                  (0, n.jsx)(s.Text, {
                                      style: { color: h === u.AW.ORBS ? 'rgba(255, 255, 255, 0.65)' : r.bannerTextColor },
                                      lineClamp: 2,
                                      variant: h === u.AW.ORBS ? 'text-md/medium' : 'text-sm/medium',
                                      children: r.body
                                  })
                              ]
                          })
                      }),
                      !0 !== r.disableCta &&
                          (0, n.jsx)(s.zxk, {
                              className: f.wideBannerBlockButton,
                              color: s.Ttl.WHITE,
                              onClick: () => i('shop wide banner', v),
                              children: p.NW.string(p.t.jVcuVV)
                          })
                  ]
              })
          });
};
