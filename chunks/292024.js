n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(477782),
    a = n(935286),
    r = n(468689),
    o = n(529942),
    c = n(209700),
    d = n(576705),
    u = n(652215),
    m = n(375708);
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.BEX.ROLES;
    return (0, l.bG)([d.A], () => d.A.canImpersonateRole(e, t))
        ? (0, i.jsx)(
              s.Dr,
              {
                  id: "view-as-role",
                  label: m.intl.string(m.t.arFPfJ),
                  icon: a.E,
                  leadingAccessory: { type: "icon", icon: a.E },
                  action: () => {
                      r.A.close(), (0, o.Tk)(e.id, { type: c._.ROLES, roles: { [t.id]: t }, returnToSection: n });
                  },
              },
              "view-as-role",
          )
        : null;
}
