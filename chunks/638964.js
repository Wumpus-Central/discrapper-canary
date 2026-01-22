r.d(t, { h: () => O });
var n = r(627968),
    i = r(64700),
    o = r(503698),
    l = r.n(o),
    s = r(735438),
    c = r.n(s),
    a = r(397927),
    d = r(793574),
    u = r(250627),
    p = r(284605),
    f = r(558060),
    b = r(284683),
    C = r(985018),
    j = r(77142);
function O(e) {
    let { guildId: t, productId: r } = e,
        { listingsLoaded: o } = (0, u.bb)(t),
        s = (0, u.fZ)(t),
        O = i.useRef(null),
        { sortOption: g } = (0, f.R)(),
        h = i.useMemo(
            () =>
                (function (e, t) {
                    let r, n;
                    switch (t) {
                        case b.p$.NAME:
                            (r = (e) => e.name.toLowerCase()), (n = "asc");
                            break;
                        case b.p$.PRICE_ASC:
                            (r = "price_tier"), (n = "asc");
                            break;
                        case b.p$.PRICE_DESC:
                            (r = "price_tier"), (n = "desc");
                            break;
                        case b.p$.NEWEST_ARRIVALS:
                            (r = "published_at"), (n = "desc");
                            break;
                        default:
                            return e;
                    }
                    return c().orderBy(e, [r], [n]);
                })(s, g),
            [s, g],
        );
    return o
        ? (0, n.jsx)("ul", {
              className: j.Ui,
              "aria-label": C.intl.string(C.t.qe4kTa),
              children: h.map((e) =>
                  (0, n.jsx)(
                      "li",
                      {
                          className: j.Nr,
                          children: (0, n.jsx)(
                              "div",
                              {
                                  className: l()(j.Ux, { [j.Oj]: e.id === r }),
                                  ref: e.id === r ? O : void 0,
                                  onLoad: () => {
                                      let t = O.current;
                                      null != t &&
                                          e.id === r &&
                                          (t.scrollIntoView({
                                              behavior: "smooth",
                                              block: "center",
                                          }),
                                          setTimeout(() => {
                                              t.classList.remove(j.Oj);
                                          }, 2000));
                                  },
                                  children: (0, n.jsx)(
                                      p.i,
                                      {
                                          guildProductListing: e,
                                          guildId: t,
                                          location: d.A.GUILD_SHOP_PAGE,
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
        : (0, n.jsx)(a.y$y, {});
}
