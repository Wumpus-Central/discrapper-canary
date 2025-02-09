n.d(t, { Z: () => u });
var s = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(481060),
    o = n(511010),
    _ = n(922611),
    c = n(686435),
    d = n(444812);
function u(e) {
    let { headerText: t, secondaryHeaderText: n, descriptionText: r, infoRows: u, onDismissAndStay: g, onDismissAndLeave: A, leaveButtonText: m, stayButtonText: h, transitionState: I, impression: E } = e,
        x = (0, _.Do)({ location: 'blocked_user_warning_modal' });
    return (0, s.jsxs)(l.Y0X, {
        transitionState: I,
        impression: E,
        children: [
            (0, s.jsx)('img', {
                alt: '',
                className: c.headerImage,
                src: d
            }),
            (0, s.jsxs)(l.xBx, {
                separator: !1,
                className: c.header,
                children: [
                    (0, s.jsxs)(l.X6q, {
                        variant: x ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: x ? 'header-primary' : void 0,
                        className: c.title,
                        children: [
                            t,
                            null != n &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)('br', {}), n]
                                })
                        ]
                    }),
                    null != r &&
                        (0, s.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: r
                        })
                ]
            }),
            (0, s.jsxs)(l.hzk, {
                className: c.content,
                children: [
                    (0, s.jsx)('div', {
                        className: c.infoGroup,
                        children: u.map((e, t) =>
                            (0, s.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, s.jsxs)('div', {
                                            className: a()(c.infoRow, e.className),
                                            children: [
                                                e.icon,
                                                (0, s.jsx)(l.Text, {
                                                    variant: 'text-md/medium',
                                                    children: e.text
                                                })
                                            ]
                                        }),
                                        t < u.length - 1 && (0, s.jsx)(o.Z, {})
                                    ]
                                },
                                t
                            )
                        )
                    }),
                    (0, s.jsxs)('div', {
                        className: c.buttonGroup,
                        children: [
                            (0, s.jsx)(l.zxk, {
                                color: l.zxk.Colors.PRIMARY,
                                onClick: g,
                                children: h
                            }),
                            (0, s.jsx)(l.zxk, {
                                color: l.zxk.Colors.BRAND,
                                size: l.zxk.Sizes.MEDIUM,
                                onClick: A,
                                className: c.leave,
                                children: m
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
