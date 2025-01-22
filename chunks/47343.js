n.d(t, {
    R: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(120356),
    r = n.n(l),
    o = n(481060),
    c = n(590965),
    s = n(51331),
    d = n(259580),
    u = n(731971),
    m = n(981631),
    _ = n(388032),
    g = n(671149);
let f = () => {
    var e;
    let { nickname: t, dmsAllowed: n, showActivity: l, receiveNotifications: f, setNickname: b, setDmsAllowed: p, setShowActivity: S, setReceiveNotifications: h } = (0, u.XW)(),
        [v, I] = a.useState(!1),
        C = null === (e = c.Z.getProps().invite) || void 0 === e ? void 0 : e.is_nickname_changeable;
    return (0, i.jsxs)('div', {
        className: r()(g.editProfileContainer, { [g.opened]: v }),
        children: [
            (0, i.jsxs)(o.Clickable, {
                className: g.header,
                onClick: () => I((e) => !e),
                children: [
                    (0, i.jsx)('div', {
                        className: g.headerIconWrapper,
                        children: (0, i.jsx)(o.SettingsIcon, { size: 'md' })
                    }),
                    (0, i.jsxs)('div', {
                        className: g.title,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: _.intl.string(_.t.A5wHQ0)
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: _.intl.string(_.t.UKCSER)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: r()(g.caret, { [g.opened]: v }),
                        children: (0, i.jsx)(d.Z, {
                            width: 18,
                            height: 18,
                            direction: d.Z.Directions.UP
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: r()(g.customizationSection, { [g.opened]: v }, C ? null : g.condensed),
                children: [
                    C &&
                        (0, i.jsxs)('div', {
                            className: g.serverNickname,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: _.intl.string(_.t.me1lRk)
                                }),
                                (0, i.jsx)(o.TextInput, {
                                    placeholder: _.intl.string(_.t['09Q8ys']),
                                    maxLength: m.l$U,
                                    value: t,
                                    onChange: b
                                })
                            ]
                        }),
                    (0, i.jsx)(s.Z, {
                        title: _.intl.string(_.t['/2ed39']),
                        value: n,
                        onChange: p
                    }),
                    (0, i.jsx)(s.Z, {
                        title: _.intl.string(_.t.bN4m1N),
                        value: l,
                        onChange: S
                    }),
                    (0, i.jsx)(s.Z, {
                        title: _.intl.string(_.t.rnrPkZ),
                        value: f,
                        onChange: h
                    })
                ]
            })
        ]
    });
};
