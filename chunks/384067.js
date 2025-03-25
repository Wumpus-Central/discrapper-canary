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
    f = n(981631),
    h = n(388032),
    m = n(39532);
let p = (e) => {
    var t, n, a;
    let { wideBannerBlock: p, handleTransition: b, tab: C } = e,
        _ = null === (t = d.Z.getCategoryByStoreListingId(p.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId,
        v = l.useRef(null),
        k = l.useRef(null),
        [x, j] = l.useState();
    l.useEffect(() => {
        let e = k.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && j(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let S = null != _ ? _ : '',
        { handleCardVisibilityChange: y } = (0, u.E)(S, 'home', 'marketing wide banner'),
        O = p.bannerUrl;
    return null == O
        ? null
        : (0, r.jsx)(s.$, {
              innerRef: v,
              onChange: y,
              threshold: 0,
              children: (0, r.jsxs)('div', {
                  ref: v,
                  className: o()(m.row, m.between, m.bannerBlockContainer, m.centeredSection),
                  children: [
                      (0, r.jsx)('div', {
                          className: m.wideBannerBackgroundImg,
                          children: (0, r.jsx)('img', {
                              ref: k,
                              src: O,
                              alt: p.title,
                              style: {
                                  width: '100%',
                                  height: null != x ? ''.concat(x, 'px') : 'auto',
                                  objectFit: 'cover',
                                  objectPosition: 'left center',
                                  display: 'block'
                              }
                          })
                      }),
                      (0, r.jsx)('div', {
                          className: m.wideBannerContentContainer,
                          style: { maxHeight: null != x ? ''.concat(x, 'px') : 'auto' },
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
                                      children: C === g.AW.ORBS ? h.NW.format(h.t.SFFP7O, { helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE) }) : p.body
                                  })
                              ]
                          })
                      }),
                      !0 !== p.disableCta &&
                          (0, r.jsx)(i.zxk, {
                              className: m.wideBannerBlockButton,
                              color: i.Ttl.PRIMARY,
                              onClick: () => b('shop wide banner', S),
                              children: h.NW.string(h.t.jVcuVV)
                          })
                  ]
              })
          });
};
