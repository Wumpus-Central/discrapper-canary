n.d(t, { R: () => N }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(481060),
    a = n(590965),
    c = n(695346),
    u = n(51331),
    d = n(259580),
    h = n(626135),
    p = n(44609),
    g = n(731971),
    f = n(981631),
    m = n(388032),
    _ = n(190981);
let N = () => {
    var e;
    let [t, n] = i.useState(!1),
        s = c.G6.useSetting(),
        { nickname: N, dmsAllowed: x, showActivity: b, mutedServer: E, setNickname: v, setDmsAllowed: j, setShowActivity: I, setMutedServer: O, guildId: S, inviteCode: y } = (0, g.XW)(),
        C = null == (e = a.Z.getProps().invite) ? void 0 : e.is_nickname_changeable,
        P = (0, p.m4)({ location: 'InviteSettingsControls' });
    return (0, r.jsxs)('div', {
        className: l()(_.editProfileContainer, { [_.opened]: t }),
        children: [
            (0, r.jsxs)(o.P3F, {
                className: _.header,
                onClick: () => {
                    t ||
                        h.default.track(f.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                            guild_id: S,
                            invite_code: y
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
                                children: m.NW.string(m.t.A5wHQ0)
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: m.NW.string(m.t.UKCSER)
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: l()(_.caret, { [_.opened]: t }),
                        children: (0, r.jsx)(d.Z, {
                            width: 18,
                            height: 18,
                            direction: d.Z.Directions.DOWN
                        })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(_.customizationSection, { [_.opened]: t }, C ? null : _.condensed),
                children: [
                    C &&
                        (0, r.jsxs)('div', {
                            className: _.serverNickname,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: m.NW.string(m.t.me1lRk)
                                }),
                                (0, r.jsx)(o.oil, {
                                    placeholder: m.NW.string(m.t['09Q8ys']),
                                    maxLength: f.l$U,
                                    value: N,
                                    onChange: v
                                })
                            ]
                        }),
                    (0, r.jsx)(u.Z, {
                        title: m.NW.string(m.t['/2ed39']),
                        value: x,
                        onChange: j
                    }),
                    s &&
                        (0, r.jsx)(u.Z, {
                            title: m.NW.string(m.t.bN4m1N),
                            value: b,
                            onChange: I
                        }),
                    P &&
                        (0, r.jsx)(u.Z, {
                            title: m.NW.string(m.t['0nZCqK']),
                            value: E,
                            onChange: O
                        })
                ]
            })
        ]
    });
};
