e.d(n, { g: () => o });
var i = e(255367);
e(73800);
var r = e(442837),
    l = e(481060),
    s = e(378298),
    a = e(88101),
    d = e(594174),
    u = e(388032);
function o(t) {
    let n = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
        e = (0, a.P)(t.id);
    return (null == n ? void 0 : n.isStaff()) === !0 && t.isDM() && null == e
        ? (0, i.jsx)(l.sNh, {
              id: "mark-as-stranger-danger",
              label: u.intl.string(u.t.CgWmmZ),
              action: () => (0, s.Dl)(t.id),
          })
        : null;
}
