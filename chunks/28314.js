n.d(e, { A: () => E });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(931991),
    d = n(698441),
    s = n(722260),
    u = n(563312),
    o = n(823508),
    c = n(985018);
function E(t) {
    let { guildEventId: e, guild: E, channel: A, recurrenceId: g, isRecurrenceItem: _ } = t,
        { canManageGuildEvent: h } = (0, a.nr)(A ?? E),
        T = (0, i.bG)([d.Ay], () => d.Ay.getGuildScheduledEvent(e)),
        f = h(T),
        m = (0, o.A)(),
        y = (0, s.A)(g, T?.id),
        v = (0, u.nh)(e, g);
    if (!f || null == v || null == T) return null;
    let p = null != T.recurrence_rule && !_,
        N = (t) => {
            (null == g || t) && !_
                ? (0, r.mMO)(async () => {
                      let { default: t } = await Promise.all([
                          n.e("68587"),
                          n.e("28136"),
                          n.e("342"),
                          n.e("3522"),
                      ]).then(n.bind(n, 21653));
                      return (n) => (0, l.jsx)(t, { ...n, guildScheduledEventId: e, guildId: E.id });
                  }, m)
                : null != g &&
                  (0, r.mMO)(async () => {
                      let { default: t } = await n.e("43940").then(n.bind(n, 271983));
                      return (e) => (0, l.jsx)(t, { ...e, guildEvent: T, recurrenceId: g });
                  }, m);
        };
    return (0, l.jsx)(r.Drp, {
        id: c.intl.string(c.t.Rgy2dU),
        label: c.intl.string(c.t.Rgy2dU),
        action: p ? void 0 : () => N(!0),
        children:
            p &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.Drp, {
                        id: c.intl.string(c.t.wmVmXN),
                        label: c.intl.string(c.t.wmVmXN),
                        action: () => N(!1),
                        disabled: y?.is_canceled || v.startTime.getTime() < Date.now(),
                    }),
                    (0, l.jsx)(r.Drp, {
                        id: c.intl.string(c.t.BW1Qoh),
                        label: c.intl.string(c.t.BW1Qoh),
                        action: () => N(!0),
                        disabled: new Date(T.scheduled_start_time).getTime() < Date.now(),
                    }),
                ],
            }),
    });
}
