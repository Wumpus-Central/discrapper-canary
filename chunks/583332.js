t.d(n, { g: () => c });
var i = t(54381);
t(473749);
var r = t(442837),
    l = t(481060),
    a = t(378298),
    s = t(88101),
    o = t(594174),
    d = t(388032);
function c(e) {
    let n = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        t = (0, s.P)(e.id);
    return (null == n ? void 0 : n.isStaff()) === !0 && e.isDM() && null == t
        ? (0, i.jsx)(l.sNh, {
              id: "mark-as-stranger-danger",
              label: d.intl.string(d.t.CgWmmT),
              action: () => (0, a.Dl)(e.id),
          })
        : null;
}
