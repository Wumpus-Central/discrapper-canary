n.d(e, { A: () => o });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(477782),
    a = n(138134),
    d = n(928658),
    s = n(698441),
    u = n(985018);
function o(t) {
    let e = (0, i.bG)([s.Ay], () => s.Ay.getGuildScheduledEvent(t), [t]);
    return null == t || null == e
        ? null
        : (0, l.jsx)(r.Dr, {
              id: "report-event",
              label: u.intl.string(u.t.IBA5wX),
              action: () => (0, d.uA)(e),
              icon: a.i,
              color: "danger",
          });
}
