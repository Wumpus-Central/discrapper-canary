(n.d(t, { R: () => x }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(590965),
    c = n(695346),
    u = n(51331),
    d = n(259580),
    h = n(626135),
    p = n(44609),
    g = n(731971),
    m = n(981631),
    f = n(388032),
    _ = n(190981);
let x = () => {
    var e;
    let [t, n] = i.useState(!1),
        l = c.G6.useSetting(),
        { nickname: x, dmsAllowed: b, showActivity: E, mutedServer: v, setNickname: I, setDmsAllowed: j, setShowActivity: O, setMutedServer: y, guildId: S, inviteCode: N } = (0, g.XW)(),
        C = null == (e = o.Z.getProps().invite) ? void 0 : e.is_nickname_changeable,
        A = (0, p.m4)({ location: 'InviteSettingsControls' });
    return (0, r.jsxs)('div', {
        className: s()(_.editProfileContainer, { [_.opened]: t }),
        children: [
            (0, r.jsxs)(a.P3F, {
                className: _.header,
                onClick: () => {
                    (t ||
                        h.default.track(m.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                            guild_id: S,
                            invite_code: N
                        }),
                        n(!t));
                },
                children: [
                    (0, r.jsx)('div', {
                        className: _.headerIconWrapper,
                        children: (0, r.jsx)(a.ewm, { size: 'md' })
                    }),
                    (0, r.jsxs)('div', {
                        className: _.title,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: f.intl.string(f.t.A5wHQ0)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: f.intl.string(f.t.UKCSER)
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: s()(_.caret, { [_.opened]: t }),
                        children: (0, r.jsx)(d.Z, {
                            width: 18,
                            height: 18,
                            direction: d.Z.Directions.DOWN
                        })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: s()(_.customizationSection, { [_.opened]: t }, C ? null : _.condensed),
                children: [
                    C &&
                        (0, r.jsxs)('div', {
                            className: _.serverNickname,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: f.intl.string(f.t.me1lRk)
                                }),
                                (0, r.jsx)(a.oil, {
                                    placeholder: f.intl.string(f.t['09Q8ys']),
                                    maxLength: m.l$U,
                                    value: x,
                                    onChange: I
                                })
                            ]
                        }),
                    (0, r.jsx)(u.Z, {
                        title: f.intl.string(f.t['/2ed39']),
                        value: b,
                        onChange: j
                    }),
                    l &&
                        (0, r.jsx)(u.Z, {
                            title: f.intl.string(f.t.bN4m1N),
                            value: E,
                            onChange: O
                        }),
                    A &&
                        (0, r.jsx)(u.Z, {
                            title: f.intl.string(f.t['0nZCqK']),
                            value: v,
                            onChange: y
                        })
                ]
            })
        ]
    });
};
