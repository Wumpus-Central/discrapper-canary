n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(454399),
    l = n(28664),
    o = n(602733),
    c = n(689201),
    s = n(594174),
    u = n(621853),
    d = n(796483),
    f = n(855587);
function g(e) {
    let { items: t, profileOwner: n, isOwner: g } = e,
        p = s.default.getCurrentUser(),
        { defaultWishlistId: m } = (0, i.cj)([u.Z], () => ({ defaultWishlistId: u.Z.getFirstWishlistId(n.id) })),
        b = (0, c.c)(t, g);
    return null == p || null == m
        ? null
        : (0, r.jsx)("ul", {
              className: f.grid,
              children: t.map((e, t) => {
                  var i, c;
                  let s = b[t],
                      u = (0, r.jsx)(d.Z, {
                          item: e,
                          profileOwner: n,
                          wishlistId: m,
                          isOwner: g,
                      });
                  return s.shouldShow
                      ? null != s.title && null == s.body && null == s.renderIcon
                          ? (0, r.jsx)(
                                "li",
                                {
                                    children: (0, r.jsx)(l.u, {
                                        text: s.title,
                                        position: "top",
                                        asContainer: !0,
                                        delay: o.rq,
                                        children: u,
                                    }),
                                },
                                e.skuId,
                            )
                          : (0, r.jsx)(
                                "li",
                                {
                                    children: (0, r.jsx)(a.i, {
                                        title: s.title,
                                        body: null != (c = s.body) ? c : "",
                                        asset: null == (i = s.renderIcon) ? void 0 : i.call(s, e),
                                        assetSize: o.EU,
                                        position: "top",
                                        asContainer: !0,
                                        delay: o.rq,
                                        children: u,
                                    }),
                                },
                                e.skuId,
                            )
                      : (0, r.jsx)("li", { children: u }, e.skuId);
              }),
          });
}
