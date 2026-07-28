e.d(n, { A: () => o });
var i = e(477900);
e(582128);
var r = e(477782),
    l = e(192308),
    a = e(435183),
    d = e(406704),
    s = e(375708);
function o(t) {
    let n = (0, d.NI)(t),
        e = (0, d.Id)(t),
        o = (0, d.s5)(t);
    return !n || !e || o || t.isModeratorReportChannel() || __OVERLAY__
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "edit-thread",
              label: t.isForumPost() ? s.intl.string(s.t.NP1yHG) : s.intl.string(s.t["2Mk1TP"]),
              action: () => {
                  (0, l.closeAllModals)(), a.Ay.open(t.id);
              },
          });
}
