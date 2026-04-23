n.d(e, { A: () => c });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(477782),
    a = n(931991),
    d = n(698441),
    s = n(684084),
    u = n(722260),
    o = n(985018);
function c(t) {
    let { guildEventId: e, recurrenceId: n, guild: c, channel: g } = t,
        A = null != n,
        { canManageGuildEvent: E } = (0, a.nr)(g ?? c),
        m = (0, i.bG)([d.Ay], () => d.Ay.getGuildScheduledEvent(e)),
        f = (0, u.A)(n, m?.id),
        v = null != m && E(m);
    return A && f?.is_canceled && v
        ? (0, l.jsx)(r.Dr, {
              id: o.intl.string(o.t.b8606G),
              label: o.intl.string(o.t.b8606G),
              action: () => {
                  null != n && null != f && (0, s.A)(f, c.id, e, n);
              },
          })
        : null;
}
