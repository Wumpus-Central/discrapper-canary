e.d(n, { Z: () => o });
var i = e(54381);
e(473749);
var a = e(481060),
    l = e(787014),
    r = e(665906),
    s = e(388032);
function o(t) {
    let n = (0, r.C7)(t),
        e = (0, r.$R)(t),
        o = (0, r.Gu)(t);
    return !n || !e || o || t.isModeratorReportChannel() || __OVERLAY__
        ? null
        : (0, i.jsx)(a.sNh, {
              id: "edit-thread",
              label: t.isForumPost() ? s.intl.string(s.t.NP1yHG) : s.intl.string(s.t["2Mk1TP"]),
              action: () => {
                  (0, a.pTH)(), l.ZP.open(t.id);
              },
          });
}
