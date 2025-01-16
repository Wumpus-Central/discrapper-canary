n.d(t, {
    R: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    c = n(590965),
    s = n(51331),
    d = n(259580),
    u = n(731971),
    _ = n(981631),
    f = n(388032),
    m = n(671149);
let g = () => {
    var e;
    let { nickname: t, dmsAllowed: n, showActivity: r, receiveNotifications: g, setNickname: p, setDmsAllowed: b, setShowActivity: v, setReceiveNotifications: h } = (0, u.XW)(),
        [T, S] = a.useState(!1),
        I = null === (e = c.Z.getProps().invite) || void 0 === e ? void 0 : e.is_nickname_changeable;
    return (0, i.jsxs)('div', {
        className: l()(m.editProfileContainer, { [m.opened]: T }),
        children: [
            (0, i.jsxs)(o.Clickable, {
                className: m.header,
                onClick: () => S((e) => !e),
                children: [
                    (0, i.jsx)('div', {
                        className: m.headerIconWrapper,
                        children: (0, i.jsx)(o.SettingsIcon, { size: 'md' })
                    }),
                    (0, i.jsxs)('div', {
                        className: m.title,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: f.intl.string(f.t.A5wHQ0)
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: f.intl.string(f.t.UKCSER)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: l()(m.caret, { [m.opened]: T }),
                        children: (0, i.jsx)(d.Z, {
                            width: 18,
                            height: 18,
                            direction: d.Z.Directions.UP
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: l()(m.customizationSection, { [m.opened]: T }, I ? null : m.condensed),
                children: [
                    I &&
                        (0, i.jsxs)('div', {
                            className: m.serverNickname,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: f.intl.string(f.t.me1lRk)
                                }),
                                (0, i.jsx)(o.TextInput, {
                                    placeholder: f.intl.string(f.t['09Q8ys']),
                                    maxLength: _.l$U,
                                    value: t,
                                    onChange: p
                                })
                            ]
                        }),
                    (0, i.jsx)(s.Z, {
                        title: f.intl.string(f.t['/2ed39']),
                        value: n,
                        onChange: b
                    }),
                    (0, i.jsx)(s.Z, {
                        title: f.intl.string(f.t.bN4m1N),
                        value: r,
                        onChange: v
                    }),
                    (0, i.jsx)(s.Z, {
                        title: f.intl.string(f.t.rnrPkZ),
                        value: g,
                        onChange: h
                    })
                ]
            })
        ]
    });
};
