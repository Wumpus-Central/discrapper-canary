e.d(t, { Z: () => s });
var i = e(54381);
e(473749);
var l = e(481060),
    r = e(726521),
    a = e(427679),
    c = e(388032);
function s(n) {
    let t = a.Z.isLive(n.id);
    return n.isGuildStageVoice() && t
        ? (0, i.jsx)(l.sNh, {
              id: "report-stage",
              label: c.intl.string(c.t.JGj6Ci),
              action: () => (0, r.ic)(n),
              icon: l.U65,
              color: "danger",
          })
        : null;
}
