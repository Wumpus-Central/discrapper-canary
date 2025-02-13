n.d(t, { A: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(296991),
    u = n(999382),
    m = n(217472),
    h = n(651390),
    g = n(981631),
    x = n(388032),
    p = n(517668);
function _(e) {
    let { requireTerms: t, rules: n } = e,
        l = (0, o.e7)([u.Z], () => u.Z.getProps().guild),
        _ = null == l ? void 0 : l.id,
        C = r.useCallback(
            (e) => {
                if (null == _ || null == n) return null;
                m.Z.setPendingInviteRules(_, e, [...n]);
            },
            [_, n]
        ),
        f = r.useCallback(
            (e) => {
                if (null == _) return null;
                m.Z.setPendingInviteRules(_, t, e);
            },
            [_, t]
        );
    if (null == l) return null;
    if (null == n) return (0, i.jsx)(c.$jN, {});
    let v = !l.hasFeature(g.oNc.CLAN);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: p.headerContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: p.headerText,
                        children: [
                            (0, i.jsx)(a.X6, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: x.intl.string(x.t.d21uOj)
                            }),
                            (0, i.jsx)(a.xv, {
                                tag: 'p',
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                className: p.bodyText,
                                children: x.intl.string(x.t.SzpUBA)
                            })
                        ]
                    }),
                    v &&
                        (0, i.jsx)(c.rsf, {
                            onChange: C,
                            checked: t
                        })
                ]
            }),
            t && (0, i.jsx)(h.c, { guildId: l.id }),
            (0, i.jsx)('div', {
                className: s()(p.rules, { [p.disabled]: !t }),
                children: (0, i.jsxs)('div', {
                    inert: t ? void 0 : '',
                    children: [
                        (0, i.jsx)(a.X6, {
                            variant: 'text-xs/bold',
                            color: 'text-muted',
                            className: p.rulesHeader,
                            children: x.intl.string(x.t.XcAzbm)
                        }),
                        (0, i.jsx)(d.k, {
                            guild: l,
                            rules: n,
                            setRules: f
                        })
                    ]
                })
            })
        ]
    });
}
