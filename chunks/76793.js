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
    g = n(51144),
    h = n(388032),
    x = n(695978);
function _(e) {
    let { userId: t, count: n } = e,
        d = (0, r.e7)([m.default], () => m.default.getUser(t)),
        _ = g.ZP.getFormattedName(d),
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
                        size: l.EFr.SIZE_40
                    }),
                (0, i.jsxs)('div', {
                    className: x.text,
                    children: [
                        (0, i.jsx)(l.P3F, {
                            className: x.username,
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
                    onClick: p,
                    className: x.sectionIconContainer,
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
                className: x.text,
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
                className: x.icon,
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
            (0, i.jsx)(_, {
                userId: t,
                count: n.length
            }),
            n.map((e, r) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(p, {
                                className: x.row,
                                userId: t,
                                index: r,
                                verification: e
                            }),
                            r !== n.length - 1 && (0, i.jsx)('div', { className: x.divider })
                        ]
                    },
                    ''.concat(r, '-').concat(e.timestamp)
                )
            )
        ]
    });
}
n(483938);
