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
        _ = (0, i.bG)([d.Ay], () => d.Ay.getGuildScheduledEvent(e)),
        h = (0, u.A)(n, _?.id),
        T = null != _ && g(_);
    return A && h?.is_canceled && T
        ? (0, l.jsx)(r.Drp, {
              id: o.intl.string(o.t.b8606G),
              label: o.intl.string(o.t.b8606G),
              action: () => {
                  null != n && null != h && (0, s.A)(h, c.id, e, n);
              },
          })
        : null;
}
