n.d(e, { A: () => d }), n(896048);
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    u = n(931991),
    o = n(698441),
    a = n(684084),
    c = n(722260),
    s = n(985018);
function d(t) {
    let { guildEventId: e, recurrenceId: n, guild: d, channel: g } = t,
        y = null != n,
        { canManageGuildEvent: f } = (0, u.nr)(null != g ? g : d),
        [b, p] = (0, r.yK)([o.Ay], () => [o.Ay.isActive(e), o.Ay.getGuildScheduledEvent(e)]),
        A = (0, c.A)(n, null == p ? void 0 : p.id),
        v = null != p && f(p);
    return y && (null == A ? void 0 : A.is_canceled) && v && (!b || y)
        ? (0, l.jsx)(i.Drp, {
              id: s.intl.string(s.t.b8606G),
              label: s.intl.string(s.t.b8606G),
              action: () => {
                  null != n && null != A && (0, a.A)(A, d.id, e, n);
              },
          })
        : null;
}
