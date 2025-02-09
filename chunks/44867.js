n.d(t, { c: () => h });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(999382),
    o = n(845377),
    c = n(976288),
    d = n(386885),
    u = n(388032),
    m = n(829269);
function h(e) {
    let { fetchDiscoveryData: t, settingsView: n, requireTerms: h, rules: g } = e,
        x = (0, l.e7)([a.Z], () => a.Z.getProps().guild);
    if (
        (r.useEffect(() => {
            null != x && t(x.id);
        }, [t, x]),
        null == x)
    )
        return null;
    switch (n) {
        case d.U.DISQUALIFIED:
            return (0, i.jsx)(o.Z, {
                guild: x,
                guildId: x.id,
                headerContent: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(s.X6q, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            className: m.header,
                            children: u.intl.format(u.t.n1LDQE, {
                                removedHook: (e, t) =>
                                    (0, i.jsx)(
                                        'strong',
                                        {
                                            className: m.danger,
                                            children: e
                                        },
                                        t
                                    )
                            })
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-secondary',
                            children: u.intl.string(u.t.Qgaw3d)
                        })
                    ]
                })
            });
        case d.U.ELIGIBLE_DISABLED:
        case d.U.ELIGIBLE_ENABLED:
            return (0, i.jsx)(c.d, {
                requireTerms: h,
                rules: g,
                settingsView: n
            });
        case d.U.INELIGIBLE:
            return (0, i.jsx)(o.Z, {
                guild: x,
                guildId: x.id,
                headerContent: (0, i.jsx)(s.X6q, {
                    variant: 'heading-md/semibold',
                    children: u.intl.format(u.t['+6Hylp'], {
                        doesNotHook: (e, t) =>
                            (0, i.jsx)(
                                'strong',
                                {
                                    className: m.danger,
                                    children: e
                                },
                                t
                            )
                    })
                })
            });
        default:
            return (0, i.jsx)(s.$jN, {});
    }
}
