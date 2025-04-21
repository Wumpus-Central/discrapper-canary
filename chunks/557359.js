n.d(t, { A: () => x }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(296991),
    u = n(999382),
    m = n(217472),
    g = n(651390),
    p = n(981631),
    h = n(388032),
    f = n(52930);
function x(e) {
    let { requireTerms: t, rules: n } = e,
        l = (0, o.e7)([u.Z], () => u.Z.getProps().guild),
        x = null == l ? void 0 : l.id,
        b = i.useCallback(
            (e) => {
                if (null == x || null == n) return null;
                m.Z.setPendingInviteRules(x, e, [...n]);
            },
            [x, n]
        ),
        j = i.useCallback(
            (e) => {
                if (null == x) return null;
                m.Z.setPendingInviteRules(x, t, e);
            },
            [x, t]
        );
    if (null == l) return null;
    if (null == n) return (0, r.jsx)(c.$jN, {});
    let _ = !l.hasFeature(p.oNc.CLAN);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: f.headerContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: f.headerText,
                        children: [
                            (0, r.jsx)(a.X6, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: h.intl.string(h.t.d21uOj)
                            }),
                            (0, r.jsx)(a.xv, {
                                tag: 'p',
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                className: f.bodyText,
                                children: h.intl.string(h.t.SzpUBA)
                            })
                        ]
                    }),
                    _ &&
                        (0, r.jsx)(c.rsf, {
                            onChange: b,
                            checked: t
                        })
                ]
            }),
            t && (0, r.jsx)(g.c, { guildId: l.id }),
            (0, r.jsx)('div', {
                className: s()(f.rules, { [f.disabled]: !t }),
                children: (0, r.jsxs)('div', {
                    inert: t ? void 0 : '',
                    children: [
                        (0, r.jsx)(a.X6, {
                            variant: 'text-xs/bold',
                            color: 'text-muted',
                            className: f.rulesHeader,
                            children: h.intl.string(h.t.XcAzbm)
                        }),
                        (0, r.jsx)(d.k, {
                            guild: l,
                            rules: n,
                            setRules: j
                        })
                    ]
                })
            })
        ]
    });
}
