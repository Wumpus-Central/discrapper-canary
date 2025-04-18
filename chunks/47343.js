n.d(t, { R: () => x }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    a = n(590965),
    c = n(695346),
    u = n(51331),
    d = n(259580),
    h = n(626135),
    g = n(44609),
    p = n(731971),
    m = n(981631),
    f = n(388032),
    _ = n(190981);
let x = () => {
    var e;
    let [t, n] = i.useState(!1),
        s = c.G6.useSetting(),
        { nickname: x, dmsAllowed: N, showActivity: b, mutedServer: E, setNickname: v, setDmsAllowed: j, setShowActivity: I, setMutedServer: O, guildId: S, inviteCode: y } = (0, p.XW)(),
        C = null == (e = a.Z.getProps().invite) ? void 0 : e.is_nickname_changeable,
        P = (0, g.m4)({ location: 'InviteSettingsControls' });
    return (0, r.jsxs)('div', {
        className: o()(_.editProfileContainer, { [_.opened]: t }),
        children: [
            (0, r.jsxs)(l.P3F, {
                className: _.header,
                onClick: () => {
                    t ||
                        h.default.track(m.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                            guild_id: S,
                            invite_code: y
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
                                children: f.NW.string(f.t.A5wHQ0)
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: f.NW.string(f.t.UKCSER)
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: o()(_.caret, { [_.opened]: t }),
                        children: (0, r.jsx)(d.Z, {
                            width: 18,
                            height: 18,
                            direction: d.Z.Directions.DOWN
                        })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: o()(_.customizationSection, { [_.opened]: t }, C ? null : _.condensed),
                children: [
                    C &&
                        (0, r.jsxs)('div', {
                            className: _.serverNickname,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: f.NW.string(f.t.me1lRk)
                                }),
                                (0, r.jsx)(l.oil, {
                                    placeholder: f.NW.string(f.t['09Q8ys']),
                                    maxLength: m.l$U,
                                    value: x,
                                    onChange: v
                                })
                            ]
                        }),
                    (0, r.jsx)(u.Z, {
                        title: f.NW.string(f.t['/2ed39']),
                        value: N,
                        onChange: j
                    }),
                    s &&
                        (0, r.jsx)(u.Z, {
                            title: f.NW.string(f.t.bN4m1N),
                            value: b,
                            onChange: I
                        }),
                    P &&
                        (0, r.jsx)(u.Z, {
                            title: f.NW.string(f.t['0nZCqK']),
                            value: E,
                            onChange: O
                        })
                ]
            })
        ]
    });
};
