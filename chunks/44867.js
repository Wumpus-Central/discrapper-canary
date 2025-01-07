n.d(t, {
    c: function () {
        return m;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(999382),
    o = n(654351),
    c = n(845377),
    d = n(388032),
    u = n(130376);
function m(e) {
    let { fetchChecklist: t, settingsView: n } = e,
        m = (0, l.e7)([s.Z], () => s.Z.getProps().guild);
    if (
        (r.useEffect(() => {
            if (null != m) t(m.id);
        }, [t, m]),
        null == m)
    )
        return null;
    switch (n) {
        case o.d5.DISQUALIFIED:
            return (0, i.jsx)(c.Z, {
                guild: m,
                guildId: m.id,
                headerContent: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            className: u.header,
                            children: d.intl.format(d.t.n1LDQE, {
                                removedHook: (e, t) =>
                                    (0, i.jsx)(
                                        'strong',
                                        {
                                            className: u.danger,
                                            children: e
                                        },
                                        t
                                    )
                            })
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-secondary',
                            children: d.intl.string(d.t.Qgaw3d)
                        })
                    ]
                })
            });
        case o.d5.SETTINGS:
        case o.d5.INTRO:
            return null;
        case o.d5.INTRO_INELIGIBLE:
            return (0, i.jsx)(c.Z, {
                guild: m,
                guildId: m.id,
                headerContent: (0, i.jsx)(a.Heading, {
                    variant: 'heading-md/semibold',
                    children: d.intl.format(d.t['+6Hylp'], {
                        doesNotHook: (e, t) =>
                            (0, i.jsx)(
                                'strong',
                                {
                                    className: u.danger,
                                    children: e
                                },
                                t
                            )
                    })
                })
            });
        default:
            return (0, i.jsx)(a.Spinner, {});
    }
}
