i.d(l, { Z: () => d });
var r = i(200651);
i(192379);
var t = i(866442),
    a = i(91218),
    n = i(518738),
    o = i(134433),
    s = i(981631);
function d(e) {
    var l;
    let { guildId: i, role: d, size: c, className: u } = e,
        m = (0, n.p9)({
            guildId: i,
            roleId: d.id,
            size: c
        });
    return null != m
        ? (0, r.jsx)(a.Z, {
              className: u,
              ...m
          })
        : (0, r.jsx)(o.Z, {
              color: null !== (l = d.colorString) && void 0 !== l ? l : (0, t.Rf)(s.p6O),
              className: u,
              size: c
          });
}
