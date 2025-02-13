n.d(t, { R: () => E }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(590965),
    c = n(695346),
    d = n(51331),
    u = n(259580),
    h = n(626135),
    _ = n(44609),
    m = n(731971),
    g = n(981631),
    p = n(388032),
    f = n(181550);
let E = () => {
    var e;
    let [t, n] = r.useState(!1),
        l = c.G6.useSetting(),
        { nickname: E, dmsAllowed: x, showActivity: I, mutedServer: v, setNickname: C, setDmsAllowed: N, setShowActivity: S, setMutedServer: T } = (0, m.XW)(),
        A = null === (e = s.Z.getProps().invite) || void 0 === e ? void 0 : e.is_nickname_changeable,
        b = (0, _.m4)({ location: 'InviteSettingsControls' });
    return (0, i.jsxs)('div', {
        className: a()(f.editProfileContainer, { [f.opened]: t }),
        children: [
            (0, i.jsxs)(o.P3F, {
                className: f.header,
                onClick: () => {
                    t || h.default.track(g.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED), n(!t);
                },
                children: [
                    (0, i.jsx)('div', {
                        className: f.headerIconWrapper,
                        children: (0, i.jsx)(o.ewm, { size: 'md' })
                    }),
                    (0, i.jsxs)('div', {
                        className: f.title,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: p.intl.string(p.t.A5wHQ0)
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: p.intl.string(p.t.UKCSER)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: a()(f.caret, { [f.opened]: t }),
                        children: (0, i.jsx)(u.Z, {
                            width: 18,
                            height: 18,
                            direction: u.Z.Directions.UP
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: a()(f.customizationSection, { [f.opened]: t }, A ? null : f.condensed),
                children: [
                    A &&
                        (0, i.jsxs)('div', {
                            className: f.serverNickname,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: p.intl.string(p.t.me1lRk)
                                }),
                                (0, i.jsx)(o.oil, {
                                    placeholder: p.intl.string(p.t['09Q8ys']),
                                    maxLength: g.l$U,
                                    value: E,
                                    onChange: C
                                })
                            ]
                        }),
                    (0, i.jsx)(d.Z, {
                        title: p.intl.string(p.t['/2ed39']),
                        value: x,
                        onChange: N
                    }),
                    l &&
                        (0, i.jsx)(d.Z, {
                            title: p.intl.string(p.t.bN4m1N),
                            value: I,
                            onChange: S
                        }),
                    b &&
                        (0, i.jsx)(d.Z, {
                            title: p.intl.string(p.t['0nZCqK']),
                            value: v,
                            onChange: T
                        })
                ]
            })
        ]
    });
};
