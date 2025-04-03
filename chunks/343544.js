r.d(t, { Z: () => f });
var n = r(200651),
    s = r(192379),
    a = r(120356),
    i = r.n(a),
    l = r(481060),
    o = r(511010),
    c = r(824469),
    u = r(444812);
function f(e) {
    let { headerText: t, secondaryHeaderText: r, descriptionText: a, infoRows: f, onDismissAndStay: d, onDismissAndLeave: A, leaveButtonText: p, stayButtonText: E, transitionState: I, impression: O } = e;
    return (0, n.jsxs)(l.Y0X, {
        transitionState: I,
        impression: O,
        children: [
            (0, n.jsx)('img', {
                alt: '',
                className: c.headerImage,
                src: u
            }),
            (0, n.jsxs)(l.xBx, {
                separator: !1,
                className: c.header,
                children: [
                    (0, n.jsxs)(l.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: c.title,
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
                className: c.content,
                children: [
                    (0, n.jsx)('div', {
                        className: c.infoGroup,
                        children: f.map((e, t) =>
                            (0, n.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, n.jsxs)('div', {
                                            className: i()(c.infoRow, e.className),
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
                        className: c.buttonGroup,
                        children: [
                            (0, n.jsx)(l.zxk, {
                                color: l.zxk.Colors.PRIMARY,
                                onClick: d,
                                children: E
                            }),
                            (0, n.jsx)(l.zxk, {
                                color: l.zxk.Colors.BRAND,
                                size: l.zxk.Sizes.MEDIUM,
                                onClick: A,
                                className: c.leave,
                                children: p
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
