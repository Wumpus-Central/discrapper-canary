n.d(t, {
    c: function () {
        return h;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(999382),
    o = n(654351),
    c = n(845377),
    d = n(976288),
    u = n(388032),
    m = n(130376);
function h(e) {
    let { fetchDiscoveryData: t, settingsView: n, requireTerms: h, rules: g } = e,
        x = (0, l.e7)([s.Z], () => s.Z.getProps().guild);
    if (
        (r.useEffect(() => {
            if (null != x) t(x.id);
        }, [t, x]),
        null == x)
    )
        return null;
    switch (n) {
        case o.d5.DISQUALIFIED:
            return (0, i.jsx)(c.Z, {
                guild: x,
                guildId: x.id,
                headerContent: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(a.Heading, {
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
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-secondary',
                            children: u.intl.string(u.t.Qgaw3d)
                        })
                    ]
                })
            });
        case o.d5.SETTINGS:
        case o.d5.INTRO:
            return (0, i.jsx)(d.d, {
                requireTerms: h,
                rules: g
            });
        case o.d5.INTRO_INELIGIBLE:
            return (0, i.jsx)(c.Z, {
                guild: x,
                guildId: x.id,
                headerContent: (0, i.jsx)(a.Heading, {
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
            return (0, i.jsx)(a.Spinner, {});
    }
}
