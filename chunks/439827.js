l.d(t, { Z: () => d });
var e = l(200651);
l(192379);
var i = l(442837),
    a = l(481060),
    r = l(434404),
    s = l(357156),
    u = l(430824),
    o = l(981631),
    c = l(388032);
function d(n, t) {
    let l = (0, i.e7)([u.Z], () => (null != n ? u.Z.getGuild(n) : null)),
        { canCreateExpressions: d, canManageAllExpressions: p } = (0, s.XJ)(l);
    return null != n && d && p
        ? (0, e.jsx)(a.sNh, {
              id: c.intl.string(c.t['154/bG']),
              label: c.intl.string(c.t['154/bG']),
              action: () => {
                  r.Z.open(n, o.pNK.SOUNDBOARD), null == t || t();
              }
          })
        : null;
}
