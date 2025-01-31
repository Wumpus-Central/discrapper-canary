n.d(t, { Q: () => m });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(392711),
    a = n.n(o),
    c = n(481060),
    d = n(100527),
    C = n(267101),
    u = n(675297),
    x = n(891561),
    p = n(333866),
    h = n(388032),
    _ = n(134207);
function m(e) {
    let { guildId: t, productId: n } = e,
        { listingsLoaded: s } = (0, C.eD)(t),
        o = (0, C.ue)(t),
        m = r.useRef(null),
        { sortOption: g } = (0, x.s)(),
        v = r.useMemo(
            () =>
                (function (e, t) {
                    let n, i;
                    switch (t) {
                        case p.zJ.NAME:
                            (n = (e) => e.name.toLowerCase()), (i = 'asc');
                            break;
                        case p.zJ.PRICE_ASC:
                            (n = 'price_tier'), (i = 'asc');
                            break;
                        case p.zJ.PRICE_DESC:
                            (n = 'price_tier'), (i = 'desc');
                            break;
                        case p.zJ.NEWEST_ARRIVALS:
                            (n = 'published_at'), (i = 'desc');
                            break;
                        default:
                            return e;
                    }
                    return a().orderBy(e, [n], [i]);
                })(o, g),
            [o, g]
        );
    return s
        ? (0, i.jsx)('ul', {
              className: _.cardContainer,
              'aria-label': h.intl.string(h.t.qe4kTU),
              children: v.map((e) =>
                  (0, i.jsx)(
                      'li',
                      {
                          className: _.card,
                          children: (0, i.jsx)(
                              'div',
                              {
                                  className: l()(_.cardContent, { [_.selectedCard]: e.id === n }),
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
                                              t.classList.remove(_.selectedCard);
                                          }, 2000));
                                  },
                                  children: (0, i.jsx)(
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
        : (0, i.jsx)(c.$jN, {});
}
