e.d(t, { Z: () => s });
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(787014),
    a = e(665906),
    o = e(388032);
function s(n) {
    let t = (0, a.C7)(n),
        e = (0, a.$R)(n),
        s = (0, a.Gu)(n);
    return !t || !e || s || __OVERLAY__
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'edit-thread',
              label: n.isForumPost() ? o.intl.string(o.t.NP1yHB) : o.intl.string(o.t['2Mk1TE']),
              action: () => {
                  (0, r.pTH)(), l.ZP.open(n.id);
              }
          });
}
