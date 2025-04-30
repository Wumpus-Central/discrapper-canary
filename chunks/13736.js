e.d(t, { Z: () => s });
var i = e(200651);
e(192379);
var l = e(481060),
    r = e(787014),
    a = e(665906),
    o = e(388032);
function s(n) {
    let t = (0, a.C7)(n),
        e = (0, a.$R)(n),
        s = (0, a.Gu)(n);
    return !t || !e || s || __OVERLAY__
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'edit-thread',
              label: n.isForumPost() ? o.intl.string(o.t.NP1yHB) : o.intl.string(o.t['2Mk1TE']),
              action: () => {
                  (0, l.pTH)(), r.ZP.open(n.id);
              }
          });
}
