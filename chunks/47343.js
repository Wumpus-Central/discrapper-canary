n.d(t, {
    R: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(120356),
    r = n.n(l),
    o = n(481060),
    c = n(590965),
    d = n(51331),
    u = n(259580),
    s = n(626135),
    m = n(731971),
    _ = n(981631),
    g = n(388032),
    f = n(671149);
let b = () => {
    var e;
    let { nickname: t, dmsAllowed: n, showActivity: l, mutedServer: b, setNickname: p, setDmsAllowed: S, setShowActivity: h, setMutedServer: v } = (0, m.XW)(),
        [I, C] = a.useState(!1),
        T = null === (e = c.Z.getProps().invite) || void 0 === e ? void 0 : e.is_nickname_changeable;
    return (0, i.jsxs)('div', {
        className: r()(f.editProfileContainer, { [f.opened]: I }),
        children: [
            (0, i.jsxs)(o.Clickable, {
                className: f.header,
                onClick: () => {
                    C(!I), I && s.default.track(_.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED);
                },
                children: [
                    (0, i.jsx)('div', {
                        className: f.headerIconWrapper,
                        children: (0, i.jsx)(o.SettingsIcon, { size: 'md' })
                    }),
                    (0, i.jsxs)('div', {
                        className: f.title,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: g.intl.string(g.t.A5wHQ0)
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: g.intl.string(g.t.UKCSER)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: r()(f.caret, { [f.opened]: I }),
                        children: (0, i.jsx)(u.Z, {
                            width: 18,
                            height: 18,
                            direction: u.Z.Directions.UP
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: r()(f.customizationSection, { [f.opened]: I }, T ? null : f.condensed),
                children: [
                    T &&
                        (0, i.jsxs)('div', {
                            className: f.serverNickname,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: g.intl.string(g.t.me1lRk)
                                }),
                                (0, i.jsx)(o.TextInput, {
                                    placeholder: g.intl.string(g.t['09Q8ys']),
                                    maxLength: _.l$U,
                                    value: t,
                                    onChange: p
                                })
                            ]
                        }),
                    (0, i.jsx)(d.Z, {
                        title: g.intl.string(g.t['/2ed39']),
                        value: n,
                        onChange: S
                    }),
                    (0, i.jsx)(d.Z, {
                        title: g.intl.string(g.t.bN4m1N),
                        value: l,
                        onChange: h
                    }),
                    (0, i.jsx)(d.Z, {
                        title: g.intl.string(g.t['0nZCqK']),
                        value: b,
                        onChange: v
                    })
                ]
            })
        ]
    });
};
