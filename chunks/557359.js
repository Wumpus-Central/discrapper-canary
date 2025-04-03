n.d(t, { A: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(296991),
    u = n(999382),
    m = n(217472),
    g = n(651390),
    p = n(981631),
    h = n(388032),
    f = n(52930);
function b(e) {
    let { requireTerms: t, rules: n } = e,
        s = (0, o.e7)([u.Z], () => u.Z.getProps().guild),
        b = null == s ? void 0 : s.id,
        x = i.useCallback(
            (e) => {
                if (null == b || null == n) return null;
                m.Z.setPendingInviteRules(b, e, [...n]);
            },
            [b, n]
        ),
        j = i.useCallback(
            (e) => {
                if (null == b) return null;
                m.Z.setPendingInviteRules(b, t, e);
            },
            [b, t]
        );
    if (null == s) return null;
    if (null == n) return (0, r.jsx)(c.$jN, {});
    let N = !s.hasFeature(p.oNc.CLAN);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: f.headerContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: f.headerText,
                        children: [
                            (0, r.jsx)(l.X6, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: h.NW.string(h.t.d21uOj)
                            }),
                            (0, r.jsx)(l.xv, {
                                tag: 'p',
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                className: f.bodyText,
                                children: h.NW.string(h.t.SzpUBA)
                            })
                        ]
                    }),
                    N &&
                        (0, r.jsx)(c.rsf, {
                            onChange: x,
                            checked: t
                        })
                ]
            }),
            t && (0, r.jsx)(g.c, { guildId: s.id }),
            (0, r.jsx)('div', {
                className: a()(f.rules, { [f.disabled]: !t }),
                children: (0, r.jsxs)('div', {
                    inert: t ? void 0 : '',
                    children: [
                        (0, r.jsx)(l.X6, {
                            variant: 'text-xs/bold',
                            color: 'text-muted',
                            className: f.rulesHeader,
                            children: h.NW.string(h.t.XcAzbm)
                        }),
                        (0, r.jsx)(d.k, {
                            guild: s,
                            rules: n,
                            setRules: j
                        })
                    ]
                })
            })
        ]
    });
}
