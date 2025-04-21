n.d(t, { g: () => u });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    s = n(378298),
    a = n(88101),
    d = n(594174),
    o = n(388032);
function u(e) {
    let t = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        n = (0, a.P)(e.id);
    return (null == t ? void 0 : t.isStaff()) === !0 && e.isDM() && null == n
        ? (0, i.jsx)(r.sNh, {
              id: 'mark-as-stranger-danger',
              label: o.intl.string(o.t.CgWmmZ),
              action: () => (0, s.Dl)(e.id)
          })
        : null;
}
