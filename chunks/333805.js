n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(726521),
    o = n(427679),
    c = n(388032);
function a(e) {
    let t = o.Z.isLive(e.id);
    return e.isGuildStageVoice() && t
        ? (0, r.jsx)(i.sNh, {
              id: 'report-stage',
              label: c.intl.string(c.t.JGj6Cg),
              action: () => (0, l.ic)(e),
              icon: i.U65,
              color: 'danger'
          })
        : null;
}
