n.d(t, { A: () => f }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(793030),
    o = n(442837),
    c = n(481060),
    u = n(296991),
    d = n(999382),
    m = n(217472),
    g = n(651390),
    p = n(388032),
    h = n(52930);
function f(e) {
    let { requireTerms: t, rules: n } = e,
        l = (0, o.e7)([d.Z], () => d.Z.getProps().guild),
        f = null == l ? void 0 : l.id,
        x = i.useCallback(
            (e) => {
                if (null == f || null == n) return null;
                m.Z.setPendingInviteRules(f, e, [...n]);
            },
            [f, n]
        ),
        b = i.useCallback(
            (e) => {
                if (null == f) return null;
                m.Z.setPendingInviteRules(f, t, e);
            },
            [f, t]
        );
    return null == l
        ? null
        : null == n
          ? (0, r.jsx)(c.$jN, {})
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        className: h.headerContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: h.headerText,
                                children: [
                                    (0, r.jsx)(a.X6, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: p.intl.string(p.t.d21uOj)
                                    }),
                                    (0, r.jsx)(a.xv, {
                                        tag: 'p',
                                        variant: 'text-sm/medium',
                                        color: 'text-secondary',
                                        className: h.bodyText,
                                        children: p.intl.string(p.t.SzpUBA)
                                    })
                                ]
                            }),
                            (0, r.jsx)(c.rsf, {
                                onChange: x,
                                checked: t
                            })
                        ]
                    }),
                    t && (0, r.jsx)(g.c, { guildId: l.id }),
                    (0, r.jsx)('div', {
                        className: s()(h.rules, { [h.disabled]: !t }),
                        children: (0, r.jsxs)('div', {
                            inert: t ? void 0 : '',
                            children: [
                                (0, r.jsx)(a.X6, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: h.rulesHeader,
                                    children: p.intl.string(p.t.XcAzbm)
                                }),
                                (0, r.jsx)(u.k, {
                                    guild: l,
                                    rules: n,
                                    setRules: b
                                })
                            ]
                        })
                    })
                ]
            });
}
