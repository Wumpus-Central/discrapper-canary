n.d(t, {
    R: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    c = n(590965),
    s = n(51331),
    d = n(259580),
    u = n(731971),
    f = n(981631),
    _ = n(388032),
    g = n(671149);
let m = () => {
    var e;
    let { nickname: t, dmsAllowed: n, showActivity: a, receiveNotifications: m, setNickname: p, setDmsAllowed: b, setShowActivity: v, setReceiveNotifications: h } = (0, u.XW)(),
        [T, S] = r.useState(!1),
        I = null === (e = c.Z.getProps().invite) || void 0 === e ? void 0 : e.is_nickname_changeable;
    return (0, i.jsxs)('div', {
        className: l()(g.editProfileContainer, { [g.opened]: T }),
        children: [
            (0, i.jsxs)(o.Clickable, {
                className: g.header,
                onClick: () => S((e) => !e),
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
                        className: l()(g.caret, { [g.opened]: T }),
                        children: (0, i.jsx)(d.Z, {
                            width: 18,
                            height: 18,
                            direction: d.Z.Directions.UP
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: l()(g.customizationSection, { [g.opened]: T }, I ? null : g.condensed),
                children: [
                    I &&
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
                                    maxLength: f.l$U,
                                    value: t,
                                    onChange: p
                                })
                            ]
                        }),
                    (0, i.jsx)(s.Z, {
                        title: _.intl.string(_.t['/2ed39']),
                        value: n,
                        onChange: b
                    }),
                    (0, i.jsx)(s.Z, {
                        title: _.intl.string(_.t.bN4m1N),
                        value: a,
                        onChange: v
                    }),
                    (0, i.jsx)(s.Z, {
                        title: _.intl.string(_.t.rnrPkZ),
                        value: m,
                        onChange: h
                    })
                ]
            })
        ]
    });
};
