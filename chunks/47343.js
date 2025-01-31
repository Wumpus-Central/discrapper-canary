n.d(t, { R: () => S }), n(47120);
var l = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    u = n(481060),
    s = n(590965),
    d = n(51331),
    o = n(259580),
    c = n(626135),
    E = n(731971),
    _ = n(981631),
    m = n(388032),
    N = n(671149);
let S = () => {
    var e;
    let { nickname: t, dmsAllowed: n, showActivity: a, mutedServer: S, setNickname: g, setDmsAllowed: A, setShowActivity: T, setMutedServer: I } = (0, E.XW)(),
        [R, O] = i.useState(!1),
        h = null === (e = s.Z.getProps().invite) || void 0 === e ? void 0 : e.is_nickname_changeable;
    return (0, l.jsxs)('div', {
        className: r()(N.editProfileContainer, { [N.opened]: R }),
        children: [
            (0, l.jsxs)(u.P3F, {
                className: N.header,
                onClick: () => {
                    O(!R), R && c.default.track(_.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED);
                },
                children: [
                    (0, l.jsx)('div', {
                        className: N.headerIconWrapper,
                        children: (0, l.jsx)(u.ewm, { size: 'md' })
                    }),
                    (0, l.jsxs)('div', {
                        className: N.title,
                        children: [
                            (0, l.jsx)(u.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: m.intl.string(m.t.A5wHQ0)
                            }),
                            (0, l.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: m.intl.string(m.t.UKCSER)
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        className: r()(N.caret, { [N.opened]: R }),
                        children: (0, l.jsx)(o.Z, {
                            width: 18,
                            height: 18,
                            direction: o.Z.Directions.UP
                        })
                    })
                ]
            }),
            (0, l.jsxs)('div', {
                className: r()(N.customizationSection, { [N.opened]: R }, h ? null : N.condensed),
                children: [
                    h &&
                        (0, l.jsxs)('div', {
                            className: N.serverNickname,
                            children: [
                                (0, l.jsx)(u.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: m.intl.string(m.t.me1lRk)
                                }),
                                (0, l.jsx)(u.oil, {
                                    placeholder: m.intl.string(m.t['09Q8ys']),
                                    maxLength: _.l$U,
                                    value: t,
                                    onChange: g
                                })
                            ]
                        }),
                    (0, l.jsx)(d.Z, {
                        title: m.intl.string(m.t['/2ed39']),
                        value: n,
                        onChange: A
                    }),
                    (0, l.jsx)(d.Z, {
                        title: m.intl.string(m.t.bN4m1N),
                        value: a,
                        onChange: T
                    }),
                    (0, l.jsx)(d.Z, {
                        title: m.intl.string(m.t['0nZCqK']),
                        value: S,
                        onChange: I
                    })
                ]
            })
        ]
    });
};
