n.d(t, { c: () => g });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(999382),
    o = n(845377),
    c = n(976288),
    d = n(386885),
    u = n(388032),
    m = n(836090);
function g(e) {
    let { fetchDiscoveryData: t, settingsView: n, requireTerms: g, rules: p } = e,
        h = (0, s.e7)([l.Z], () => l.Z.getProps().guild);
    if (
        (i.useEffect(() => {
            null != h && t(h.id);
        }, [t, h]),
        null == h)
    )
        return null;
    switch (n) {
        case d.U.DISQUALIFIED:
            return (0, r.jsx)(o.Z, {
                guild: h,
                guildId: h.id,
                headerContent: (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(a.X6q, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            className: m.header,
                            children: u.NW.format(u.t.n1LDQE, {
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
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-secondary',
                            children: u.NW.string(u.t.Qgaw3d)
                        })
                    ]
                })
            });
        case d.U.ELIGIBLE_DISABLED:
        case d.U.ELIGIBLE_ENABLED:
            return (0, r.jsx)(c.d, {
                requireTerms: g,
                rules: p,
                settingsView: n
            });
        case d.U.INELIGIBLE:
            return (0, r.jsx)(o.Z, {
                guild: h,
                guildId: h.id,
                headerContent: (0, r.jsx)(a.X6q, {
                    variant: 'heading-md/semibold',
                    children: u.NW.format(u.t['+6Hylp'], {
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
            return (0, r.jsx)(a.$jN, {});
    }
}
