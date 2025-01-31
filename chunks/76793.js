n.d(t, { q: () => E });
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(232567),
    o = n(700582);
n(90641), n(615830);
var c = n(630759),
    d = n(931500);
n(921157);
var u = n(171368),
    m = n(594174),
    h = n(51144),
    g = n(388032),
    _ = n(47074);
function x(e) {
    let { userId: t, count: n } = e,
        d = (0, r.e7)([m.default], () => m.default.getUser(t)),
        x = h.ZP.getFormattedName(d),
        p = s.useCallback(() => {
            (0, c.Zn)(t);
        }, [t]),
        E = s.useCallback(() => (0, u.openUserProfileModal)({ userId: t }), [t]);
    return (
        s.useEffect(() => {
            (0, a.PR)(t);
        }, [t]),
        (0, i.jsxs)('div', {
            className: _.section,
            children: [
                null != d &&
                    (0, i.jsx)(o.Z, {
                        className: _.avatar,
                        user: d,
                        size: l.EFr.SIZE_40
                    }),
                (0, i.jsxs)('div', {
                    className: _.text,
                    children: [
                        (0, i.jsx)(l.P3F, {
                            className: _.username,
                            onClick: E,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                color: 'interactive-active',
                                children: x
                            })
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: g.intl.format(g.t['/MBjYG'], { count: n })
                        })
                    ]
                }),
                (0, i.jsx)(l.P3F, {
                    onClick: p,
                    className: _.sectionIconContainer,
                    children: (0, i.jsx)(l.XHJ, { size: 'xs' })
                })
            ]
        })
    );
}
function p(e) {
    let { className: t, userId: n, verification: r, index: a } = e,
        o = (0, c.bo)(r.timestamp),
        d = s.useCallback(() => {
            (0, c.ZU)(n, r.verifiedKey);
        }, [r.verifiedKey, n]);
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsxs)('div', {
                className: _.text,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        color: 'interactive-active',
                        children: g.intl.format(g.t.N4qBBA, { index: a + 1 })
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: o
                    })
                ]
            }),
            (0, i.jsx)(l.P3F, {
                className: _.icon,
                onClick: d,
                children: (0, i.jsx)(l.Dio, {
                    size: 'md',
                    color: l.TVs.colors.INTERACTIVE_NORMAL
                })
            })
        ]
    });
}
function E(e) {
    let { userId: t } = e,
        n = (0, d._)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x, {
                userId: t,
                count: n.length
            }),
            n.map((e, r) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(p, {
                                className: _.row,
                                userId: t,
                                index: r,
                                verification: e
                            }),
                            r !== n.length - 1 && (0, i.jsx)('div', { className: _.divider })
                        ]
                    },
                    ''.concat(r, '-').concat(e.timestamp)
                )
            )
        ]
    });
}
n(232186);
