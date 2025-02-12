t.d(n, { Z: () => h });
var i = t(200651),
    l = t(192379),
    s = t(120356),
    a = t.n(s),
    r = t(481060),
    o = t(838221),
    c = t(246364),
    d = t(700833),
    u = t(388032),
    x = t(241195);
function m(e) {
    let { onClick: n, text: t, icon: l } = e;
    return (0, i.jsx)('div', {
        className: x.addFormFieldContainer,
        children: (0, i.jsxs)(r.P3F, {
            className: x.addFormField,
            onClick: n,
            children: [
                (0, i.jsx)(l, {
                    className: x.icon,
                    size: 'xs',
                    color: 'currentColor'
                }),
                (0, i.jsx)(r.R94, {
                    className: x.addFormFieldText,
                    children: t
                })
            ]
        })
    });
}
let h = function (e) {
    let { addFormField: n, showManualApprovalWarning: s, guild: h, showHeader: f } = e,
        v = l.useCallback(
            (e) => {
                (0, d.Md)(e, n, h);
            },
            [n, h]
        ),
        g = l.useCallback(
            (e) => {
                s
                    ? (0, r.ZDy)(async () => {
                          let { default: n } = await t.e('54845').then(t.bind(t, 199836));
                          return (t) =>
                              (0, i.jsx)(n, {
                                  ...t,
                                  onSubmit: () => v(e)
                              });
                      })
                    : v(e);
            },
            [s, v]
        );
    return (0, i.jsxs)('div', {
        className: a()(x.spacingContainer, x.backgroundContainer),
        children: [
            f &&
                (0, i.jsx)('div', {
                    className: x.containerTopHat,
                    children: (0, i.jsx)(r.Text, {
                        className: x.containerTopHatText,
                        variant: 'text-xs/bold',
                        color: 'header-secondary',
                        children: u.intl.string(u.t.neG9U1)
                    })
                }),
            (0, i.jsxs)('div', {
                className: x.leftRailIconContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: x.iconContainer,
                        children: (0, i.jsx)(r.qJs, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 18,
                            height: 20,
                            className: x.icon
                        })
                    }),
                    (0, i.jsxs)(r.hjN, {
                        children: [
                            (0, i.jsx)(r.vwX, {
                                tag: 'h3',
                                className: x.leftRailIconContainerTitle,
                                children: u.intl.string(u.t['7v2xvr'])
                            }),
                            (0, i.jsx)(r.R94, {
                                className: x.leftRailIconContainerDescription,
                                type: r.R94.Types.DESCRIPTION,
                                children: u.intl.string(u.t.DyARHR)
                            }),
                            (0, i.jsx)(m, {
                                formFieldType: c.QJ.TEXT_INPUT,
                                addFormField: n,
                                icon: (0, r.GSL)(o.Z),
                                text: u.intl.string(u.t.w6Q9w8),
                                onClick: () => g(c.QJ.TEXT_INPUT)
                            }),
                            (0, i.jsx)(m, {
                                formFieldType: c.QJ.PARAGRAPH,
                                addFormField: n,
                                icon: r.OvV,
                                text: u.intl.string(u.t.gG0JBA),
                                onClick: () => g(c.QJ.PARAGRAPH)
                            }),
                            (0, i.jsx)(m, {
                                formFieldType: c.QJ.MULTIPLE_CHOICE,
                                addFormField: n,
                                icon: r.jE$,
                                text: u.intl.string(u.t.ooKh3t),
                                onClick: () => g(c.QJ.MULTIPLE_CHOICE)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
