n.d(t, { Z: () => h }), n(472816), n(794429);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(727072),
    s = n(85960),
    o = n(676317),
    c = n(823379),
    d = n(84613),
    u = n(740903),
    g = n(723136),
    f = n(598622),
    m = n(388032),
    b = n(270533);
function p(e) {
    let { title: t, subtitle: n, icon: i, page: a } = e;
    return (0, r.jsxs)("div", {
        className: b.safetyStepRow,
        children: [
            (0, r.jsxs)("div", {
                className: b.safetyStepContent,
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
                                color: "text-strong",
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
                onClick: () => (0, d.K)(a),
                text: m.intl.string(m.t.bt75uw),
            }),
        ],
    });
}
function h(e) {
    let { guild: t } = e;
    (0, a.RD)(t.id);
    let d = (0, s.Z6)(t.id),
        { rulesByTriggerType: h } = (0, a.pH)(t.id),
        { numEnabledRules: x, numRules: j } = i.useMemo(() => {
            let e = 0,
                t = 0;
            return (
                null == h ||
                    Object.values(d)
                        .flat()
                        .forEach((n) => {
                            var r;
                            let i = null == (r = h[n]) ? void 0 : r.filter(c.lm);
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
        }, [d, h]),
        v = (0, f.Q)(t),
        O = v[u.u.CAPTCHA_AND_RAID_PROTECTION],
        C = v[u.u.DM_AND_SPAM_PROTECTION],
        y = v[u.u.PERMISSIONS],
        N = (0, o.pr)(t.id);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: b.header,
                children: m.intl.string(m.t["0A+VSA"]),
            }),
            (0, r.jsx)(g.z, { guild: t }),
            (0, r.jsxs)("div", {
                className: b.safetyChecklist,
                children: [
                    (0, r.jsx)(p, {
                        icon: n(14215),
                        title: m.intl.string(m.t["53eF5o"]),
                        subtitle: m.intl.formatToPlainString(m.t.TG7NYK, {
                            enabled: O.filter((e) => e.enabled).length,
                            total: O.length,
                        }),
                        page: u.u.CAPTCHA_AND_RAID_PROTECTION,
                    }),
                    (0, r.jsx)("div", { className: b.divider }),
                    (0, r.jsx)(p, {
                        icon: n(128724),
                        title: m.intl.string(m.t.O0SfFy),
                        subtitle: m.intl.formatToPlainString(m.t.TG7NYK, {
                            enabled: C.filter((e) => e.enabled).length,
                            total: C.length,
                        }),
                        page: u.u.DM_AND_SPAM_PROTECTION,
                    }),
                    (0, r.jsx)("div", { className: b.divider }),
                    N &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(p, {
                                    icon: n(145136),
                                    title: m.intl.string(m.t.uRelgx),
                                    subtitle: m.intl.formatToPlainString(m.t.TG7NYK, {
                                        enabled: x,
                                        total: j,
                                    }),
                                    page: u.u.AUTOMOD,
                                }),
                                (0, r.jsx)("div", { className: b.divider }),
                            ],
                        }),
                    (0, r.jsx)(p, {
                        icon: n(913414),
                        title: m.intl.string(m.t.xrmhRX),
                        subtitle: m.intl.formatToPlainString(m.t.TG7NYK, {
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
