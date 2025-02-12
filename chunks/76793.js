n.d(t, { q: () => E });
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(232567),
    o = n(700582);
n(90641), n(615830);
var c = n(630759),
    d = n(931500);
n(921157);
var u = n(171368),
    h = n(594174),
    m = n(51144),
    g = n(388032),
    x = n(695372);
function _(e) {
    let { userId: t, count: n } = e,
        d = (0, l.e7)([h.default], () => h.default.getUser(t)),
        _ = m.ZP.getFormattedName(d),
        p = s.useCallback(() => {
            (0, c.Zn)(t);
        }, [t]),
        E = s.useCallback(() => (0, u.openUserProfileModal)({ userId: t }), [t]);
    return (
        s.useEffect(() => {
            (0, a.PR)(t);
        }, [t]),
        (0, i.jsxs)('div', {
            className: x.section,
            children: [
                null != d &&
                    (0, i.jsx)(o.Z, {
                        className: x.avatar,
                        user: d,
                        size: r.EFr.SIZE_40
                    }),
                (0, i.jsxs)('div', {
                    className: x.text,
                    children: [
                        (0, i.jsx)(r.P3F, {
                            className: x.username,
                            onClick: E,
                            children: (0, i.jsx)(r.Text, {
                                variant: 'text-md/semibold',
                                color: 'interactive-active',
                                children: _
                            })
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: g.intl.format(g.t['/MBjYG'], { count: n })
                        })
                    ]
                }),
                (0, i.jsx)(r.P3F, {
                    onClick: p,
                    className: x.sectionIconContainer,
                    children: (0, i.jsx)(r.XHJ, { size: 'xs' })
                })
            ]
        })
    );
}
function p(e) {
    let { className: t, userId: n, verification: l, index: a } = e,
        o = (0, c.bo)(l.timestamp),
        d = s.useCallback(() => {
            (0, c.ZU)(n, l.verifiedKey);
        }, [l.verifiedKey, n]);
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsxs)('div', {
                className: x.text,
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/semibold',
                        color: 'interactive-active',
                        children: g.intl.format(g.t.N4qBBA, { index: a + 1 })
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: o
                    })
                ]
            }),
            (0, i.jsx)(r.P3F, {
                className: x.icon,
                onClick: d,
                children: (0, i.jsx)(r.Dio, {
                    size: 'md',
                    color: r.TVs.colors.INTERACTIVE_NORMAL
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
            (0, i.jsx)(_, {
                userId: t,
                count: n.length
            }),
            n.map((e, l) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(p, {
                                className: x.row,
                                userId: t,
                                index: l,
                                verification: e
                            }),
                            l !== n.length - 1 && (0, i.jsx)('div', { className: x.divider })
                        ]
                    },
                    ''.concat(l, '-').concat(e.timestamp)
                )
            )
        ]
    });
}
n(814632);
