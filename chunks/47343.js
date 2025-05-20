n.d(t, { R: () => x }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(590965),
    c = n(695346),
    u = n(51331),
    d = n(259580),
    g = n(626135),
    h = n(44609),
    p = n(731971),
    m = n(981631),
    f = n(388032),
    _ = n(190981);
let x = () => {
    var e;
    let [t, n] = i.useState(!1),
        l = c.G6.useSetting(),
        { nickname: x, dmsAllowed: E, showActivity: b, mutedServer: v, setNickname: O, setDmsAllowed: I, setShowActivity: S, setMutedServer: j, guildId: y, inviteCode: N } = (0, p.XW)(),
        C = null == (e = s.Z.getProps().invite) ? void 0 : e.is_nickname_changeable,
        T = (0, h.m4)({ location: 'InviteSettingsControls' });
    return (0, r.jsxs)('div', {
        className: a()(_.editProfileContainer, { [_.opened]: t }),
        children: [
            (0, r.jsxs)(o.P3F, {
                className: _.header,
                onClick: () => {
                    t ||
                        g.default.track(m.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                            guild_id: y,
                            invite_code: N
                        }),
                        n(!t);
                },
                children: [
                    (0, r.jsx)('div', {
                        className: _.headerIconWrapper,
                        children: (0, r.jsx)(o.ewm, { size: 'md' })
                    }),
                    (0, r.jsxs)('div', {
                        className: _.title,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: f.intl.string(f.t.A5wHQ0)
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: f.intl.string(f.t.UKCSER)
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: a()(_.caret, { [_.opened]: t }),
                        children: (0, r.jsx)(d.Z, {
                            width: 18,
                            height: 18,
                            direction: d.Z.Directions.DOWN
                        })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: a()(_.customizationSection, { [_.opened]: t }, C ? null : _.condensed),
                children: [
                    C &&
                        (0, r.jsxs)('div', {
                            className: _.serverNickname,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: f.intl.string(f.t.me1lRk)
                                }),
                                (0, r.jsx)(o.oil, {
                                    placeholder: f.intl.string(f.t['09Q8ys']),
                                    maxLength: m.l$U,
                                    value: x,
                                    onChange: O
                                })
                            ]
                        }),
                    (0, r.jsx)(u.Z, {
                        title: f.intl.string(f.t['/2ed39']),
                        value: E,
                        onChange: I
                    }),
                    l &&
                        (0, r.jsx)(u.Z, {
                            title: f.intl.string(f.t.bN4m1N),
                            value: b,
                            onChange: S
                        }),
                    T &&
                        (0, r.jsx)(u.Z, {
                            title: f.intl.string(f.t['0nZCqK']),
                            value: v,
                            onChange: j
                        })
                ]
            })
        ]
    });
};
