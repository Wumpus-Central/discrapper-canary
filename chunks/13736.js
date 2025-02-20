n.d(e, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(787014),
    l = n(665906),
    s = n(388032);
function o(t) {
    let e = (0, l.C7)(t),
        n = (0, l.$R)(t),
        o = (0, l.Gu)(t);
    return !e || !n || o || __OVERLAY__
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'edit-thread',
              label: t.isForumPost() ? s.NW.string(s.t.NP1yHB) : s.NW.string(s.t['2Mk1TE']),
              action: () => {
                  (0, r.pTH)(), a.ZP.open(t.id);
              }
          });
}
