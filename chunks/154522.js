r.d(t, { Q: () => g });
var n = r(200651),
    i = r(192379),
    o = r(120356),
    s = r.n(o),
    c = r(392711),
    l = r.n(c),
    a = r(481060),
    d = r(100527),
    u = r(267101),
    C = r(675297),
    p = r(891561),
    f = r(333866),
    b = r(388032),
    j = r(249433);
function g(e) {
    let { guildId: t, productId: r } = e,
        { listingsLoaded: o } = (0, u.eD)(t),
        c = (0, u.ue)(t),
        g = i.useRef(null),
        { sortOption: h } = (0, p.s)(),
        m = i.useMemo(
            () =>
                (function (e, t) {
                    let r, n;
                    switch (t) {
                        case f.zJ.NAME:
                            (r = (e) => e.name.toLowerCase()), (n = 'asc');
                            break;
                        case f.zJ.PRICE_ASC:
                            (r = 'price_tier'), (n = 'asc');
                            break;
                        case f.zJ.PRICE_DESC:
                            (r = 'price_tier'), (n = 'desc');
                            break;
                        case f.zJ.NEWEST_ARRIVALS:
                            (r = 'published_at'), (n = 'desc');
                            break;
                        default:
                            return e;
                    }
                    return l().orderBy(e, [r], [n]);
                })(c, h),
            [c, h]
        );
    return o
        ? (0, n.jsx)('ul', {
              className: j.cardContainer,
              'aria-label': b.NW.string(b.t.qe4kTU),
              children: m.map((e) =>
                  (0, n.jsx)(
                      'li',
                      {
                          className: j.card,
                          children: (0, n.jsx)(
                              'div',
                              {
                                  className: s()(j.cardContent, { [j.selectedCard]: e.id === r }),
                                  ref: e.id === r ? g : void 0,
                                  onLoad: () => {
                                      let t = g.current;
                                      null != t &&
                                          e.id === r &&
                                          (t.scrollIntoView({
                                              behavior: 'smooth',
                                              block: 'center'
                                          }),
                                          setTimeout(() => {
                                              t.classList.remove(j.selectedCard);
                                          }, 2000));
                                  },
                                  children: (0, n.jsx)(
                                      C.H,
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
        : (0, n.jsx)(a.$jN, {});
}
