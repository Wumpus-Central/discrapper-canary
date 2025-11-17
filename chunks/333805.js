n.d(t, { Z: () => c });
var i = n(54381);
n(473749);
var r = n(481060),
    l = n(726521),
    a = n(427679),
    o = n(388032);
function c(e) {
    let t = a.Z.isLive(e.id);
    return e.isGuildStageVoice() && t
        ? (0, i.jsx)(r.sNh, {
              id: "report-stage",
              label: o.intl.string(o.t.JGj6Ci),
              action: () => (0, l.ic)(e),
              icon: r.U65,
              color: "danger",
          })
        : null;
}
