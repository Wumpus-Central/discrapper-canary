e.d(t, { e: () => o });
var i = e(200651);
e(192379);
var l = e(442837),
    r = e(481060),
    a = e(378712),
    s = e(605984),
    d = e(594174),
    u = e(388032);
function o(n) {
    let t = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        e = (0, s.k)(n.id);
    return (null == t ? void 0 : t.isStaff()) === !0 && n.isDM() && null == e
        ? (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(r.sNh, {
                  id: 'mark-as-likely-ato',
                  label: u.intl.string(u.t.AWKKgY),
                  action: () => (0, a.J)(n.id)
              })
          })
        : null;
}
