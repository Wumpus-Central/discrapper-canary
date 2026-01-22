e.d(t, { A: () => c });
var i = e(627968);
e(64700);
var l = e(397927),
    r = e(928658),
    a = e(446600),
    s = e(985018);
function c(n) {
    let t = a.A.isLive(n.id);
    return n.isGuildStageVoice() && t
        ? (0, i.jsx)(l.Drp, {
              id: "report-stage",
              label: s.intl.string(s.t.JGj6Ci),
              action: () => (0, r.pb)(n),
              icon: l.iFK,
              color: "danger",
          })
        : null;
}
