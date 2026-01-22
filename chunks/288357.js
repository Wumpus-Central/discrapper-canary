n.d(e, {
    A: () => c,
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    u = n(928658),
    o = n(698441),
    a = n(985018);

function c(t) {
    let e = (0, r.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(t), [t]);
    return null == t || null == e
        ? null
        : (0, l.jsx)(i.Drp, {
              id: "report-event",
              label: a.intl.string(a.t.IBA5wX),
              action: () => (0, u.uA)(e),
              icon: i.iFK,
              color: "danger",
          });
}
