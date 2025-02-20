r.d(t, { Z: () => f });
var n = r(200651),
    s = r(192379),
    a = r(120356),
    i = r.n(a),
    l = r(481060),
    o = r(511010),
    c = r(922611),
    u = r(884838),
    d = r(444812);
function f(e) {
    let { headerText: t, secondaryHeaderText: r, descriptionText: a, infoRows: f, onDismissAndStay: A, onDismissAndLeave: _, leaveButtonText: p, stayButtonText: E, transitionState: I, impression: O } = e,
        b = (0, c.Do)({ location: 'blocked_user_warning_modal' });
    return (0, n.jsxs)(l.Y0X, {
        transitionState: I,
        impression: O,
        children: [
            (0, n.jsx)('img', {
                alt: '',
                className: u.headerImage,
                src: d
            }),
            (0, n.jsxs)(l.xBx, {
                separator: !1,
                className: u.header,
                children: [
                    (0, n.jsxs)(l.X6q, {
                        variant: b ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: b ? 'header-primary' : void 0,
                        className: u.title,
                        children: [
                            t,
                            null != r &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)('br', {}), r]
                                })
                        ]
                    }),
                    null != a &&
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: a
                        })
                ]
            }),
            (0, n.jsxs)(l.hzk, {
                className: u.content,
                children: [
                    (0, n.jsx)('div', {
                        className: u.infoGroup,
                        children: f.map((e, t) =>
                            (0, n.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, n.jsxs)('div', {
                                            className: i()(u.infoRow, e.className),
                                            children: [
                                                e.icon,
                                                (0, n.jsx)(l.Text, {
                                                    variant: 'text-md/medium',
                                                    children: e.text
                                                })
                                            ]
                                        }),
                                        t < f.length - 1 && (0, n.jsx)(o.Z, {})
                                    ]
                                },
                                t
                            )
                        )
                    }),
                    (0, n.jsxs)('div', {
                        className: u.buttonGroup,
                        children: [
                            (0, n.jsx)(l.zxk, {
                                color: l.zxk.Colors.PRIMARY,
                                onClick: A,
                                children: E
                            }),
                            (0, n.jsx)(l.zxk, {
                                color: l.zxk.Colors.BRAND,
                                size: l.zxk.Sizes.MEDIUM,
                                onClick: _,
                                className: u.leave,
                                children: p
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
