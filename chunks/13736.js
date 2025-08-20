i.d(n, { Z: () => o });
var e = i(951288);
i(647438);
var l = i(481060),
    r = i(787014),
    a = i(665906),
    d = i(388032);
function o(t) {
    let n = (0, a.C7)(t),
        i = (0, a.$R)(t),
        o = (0, a.Gu)(t);
    return !n || !i || o || t.isModeratorReportChannel() || __OVERLAY__
        ? null
        : (0, e.jsx)(l.sNh, {
              id: "edit-thread",
              label: t.isForumPost() ? d.intl.string(d.t.NP1yHB) : d.intl.string(d.t["2Mk1TE"]),
              action: () => {
                  (0, l.pTH)(), r.ZP.open(t.id);
              },
          });
}
