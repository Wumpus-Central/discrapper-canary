e.d(n, { Z: () => s });
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(787014),
    a = e(665906),
    o = e(388032);
function s(t) {
    let n = (0, a.C7)(t),
        e = (0, a.$R)(t),
        s = (0, a.Gu)(t);
    return !n || !e || s || __OVERLAY__
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'edit-thread',
              label: t.isForumPost() ? o.intl.string(o.t.NP1yHB) : o.intl.string(o.t['2Mk1TE']),
              action: () => {
                  (0, r.pTH)(), l.ZP.open(t.id);
              }
          });
}
