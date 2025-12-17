r.d(t, { Q: () => g });
var n = r(54381),
    i = r(473749),
    o = r(120356),
    l = r.n(o),
    c = r(392711),
    s = r.n(c),
    a = r(481060),
    d = r(100527),
    u = r(267101),
    C = r(675297),
    p = r(891561),
    f = r(333866),
    b = r(388032),
    j = r(579574);
function g(e) {
    let { guildId: t, productId: r } = e,
        { listingsLoaded: o } = (0, u.eD)(t),
        c = (0, u.ue)(t),
        g = i.useRef(null),
        { sortOption: O } = (0, p.s)(),
        h = i.useMemo(
            () =>
                (function (e, t) {
                    let r, n;
                    switch (t) {
                        case f.zJ.NAME:
                            (r = (e) => e.name.toLowerCase()), (n = "asc");
                            break;
                        case f.zJ.PRICE_ASC:
                            (r = "price_tier"), (n = "asc");
                            break;
                        case f.zJ.PRICE_DESC:
                            (r = "price_tier"), (n = "desc");
                            break;
                        case f.zJ.NEWEST_ARRIVALS:
                            (r = "published_at"), (n = "desc");
                            break;
                        default:
                            return e;
                    }
                    return s().orderBy(e, [r], [n]);
                })(c, O),
            [c, O],
        );
    return o
        ? (0, n.jsx)("ul", {
              className: j.cardContainer,
              "aria-label": b.intl.string(b.t.qe4kTa),
              children: h.map((e) =>
                  (0, n.jsx)(
                      "li",
                      {
                          className: j.card,
                          children: (0, n.jsx)(
                              "div",
                              {
                                  className: l()(j.cardContent, { [j.selectedCard]: e.id === r }),
                                  ref: e.id === r ? g : void 0,
                                  onLoad: () => {
                                      let t = g.current;
                                      null != t &&
                                          e.id === r &&
                                          (t.scrollIntoView({
                                              behavior: "smooth",
                                              block: "center",
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
                                          descriptionTextVariant: "text-xs/normal",
                                          showOpaqueBackground: !0,
                                      },
                                      e.id,
                                  ),
                              },
                              e.id,
                          ),
                      },
                      e.id,
                  ),
              ),
          })
        : (0, n.jsx)(a.$jN, {});
}
