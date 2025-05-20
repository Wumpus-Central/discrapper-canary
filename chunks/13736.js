e.d(n, { Z: () => o });
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(787014),
    a = e(665906),
    s = e(388032);
function o(t) {
    let n = (0, a.C7)(t),
        e = (0, a.$R)(t),
        o = (0, a.Gu)(t);
    return !n || !e || o || __OVERLAY__
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'edit-thread',
              label: t.isForumPost() ? s.intl.string(s.t.NP1yHB) : s.intl.string(s.t['2Mk1TE']),
              action: () => {
                  (0, r.pTH)(), l.ZP.open(t.id);
              }
          });
}
