n.d(t, {
    A: () => b,
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(997509),
    s = n(529942),
    o = n(209700),
    c = n(576705),
    d = n(652215),
    u = n(985018);

function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.BEX.ROLES;
    return (0, r.bG)([c.A], () => c.A.canImpersonateRole(e, t))
        ? (0, i.jsx)(
              l.Drp,
              {
                  id: "view-as-role",
                  label: u.intl.string(u.t.arFPfJ),
                  icon: l.EdP,
                  action: () => {
                      a.A.close(),
                          (0, s.Tk)(e.id, {
                              type: o._.ROLES,
                              roles: {
                                  [t.id]: t,
                              },
                              returnToSection: n,
                          });
                  },
              },
              "view-as-role",
          )
        : null;
}
