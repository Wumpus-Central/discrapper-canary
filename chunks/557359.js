n.d(t, {
    A: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(296991),
    u = n(999382),
    m = n(217472),
    h = n(981631),
    g = n(388032),
    x = n(457255);
function p(e) {
    let { requireTerms: t, rules: l } = e,
        p = (0, o.e7)([u.Z], () => u.Z.getProps().guild),
        f = null == p ? void 0 : p.id,
        C = r.useCallback(() => {
            if (null != f)
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('80026'), n.e('36869')]).then(n.bind(n, 645264));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guildId: f,
                            isPreview: !0
                        });
                });
        }, [f]),
        v = r.useCallback(
            (e) => {
                if (null == f || null == l) return null;
                m.Z.setPendingInviteRules(f, e, [...l]);
            },
            [f, l]
        ),
        _ = r.useCallback(
            (e) => {
                if (null == f) return null;
                m.Z.setPendingInviteRules(f, t, e);
            },
            [f, t]
        );
    if (null == p) return null;
    if (null == l) return (0, i.jsx)(c.Spinner, {});
    let I = !p.hasFeature(h.oNc.CLAN);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: x.headerContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: x.headerText,
                        children: [
                            (0, i.jsx)(s.X6, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: g.intl.string(g.t.d21uOj)
                            }),
                            (0, i.jsx)(s.xv, {
                                tag: 'p',
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                className: x.bodyText,
                                children: g.intl.string(g.t.SzpUBA)
                            })
                        ]
                    }),
                    I &&
                        (0, i.jsx)(c.Switch, {
                            onChange: v,
                            checked: t
                        })
                ]
            }),
            t &&
                (0, i.jsx)(c.LinkButton, {
                    text: g.intl.string(g.t.SKNnqq),
                    icon: c.WindowLaunchIcon,
                    variant: 'primary',
                    onClick: C
                }),
            (0, i.jsx)('div', {
                className: a()(x.rules, { [x.disabled]: !t }),
                children: (0, i.jsxs)('div', {
                    inert: t ? void 0 : '',
                    children: [
                        (0, i.jsx)(s.X6, {
                            variant: 'text-xs/bold',
                            color: 'text-muted',
                            className: x.rulesHeader,
                            children: g.intl.string(g.t.XcAzbm)
                        }),
                        (0, i.jsx)(d.k, {
                            guild: p,
                            rules: l,
                            setRules: _
                        })
                    ]
                })
            })
        ]
    });
}
