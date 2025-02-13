n.d(t, { default: () => h }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(481060),
    s = n(981888),
    d = n(157689),
    a = n(894017),
    c = n(854698),
    o = n(440371),
    u = n(388032),
    x = n(806189);
function h(e) {
    let { guildEvent: t, recurrenceId: n, transitionState: h, onClose: g } = e,
        m = (0, a.Z)(n, t.id),
        _ = (0, c.iA)(n, t),
        j = (0, c.x6)(_, m),
        [v, f] = i.useState(j),
        [k, { loading: D, error: p }] = (0, s.Z)(() => {
            let e = (0, d.Z)(t, n, v, m);
            return null == p && g(), e;
        });
    return (0, l.jsxs)(r.Y0X, {
        transitionState: h,
        children: [
            (0, l.jsx)(r.xBx, {
                children: (0, l.jsx)(r.X6q, {
                    variant: 'heading-lg/semibold',
                    children: u.intl.string(u.t.wmVmXF)
                })
            }),
            (0, l.jsxs)(r.hzk, {
                className: x.content,
                children: [
                    (0, l.jsx)(o.Z, {
                        onScheduleChange: (e) => {
                            let { startDate: t, endDate: n } = e;
                            null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, 'hour')),
                                f({
                                    startDate: t,
                                    endDate: n
                                });
                        },
                        schedule: v,
                        showEndDate: null != v.endDate,
                        requireEndDate: null != v.endDate,
                        guildId: t.guild_id,
                        recurrenceRule: t.recurrence_rule
                    }),
                    null != p
                        ? (0, l.jsx)(r.Text, {
                              color: 'text-danger',
                              variant: 'text-xs/normal',
                              className: x.warning,
                              children: p.getAnyErrorMessage()
                          })
                        : null
                ]
            }),
            (0, l.jsxs)(r.mzw, {
                className: x.footer,
                children: [
                    (0, l.jsx)(r.zxk, {
                        color: r.zxk.Colors.BRAND,
                        onClick: k,
                        className: x.button,
                        submitting: D,
                        disabled: (0, c.Y4)(v, j),
                        children: u.intl.string(u.t.e5VEcH)
                    }),
                    (0, l.jsx)(r.zxk, {
                        color: r.zxk.Colors.PRIMARY,
                        onClick: g,
                        children: u.intl.string(u.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
