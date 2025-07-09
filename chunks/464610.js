(n.d(t, { Z: () => x }), n(472816), n(794429));
var r = n(255367),
    i = n(73800),
    l = n(755721),
    s = n(481060),
    a = n(727072),
    o = n(85960),
    c = n(676317),
    d = n(823379),
    u = n(84613),
    m = n(740903),
    g = n(598622),
    p = n(388032),
    f = n(902893);
function h(e) {
    let { title: t, subtitle: n, icon: i, page: a } = e;
    return (0, r.jsxs)('div', {
        className: f.safetyStepRow,
        children: [
            (0, r.jsxs)('div', {
                className: f.safetyStepContent,
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
            (0, r.jsx)(l.zx, {
                className: f.__invalid_editButton,
                size: l.zx.Sizes.SMALL,
                color: l.zx.Colors.PRIMARY,
                look: l.zx.Looks.OUTLINED,
                onClick: () => (0, u.K)(a),
                children: p.intl.string(p.t.bt75u7)
            })
        ]
    });
}
function x(e) {
    let { guild: t } = e;
    (0, a.RD)(t.id);
    let l = (0, o.Z6)(t.id),
        { rulesByTriggerType: u } = (0, a.pH)(t.id),
        { numEnabledRules: x, numRules: b } = i.useMemo(() => {
            let e = 0,
                t = 0;
            return (
                null == u ||
                    Object.values(l)
                        .flat()
                        .forEach((n) => {
                            var r;
                            let i = null == (r = u[n]) ? void 0 : r.filter(d.lm);
                            if (null == i || 0 === i.length) return void t++;
                            i.forEach((n) => {
                                (n.enabled && e++, t++);
                            });
                        }),
                {
                    numEnabledRules: e,
                    numRules: t
                }
            );
        }, [l, u]),
        j = (0, g.Q)(t),
        _ = j[m.u.CAPTCHA_AND_RAID_PROTECTION],
        v = j[m.u.DM_AND_SPAM_PROTECTION],
        O = j[m.u.PERMISSIONS],
        C = (0, c.pr)(t.id);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(s.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: f.header,
                children: p.intl.string(p.t['0A+VSE'])
            }),
            (0, r.jsxs)('div', {
                className: f.safetyChecklist,
                children: [
                    (0, r.jsx)(h, {
                        icon: n(14215),
                        title: p.intl.string(p.t['53eF5u']),
                        subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
                            enabled: _.filter((e) => e.enabled).length,
                            total: _.length
                        }),
                        page: m.u.CAPTCHA_AND_RAID_PROTECTION
                    }),
                    (0, r.jsx)('div', { className: f.divider }),
                    (0, r.jsx)(h, {
                        icon: n(128724),
                        title: p.intl.string(p.t.O0SfFx),
                        subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
                            enabled: v.filter((e) => e.enabled).length,
                            total: v.length
                        }),
                        page: m.u.DM_AND_SPAM_PROTECTION
                    }),
                    (0, r.jsx)('div', { className: f.divider }),
                    C &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h, {
                                    icon: n(145136),
                                    title: p.intl.string(p.t.uRelg4),
                                    subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
                                        enabled: x,
                                        total: b
                                    }),
                                    page: m.u.AUTOMOD
                                }),
                                (0, r.jsx)('div', { className: f.divider })
                            ]
                        }),
                    (0, r.jsx)(h, {
                        icon: n(913414),
                        title: p.intl.string(p.t.xrmhRU),
                        subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
                            enabled: O.filter((e) => e.enabled).length,
                            total: O.length
                        }),
                        page: m.u.PERMISSIONS
                    })
                ]
            })
        ]
    });
}
