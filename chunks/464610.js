n.d(t, { Z: () => x }), n(472816), n(794429);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    s = n(727072),
    a = n(85960),
    o = n(676317),
    c = n(823379),
    d = n(84613),
    u = n(740903),
    m = n(723136),
    g = n(598622),
    p = n(388032),
    f = n(687726);
function h(e) {
    let { title: t, subtitle: n, icon: i, page: s } = e;
    return (0, r.jsxs)("div", {
        className: f.safetyStepRow,
        children: [
            (0, r.jsxs)("div", {
                className: f.safetyStepContent,
                children: [
                    (0, r.jsx)(l.qEK, {
                        src: i,
                        size: l.EFr.SIZE_40,
                        "aria-label": t,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(l.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: t,
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-xs/medium",
                                color: "header-secondary",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(l.zxk, {
                size: "sm",
                variant: "secondary",
                onClick: () => (0, d.K)(s),
                text: p.intl.string(p.t.bt75u7),
            }),
        ],
    });
}
function x(e) {
    let { guild: t } = e;
    (0, s.RD)(t.id);
    let d = (0, a.Z6)(t.id),
        { rulesByTriggerType: x } = (0, s.pH)(t.id),
        { numEnabledRules: b, numRules: j } = i.useMemo(() => {
            let e = 0,
                t = 0;
            return (
                null == x ||
                    Object.values(d)
                        .flat()
                        .forEach((n) => {
                            var r;
                            let i = null == (r = x[n]) ? void 0 : r.filter(c.lm);
                            if (null == i || 0 === i.length) return void t++;
                            i.forEach((n) => {
                                n.enabled && e++, t++;
                            });
                        }),
                {
                    numEnabledRules: e,
                    numRules: t,
                }
            );
        }, [d, x]),
        v = (0, g.Q)(t),
        _ = v[u.u.CAPTCHA_AND_RAID_PROTECTION],
        O = v[u.u.DM_AND_SPAM_PROTECTION],
        y = v[u.u.PERMISSIONS],
        C = (0, o.pr)(t.id);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(l.X6q, {
                variant: "heading-lg/semibold",
                color: "header-primary",
                className: f.header,
                children: p.intl.string(p.t["0A+VSE"]),
            }),
            (0, r.jsx)(m.z, { guild: t }),
            (0, r.jsxs)("div", {
                className: f.safetyChecklist,
                children: [
                    (0, r.jsx)(h, {
                        icon: n(14215),
                        title: p.intl.string(p.t["53eF5u"]),
                        subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
                            enabled: _.filter((e) => e.enabled).length,
                            total: _.length,
                        }),
                        page: u.u.CAPTCHA_AND_RAID_PROTECTION,
                    }),
                    (0, r.jsx)("div", { className: f.divider }),
                    (0, r.jsx)(h, {
                        icon: n(128724),
                        title: p.intl.string(p.t.O0SfFx),
                        subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
                            enabled: O.filter((e) => e.enabled).length,
                            total: O.length,
                        }),
                        page: u.u.DM_AND_SPAM_PROTECTION,
                    }),
                    (0, r.jsx)("div", { className: f.divider }),
                    C &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h, {
                                    icon: n(145136),
                                    title: p.intl.string(p.t.uRelg4),
                                    subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
                                        enabled: b,
                                        total: j,
                                    }),
                                    page: u.u.AUTOMOD,
                                }),
                                (0, r.jsx)("div", { className: f.divider }),
                            ],
                        }),
                    (0, r.jsx)(h, {
                        icon: n(913414),
                        title: p.intl.string(p.t.xrmhRU),
                        subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
                            enabled: y.filter((e) => e.enabled).length,
                            total: y.length,
                        }),
                        page: u.u.PERMISSIONS,
                    }),
                ],
            }),
        ],
    });
}
