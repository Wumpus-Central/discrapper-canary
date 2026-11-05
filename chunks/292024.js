var i = n(477900);
n(582128);
var l = n(855986),
    s = n(477782),
    a = n(935286),
    r = n(727419),
    o = n(529942),
    c = n(209700),
    d = n(576705),
    u = n(652215),
    m = n(792996);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.BEX.ROLES;
            return (0, l.bG)([d.A], () => d.A.canImpersonateRole(e, t))
                ? (0, i.jsx)(
                      s.Dr,
                      {
                          id: "view-as-role",
                          label: m.intl.string(m.t.arFPfJ),
                          icon: a.ArrowSmallRightIcon,
                          leadingAccessory: { type: "icon", icon: a.ArrowSmallRightIcon },
                          action: () => {
                              (r.A.close(),
                                  (0, o.Tk)(e.id, { type: c._.ROLES, roles: { [t.id]: t }, returnToSection: n }));
                          },
                      },
                      "view-as-role",
                  )
                : null;
        },
    },
);
