e.d(t, { Z: () => d });
var i = e(200651);
e(192379);
var a = e(481060),
    l = e(787014),
    r = e(665906),
    o = e(388032);
function d(n) {
    let t = (0, r.C7)(n),
        e = (0, r.$R)(n),
        d = (0, r.Gu)(n);
    return !t || !e || d || __OVERLAY__
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'edit-thread',
              label: n.isForumPost() ? o.intl.string(o.t.NP1yHB) : o.intl.string(o.t['2Mk1TE']),
              action: () => {
                  (0, a.pTH)(), l.ZP.open(n.id);
              }
          });
}
