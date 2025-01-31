n.d(t, { A: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(66511),
    u = n(296991),
    m = n(999382),
    h = n(217472),
    g = n(981631),
    x = n(388032),
    p = n(457255);
function _(e) {
    let { requireTerms: t, rules: n } = e,
        l = (0, o.e7)([m.Z], () => m.Z.getProps().guild),
        _ = null == l ? void 0 : l.id,
        C = r.useCallback(() => {
            null != _ && d.Z.openMemberVerificationPreviewModal(_);
        }, [_]),
        f = r.useCallback(
            (e) => {
                if (null == _ || null == n) return null;
                h.Z.setPendingInviteRules(_, e, [...n]);
            },
            [_, n]
        ),
        v = r.useCallback(
            (e) => {
                if (null == _) return null;
                h.Z.setPendingInviteRules(_, t, e);
            },
            [_, t]
        );
    if (null == l) return null;
    if (null == n) return (0, i.jsx)(c.$jN, {});
    let N = !l.hasFeature(g.oNc.CLAN);
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
                    N &&
                        (0, i.jsx)(c.rsf, {
                            onChange: f,
                            checked: t
                        })
                ]
            }),
            t &&
                (0, i.jsx)(c.Qjf, {
                    text: x.intl.string(x.t.SKNnqq),
                    icon: c.rgF,
                    variant: 'primary',
                    onClick: C
                }),
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
                        (0, i.jsx)(u.k, {
                            guild: l,
                            rules: n,
                            setRules: v
                        })
                    ]
                })
            })
        ]
    });
}
