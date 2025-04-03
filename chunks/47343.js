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
    N = t(981631),
    x = t(388032),
    g = t(190981);
let h = () => {
    var e;
    let [n, t] = l.useState(!1),
        a = c.G6.useSetting(),
        { nickname: h, dmsAllowed: E, showActivity: I, mutedServer: f, setNickname: v, setDmsAllowed: j, setShowActivity: S, setMutedServer: C, guildId: A, inviteCode: T } = (0, p.XW)(),
        L = null == (e = o.Z.getProps().invite) ? void 0 : e.is_nickname_changeable,
        P = (0, _.m4)({ location: 'InviteSettingsControls' });
    return (0, i.jsxs)('div', {
        className: r()(g.editProfileContainer, { [g.opened]: n }),
        children: [
            (0, i.jsxs)(s.P3F, {
                className: g.header,
                onClick: () => {
                    n ||
                        m.default.track(N.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                            guild_id: A,
                            invite_code: T
                        }),
                        t(!n);
                },
                children: [
                    (0, i.jsx)('div', {
                        className: g.headerIconWrapper,
                        children: (0, i.jsx)(s.ewm, { size: 'md' })
                    }),
                    (0, i.jsxs)('div', {
                        className: g.title,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: x.NW.string(x.t.A5wHQ0)
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: x.NW.string(x.t.UKCSER)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: r()(g.caret, { [g.opened]: n }),
                        children: (0, i.jsx)(d.Z, {
                            width: 18,
                            height: 18,
                            direction: d.Z.Directions.DOWN
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: r()(g.customizationSection, { [g.opened]: n }, L ? null : g.condensed),
                children: [
                    L &&
                        (0, i.jsxs)('div', {
                            className: g.serverNickname,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: x.NW.string(x.t.me1lRk)
                                }),
                                (0, i.jsx)(s.oil, {
                                    placeholder: x.NW.string(x.t['09Q8ys']),
                                    maxLength: N.l$U,
                                    value: h,
                                    onChange: v
                                })
                            ]
                        }),
                    (0, i.jsx)(u.Z, {
                        title: x.NW.string(x.t['/2ed39']),
                        value: E,
                        onChange: j
                    }),
                    a &&
                        (0, i.jsx)(u.Z, {
                            title: x.NW.string(x.t.bN4m1N),
                            value: I,
                            onChange: S
                        }),
                    P &&
                        (0, i.jsx)(u.Z, {
                            title: x.NW.string(x.t['0nZCqK']),
                            value: f,
                            onChange: C
                        })
                ]
            })
        ]
    });
};
