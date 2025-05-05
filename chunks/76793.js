n.d(t, { q: () => x });
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(232567),
    o = n(700582),
    c = n(906732);
n(90641), n(615830);
var d = n(630759),
    u = n(931500);
n(921157);
var m = n(892001),
    g = n(594174),
    p = n(51144),
    h = n(388032),
    f = n(552312);
function b(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: u } = (0, c.ZP)(),
        b = (0, s.e7)([g.default], () => g.default.getUser(t)),
        _ = p.ZP.getFormattedName(b),
        x = r.useCallback(() => {
            (0, d.Zn)(t);
        }, [t]),
        E = r.useCallback(
            () =>
                (0, m.openUserProfileModal)({
                    userId: t,
                    sourceAnalyticsLocations: u
                }),
            [t, u]
        );
    return (
        r.useEffect(() => {
            (0, a.PR)(t);
        }, [t]),
        (0, i.jsxs)('div', {
            className: f.section,
            children: [
                null != b &&
                    (0, i.jsx)(o.Z, {
                        className: f.avatar,
                        user: b,
                        size: l.EFr.SIZE_40
                    }),
                (0, i.jsxs)('div', {
                    className: f.text,
                    children: [
                        (0, i.jsx)(l.P3F, {
                            className: f.username,
                            onClick: E,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                color: 'interactive-active',
                                children: _
                            })
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: h.intl.format(h.t['/MBjYG'], { count: n })
                        })
                    ]
                }),
                (0, i.jsx)(l.P3F, {
                    onClick: x,
                    className: f.sectionIconContainer,
                    children: (0, i.jsx)(l.XHJ, { size: 'xs' })
                })
            ]
        })
    );
}
function _(e) {
    let { className: t, userId: n, verification: s, index: a } = e,
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
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        color: 'interactive-active',
                        children: h.intl.format(h.t.N4qBBA, { index: a + 1 })
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: o
                    })
                ]
            }),
            (0, i.jsx)(l.P3F, {
                className: f.icon,
                onClick: c,
                children: (0, i.jsx)(l.Dio, {
                    size: 'md',
                    color: l.TVs.colors.INTERACTIVE_NORMAL
                })
            })
        ]
    });
}
function x(e) {
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
                            (0, i.jsx)(_, {
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
