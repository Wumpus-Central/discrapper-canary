n.d(t, { q: () => _ });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(481060),
    l = n(232567),
    o = n(700582),
    c = n(906732);
(n(90641), n(615830));
var d = n(630759),
    u = n(931500);
n(921157);
var m = n(892001),
    p = n(594174),
    g = n(51144),
    h = n(388032),
    f = n(552312);
function b(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: u } = (0, c.ZP)(),
        b = (0, s.e7)([p.default], () => p.default.getUser(t)),
        x = g.ZP.getFormattedName(b),
        _ = r.useCallback(() => {
            (0, d.Zn)(t);
        }, [t]),
        j = r.useCallback(
            () =>
                (0, m.openUserProfileModal)({
                    userId: t,
                    sourceAnalyticsLocations: u
                }),
            [t, u]
        );
    return (
        r.useEffect(() => {
            (0, l.PR)(t);
        }, [t]),
        (0, i.jsxs)('div', {
            className: f.section,
            children: [
                null != b &&
                    (0, i.jsx)(o.Z, {
                        className: f.avatar,
                        user: b,
                        size: a.EFr.SIZE_40
                    }),
                (0, i.jsxs)('div', {
                    className: f.text,
                    children: [
                        (0, i.jsx)(a.P3F, {
                            className: f.username,
                            onClick: j,
                            children: (0, i.jsx)(a.Text, {
                                variant: 'text-md/semibold',
                                color: 'interactive-active',
                                children: x
                            })
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: h.intl.format(h.t['/MBjYG'], { count: n })
                        })
                    ]
                }),
                (0, i.jsx)(a.P3F, {
                    onClick: _,
                    className: f.sectionIconContainer,
                    children: (0, i.jsx)(a.XHJ, { size: 'xs' })
                })
            ]
        })
    );
}
function x(e) {
    let { className: t, userId: n, verification: s, index: l } = e,
        o = (0, d.bo)(s.timestamp),
        c = r.useCallback(() => {
            (0, d.ZU)(n, s.verifiedKey);
        }, [s.verifiedKey, n]);
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsxs)('div', {
                className: f.text,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/semibold',
                        color: 'interactive-active',
                        children: h.intl.format(h.t.N4qBBA, { index: l + 1 })
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: o
                    })
                ]
            }),
            (0, i.jsx)(a.P3F, {
                className: f.icon,
                onClick: c,
                children: (0, i.jsx)(a.Dio, {
                    size: 'md',
                    color: a.TVs.colors.INTERACTIVE_NORMAL
                })
            })
        ]
    });
}
function _(e) {
    let { userId: t } = e,
        n = (0, u._)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(b, {
                userId: t,
                count: n.length
            }),
            n.map((e, s) =>
                (0, i.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, i.jsx)(x, {
                                className: f.row,
                                userId: t,
                                index: s,
                                verification: e
                            }),
                            s !== n.length - 1 && (0, i.jsx)('div', { className: f.divider })
                        ]
                    },
                    ''.concat(s, '-').concat(e.timestamp)
                )
            )
        ]
    });
}
n(20493);
