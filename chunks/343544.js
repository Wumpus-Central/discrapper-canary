n.d(t, { Z: () => u });
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(481060),
    o = n(511010),
    d = n(922611),
    _ = n(786109),
    c = n(444812);
function u(e) {
    let { headerText: t, secondaryHeaderText: n, descriptionText: r, infoRows: u, onDismissAndStay: A, onDismissAndLeave: E, leaveButtonText: I, stayButtonText: h, transitionState: x, impression: g } = e,
        m = (0, d.Do)({ location: 'blocked_user_warning_modal' });
    return (0, i.jsxs)(l.Y0X, {
        transitionState: x,
        impression: g,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: _.headerImage,
                src: c
            }),
            (0, i.jsxs)(l.xBx, {
                separator: !1,
                className: _.header,
                children: [
                    (0, i.jsxs)(l.X6q, {
                        variant: m ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: m ? 'header-primary' : void 0,
                        className: _.title,
                        children: [
                            t,
                            null != n &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)('br', {}), n]
                                })
                        ]
                    }),
                    null != r &&
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: r
                        })
                ]
            }),
            (0, i.jsxs)(l.hzk, {
                className: _.content,
                children: [
                    (0, i.jsx)('div', {
                        className: _.infoGroup,
                        children: u.map((e, t) =>
                            (0, i.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: a()(_.infoRow, e.className),
                                            children: [
                                                e.icon,
                                                (0, i.jsx)(l.Text, {
                                                    variant: 'text-md/medium',
                                                    children: e.text
                                                })
                                            ]
                                        }),
                                        t < u.length - 1 && (0, i.jsx)(o.Z, {})
                                    ]
                                },
                                t
                            )
                        )
                    }),
                    (0, i.jsxs)('div', {
                        className: _.buttonGroup,
                        children: [
                            (0, i.jsx)(l.zxk, {
                                color: l.zxk.Colors.PRIMARY,
                                onClick: A,
                                children: h
                            }),
                            (0, i.jsx)(l.zxk, {
                                color: l.zxk.Colors.BRAND,
                                size: l.zxk.Sizes.MEDIUM,
                                onClick: E,
                                className: _.leave,
                                children: I
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
