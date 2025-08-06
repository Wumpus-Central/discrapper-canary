n.d(t, { e: () => _ });
var i = n(255367),
    r = n(73800),
    s = n(793030),
    a = n(920155),
    l = n(744399),
    o = n(966902),
    c = n(237872),
    d = n(562618),
    u = n(230711),
    m = n(906732),
    p = n(829716),
    g = n(981631),
    h = n(921944),
    f = n(698282),
    b = n(388032),
    x = n(481916);
function _(e) {
    let { markAsDismissed: t, targetElementRef: n, children: _ } = e,
        { analyticsLocations: j } = (0, m.ZP)(),
        E = (0, r.useCallback)(() => {
            (t(h.L.TAKE_ACTION), u.Z.open(g.oAB.PROFILE_CUSTOMIZATION, null, { analyticsLocations: j }), (0, p.I)({ analyticsLocations: j }));
        }, [t, j]),
        C = (0, r.useCallback)(() => {
            t(h.L.USER_DISMISS);
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            _,
            (0, i.jsxs)(a.m, {
                targetElementRef: n,
                shouldShow: !0,
                align: 'right',
                position: 'top',
                children: [
                    (0, i.jsx)(c.u, { onClick: C }),
                    (0, i.jsx)(d.Y, { title: b.intl.string(f.default['1AE46+']) }),
                    (0, i.jsxs)(s.xv, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        className: x.subtitle,
                        children: [b.intl.string(f.default.cNc1g4), (0, i.jsx)('br', {}), b.intl.string(b.t['4JNXHB'])]
                    }),
                    (0, i.jsx)(l.k, {
                        actions: [
                            {
                                text: b.intl.string(b.t.uw9zIy),
                                variant: 'primary',
                                onClick: E
                            }
                        ]
                    }),
                    (0, i.jsx)(o.$, {
                        caretConfig: {
                            position: 'bottom',
                            align: 'center'
                        }
                    })
                ]
            })
        ]
    });
}
