e.d(t, { g: () => o });
var i = e(255367);
e(73800);
var l = e(442837),
    r = e(481060),
    d = e(378298),
    s = e(88101),
    a = e(594174),
    u = e(388032);
function o(n) {
    let t = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        e = (0, s.P)(n.id);
    return (null == t ? void 0 : t.isStaff()) === !0 && n.isDM() && null == e
        ? (0, i.jsx)(r.sNh, {
              id: 'mark-as-stranger-danger',
              label: u.intl.string(u.t.CgWmmZ),
              action: () => (0, d.Dl)(n.id)
          })
        : null;
}
