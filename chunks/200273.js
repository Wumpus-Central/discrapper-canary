var i = t(477900);
t(582128);
var r = t(477782),
    l = t(192308),
    a = t(435183),
    o = t(406704),
    d = t(792996);
t.d(
    e,
    {},
    {
        A: function (n) {
            let e = (0, o.NI)(n),
                t = (0, o.Id)(n),
                s = (0, o.s5)(n);
            return !e || !t || s || n.isModeratorReportChannel() || __OVERLAY__
                ? null
                : (0, i.jsx)(r.Dr, {
                      id: "edit-thread",
                      label: n.isForumPost() ? d.intl.string(d.t.NP1yHG) : d.intl.string(d.t["2Mk1TP"]),
                      action: () => {
                          ((0, l.s7)(), a.Ay.open(n.id));
                      },
                  });
        },
    },
);
