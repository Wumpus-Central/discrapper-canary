(n.d(t, { default: () => h }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(481060),
    a = n(981888),
    s = n(157689),
    d = n(894017),
    c = n(854698),
    o = n(440371),
    u = n(388032),
    x = n(806802);
function h(e) {
    let { guildEvent: t, recurrenceId: n, transitionState: h, onClose: g } = e,
        m = (0, d.Z)(n, t.id),
        j = (0, c.iA)(n, t),
        p = (0, c.x6)(j, m),
        [f, b] = l.useState(p),
        [v, { loading: _, error: D }] = (0, a.Z)(() => {
            let e = (0, s.Z)(t, n, f, m);
            return (null == D && g(), e);
        });
    return (0, r.jsxs)(i.Y0X, {
        transitionState: h,
        parentComponent: 'EditEventExceptionModal',
        children: [
            (0, r.jsx)(i.xBx, {
                children: (0, r.jsx)(i.X6q, {
                    variant: 'heading-lg/semibold',
                    children: u.intl.string(u.t.wmVmXF)
                })
            }),
            (0, r.jsxs)(i.hzk, {
                className: x.content,
                children: [
                    (0, r.jsx)(o.Z, {
                        onScheduleChange: (e) => {
                            let { startDate: t, endDate: n } = e;
                            (null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, 'hour')),
                                b({
                                    startDate: t,
                                    endDate: n
                                }));
                        },
                        schedule: f,
                        showEndDate: null != f.endDate,
                        requireEndDate: null != f.endDate,
                        guildId: t.guild_id,
                        recurrenceRule: t.recurrence_rule
                    }),
                    null != D
                        ? (0, r.jsx)(i.Text, {
                              color: 'text-danger',
                              variant: 'text-xs/normal',
                              className: x.warning,
                              children: D.getAnyErrorMessage()
                          })
                        : null
                ]
            }),
            (0, r.jsxs)(i.mzw, {
                className: x.footer,
                children: [
                    (0, r.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: x.button,
                        children: (0, r.jsx)(i.zxk, {
                            variant: 'primary',
                            text: u.intl.string(u.t.e5VEcH),
                            onClick: v,
                            loading: _,
                            disabled: (0, c.Y4)(f, p)
                        })
                    }),
                    (0, r.jsx)(i.zxk, {
                        variant: 'secondary',
                        text: u.intl.string(u.t['ETE/oK']),
                        onClick: g
                    })
                ]
            })
        ]
    });
}
