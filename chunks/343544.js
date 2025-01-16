n.d(e, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(120356),
    r = n.n(a),
    l = n(481060),
    o = n(511010),
    d = n(922611),
    c = n(786109),
    u = n(444812);
function _(t) {
    let { headerText: e, secondaryHeaderText: n, descriptionText: a, infoRows: _, onDismissAndStay: A, onDismissAndLeave: I, leaveButtonText: S, stayButtonText: h, transitionState: m, impression: g } = t,
        x = (0, d.Do)({ location: 'blocked_user_warning_modal' });
    return (0, i.jsxs)(l.ModalRoot, {
        transitionState: m,
        impression: g,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: c.headerImage,
                src: u
            }),
            (0, i.jsxs)(l.ModalHeader, {
                separator: !1,
                className: c.header,
                children: [
                    (0, i.jsxs)(l.Heading, {
                        variant: x ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: x ? 'header-primary' : void 0,
                        className: c.title,
                        children: [
                            e,
                            null != n &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)('br', {}), n]
                                })
                        ]
                    }),
                    null != a &&
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: a
                        })
                ]
            }),
            (0, i.jsxs)(l.ModalContent, {
                className: c.content,
                children: [
                    (0, i.jsx)('div', {
                        className: c.infoGroup,
                        children: _.map((t, e) =>
                            (0, i.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: r()(c.infoRow, t.className),
                                            children: [
                                                t.icon,
                                                (0, i.jsx)(l.Text, {
                                                    variant: 'text-md/medium',
                                                    children: t.text
                                                })
                                            ]
                                        }),
                                        e < _.length - 1 && (0, i.jsx)(o.Z, {})
                                    ]
                                },
                                e
                            )
                        )
                    }),
                    (0, i.jsxs)('div', {
                        className: c.buttonGroup,
                        children: [
                            (0, i.jsx)(l.Button, {
                                color: l.Button.Colors.PRIMARY,
                                onClick: A,
                                children: h
                            }),
                            (0, i.jsx)(l.Button, {
                                color: l.Button.Colors.BRAND,
                                size: l.Button.Sizes.MEDIUM,
                                onClick: I,
                                className: c.leave,
                                children: S
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
