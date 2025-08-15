e.d(n, { e: () => o });
var i = e(951288);
e(647438);
var r = e(442837),
    l = e(481060),
    s = e(378712),
    a = e(605984),
    d = e(594174),
    u = e(388032);
function o(t) {
    let n = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
        e = (0, a.k)(t.id);
    return (null == n ? void 0 : n.isStaff()) === !0 && t.isDM() && null == e
        ? (0, i.jsx)(l.sNh, {
              id: "mark-as-likely-ato",
              label: u.intl.string(u.t.AWKKgY),
              action: () => (0, s.J)(t.id),
          })
        : null;
}
