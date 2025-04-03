r.d(t, { Z: () => b });
var n = r(200651);
r(192379);
var o = r(442837),
    c = r(481060),
    l = r(434404),
    i = r(357156),
    a = r(430824),
    u = r(981631),
    s = r(388032);
function b(e, t) {
    let r = (0, o.e7)([a.Z], () => (null != e ? a.Z.getGuild(e) : null)),
        { canCreateExpressions: b, canManageAllExpressions: p } = (0, i.XJ)(r);
    return null != e && b && p
        ? (0, n.jsx)(c.sNh, {
              id: s.NW.string(s.t['154/bG']),
              label: s.NW.string(s.t['154/bG']),
              action: () => {
                  l.Z.open(e, u.pNK.SOUNDBOARD), null == t || t();
              }
          })
        : null;
}
