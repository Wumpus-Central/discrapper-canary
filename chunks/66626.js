n.d(t, { Z: () => u }), n(953529), n(388685);
var i = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(479531),
    a = n(600164),
    o = n(75666),
    c = n(388032),
    d = n(685554);
function u(e) {
    let { directoryChannelId: t, description: n, onDescriptionChange: u, categoryId: m, onCategoryIdChange: x, onSubmit: C, onClose: h, onBack: g } = e,
        [p, f] = s.useState(!1),
        [_, j] = s.useState(null),
        b = async () => {
            f(!0);
            try {
                await C();
            } catch (e) {
                j(new r.Z(e));
            }
            f(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                direction: a.Z.Direction.VERTICAL,
                className: d.header,
                separator: !1,
                children: [
                    (0, i.jsx)(l.X6q, {
                        className: d.title,
                        variant: 'heading-xl/semibold',
                        children: c.intl.string(c.t['5bQcoa'])
                    }),
                    (0, i.jsx)(l.Text, {
                        className: d.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: c.intl.string(c.t.Ie60WV)
                    }),
                    null != h &&
                        (0, i.jsx)(l.olH, {
                            className: d.closeButton,
                            onClick: h
                        })
                ]
            }),
            (0, i.jsxs)(l.hzk, {
                className: d.createGuild,
                paddingFix: !1,
                children: [
                    (0, i.jsx)(l.xJW, {
                        title: c.intl.string(c.t.FFFAGh),
                        children: (0, i.jsx)(l.Kx8, {
                            value: n,
                            maxLength: 200,
                            placeholder: c.intl.string(c.t.VzuITE),
                            onChange: u,
                            error: null == _ ? void 0 : _.getAnyErrorMessage()
                        })
                    }),
                    (0, i.jsx)(l.xJW, {
                        className: d.formItemSpaced,
                        title: c.intl.string(c.t.Olo8FB),
                        children: (0, i.jsx)(l.q4e, {
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
            (0, i.jsxs)(l.mzw, {
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(l.zxk, {
                        color: l.zxk.Colors.BRAND,
                        onClick: b,
                        submitting: p,
                        disabled: '' === n || m === o.AR.UNCATEGORIZED,
                        children: c.intl.string(c.t.H9jxS0)
                    }),
                    (0, i.jsx)(l.zxk, {
                        className: d.backButton,
                        look: l.zxk.Looks.BLANK,
                        size: l.zxk.Sizes.MIN,
                        onClick: g,
                        children: c.intl.string(c.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
