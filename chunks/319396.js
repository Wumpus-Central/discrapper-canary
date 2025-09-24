n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(541699),
    l = n(594174),
    a = n(835255),
    o = n(855587);
function s(e) {
    let { item: t, user: n } = e;
    return (0, i.Q)(t)
        ? (0, r.jsx)(a.Z, {
              item: t,
              user: n,
          })
        : null;
}
function c(e) {
    let { items: t } = e,
        n = l.default.getCurrentUser();
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: o.grid,
              children: t.map((e) =>
                  (0, r.jsx)(
                      s,
                      {
                          item: e,
                          user: n,
                      },
                      e.skuId,
                  ),
              ),
          });
}
