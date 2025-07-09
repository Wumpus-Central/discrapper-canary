(n.d(t, { Z: () => m }), n(953529), n(388685));
var i = n(255367),
    s = n(73800),
    l = n(755721),
    a = n(481060),
    r = n(479531),
    o = n(600164),
    c = n(75666),
    d = n(388032),
    u = n(685554);
function m(e) {
    let { directoryChannelId: t, description: n, onDescriptionChange: m, categoryId: x, onCategoryIdChange: C, onSubmit: h, onClose: p, onBack: g } = e,
        [f, j] = s.useState(!1),
        [_, b] = s.useState(null),
        L = async () => {
            j(!0);
            try {
                await h();
            } catch (e) {
                b(new r.Z(e));
            }
            j(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.xBx, {
                direction: o.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, i.jsx)(a.X6q, {
                        className: u.title,
                        variant: 'heading-xl/semibold',
                        children: d.intl.string(d.t['5bQcoa'])
                    }),
                    (0, i.jsx)(a.Text, {
                        className: u.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: d.intl.string(d.t.Ie60WV)
                    }),
                    null != p &&
                        (0, i.jsx)(a.olH, {
                            className: u.closeButton,
                            onClick: p
                        })
                ]
            }),
            (0, i.jsxs)(a.hzk, {
                className: u.createGuild,
                paddingFix: !1,
                children: [
                    (0, i.jsx)(a.xJW, {
                        title: d.intl.string(d.t.FFFAGh),
                        children: (0, i.jsx)(a.Kx8, {
                            value: n,
                            maxLength: 200,
                            placeholder: d.intl.string(d.t.VzuITE),
                            onChange: m,
                            error: null == _ ? void 0 : _.getAnyErrorMessage()
                        })
                    }),
                    (0, i.jsx)(a.xJW, {
                        className: u.formItemSpaced,
                        title: d.intl.string(d.t.Olo8FB),
                        children: (0, i.jsx)(a.q4e, {
                            placeholder: d.intl.string(d.t.XqMe3N),
                            options: (0, c.b7)(t),
                            clearable: !1,
                            value: x,
                            onChange: C,
                            maxVisibleItems: 4
                        })
                    })
                ]
            }),
            (0, i.jsxs)(a.mzw, {
                justify: o.Z.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(a.zxk, {
                        variant: 'primary',
                        text: d.intl.string(d.t.H9jxS0),
                        onClick: L,
                        loading: f,
                        disabled: '' === n || x === c.AR.UNCATEGORIZED
                    }),
                    (0, i.jsx)(l.zx, {
                        className: u.backButton,
                        look: l.zx.Looks.BLANK,
                        size: l.zx.Sizes.MIN,
                        onClick: g,
                        children: d.intl.string(d.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
