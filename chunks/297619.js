var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    s = t(481060),
    r = t(246364),
    o = t(700833),
    c = t(388032),
    d = t(31619);
n.Z = function (e) {
    let { addFormField: n, guild: t } = e;
    return (0, i.jsxs)('div', {
        className: a()(d.spacingContainer, d.leftRailIconContainer, d.backgroundContainer),
        children: [
            (0, i.jsx)('div', {
                className: d.iconContainer,
                children: (0, i.jsx)(s.BookCheckIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 18,
                    height: 20,
                    className: d.icon
                })
            }),
            (0, i.jsxs)(s.FormSection, {
                children: [
                    (0, i.jsx)(s.FormTitle, {
                        tag: 'h3',
                        className: d.leftRailIconContainerTitle,
                        children: c.intl.string(c.t.qWqnws)
                    }),
                    (0, i.jsx)(s.FormText, {
                        className: d.leftRailIconContainerDescription,
                        type: s.FormText.Types.DESCRIPTION,
                        children: c.intl.string(c.t['3+rPkp'])
                    }),
                    (0, i.jsx)(s.Button, {
                        onClick: () => (0, o.Md)(r.QJ.TERMS, n, t),
                        children: c.intl.string(c.t['5AelkZ'])
                    })
                ]
            })
        ]
    });
};
