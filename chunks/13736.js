e.d(n, { Z: () => s });
var i = e(951288);
e(647438);
var a = e(481060),
    l = e(787014),
    r = e(665906),
    o = e(388032);
function s(t) {
    let n = (0, r.C7)(t),
        e = (0, r.$R)(t),
        s = (0, r.Gu)(t);
    return !n || !e || s || t.isModeratorReportChannel() || __OVERLAY__
        ? null
        : (0, i.jsx)(a.sNh, {
              id: "edit-thread",
              label: t.isForumPost() ? o.intl.string(o.t.NP1yHB) : o.intl.string(o.t["2Mk1TE"]),
              action: () => {
                  (0, a.pTH)(), l.ZP.open(t.id);
              },
          });
}
