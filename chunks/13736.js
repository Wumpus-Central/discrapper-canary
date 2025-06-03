t.d(e, { Z: () => s });
var i = t(255367);
t(73800);
var r = t(481060),
    a = t(787014),
    l = t(665906),
    o = t(388032);
function s(n) {
    let e = (0, l.C7)(n),
        t = (0, l.$R)(n),
        s = (0, l.Gu)(n);
    return !e || !t || s || n.isModeratorReportChannel() || __OVERLAY__
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'edit-thread',
              label: n.isForumPost() ? o.intl.string(o.t.NP1yHB) : o.intl.string(o.t['2Mk1TE']),
              action: () => {
                  (0, r.pTH)(), a.ZP.open(n.id);
              }
          });
}
