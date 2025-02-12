e.d(t, { Z: () => o });
var i = e(200651);
e(192379);
var a = e(481060),
    l = e(787014),
    r = e(665906),
    d = e(388032);
function o(n) {
    let t = (0, r.C7)(n),
        e = (0, r.$R)(n),
        o = (0, r.Gu)(n);
    return !t || !e || o || __OVERLAY__
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'edit-thread',
              label: n.isForumPost() ? d.intl.string(d.t.NP1yHB) : d.intl.string(d.t['2Mk1TE']),
              action: () => {
                  (0, a.pTH)(), l.ZP.open(n.id);
              }
          });
}
