n.d(t, { R: () => b }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(481060),
    s = n(590965),
    c = n(695346),
    u = n(51331),
    d = n(259580),
    p = n(626135),
    h = n(44609),
    g = n(731971),
    f = n(981631),
    m = n(388032),
    _ = n(190981);
let b = () => {
    var e;
    let [t, n] = i.useState(!1),
        o = c.G6.useSetting(),
        { nickname: b, dmsAllowed: x, showActivity: N, mutedServer: v, setNickname: E, setDmsAllowed: I, setShowActivity: j, setMutedServer: S, guildId: O, inviteCode: C } = (0, g.XW)(),
        y = null == (e = s.Z.getProps().invite) ? void 0 : e.is_nickname_changeable,
        T = (0, h.m4)({ location: 'InviteSettingsControls' });
    return (0, r.jsxs)('div', {
        className: a()(_.editProfileContainer, { [_.opened]: t }),
        children: [
            (0, r.jsxs)(l.P3F, {
                className: _.header,
                onClick: () => {
                    t ||
                        p.default.track(f.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                            guild_id: O,
                            invite_code: C
                        }),
                        n(!t);
                },
                children: [
                    (0, r.jsx)('div', {
                        className: _.headerIconWrapper,
                        children: (0, r.jsx)(l.ewm, { size: 'md' })
                    }),
                    (0, r.jsxs)('div', {
                        className: _.title,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: m.NW.string(m.t.A5wHQ0)
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: m.NW.string(m.t.UKCSER)
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
                className: a()(_.customizationSection, { [_.opened]: t }, y ? null : _.condensed),
                children: [
                    y &&
                        (0, r.jsxs)('div', {
                            className: _.serverNickname,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: m.NW.string(m.t.me1lRk)
                                }),
                                (0, r.jsx)(l.oil, {
                                    placeholder: m.NW.string(m.t['09Q8ys']),
                                    maxLength: f.l$U,
                                    value: b,
                                    onChange: E
                                })
                            ]
                        }),
                    (0, r.jsx)(u.Z, {
                        title: m.NW.string(m.t['/2ed39']),
                        value: x,
                        onChange: I
                    }),
                    o &&
                        (0, r.jsx)(u.Z, {
                            title: m.NW.string(m.t.bN4m1N),
                            value: N,
                            onChange: j
                        }),
                    T &&
                        (0, r.jsx)(u.Z, {
                            title: m.NW.string(m.t['0nZCqK']),
                            value: v,
                            onChange: S
                        })
                ]
            })
        ]
    });
};
