t.d(n, { A: () => u });
var i = t(627968);
t(64700);
var r = t(397927),
    l = t(928658),
    a = t(446600),
    s = t(985018);
function u(e) {
    let n = a.A.isLive(e.id);
    return e.isGuildStageVoice() && n
        ? (0, i.jsx)(r.Drp, {
              id: "report-stage",
              label: s.intl.string(s.t.JGj6Ci),
              action: () => (0, l.pb)(e),
              icon: r.iFK,
              leadingAccessory: { type: "icon", icon: r.iFK },
              color: "danger",
          })
        : null;
}
