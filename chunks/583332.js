t.d(e, { g: () => o });
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    d = t(378298),
    s = t(88101),
    a = t(594174),
    u = t(388032);
function o(n) {
    let e = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        t = (0, s.P)(n.id);
    return (null == e ? void 0 : e.isStaff()) === !0 && n.isDM() && null == t
        ? (0, i.jsx)(r.sNh, {
              id: 'mark-as-stranger-danger',
              label: u.NW.string(u.t.CgWmmZ),
              action: () => (0, d.Dl)(n.id)
          })
        : null;
}
