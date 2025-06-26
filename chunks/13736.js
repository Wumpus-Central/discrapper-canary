n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(787014),
    o = n(665906),
    a = n(388032);
function s(e) {
    let t = (0, o.C7)(e),
        n = (0, o.$R)(e),
        s = (0, o.Gu)(e);
    return !t || !n || s || e.isModeratorReportChannel() || __OVERLAY__
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'edit-thread',
              label: e.isForumPost() ? a.intl.string(a.t.NP1yHB) : a.intl.string(a.t['2Mk1TE']),
              action: () => {
                  (0, i.pTH)(), l.ZP.open(e.id);
              }
          });
}
