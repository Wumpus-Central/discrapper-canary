n.d(e, { A: () => o });
var i = n(627968);
n(64700);
var r = n(477782),
    a = n(192308),
    l = n(435183),
    d = n(406704),
    s = n(375708);
function o(t) {
    let e = (0, d.NI)(t),
        n = (0, d.Id)(t),
        o = (0, d.s5)(t);
    return !e || !n || o || t.isModeratorReportChannel() || __OVERLAY__
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "edit-thread",
              label: t.isForumPost() ? s.intl.string(s.t.NP1yHG) : s.intl.string(s.t["2Mk1TP"]),
              action: () => {
                  (0, a.closeAllModals)(), l.Ay.open(t.id);
              },
          });
}
