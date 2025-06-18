r.d(t, { Z: () => d });
var n = r(255367),
    s = r(73800),
    i = r(120356),
    a = r.n(i),
    l = r(481060),
    o = r(511010),
    c = r(824469),
    u = r(444812);
function d(e) {
    let { headerText: t, secondaryHeaderText: r, descriptionText: i, infoRows: d, onDismissAndStay: _, onDismissAndLeave: f, leaveButtonText: A, stayButtonText: E, transitionState: m, impression: I } = e;
    return (0, n.jsxs)(l.Y0X, {
        transitionState: m,
        impression: I,
        parentComponent: 'BlockedUserWarningModal',
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
                    null != i &&
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: i
                        })
                ]
            }),
            (0, n.jsxs)(l.hzk, {
                className: c.content,
                children: [
                    (0, n.jsx)('div', {
                        className: c.infoGroup,
                        children: d.map((e, t) =>
                            (0, n.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, n.jsxs)('div', {
                                            className: a()(c.infoRow, e.className),
                                            children: [
                                                e.icon,
                                                (0, n.jsx)(l.Text, {
                                                    variant: 'text-md/medium',
                                                    children: e.text
                                                })
                                            ]
                                        }),
                                        t < d.length - 1 && (0, n.jsx)(o.Z, {})
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
                                onClick: _,
                                children: E
                            }),
                            (0, n.jsx)(l.zxk, {
                                color: l.zxk.Colors.BRAND,
                                size: l.zxk.Sizes.MEDIUM,
                                onClick: f,
                                className: c.leave,
                                children: A
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
