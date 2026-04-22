n.d(e, { A: () => A });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(192308),
    a = n(477782),
    d = n(931991),
    s = n(698441),
    u = n(722260),
    o = n(563312),
    c = n(823508),
    g = n(985018);
function A(t) {
    let { guildEventId: e, guild: A, channel: E, recurrenceId: m, isRecurrenceItem: f } = t,
        { canManageGuildEvent: v } = (0, d.nr)(E ?? A),
        y = (0, i.bG)([s.Ay], () => s.Ay.getGuildScheduledEvent(e)),
        _ = v(y),
        h = (0, c.A)(),
        N = (0, u.A)(m, y?.id),
        T = (0, o.nh)(e, m);
    if (!_ || null == T || null == y) return null;
    let b = null != y.recurrence_rule && !f,
        G = (t) => {
            (null == m || t) && !f
                ? (0, r.openModalLazy)(async () => {
                      let { default: t } = await Promise.all([
                          n.e("28136"),
                          n.e("68883"),
                          n.e("68587"),
                          n.e("342"),
                          n.e("17387"),
                      ]).then(n.bind(n, 21653));
                      return (n) => (0, l.jsx)(t, { ...n, guildScheduledEventId: e, guildId: A.id });
                  }, h)
                : null != m &&
                  (0, r.openModalLazy)(async () => {
                      let { default: t } = await Promise.all([n.e("68883"), n.e("43940")]).then(n.bind(n, 271983));
                      return (e) => (0, l.jsx)(t, { ...e, guildEvent: y, recurrenceId: m });
                  }, h);
        };
    return (0, l.jsx)(a.Dr, {
        id: g.intl.string(g.t.Rgy2dU),
        label: g.intl.string(g.t.Rgy2dU),
        action: b ? void 0 : () => G(!0),
        children:
            b &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(a.Dr, {
                        id: g.intl.string(g.t.wmVmXN),
                        label: g.intl.string(g.t.wmVmXN),
                        action: () => G(!1),
                        disabled: N?.is_canceled || T.startTime.getTime() < Date.now(),
                    }),
                    (0, l.jsx)(a.Dr, {
                        id: g.intl.string(g.t.BW1Qoh),
                        label: g.intl.string(g.t.BW1Qoh),
                        action: () => G(!0),
                        disabled: new Date(y.scheduled_start_time).getTime() < Date.now(),
                    }),
                ],
            }),
    });
}
