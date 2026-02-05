n.d(e, { A: () => d });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(435183),
    a = n(406704),
    s = n(985018);
function d(t) {
    let e = (0, a.NI)(t),
        n = (0, a.Id)(t),
        d = (0, a.s5)(t);
    return !e || !n || d || t.isModeratorReportChannel() || __OVERLAY__
        ? null
        : (0, i.jsx)(r.Drp, {
              id: "edit-thread",
              label: t.isForumPost() ? s.intl.string(s.t.NP1yHG) : s.intl.string(s.t["2Mk1TP"]),
              action: () => {
                  (0, r.s7G)(), l.Ay.open(t.id);
              },
          });
}
