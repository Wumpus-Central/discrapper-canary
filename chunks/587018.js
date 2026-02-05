n.d(e, { A: () => c });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(931991),
    d = n(698441),
    s = n(684084),
    u = n(722260),
    o = n(985018);
function c(t) {
    let { guildEventId: e, recurrenceId: n, guild: c, channel: E } = t,
        A = null != n,
        { canManageGuildEvent: g } = (0, a.nr)(E ?? c),
        [_, h] = (0, i.yK)([d.Ay], () => [d.Ay.isActive(e), d.Ay.getGuildScheduledEvent(e)]),
        T = (0, u.A)(n, h?.id),
        f = null != h && g(h);
    return A && T?.is_canceled && f && (!_ || A)
        ? (0, l.jsx)(r.Drp, {
              id: o.intl.string(o.t.b8606G),
              label: o.intl.string(o.t.b8606G),
              action: () => {
                  null != n && null != T && (0, s.A)(T, c.id, e, n);
              },
          })
        : null;
}
