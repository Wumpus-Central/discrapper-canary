n.d(t, {
    A: function () {
        return f;
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
    d = n(66511),
    u = n(296991),
    m = n(999382),
    h = n(217472),
    g = n(981631),
    x = n(388032),
    p = n(457255);
function f(e) {
    let { requireTerms: t, rules: n } = e,
        l = (0, o.e7)([m.Z], () => m.Z.getProps().guild),
        f = null == l ? void 0 : l.id,
        C = r.useCallback(() => {
            if (null != f) d.Z.openMemberVerificationPreviewModal(f);
        }, [f]),
        v = r.useCallback(
            (e) => {
                if (null == f || null == n) return null;
                h.Z.setPendingInviteRules(f, e, [...n]);
            },
            [f, n]
        ),
        _ = r.useCallback(
            (e) => {
                if (null == f) return null;
                h.Z.setPendingInviteRules(f, t, e);
            },
            [f, t]
        );
    if (null == l) return null;
    if (null == n) return (0, i.jsx)(c.Spinner, {});
    let N = !l.hasFeature(g.oNc.CLAN);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: p.headerContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: p.headerText,
                        children: [
                            (0, i.jsx)(s.X6, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: x.intl.string(x.t.d21uOj)
                            }),
                            (0, i.jsx)(s.xv, {
                                tag: 'p',
                                variant: 'text-sm/medium',
                                color: 'text-secondary',
                                className: p.bodyText,
                                children: x.intl.string(x.t.SzpUBA)
                            })
                        ]
                    }),
                    N &&
                        (0, i.jsx)(c.Switch, {
                            onChange: v,
                            checked: t
                        })
                ]
            }),
            t &&
                (0, i.jsx)(c.LinkButton, {
                    text: x.intl.string(x.t.SKNnqq),
                    icon: c.WindowLaunchIcon,
                    variant: 'primary',
                    onClick: C
                }),
            (0, i.jsx)('div', {
                className: a()(p.rules, { [p.disabled]: !t }),
                children: (0, i.jsxs)('div', {
                    inert: t ? void 0 : '',
                    children: [
                        (0, i.jsx)(s.X6, {
                            variant: 'text-xs/bold',
                            color: 'text-muted',
                            className: p.rulesHeader,
                            children: x.intl.string(x.t.XcAzbm)
                        }),
                        (0, i.jsx)(u.k, {
                            guild: l,
                            rules: n,
                            setRules: _
                        })
                    ]
                })
            })
        ]
    });
}
