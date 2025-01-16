n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(481060),
    a = n(479531),
    o = n(600164),
    r = n(486527),
    c = n(388032),
    d = n(732881);
function u(e) {
    let { directoryChannelId: t, description: n, onDescriptionChange: u, categoryId: m, onCategoryIdChange: C, onSubmit: x, onClose: f, onBack: h } = e,
        [g, L] = l.useState(!1),
        [p, b] = l.useState(null),
        j = async () => {
            L(!0);
            try {
                await x();
            } catch (e) {
                b(new a.Z(e));
            }
            L(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.ModalHeader, {
                direction: o.Z.Direction.VERTICAL,
                className: d.header,
                separator: !1,
                children: [
                    (0, i.jsx)(s.Heading, {
                        className: d.title,
                        variant: 'heading-xl/semibold',
                        children: c.intl.string(c.t['5bQcoa'])
                    }),
                    (0, i.jsx)(s.Text, {
                        className: d.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: c.intl.string(c.t.Ie60WV)
                    }),
                    null != f &&
                        (0, i.jsx)(s.ModalCloseButton, {
                            className: d.closeButton,
                            onClick: f
                        })
                ]
            }),
            (0, i.jsxs)(s.ModalContent, {
                className: d.createGuild,
                paddingFix: !1,
                children: [
                    (0, i.jsx)(s.FormItem, {
                        title: c.intl.string(c.t.FFFAGh),
                        children: (0, i.jsx)(s.TextArea, {
                            value: n,
                            maxLength: 200,
                            placeholder: c.intl.string(c.t.VzuITE),
                            onChange: u,
                            error: null == p ? void 0 : p.getAnyErrorMessage()
                        })
                    }),
                    (0, i.jsx)(s.FormItem, {
                        className: d.formItemSpaced,
                        title: c.intl.string(c.t.Olo8FB),
                        children: (0, i.jsx)(s.SingleSelect, {
                            placeholder: c.intl.string(c.t.XqMe3N),
                            options: (0, r.b7)(t),
                            clearable: !1,
                            value: m,
                            onChange: C,
                            maxVisibleItems: 4
                        })
                    })
                ]
            }),
            (0, i.jsxs)(s.ModalFooter, {
                justify: o.Z.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(s.Button, {
                        color: s.Button.Colors.BRAND,
                        onClick: j,
                        submitting: g,
                        disabled: '' === n || m === r.AR.UNCATEGORIZED,
                        children: c.intl.string(c.t.H9jxS0)
                    }),
                    (0, i.jsx)(s.Button, {
                        className: d.backButton,
                        look: s.Button.Looks.BLANK,
                        size: s.Button.Sizes.MIN,
                        onClick: h,
                        children: c.intl.string(c.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
