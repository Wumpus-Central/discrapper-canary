n.d(t, { Z: () => f }), n(86693), n(536091);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(727072),
    l = n(85960),
    o = n(676317),
    c = n(823379),
    d = n(84613),
    u = n(740903),
    m = n(598622),
    g = n(388032),
    p = n(902893);
function h(e) {
    let { title: t, subtitle: n, icon: i, page: a } = e;
    return (0, r.jsxs)('div', {
        className: p.safetyStepRow,
        children: [
            (0, r.jsxs)('div', {
                className: p.safetyStepContent,
                children: [
                    (0, r.jsx)(s.qEK, {
                        src: i,
                        size: s.EFr.SIZE_40,
                        'aria-label': t
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(s.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: t
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                children: n
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(s.zxk, {
                className: p.__invalid_editButton,
                size: s.zxk.Sizes.SMALL,
                color: s.zxk.Colors.PRIMARY,
                look: s.zxk.Looks.OUTLINED,
                onClick: () => (0, d.K)(a),
                children: g.NW.string(g.t.bt75u7)
            })
        ]
    });
}
function f(e) {
    let { guild: t } = e;
    (0, a.RD)(t.id);
    let d = (0, l.Z6)(t.id),
        { rulesByTriggerType: f } = (0, a.pH)(t.id),
        { numEnabledRules: b, numRules: x } = i.useMemo(() => {
            let e = 0,
                t = 0;
            return (
                null == f ||
                    Object.values(d)
                        .flat()
                        .forEach((n) => {
                            var r;
                            let i = null == (r = f[n]) ? void 0 : r.filter(c.lm);
                            if (null == i || 0 === i.length) return void t++;
                            i.forEach((n) => {
                                n.enabled && e++, t++;
                            });
                        }),
                {
                    numEnabledRules: e,
                    numRules: t
                }
            );
        }, [d, f]),
        j = (0, m.Q)(t),
        N = j[u.u.CAPTCHA_AND_RAID_PROTECTION],
        _ = j[u.u.DM_AND_SPAM_PROTECTION],
        v = j[u.u.PERMISSIONS],
        C = (0, o.pr)(t.id);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(s.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: p.header,
                children: g.NW.string(g.t['0A+VSE'])
            }),
            (0, r.jsxs)('div', {
                className: p.safetyChecklist,
                children: [
                    (0, r.jsx)(h, {
                        icon: n(14215),
                        title: g.NW.string(g.t['53eF5u']),
                        subtitle: g.NW.formatToPlainString(g.t.TG7NYG, {
                            enabled: N.filter((e) => e.enabled).length,
                            total: N.length
                        }),
                        page: u.u.CAPTCHA_AND_RAID_PROTECTION
                    }),
                    (0, r.jsx)('div', { className: p.divider }),
                    (0, r.jsx)(h, {
                        icon: n(128724),
                        title: g.NW.string(g.t.O0SfFx),
                        subtitle: g.NW.formatToPlainString(g.t.TG7NYG, {
                            enabled: _.filter((e) => e.enabled).length,
                            total: _.length
                        }),
                        page: u.u.DM_AND_SPAM_PROTECTION
                    }),
                    (0, r.jsx)('div', { className: p.divider }),
                    C &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h, {
                                    icon: n(145136),
                                    title: g.NW.string(g.t.uRelg4),
                                    subtitle: g.NW.formatToPlainString(g.t.TG7NYG, {
                                        enabled: b,
                                        total: x
                                    }),
                                    page: u.u.AUTOMOD
                                }),
                                (0, r.jsx)('div', { className: p.divider })
                            ]
                        }),
                    (0, r.jsx)(h, {
                        icon: n(913414),
                        title: g.NW.string(g.t.xrmhRU),
                        subtitle: g.NW.formatToPlainString(g.t.TG7NYG, {
                            enabled: v.filter((e) => e.enabled).length,
                            total: v.length
                        }),
                        page: u.u.PERMISSIONS
                    })
                ]
            })
        ]
    });
}
