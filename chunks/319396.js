n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    l = n(454399),
    o = n(28664),
    c = n(376521),
    s = n(602733),
    u = n(594174),
    d = n(621853),
    f = n(796483),
    g = n(855587);
function p(e) {
    let { items: t, profileOwner: n, isOwner: p } = e,
        m = u.default.getCurrentUser(),
        { defaultWishlistId: b } = (0, a.cj)([d.Z], () => ({ defaultWishlistId: d.Z.getFirstWishlistId(n.id) })),
        h = i.useMemo(() => {
            let e = t.map((e) => e.skuProductLine);
            return (0, c.l)(e);
        }, [t]);
    return null == m || null == b
        ? null
        : (0, r.jsx)("ul", {
              className: g.grid,
              children: t.map((e, t) => {
                  var i;
                  let a = h[t],
                      c = (0, r.jsx)(f.Z, {
                          item: e,
                          profileOwner: n,
                          wishlistId: b,
                          isOwner: p,
                      });
                  return a.shouldShow
                      ? null != a.title && null == a.body && null == a.icon
                          ? (0, r.jsx)(
                                "li",
                                {
                                    children: (0, r.jsx)(o.u, {
                                        text: a.title,
                                        position: "top",
                                        asContainer: !0,
                                        delay: s.rq,
                                        children: c,
                                    }),
                                },
                                e.skuId,
                            )
                          : (0, r.jsx)(
                                "li",
                                {
                                    children: (0, r.jsx)(l.i, {
                                        title: a.title,
                                        body: null != (i = a.body) ? i : "",
                                        asset: a.icon,
                                        assetSize: 24,
                                        position: "top",
                                        asContainer: !0,
                                        delay: s.rq,
                                        children: c,
                                    }),
                                },
                                e.skuId,
                            )
                      : (0, r.jsx)("li", { children: c }, e.skuId);
              }),
          });
}
