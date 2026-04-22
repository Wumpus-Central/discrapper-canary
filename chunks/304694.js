n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(477782),
    r = n(138134),
    a = n(928658),
    s = n(446600),
    d = n(985018);
function u(e) {
    let t = s.A.isLive(e.id);
    return e.isGuildStageVoice() && t
        ? (0, i.jsx)(l.Dr, {
              id: "report-stage",
              label: d.intl.string(d.t.JGj6Ci),
              action: () => (0, a.pb)(e),
              icon: r.i,
              leadingAccessory: { type: "icon", icon: r.i },
              color: "danger",
          })
        : null;
}
