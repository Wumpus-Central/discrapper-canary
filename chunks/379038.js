(n.d(t, { default: () => h }), n(388685));
var l = n(255367),
    r = n(73800),
    i = n(82659),
    a = n(481060),
    s = n(981888),
    d = n(157689),
    c = n(894017),
    u = n(854698),
    o = n(440371),
    x = n(388032);
function h(e) {
    let { guildEvent: t, recurrenceId: n, transitionState: h, onClose: g } = e,
        p = (0, c.Z)(n, t.id),
        j = (0, u.iA)(n, t),
        m = (0, u.x6)(j, p),
        [v, b] = r.useState(m),
        [f, { loading: _, error: D }] = (0, s.Z)(() => {
            let e = (0, d.Z)(t, n, v, p);
            return (null == D && g(), e);
        });
    return (0, l.jsxs)(i.Modal, {
        transitionState: h,
        title: x.intl.string(x.t.wmVmXF),
        actions: [
            {
                variant: 'secondary',
                text: x.intl.string(x.t['ETE/oK']),
                onClick: g
            },
            {
                variant: 'primary',
                text: x.intl.string(x.t.e5VEcH),
                onClick: f,
                loading: _,
                disabled: (0, u.Y4)(v, m)
            }
        ],
        onClose: g,
        children: [
            (0, l.jsx)(o.Z, {
                onScheduleChange: (e) => {
                    let { startDate: t, endDate: n } = e;
                    (null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, 'hour')),
                        b({
                            startDate: t,
                            endDate: n
                        }));
                },
                schedule: v,
                showEndDate: null != v.endDate,
                requireEndDate: null != v.endDate,
                guildId: t.guild_id,
                recurrenceRule: t.recurrence_rule
            }),
            null != D
                ? (0, l.jsx)(a.Text, {
                      color: 'text-danger',
                      variant: 'text-xs/normal',
                      children: D.getAnyErrorMessage()
                  })
                : null
        ]
    });
}
