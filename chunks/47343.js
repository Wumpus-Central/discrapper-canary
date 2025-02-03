n.d(t, { R: () => g }), n(47120);
var l = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    u = n(481060),
    s = n(590965),
    d = n(51331),
    o = n(259580),
    c = n(626135),
    E = n(44609),
    _ = n(731971),
    m = n(981631),
    N = n(388032),
    S = n(671149);
let g = () => {
    var e;
    let { nickname: t, dmsAllowed: n, showActivity: a, mutedServer: g, setNickname: A, setDmsAllowed: I, setShowActivity: T, setMutedServer: R } = (0, _.XW)(),
        [O, v] = i.useState(!1),
        h = null === (e = s.Z.getProps().invite) || void 0 === e ? void 0 : e.is_nickname_changeable,
        f = (0, E.m4)({ location: 'InviteSettingsControls' });
    return (0, l.jsxs)('div', {
        className: r()(S.editProfileContainer, { [S.opened]: O }),
        children: [
            (0, l.jsxs)(u.P3F, {
                className: S.header,
                onClick: () => {
                    v(!O), O && c.default.track(m.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED);
                },
                children: [
                    (0, l.jsx)('div', {
                        className: S.headerIconWrapper,
                        children: (0, l.jsx)(u.ewm, { size: 'md' })
                    }),
                    (0, l.jsxs)('div', {
                        className: S.title,
                        children: [
                            (0, l.jsx)(u.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: N.intl.string(N.t.A5wHQ0)
                            }),
                            (0, l.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: N.intl.string(N.t.UKCSER)
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        className: r()(S.caret, { [S.opened]: O }),
                        children: (0, l.jsx)(o.Z, {
                            width: 18,
                            height: 18,
                            direction: o.Z.Directions.UP
                        })
                    })
                ]
            }),
            (0, l.jsxs)('div', {
                className: r()(S.customizationSection, { [S.opened]: O }, h ? null : S.condensed),
                children: [
                    h &&
                        (0, l.jsxs)('div', {
                            className: S.serverNickname,
                            children: [
                                (0, l.jsx)(u.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: N.intl.string(N.t.me1lRk)
                                }),
                                (0, l.jsx)(u.oil, {
                                    placeholder: N.intl.string(N.t['09Q8ys']),
                                    maxLength: m.l$U,
                                    value: t,
                                    onChange: A
                                })
                            ]
                        }),
                    (0, l.jsx)(d.Z, {
                        title: N.intl.string(N.t['/2ed39']),
                        value: n,
                        onChange: I
                    }),
                    (0, l.jsx)(d.Z, {
                        title: N.intl.string(N.t.bN4m1N),
                        value: a,
                        onChange: T
                    }),
                    f &&
                        (0, l.jsx)(d.Z, {
                            title: N.intl.string(N.t['0nZCqK']),
                            value: g,
                            onChange: R
                        })
                ]
            })
        ]
    });
};
