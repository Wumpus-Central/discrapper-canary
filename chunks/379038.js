n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    }),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(481060),
    d = n(981888),
    a = n(157689),
    s = n(894017),
    o = n(854698),
    u = n(440371),
    c = n(388032),
    x = n(345939);
function h(e) {
    let { guildEvent: t, recurrenceId: n, transitionState: h, onClose: m } = e,
        g = (0, s.Z)(n, t.id),
        j = (0, o.iA)(n, t),
        _ = (0, o.x6)(j, g),
        [v, I] = i.useState(_),
        [f, { loading: D, error: p }] = (0, d.Z)(() => {
            let e = (0, a.Z)(t, n, v, g);
            return null == p && m(), e;
        });
    return (0, l.jsxs)(r.ModalRoot, {
        transitionState: h,
        children: [
            (0, l.jsx)(r.ModalHeader, {
                children: (0, l.jsx)(r.Heading, {
                    variant: 'heading-lg/semibold',
                    children: c.intl.string(c.t.wmVmXF)
                })
            }),
            (0, l.jsxs)(r.ModalContent, {
                className: x.content,
                children: [
                    (0, l.jsx)(u.Z, {
                        onScheduleChange: (e) => {
                            let { startDate: t, endDate: n } = e;
                            null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, 'hour')),
                                I({
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
            (0, l.jsxs)(r.ModalFooter, {
                className: x.footer,
                children: [
                    (0, l.jsx)(r.Button, {
                        color: r.Button.Colors.BRAND,
                        onClick: f,
                        className: x.button,
                        submitting: D,
                        disabled: (0, o.Y4)(v, _),
                        children: c.intl.string(c.t.e5VEcH)
                    }),
                    (0, l.jsx)(r.Button, {
                        color: r.Button.Colors.PRIMARY,
                        onClick: m,
                        children: c.intl.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
