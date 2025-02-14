e.d(n, { Z: () => E });
var l = e(200651);
e(192379);
var i = e(442837),
    r = e(481060),
    u = e(357156),
    d = e(924301),
    a = e(894017),
    s = e(79874),
    o = e(576749),
    c = e(388032);
function E(t) {
    let { guildEventId: n, guild: E, channel: g, recurrenceId: v, isRecurrenceItem: h } = t,
        { canManageGuildEvent: _ } = (0, u.XJ)(null != g ? g : E),
        f = (0, i.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(n)),
        Z = _(f),
        N = (0, o.Z)(),
        T = (0, a.Z)(v, null == f ? void 0 : f.id),
        m = (0, s.zI)(n, v);
    if (!Z || null == m || null == f) return null;
    let p = null != f.recurrence_rule && !h,
        S = (t) => {
            (null == v || t) && !h
                ? (0, r.ZDy)(async () => {
                      let { default: t } = await Promise.all([e.e('58023'), e.e('858')]).then(e.bind(e, 779250));
                      return (e) =>
                          (0, l.jsx)(t, {
                              ...e,
                              guildScheduledEventId: n,
                              guildId: E.id
                          });
                  }, N)
                : null != v &&
                  (0, r.ZDy)(async () => {
                      let { default: t } = await e.e('27919').then(e.bind(e, 379038));
                      return (n) =>
                          (0, l.jsx)(t, {
                              ...n,
                              guildEvent: f,
                              recurrenceId: v
                          });
                  }, N);
        };
    return (0, l.jsx)(r.sNh, {
        id: c.intl.string(c.t.Rgy2dX),
        label: c.intl.string(c.t.Rgy2dX),
        action: p ? void 0 : () => S(!0),
        children:
            p &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.sNh, {
                        id: c.intl.string(c.t.wmVmXF),
                        label: c.intl.string(c.t.wmVmXF),
                        action: () => S(!1),
                        disabled: (null == T ? void 0 : T.is_canceled) || m.startTime.getTime() < Date.now()
                    }),
                    (0, l.jsx)(r.sNh, {
                        id: c.intl.string(c.t.BW1Qoq),
                        label: c.intl.string(c.t.BW1Qoq),
                        action: () => S(!0),
                        disabled: new Date(f.scheduled_start_time).getTime() < Date.now()
                    })
                ]
            })
    });
}
