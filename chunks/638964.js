i.d(e, { h: () => j });
var s = i(627968),
    r = i(64700),
    n = i(503698),
    l = i.n(n),
    a = i(735438),
    d = i.n(a),
    o = i(289873),
    c = i(793574),
    C = i(250627),
    u = i(284605),
    x = i(558060),
    h = i(284683),
    _ = i(985018),
    p = i(805975);
function j(t) {
    let { guildId: e, productId: i } = t,
        { listingsLoaded: n } = (0, C.bb)(e),
        a = (0, C.fZ)(e),
        j = r.useRef(null),
        { sortOption: g } = (0, x.R)(),
        m = r.useMemo(
            () =>
                (function (t, e) {
                    let i, s;
                    switch (e) {
                        case h.p$.NAME:
                            (i = (t) => t.name.toLowerCase()), (s = "asc");
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
                            return t;
                    }
                    return d().orderBy(t, [i], [s]);
                })(a, g),
            [a, g],
        );
    return n
        ? (0, s.jsx)("ul", {
              className: p.Ui,
              "aria-label": _.intl.string(_.t.qe4kTa),
              children: m.map((t) =>
                  (0, s.jsx)(
                      "li",
                      {
                          className: p.Nr,
                          children: (0, s.jsx)(
                              "div",
                              {
                                  className: l()(p.Ux, { [p.Oj]: t.id === i }),
                                  ref: t.id === i ? j : void 0,
                                  onLoad: () => {
                                      let e = j.current;
                                      null != e &&
                                          t.id === i &&
                                          (e.scrollIntoView({ behavior: "smooth", block: "center" }),
                                          setTimeout(() => {
                                              e.classList.remove(p.Oj);
                                          }, 2e3));
                                  },
                                  children: (0, s.jsx)(
                                      u.i,
                                      {
                                          guildProductListing: t,
                                          guildId: e,
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
                                      t.id,
                                  ),
                              },
                              t.id,
                          ),
                      },
                      t.id,
                  ),
              ),
          })
        : (0, s.jsx)(o.y, {});
}
