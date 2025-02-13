n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(787014),
    r = n(665906),
    s = n(388032);
function o(e) {
    let t = (0, r.C7)(e),
        n = (0, r.$R)(e),
        o = (0, r.Gu)(e);
    return !t || !n || o || __OVERLAY__
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'edit-thread',
              label: e.isForumPost() ? s.intl.string(s.t.NP1yHB) : s.intl.string(s.t['2Mk1TE']),
              action: () => {
                  (0, l.pTH)(), a.ZP.open(e.id);
              }
          });
}
