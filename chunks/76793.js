n.d(t, { q: () => b });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(232567),
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
        _ = i.useCallback(() => {
            (0, c.Zn)(t);
        }, [t]),
        b = i.useCallback(() => (0, u.openUserProfileModal)({ userId: t }), [t]);
    return (
        i.useEffect(() => {
            (0, l.PR)(t);
        }, [t]),
        (0, r.jsxs)('div', {
            className: h.section,
            children: [
                null != d &&
                    (0, r.jsx)(o.Z, {
                        className: h.avatar,
                        user: d,
                        size: a.EFr.SIZE_40
                    }),
                (0, r.jsxs)('div', {
                    className: h.text,
                    children: [
                        (0, r.jsx)(a.P3F, {
                            className: h.username,
                            onClick: b,
                            children: (0, r.jsx)(a.Text, {
                                variant: 'text-md/semibold',
                                color: 'interactive-active',
                                children: f
                            })
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: p.NW.format(p.t['/MBjYG'], { count: n })
                        })
                    ]
                }),
                (0, r.jsx)(a.P3F, {
                    onClick: _,
                    className: h.sectionIconContainer,
                    children: (0, r.jsx)(a.XHJ, { size: 'xs' })
                })
            ]
        })
    );
}
function _(e) {
    let { className: t, userId: n, verification: s, index: l } = e,
        o = (0, c.bo)(s.timestamp),
        d = i.useCallback(() => {
            (0, c.ZU)(n, s.verifiedKey);
        }, [s.verifiedKey, n]);
    return (0, r.jsxs)('div', {
        className: t,
        children: [
            (0, r.jsxs)('div', {
                className: h.text,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/semibold',
                        color: 'interactive-active',
                        children: p.NW.format(p.t.N4qBBA, { index: l + 1 })
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: o
                    })
                ]
            }),
            (0, r.jsx)(a.P3F, {
                className: h.icon,
                onClick: d,
                children: (0, r.jsx)(a.Dio, {
                    size: 'md',
                    color: a.TVs.colors.INTERACTIVE_NORMAL
                })
            })
        ]
    });
}
function b(e) {
    let { userId: t } = e,
        n = (0, d._)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f, {
                userId: t,
                count: n.length
            }),
            n.map((e, s) =>
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, r.jsx)(_, {
                                className: h.row,
                                userId: t,
                                index: s,
                                verification: e
                            }),
                            s !== n.length - 1 && (0, r.jsx)('div', { className: h.divider })
                        ]
                    },
                    ''.concat(s, '-').concat(e.timestamp)
                )
            )
        ]
    });
}
n(20493);
