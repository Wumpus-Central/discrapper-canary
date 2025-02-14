t.d(n, { R: () => h }), t(47120);
var i = t(200651),
    l = t(192379),
    a = t(120356),
    r = t.n(a),
    s = t(481060),
    o = t(590965),
    c = t(695346),
    u = t(51331),
    d = t(259580),
    m = t(626135),
    _ = t(44609),
    p = t(731971),
    x = t(981631),
    g = t(388032),
    N = t(181550);
let h = () => {
    var e;
    let [n, t] = l.useState(!1),
        a = c.G6.useSetting(),
        { nickname: h, dmsAllowed: v, showActivity: E, mutedServer: I, setNickname: f, setDmsAllowed: j, setShowActivity: S, setMutedServer: C } = (0, p.XW)(),
        A = null === (e = o.Z.getProps().invite) || void 0 === e ? void 0 : e.is_nickname_changeable,
        T = (0, _.m4)({ location: 'InviteSettingsControls' });
    return (0, i.jsxs)('div', {
        className: r()(N.editProfileContainer, { [N.opened]: n }),
        children: [
            (0, i.jsxs)(s.P3F, {
                className: N.header,
                onClick: () => {
                    n || m.default.track(x.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED), t(!n);
                },
                children: [
                    (0, i.jsx)('div', {
                        className: N.headerIconWrapper,
                        children: (0, i.jsx)(s.ewm, { size: 'md' })
                    }),
                    (0, i.jsxs)('div', {
                        className: N.title,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: g.intl.string(g.t.A5wHQ0)
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: g.intl.string(g.t.UKCSER)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: r()(N.caret, { [N.opened]: n }),
                        children: (0, i.jsx)(d.Z, {
                            width: 18,
                            height: 18,
                            direction: d.Z.Directions.UP
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: r()(N.customizationSection, { [N.opened]: n }, A ? null : N.condensed),
                children: [
                    A &&
                        (0, i.jsxs)('div', {
                            className: N.serverNickname,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: g.intl.string(g.t.me1lRk)
                                }),
                                (0, i.jsx)(s.oil, {
                                    placeholder: g.intl.string(g.t['09Q8ys']),
                                    maxLength: x.l$U,
                                    value: h,
                                    onChange: f
                                })
                            ]
                        }),
                    (0, i.jsx)(u.Z, {
                        title: g.intl.string(g.t['/2ed39']),
                        value: v,
                        onChange: j
                    }),
                    a &&
                        (0, i.jsx)(u.Z, {
                            title: g.intl.string(g.t.bN4m1N),
                            value: E,
                            onChange: S
                        }),
                    T &&
                        (0, i.jsx)(u.Z, {
                            title: g.intl.string(g.t['0nZCqK']),
                            value: I,
                            onChange: C
                        })
                ]
            })
        ]
    });
};
