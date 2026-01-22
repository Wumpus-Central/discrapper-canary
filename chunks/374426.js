r.d(t, {
    A: () => b,
});
var n = r(627968);
r(64700);
var o = r(311907),
    l = r(397927),
    i = r(997509),
    c = r(931991),
    a = r(71393),
    u = r(652215),
    s = r(985018);

function b(e, t) {
    let r = (0, o.bG)([a.A], () => (null != e ? a.A.getGuild(e) : null)),
        { canCreateExpressions: b, canManageAllExpressions: p } = (0, c.nr)(r);
    return null != e && b && p
        ? (0, n.jsx)(l.Drp, {
              id: s.intl.string(s.t["154/bL"]),
              label: s.intl.string(s.t["154/bL"]),
              action: () => {
                  i.A.open(e, u.BEX.SOUNDBOARD), null == t || t();
              },
          })
        : null;
}
