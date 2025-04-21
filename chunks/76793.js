n.d(t, { q: () => _ });
var i = n(200651),
    r = n(192379),
    s = n(442837),
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
    p = n(388032),
    h = n(552312);
function f(e) {
    let { userId: t, count: n } = e,
        d = (0, s.e7)([m.default], () => m.default.getUser(t)),
        f = g.ZP.getFormattedName(d),
        b = r.useCallback(() => {
            (0, c.Zn)(t);
        }, [t]),
        _ = r.useCallback(() => (0, u.openUserProfileModal)({ userId: t }), [t]);
    return (
        r.useEffect(() => {
            (0, a.PR)(t);
        }, [t]),
        (0, i.jsxs)('div', {
            className: h.section,
            children: [
                null != d &&
                    (0, i.jsx)(o.Z, {
                        className: h.avatar,
                        user: d,
                        size: l.EFr.SIZE_40
                    }),
                (0, i.jsxs)('div', {
                    className: h.text,
                    children: [
                        (0, i.jsx)(l.P3F, {
                            className: h.username,
                            onClick: _,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                color: 'interactive-active',
                                children: f
                            })
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: p.intl.format(p.t['/MBjYG'], { count: n })
                        })
                    ]
                }),
                (0, i.jsx)(l.P3F, {
                    onClick: b,
                    className: h.sectionIconContainer,
                    children: (0, i.jsx)(l.XHJ, { size: 'xs' })
                })
            ]
        })
    );
}
function b(e) {
    let { className: t, userId: n, verification: s, index: a } = e,
        o = (0, c.bo)(s.timestamp),
        d = r.useCallback(() => {
            (0, c.ZU)(n, s.verifiedKey);
        }, [s.verifiedKey, n]);
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsxs)('div', {
                className: h.text,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        color: 'interactive-active',
                        children: p.intl.format(p.t.N4qBBA, { index: a + 1 })
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: o
                    })
                ]
            }),
            (0, i.jsx)(l.P3F, {
                className: h.icon,
                onClick: d,
                children: (0, i.jsx)(l.Dio, {
                    size: 'md',
                    color: l.TVs.colors.INTERACTIVE_NORMAL
                })
            })
        ]
    });
}
function _(e) {
    let { userId: t } = e,
        n = (0, d._)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f, {
                userId: t,
                count: n.length
            }),
            n.map((e, s) =>
                (0, i.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, i.jsx)(b, {
                                className: h.row,
                                userId: t,
                                index: s,
                                verification: e
                            }),
                            s !== n.length - 1 && (0, i.jsx)('div', { className: h.divider })
                        ]
                    },
                    ''.concat(s, '-').concat(e.timestamp)
                )
            )
        ]
    });
}
n(20493);
