n.d(t, { R: () => A }), n(47120);
var l = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    u = n(481060),
    s = n(590965),
    d = n(695346),
    o = n(51331),
    c = n(259580),
    E = n(626135),
    _ = n(44609),
    m = n(731971),
    S = n(981631),
    g = n(388032),
    N = n(671149);
let A = () => {
    var e;
    let [t, n] = i.useState(!1),
        a = d.G6.useSetting(),
        { nickname: A, dmsAllowed: I, showActivity: v, mutedServer: R, setNickname: T, setDmsAllowed: O, setShowActivity: h, setMutedServer: f } = (0, m.XW)(),
        C = null === (e = s.Z.getProps().invite) || void 0 === e ? void 0 : e.is_nickname_changeable,
        D = (0, _.m4)({ location: 'InviteSettingsControls' });
    return (0, l.jsxs)('div', {
        className: r()(N.editProfileContainer, { [N.opened]: t }),
        children: [
            (0, l.jsxs)(u.P3F, {
                className: N.header,
                onClick: () => {
                    n(!t), t && E.default.track(S.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED);
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
                                children: g.intl.string(g.t.A5wHQ0)
                            }),
                            (0, l.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: g.intl.string(g.t.UKCSER)
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        className: r()(N.caret, { [N.opened]: t }),
                        children: (0, l.jsx)(c.Z, {
                            width: 18,
                            height: 18,
                            direction: c.Z.Directions.UP
                        })
                    })
                ]
            }),
            (0, l.jsxs)('div', {
                className: r()(N.customizationSection, { [N.opened]: t }, C ? null : N.condensed),
                children: [
                    C &&
                        (0, l.jsxs)('div', {
                            className: N.serverNickname,
                            children: [
                                (0, l.jsx)(u.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: g.intl.string(g.t.me1lRk)
                                }),
                                (0, l.jsx)(u.oil, {
                                    placeholder: g.intl.string(g.t['09Q8ys']),
                                    maxLength: S.l$U,
                                    value: A,
                                    onChange: T
                                })
                            ]
                        }),
                    (0, l.jsx)(o.Z, {
                        title: g.intl.string(g.t['/2ed39']),
                        value: I,
                        onChange: O
                    }),
                    a &&
                        (0, l.jsx)(o.Z, {
                            title: g.intl.string(g.t.bN4m1N),
                            value: v,
                            onChange: h
                        }),
                    D &&
                        (0, l.jsx)(o.Z, {
                            title: g.intl.string(g.t['0nZCqK']),
                            value: R,
                            onChange: f
                        })
                ]
            })
        ]
    });
};
