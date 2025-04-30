n.d(t, { c: () => g });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(999382),
    o = n(845377),
    c = n(976288),
    u = n(386885),
    d = n(388032),
    m = n(836090);
function g(e) {
    let { fetchDiscoveryData: t, settingsView: n, requireTerms: g, rules: p } = e,
        h = (0, l.e7)([a.Z], () => a.Z.getProps().guild);
    if (
        (i.useEffect(() => {
            null != h && t(h.id);
        }, [t, h]),
        null == h)
    )
        return null;
    switch (n) {
        case u.U.DISQUALIFIED:
            return (0, r.jsx)(o.Z, {
                guild: h,
                guildId: h.id,
                headerContent: (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            className: m.header,
                            children: d.intl.format(d.t.n1LDQE, {
                                removedHook: (e, t) =>
                                    (0, r.jsx)(
                                        'strong',
                                        {
                                            className: m.danger,
                                            children: e
                                        },
                                        t
                                    )
                            })
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-secondary',
                            children: d.intl.string(d.t.Qgaw3d)
                        })
                    ]
                })
            });
        case u.U.ELIGIBLE_DISABLED:
        case u.U.ELIGIBLE_ENABLED:
            return (0, r.jsx)(c.d, {
                requireTerms: g,
                rules: p,
                settingsView: n
            });
        case u.U.INELIGIBLE:
            return (0, r.jsx)(o.Z, {
                guild: h,
                guildId: h.id,
                headerContent: (0, r.jsx)(s.X6q, {
                    variant: 'heading-md/semibold',
                    children: d.intl.format(d.t['+6Hylp'], {
                        doesNotHook: (e, t) =>
                            (0, r.jsx)(
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
            return (0, r.jsx)(s.$jN, {});
    }
}
