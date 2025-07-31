(n.d(t, { Z: () => x }), n(472816), n(794429));
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(727072),
    s = n(85960),
    o = n(676317),
    c = n(823379),
    d = n(403170),
    u = n(84613),
    m = n(740903),
    g = n(598622),
    p = n(388032),
    h = n(902893);
function f(e) {
    let { title: t, subtitle: n, icon: i, page: a } = e;
    return (0, r.jsxs)('div', {
        className: h.safetyStepRow,
        children: [
            (0, r.jsxs)('div', {
                className: h.safetyStepContent,
                children: [
                    (0, r.jsx)(l.qEK, {
                        src: i,
                        size: l.EFr.SIZE_40,
                        'aria-label': t
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: t
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                children: n
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(l.zxk, {
                size: 'sm',
                variant: 'secondary',
                onClick: () => (0, u.K)(a),
                text: p.intl.string(p.t.bt75u7)
            })
        ]
    });
}
function x(e) {
    let { guild: t } = e;
    (0, a.RD)(t.id);
    let u = (0, s.Z6)(t.id),
        { rulesByTriggerType: x } = (0, a.pH)(t.id),
        { numEnabledRules: b, numRules: j } = i.useMemo(() => {
            let e = 0,
                t = 0;
            return (
                null == x ||
                    Object.values(u)
                        .flat()
                        .forEach((n) => {
                            var r;
                            let i = null == (r = x[n]) ? void 0 : r.filter(c.lm);
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
        }, [u, x]),
        v = (0, g.Q)(t),
        _ = v[m.u.CAPTCHA_AND_RAID_PROTECTION],
        O = v[m.u.DM_AND_SPAM_PROTECTION],
        y = v[m.u.PERMISSIONS],
        C = (0, o.pr)(t.id);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(l.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: h.header,
                children: p.intl.string(p.t['0A+VSE'])
            }),
            (0, r.jsx)(d.z, { guild: t }),
            (0, r.jsxs)('div', {
                className: h.safetyChecklist,
                children: [
                    (0, r.jsx)(f, {
                        icon: n(14215),
                        title: p.intl.string(p.t['53eF5u']),
                        subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
                            enabled: _.filter((e) => e.enabled).length,
                            total: _.length
                        }),
                        page: m.u.CAPTCHA_AND_RAID_PROTECTION
                    }),
                    (0, r.jsx)('div', { className: h.divider }),
                    (0, r.jsx)(f, {
                        icon: n(128724),
                        title: p.intl.string(p.t.O0SfFx),
                        subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
                            enabled: O.filter((e) => e.enabled).length,
                            total: O.length
                        }),
                        page: m.u.DM_AND_SPAM_PROTECTION
                    }),
                    (0, r.jsx)('div', { className: h.divider }),
                    C &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(f, {
                                    icon: n(145136),
                                    title: p.intl.string(p.t.uRelg4),
                                    subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
                                        enabled: b,
                                        total: j
                                    }),
                                    page: m.u.AUTOMOD
                                }),
                                (0, r.jsx)('div', { className: h.divider })
                            ]
                        }),
                    (0, r.jsx)(f, {
                        icon: n(913414),
                        title: p.intl.string(p.t.xrmhRU),
                        subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
                            enabled: y.filter((e) => e.enabled).length,
                            total: y.length
                        }),
                        page: m.u.PERMISSIONS
                    })
                ]
            })
        ]
    });
}
