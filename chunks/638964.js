i.d(t, { h: () => j });
var s = i(627968),
    r = i(64700),
    n = i(503698),
    l = i.n(n),
    d = i(735438),
    a = i.n(d),
    o = i(397927),
    c = i(793574),
    C = i(250627),
    u = i(284605),
    x = i(558060),
    h = i(284683),
    _ = i(985018),
    p = i(77142);
function j(e) {
    let { guildId: t, productId: i } = e,
        { listingsLoaded: n } = (0, C.bb)(t),
        d = (0, C.fZ)(t),
        j = r.useRef(null),
        { sortOption: g } = (0, x.R)(),
        m = r.useMemo(
            () =>
                (function (e, t) {
                    let i, s;
                    switch (t) {
                        case h.p$.NAME:
                            (i = (e) => e.name.toLowerCase()), (s = "asc");
                            break;
                        case h.p$.PRICE_ASC:
                            (i = "price_tier"), (s = "asc");
                            break;
                        case h.p$.PRICE_DESC:
                            (i = "price_tier"), (s = "desc");
                            break;
                        case h.p$.NEWEST_ARRIVALS:
                            (i = "published_at"), (s = "desc");
                            break;
                        default:
                            return e;
                    }
                    return a().orderBy(e, [i], [s]);
                })(d, g),
            [d, g],
        );
    return n
        ? (0, s.jsx)("ul", {
              className: p.Ui,
              "aria-label": _.intl.string(_.t.qe4kTa),
              children: m.map((e) =>
                  (0, s.jsx)(
                      "li",
                      {
                          className: p.Nr,
                          children: (0, s.jsx)(
                              "div",
                              {
                                  className: l()(p.Ux, { [p.Oj]: e.id === i }),
                                  ref: e.id === i ? j : void 0,
                                  onLoad: () => {
                                      let t = j.current;
                                      null != t &&
                                          e.id === i &&
                                          (t.scrollIntoView({ behavior: "smooth", block: "center" }),
                                          setTimeout(() => {
                                              t.classList.remove(p.Oj);
                                          }, 2e3));
                                  },
                                  children: (0, s.jsx)(
                                      u.i,
                                      {
                                          guildProductListing: e,
                                          guildId: t,
                                          location: c.A.GUILD_SHOP_PAGE,
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
        : (0, s.jsx)(o.y$y, {});
}
