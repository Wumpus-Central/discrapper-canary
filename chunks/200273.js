var i = e(477900);
e(582128);
var r = e(477782),
    a = e(192308),
    l = e(435183),
    d = e(406704),
    s = e(792996);
e.d(
    n,
    {},
    {
        A: function (t) {
            let n = (0, d.NI)(t),
                e = (0, d.Id)(t),
                o = (0, d.s5)(t);
            return !n || !e || o || t.isModeratorReportChannel() || __OVERLAY__
                ? null
                : (0, i.jsx)(r.Dr, {
                      id: "edit-thread",
                      label: t.isForumPost() ? s.intl.string(s.t.NP1yHG) : s.intl.string(s.t["2Mk1TP"]),
                      action: () => {
                          ((0, a.s7)(), l.Ay.open(t.id));
                      },
                  });
        },
    },
);
