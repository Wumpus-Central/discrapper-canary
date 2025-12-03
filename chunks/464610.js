n.d(t, { Z: () => b }), n(472816), n(794429);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(727072),
    s = n(85960),
    o = n(676317),
    c = n(823379),
    u = n(84613),
    d = n(740903),
    g = n(723136),
    m = n(598622),
    p = n(388032),
    f = n(687726);
function h(e) {
    let { title: t, subtitle: n, icon: i, page: a } = e;
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
                            (0, r.jsx)(l.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: t,
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(l.Button, {
                size: "sm",
                variant: "secondary",
                onClick: () => (0, u.K)(a),
                text: p.intl.string(p.t.bt75uw),
            }),
        ],
    });
}
function b(e) {
    let { guild: t } = e;
    (0, a.RD)(t.id);
    let u = (0, s.Z6)(t.id),
        { rulesByTriggerType: b } = (0, a.pH)(t.id),
        { numEnabledRules: x, numRules: j } = i.useMemo(() => {
            let e = 0,
                t = 0;
            return (
                null == b ||
                    Object.values(u)
                        .flat()
                        .forEach((n) => {
                            var r;
                            let i = null == (r = b[n]) ? void 0 : r.filter(c.lm);
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
        }, [u, b]),
        _ = (0, m.Q)(t),
        v = _[d.u.CAPTCHA_AND_RAID_PROTECTION],
        O = _[d.u.DM_AND_SPAM_PROTECTION],
        C = _[d.u.PERMISSIONS],
        y = (0, o.pr)(t.id);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                color: "header-primary",
                className: f.header,
                children: p.intl.string(p.t["0A+VSA"]),
            }),
            (0, r.jsx)(g.z, { guild: t }),
            (0, r.jsxs)("div", {
                className: f.safetyChecklist,
                children: [
                    (0, r.jsx)(h, {
                        icon: n(14215),
                        title: p.intl.string(p.t["53eF5o"]),
                        subtitle: p.intl.formatToPlainString(p.t.TG7NYK, {
                            enabled: v.filter((e) => e.enabled).length,
                            total: v.length,
                        }),
                        page: d.u.CAPTCHA_AND_RAID_PROTECTION,
                    }),
                    (0, r.jsx)("div", { className: f.divider }),
                    (0, r.jsx)(h, {
                        icon: n(128724),
                        title: p.intl.string(p.t.O0SfFy),
                        subtitle: p.intl.formatToPlainString(p.t.TG7NYK, {
                            enabled: O.filter((e) => e.enabled).length,
                            total: O.length,
                        }),
                        page: d.u.DM_AND_SPAM_PROTECTION,
                    }),
                    (0, r.jsx)("div", { className: f.divider }),
                    y &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h, {
                                    icon: n(145136),
                                    title: p.intl.string(p.t.uRelgx),
                                    subtitle: p.intl.formatToPlainString(p.t.TG7NYK, {
                                        enabled: x,
                                        total: j,
                                    }),
                                    page: d.u.AUTOMOD,
                                }),
                                (0, r.jsx)("div", { className: f.divider }),
                            ],
                        }),
                    (0, r.jsx)(h, {
                        icon: n(913414),
                        title: p.intl.string(p.t.xrmhRX),
                        subtitle: p.intl.formatToPlainString(p.t.TG7NYK, {
                            enabled: C.filter((e) => e.enabled).length,
                            total: C.length,
                        }),
                        page: d.u.PERMISSIONS,
                    }),
                ],
            }),
        ],
    });
}
