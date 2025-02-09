i.d(t, { Z: () => u }), i(47120);
var n = i(200651),
    s = i(192379),
    l = i(481060),
    a = i(479531),
    r = i(600164),
    o = i(486527),
    c = i(388032),
    d = i(199519);
function u(e) {
    let { directoryChannelId: t, description: i, onDescriptionChange: u, categoryId: m, onCategoryIdChange: x, onSubmit: C, onClose: h, onBack: _ } = e,
        [g, f] = s.useState(!1),
        [j, p] = s.useState(null),
        L = async () => {
            f(!0);
            try {
                await C();
            } catch (e) {
                p(new a.Z(e));
            }
            f(!1);
        };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: d.header,
                separator: !1,
                children: [
                    (0, n.jsx)(l.X6q, {
                        className: d.title,
                        variant: 'heading-xl/semibold',
                        children: c.intl.string(c.t['5bQcoa'])
                    }),
                    (0, n.jsx)(l.Text, {
                        className: d.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: c.intl.string(c.t.Ie60WV)
                    }),
                    null != h &&
                        (0, n.jsx)(l.olH, {
                            className: d.closeButton,
                            onClick: h
                        })
                ]
            }),
            (0, n.jsxs)(l.hzk, {
                className: d.createGuild,
                paddingFix: !1,
                children: [
                    (0, n.jsx)(l.xJW, {
                        title: c.intl.string(c.t.FFFAGh),
                        children: (0, n.jsx)(l.Kx8, {
                            value: i,
                            maxLength: 200,
                            placeholder: c.intl.string(c.t.VzuITE),
                            onChange: u,
                            error: null == j ? void 0 : j.getAnyErrorMessage()
                        })
                    }),
                    (0, n.jsx)(l.xJW, {
                        className: d.formItemSpaced,
                        title: c.intl.string(c.t.Olo8FB),
                        children: (0, n.jsx)(l.q4e, {
                            placeholder: c.intl.string(c.t.XqMe3N),
                            options: (0, o.b7)(t),
                            clearable: !1,
                            value: m,
                            onChange: x,
                            maxVisibleItems: 4
                        })
                    })
                ]
            }),
            (0, n.jsxs)(l.mzw, {
                justify: r.Z.Justify.BETWEEN,
                children: [
                    (0, n.jsx)(l.zxk, {
                        color: l.zxk.Colors.BRAND,
                        onClick: L,
                        submitting: g,
                        disabled: '' === i || m === o.AR.UNCATEGORIZED,
                        children: c.intl.string(c.t.H9jxS0)
                    }),
                    (0, n.jsx)(l.zxk, {
                        className: d.backButton,
                        look: l.zxk.Looks.BLANK,
                        size: l.zxk.Sizes.MIN,
                        onClick: _,
                        children: c.intl.string(c.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
