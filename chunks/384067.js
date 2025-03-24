n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(622535),
    i = n(481060),
    c = n(63063),
    d = n(597688),
    u = n(297651),
    g = n(215023),
    h = n(981631),
    f = n(388032),
    m = n(39532);
let p = (e) => {
    var t, n, a;
    let { wideBannerBlock: p, handleTransition: b, tab: C } = e,
        _ = null === (t = d.Z.getCategoryByStoreListingId(p.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId,
        v = l.useRef(null),
        [k, x] = l.useState();
    l.useEffect(() => {
        let e = v.current;
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
    let j = null != _ ? _ : '',
        { handleCardVisibilityChange: S } = (0, u.E)(j, 'home', 'marketing wide banner'),
        y = p.bannerUrl;
    return null == y
        ? null
        : (0, r.jsx)(s.$, {
              onChange: S,
              threshold: 0,
              children: (0, r.jsxs)('div', {
                  className: o()(m.row, m.between, m.bannerBlockContainer, m.centeredSection),
                  children: [
                      (0, r.jsx)('div', {
                          className: m.wideBannerBackgroundImg,
                          children: (0, r.jsx)('img', {
                              ref: v,
                              src: y,
                              alt: p.title,
                              style: {
                                  width: '100%',
                                  height: null != k ? ''.concat(k, 'px') : 'auto',
                                  objectFit: 'cover',
                                  objectPosition: 'left center',
                                  display: 'block'
                              }
                          })
                      }),
                      (0, r.jsx)('div', {
                          className: m.wideBannerContentContainer,
                          style: { maxHeight: null != k ? ''.concat(k, 'px') : 'auto' },
                          children: (0, r.jsxs)('div', {
                              className: m.wideBannerTextContainer,
                              children: [
                                  (0, r.jsx)(i.X6q, {
                                      style: { color: null !== (n = p.bannerTextColor) && void 0 !== n ? n : 'var(--text-normal)' },
                                      variant: C === g.AW.ORBS ? 'heading-xl/bold' : 'heading-lg/semibold',
                                      children: p.title
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      style: { color: null !== (a = p.bannerTextColor) && void 0 !== a ? a : 'var(--text-normal)' },
                                      lineClamp: 2,
                                      variant: C === g.AW.ORBS ? 'text-md/medium' : 'text-sm/medium',
                                      children: C === g.AW.ORBS ? f.NW.format(f.t.SFFP7O, { helpdeskArticle: c.Z.getArticleURL(h.BhN.VIRTUAL_CURRENCY_LEARN_MORE) }) : p.body
                                  })
                              ]
                          })
                      }),
                      !0 !== p.disableCta &&
                          (0, r.jsx)(i.zxk, {
                              className: m.wideBannerBlockButton,
                              color: i.Ttl.PRIMARY,
                              onClick: () => b('shop wide banner', j),
                              children: f.NW.string(f.t.jVcuVV)
                          })
                  ]
              })
          });
};
