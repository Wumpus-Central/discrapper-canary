n.d(t, { e: () => b });
var i = n(255367),
    r = n(73800),
    s = n(920155),
    a = n(744399),
    l = n(966902),
    o = n(237872),
    c = n(562618),
    d = n(230711),
    u = n(906732),
    m = n(829716),
    p = n(981631),
    g = n(921944),
    h = n(698282),
    f = n(388032);
function b(e) {
    let { markAsDismissed: t, targetElementRef: n, children: b } = e,
        { analyticsLocations: x } = (0, u.ZP)(),
        _ = (0, r.useCallback)(() => {
            (t(g.L.TAKE_ACTION), d.Z.open(p.oAB.PROFILE_CUSTOMIZATION, null, { analyticsLocations: x }), (0, m.I)({ analyticsLocations: x }));
        }, [t, x]),
        j = (0, r.useCallback)(() => {
            t(g.L.USER_DISMISS);
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            b,
            (0, i.jsxs)(s.m, {
                targetElementRef: n,
                shouldShow: !0,
                align: 'right',
                position: 'top',
                children: [
                    (0, i.jsx)(o.u, { onClick: j }),
                    (0, i.jsx)(c.Y, {
                        title: f.intl.string(h.default['1AE46+']),
                        body: f.intl.string(h.default.cNc1g4)
                    }),
                    (0, i.jsx)(a.k, {
                        actions: [
                            {
                                text: f.intl.string(f.t.uw9zIy),
                                variant: 'primary',
                                onClick: _
                            }
                        ]
                    }),
                    (0, i.jsx)(l.$, {
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
