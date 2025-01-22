n.d(t, {
    q: function () {
        return E;
    }
});
var i = n(200651),
    r = n(192379),
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
    h = n(388032),
    p = n(47074);
function x(e) {
    let { userId: t, count: n } = e,
        d = (0, s.e7)([m.default], () => m.default.getUser(t)),
        x = g.ZP.getFormattedName(d),
        f = r.useCallback(() => {
            (0, c.Zn)(t);
        }, [t]),
        E = r.useCallback(() => (0, u.openUserProfileModal)({ userId: t }), [t]);
    return (
        r.useEffect(() => {
            (0, l.PR)(t);
        }, [t]),
        (0, i.jsxs)('div', {
            className: p.section,
            children: [
                null != d &&
                    (0, i.jsx)(o.Z, {
                        className: p.avatar,
                        user: d,
                        size: a.AvatarSizes.SIZE_40
                    }),
                (0, i.jsxs)('div', {
                    className: p.text,
                    children: [
                        (0, i.jsx)(a.Clickable, {
                            className: p.username,
                            onClick: E,
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
                (0, i.jsx)(a.Clickable, {
                    onClick: f,
                    className: p.sectionIconContainer,
                    children: (0, i.jsx)(a.TrashIcon, { size: 'xs' })
                })
            ]
        })
    );
}
function f(e) {
    let { className: t, userId: n, verification: s, index: l } = e,
        o = (0, c.bo)(s.timestamp),
        d = r.useCallback(() => {
            (0, c.ZU)(n, s.verifiedKey);
        }, [s.verifiedKey, n]);
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsxs)('div', {
                className: p.text,
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
            (0, i.jsx)(a.Clickable, {
                className: p.icon,
                onClick: d,
                children: (0, i.jsx)(a.XSmallIcon, {
                    size: 'md',
                    color: a.tokens.colors.INTERACTIVE_NORMAL
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
            n.map((e, s) =>
                (0, i.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, i.jsx)(f, {
                                className: p.row,
                                userId: t,
                                index: s,
                                verification: e
                            }),
                            s !== n.length - 1 && (0, i.jsx)('div', { className: p.divider })
                        ]
                    },
                    ''.concat(s, '-').concat(e.timestamp)
                )
            )
        ]
    });
}
n(232186);
