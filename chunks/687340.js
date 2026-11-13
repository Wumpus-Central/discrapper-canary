var e = i(477900);
i(582128);
var a = i(855986),
    d = i(477782),
    s = i(945810),
    c = i(162199),
    l = i(114129),
    r = i(931519),
    u = i(254838),
    b = i(792996);
i.d(
    n,
    {},
    {
        A: function (t) {
            let n = (0, a.bG)([r.A, s.Bt], () => r.A.isEnabled()),
                i = (0, a.bG)([r.A], () => r.A.getActiveTabId());
            return n && null != t
                ? (0, e.jsx)(d.Dr, {
                      id: "open-in-new-tab",
                      label: b.intl.string(b.t["5Qo0S6"]),
                      action: () => {
                          (0, u.H)() && (0, l.Bd)(t.id, (0, c.j)(t), "context_menu", i);
                      },
                  })
                : null;
        },
    },
);
