n.d(t, {
    default: () => c,
    e: () => s,
});
var i = n(54381);
n(473749);
var r = n(481060),
    l = n(239091),
    a = n(241635),
    o = n(388032);
function s(e, t) {
    return (0, a.Z)(e, t).length > 0;
}
function c(e) {
    let { role: t, guild: n, onSelect: s } = e,
        c = (0, a.Z)(n, t);
    return 0 === c.length
        ? null
        : (0, i.jsx)(r.v2r, {
              navId: "guild-settings-role-context",
              "aria-label": o.intl.string(o.t["337Ja9"]),
              onClose: l.Zy,
              onSelect: s,
              children: c,
          });
}
