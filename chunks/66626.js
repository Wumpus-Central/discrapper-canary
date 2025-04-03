n.d(t, { Z: () => u }), n(266796), n(47120);
var s = n(200651),
    i = n(192379),
    r = n(481060),
    l = n(479531),
    a = n(600164),
    o = n(75666),
    c = n(388032),
    d = n(685554);
function u(e) {
    let { directoryChannelId: t, description: n, onDescriptionChange: u, categoryId: m, onCategoryIdChange: x, onSubmit: C, onClose: h, onBack: g } = e,
        [p, f] = i.useState(!1),
        [_, j] = i.useState(null),
        N = async () => {
            f(!0);
            try {
                await C();
            } catch (e) {
                j(new l.Z(e));
            }
            f(!1);
        };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(r.xBx, {
                direction: a.Z.Direction.VERTICAL,
                className: d.header,
                separator: !1,
                children: [
                    (0, s.jsx)(r.X6q, {
                        className: d.title,
                        variant: 'heading-xl/semibold',
                        children: c.NW.string(c.t['5bQcoa'])
                    }),
                    (0, s.jsx)(r.Text, {
                        className: d.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: c.NW.string(c.t.Ie60WV)
                    }),
                    null != h &&
                        (0, s.jsx)(r.olH, {
                            className: d.closeButton,
                            onClick: h
                        })
                ]
            }),
            (0, s.jsxs)(r.hzk, {
                className: d.createGuild,
                paddingFix: !1,
                children: [
                    (0, s.jsx)(r.xJW, {
                        title: c.NW.string(c.t.FFFAGh),
                        children: (0, s.jsx)(r.Kx8, {
                            value: n,
                            maxLength: 200,
                            placeholder: c.NW.string(c.t.VzuITE),
                            onChange: u,
                            error: null == _ ? void 0 : _.getAnyErrorMessage()
                        })
                    }),
                    (0, s.jsx)(r.xJW, {
                        className: d.formItemSpaced,
                        title: c.NW.string(c.t.Olo8FB),
                        children: (0, s.jsx)(r.q4e, {
                            placeholder: c.NW.string(c.t.XqMe3N),
                            options: (0, o.b7)(t),
                            clearable: !1,
                            value: m,
                            onChange: x,
                            maxVisibleItems: 4
                        })
                    })
                ]
            }),
            (0, s.jsxs)(r.mzw, {
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, s.jsx)(r.zxk, {
                        color: r.zxk.Colors.BRAND,
                        onClick: N,
                        submitting: p,
                        disabled: '' === n || m === o.AR.UNCATEGORIZED,
                        children: c.NW.string(c.t.H9jxS0)
                    }),
                    (0, s.jsx)(r.zxk, {
                        className: d.backButton,
                        look: r.zxk.Looks.BLANK,
                        size: r.zxk.Sizes.MIN,
                        onClick: g,
                        children: c.NW.string(c.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
