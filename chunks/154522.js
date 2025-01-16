n.d(t, {
    Q: function () {
        return m;
    }
});
var r = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(392711),
    a = n.n(l),
    c = n(481060),
    d = n(100527),
    C = n(267101),
    u = n(675297),
    x = n(891561),
    f = n(333866),
    p = n(388032),
    h = n(134207);
function m(e) {
    let { guildId: t, productId: n } = e,
        { listingsLoaded: s } = (0, C.eD)(t),
        l = (0, C.ue)(t),
        m = i.useRef(null),
        { sortOption: g } = (0, x.s)(),
        v = i.useMemo(
            () =>
                (function (e, t) {
                    let n, r;
                    switch (t) {
                        case f.zJ.NAME:
                            (n = (e) => e.name.toLowerCase()), (r = 'asc');
                            break;
                        case f.zJ.PRICE_ASC:
                            (n = 'price_tier'), (r = 'asc');
                            break;
                        case f.zJ.PRICE_DESC:
                            (n = 'price_tier'), (r = 'desc');
                            break;
                        case f.zJ.NEWEST_ARRIVALS:
                            (n = 'published_at'), (r = 'desc');
                            break;
                        default:
                            return e;
                    }
                    return a().orderBy(e, [n], [r]);
                })(l, g),
            [l, g]
        );
    return s
        ? (0, r.jsx)('ul', {
              className: h.cardContainer,
              'aria-label': p.intl.string(p.t.qe4kTU),
              children: v.map((e) =>
                  (0, r.jsx)(
                      'li',
                      {
                          className: h.card,
                          children: (0, r.jsx)(
                              'div',
                              {
                                  className: o()(h.cardContent, { [h.selectedCard]: e.id === n }),
                                  ref: e.id === n ? m : void 0,
                                  onLoad: () => {
                                      let t = m.current;
                                      null != t &&
                                          e.id === n &&
                                          (t.scrollIntoView({
                                              behavior: 'smooth',
                                              block: 'center'
                                          }),
                                          setTimeout(() => {
                                              t.classList.remove(h.selectedCard);
                                          }, 2000));
                                  },
                                  children: (0, r.jsx)(
                                      u.H,
                                      {
                                          guildProductListing: e,
                                          guildId: t,
                                          location: d.Z.GUILD_SHOP_PAGE,
                                          shouldShowFullDescriptionButton: !1,
                                          hideRoleTag: !0,
                                          lineClamp: 2,
                                          cardWidth: 332,
                                          cardHeight: 347,
                                          thumbnailHeight: 187,
                                          descriptionTextVariant: 'text-xs/normal',
                                          showOpaqueBackground: !0
                                      },
                                      e.id
                                  )
                              },
                              e.id
                          )
                      },
                      e.id
                  )
              )
          })
        : (0, r.jsx)(c.Spinner, {});
}
