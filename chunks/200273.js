i.d(n, {
    A: () => s,
});
var e = i(627968);
i(64700);
var r = i(397927),
    l = i(435183),
    a = i(406704),
    d = i(985018);

function s(t) {
    let n = (0, a.NI)(t),
        i = (0, a.Id)(t),
        s = (0, a.s5)(t);
    return !n || !i || s || t.isModeratorReportChannel() || __OVERLAY__
        ? null
        : (0, e.jsx)(r.Drp, {
              id: "edit-thread",
              label: t.isForumPost() ? d.intl.string(d.t.NP1yHG) : d.intl.string(d.t["2Mk1TP"]),
              action: () => {
                  (0, r.s7G)(), l.Ay.open(t.id);
              },
          });
}
