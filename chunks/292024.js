n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(997509),
    r = n(529942),
    o = n(209700),
    d = n(576705),
    c = n(652215),
    u = n(985018);
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.BEX.ROLES;
    return (0, l.bG)([d.A], () => d.A.canImpersonateRole(e, t))
        ? (0, i.jsx)(
              s.Drp,
              {
                  id: "view-as-role",
                  label: u.intl.string(u.t.arFPfJ),
                  icon: s.EdP,
                  leadingAccessory: { type: "icon", icon: s.EdP },
                  action: () => {
                      a.A.close(), (0, r.Tk)(e.id, { type: o._.ROLES, roles: { [t.id]: t }, returnToSection: n });
                  },
              },
              "view-as-role",
          )
        : null;
}
