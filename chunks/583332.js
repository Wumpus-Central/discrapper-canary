n.d(t, { g: () => u });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(378298),
    o = n(88101),
    s = n(594174),
    c = n(388032);
function u(e) {
    let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        n = (0, o.P)(e.id);
    return (null == t ? void 0 : t.isStaff()) === !0 && e.isDM() && null == n
        ? (0, r.jsx)(l.sNh, {
              id: 'mark-as-stranger-danger',
              label: c.NW.string(c.t.CgWmmZ),
              action: () => (0, a.Dl)(e.id)
          })
        : null;
}
