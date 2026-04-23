l.d(t, { A: () => d });
var r = l(627968);
l(64700);
var a = l(311907),
    e = l(477782),
    i = l(997509),
    s = l(931991),
    u = l(71393),
    o = l(652215),
    c = l(985018);
function d(n, t) {
    let l = (0, a.bG)([u.A], () => (null != n ? u.A.getGuild(n) : null)),
        { canCreateExpressions: d, canManageAllExpressions: A } = (0, s.nr)(l);
    return null != n && d && A
        ? (0, r.jsx)(e.Dr, {
              id: c.intl.string(c.t["154/bL"]),
              label: c.intl.string(c.t["154/bL"]),
              action: () => {
                  i.A.open(n, o.BEX.SOUNDBOARD), t?.();
              },
          })
        : null;
}
