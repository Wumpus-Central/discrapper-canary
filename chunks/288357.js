n.d(e, { A: () => u });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(928658),
    d = n(698441),
    s = n(985018);
function u(t) {
    let e = (0, i.bG)([d.Ay], () => d.Ay.getGuildScheduledEvent(t), [t]);
    return null == t || null == e
        ? null
        : (0, l.jsx)(r.Drp, {
              id: "report-event",
              label: s.intl.string(s.t.IBA5wX),
              action: () => (0, a.uA)(e),
              icon: r.iFK,
              color: "danger",
          });
}
