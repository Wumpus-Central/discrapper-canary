e.d(t, {
    Z: function () {
        return E;
    }
});
var l = e(200651);
e(192379);
var i = e(442837),
    r = e(481060),
    u = e(357156),
    d = e(924301),
    o = e(894017),
    a = e(79874),
    c = e(576749),
    s = e(388032);
function E(n) {
    let { guildEventId: t, guild: E, channel: g, recurrenceId: f, isRecurrenceItem: _ } = n,
        { canManageGuildEvent: v } = (0, u.XJ)(null != g ? g : E),
        Z = (0, i.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(t)),
        h = v(Z),
        m = (0, c.Z)(),
        T = (0, o.Z)(f, null == Z ? void 0 : Z.id),
        I = (0, a.zI)(t, f);
    if (!h || null == I || null == Z) return null;
    let N = null != Z.recurrence_rule && !_,
        p = (n) => {
            (null == f || n) && !_
                ? (0, r.openModalLazy)(async () => {
                      let { default: n } = await Promise.all([e.e('58023'), e.e('4808')]).then(e.bind(e, 779250));
                      return (e) =>
                          (0, l.jsx)(n, {
                              ...e,
                              guildScheduledEventId: t,
                              guildId: E.id
                          });
                  }, m)
                : null != f &&
                  (0, r.openModalLazy)(async () => {
                      let { default: n } = await e.e('27919').then(e.bind(e, 379038));
                      return (t) =>
                          (0, l.jsx)(n, {
                              ...t,
                              guildEvent: Z,
                              recurrenceId: f
                          });
                  }, m);
        };
    return (0, l.jsx)(r.MenuItem, {
        id: s.intl.string(s.t.Rgy2dX),
        label: s.intl.string(s.t.Rgy2dX),
        action: N ? void 0 : () => p(!0),
        children:
            N &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.MenuItem, {
                        id: s.intl.string(s.t.wmVmXF),
                        label: s.intl.string(s.t.wmVmXF),
                        action: () => p(!1),
                        disabled: (null == T ? void 0 : T.is_canceled) || I.startTime.getTime() < Date.now()
                    }),
                    (0, l.jsx)(r.MenuItem, {
                        id: s.intl.string(s.t.BW1Qoq),
                        label: s.intl.string(s.t.BW1Qoq),
                        action: () => p(!0),
                        disabled: new Date(Z.scheduled_start_time).getTime() < Date.now()
                    })
                ]
            })
    });
}
