n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(866442),
    l = n(91218),
    a = n(518738),
    s = n(134433),
    o = n(981631);
function c(e) {
    var t;
    let { guildId: n, role: c, size: d, className: u } = e,
        h = (0, a.p9)({
            guildId: n,
            roleId: c.id,
            size: d
        });
    return null != h
        ? (0, i.jsx)(l.Z, {
              className: u,
              ...h
          })
        : (0, i.jsx)(s.Z, {
              color: null !== (t = c.colorString) && void 0 !== t ? t : (0, r.Rf)(o.p6O),
              className: u,
              size: d
          });
}
