i.d(t, { Z: () => s });
var e = i(200651);
i(192379);
var l = i(481060),
    a = i(726521),
    r = i(427679),
    d = i(388032);
function s(n) {
    let t = r.Z.isLive(n.id);
    return n.isGuildStageVoice() && t
        ? (0, e.jsx)(l.sNh, {
              id: 'report-stage',
              label: d.intl.string(d.t.JGj6Cg),
              action: () => (0, a.ic)(n),
              icon: l.U65,
              color: 'danger'
          })
        : null;
}
