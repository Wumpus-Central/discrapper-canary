t.d(i, { A: () => o });
var e = t(477900);
t(582128);
var l = t(477782),
    a = t(138134),
    c = t(928658),
    s = t(446600),
    r = t(375708);
function o(n) {
    let i = s.A.isLive(n.id);
    return n.isGuildStageVoice() && i
        ? (0, e.jsx)(l.Dr, {
              id: "report-stage",
              label: r.intl.string(r.t.JGj6Ci),
              action: function () {
                  return (0, c.pb)(n);
              },
              icon: a.FlagIcon,
              leadingAccessory: { type: "icon", icon: a.FlagIcon },
              color: "danger",
          })
        : null;
}
