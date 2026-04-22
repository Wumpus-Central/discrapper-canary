i.d(n, { A: () => o });
var e = i(627968);
i(64700);
var l = i(477782),
    r = i(192308),
    a = i(435183),
    s = i(406704),
    d = i(985018);
function o(t) {
    let n = (0, s.NI)(t),
        i = (0, s.Id)(t),
        o = (0, s.s5)(t);
    return !n || !i || o || t.isModeratorReportChannel() || __OVERLAY__
        ? null
        : (0, e.jsx)(l.Dr, {
              id: "edit-thread",
              label: t.isForumPost() ? d.intl.string(d.t.NP1yHG) : d.intl.string(d.t["2Mk1TP"]),
              action: () => {
                  (0, r.closeAllModals)(), a.Ay.open(t.id);
              },
          });
}
