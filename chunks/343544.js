n.d(t, { Z: () => d });
var r = n(255367),
    s = n(73800),
    i = n(120356),
    a = n.n(i),
    l = n(755721),
    o = n(481060),
    c = n(511010),
    u = n(824469),
    _ = n(444812);
function d(e) {
    let { headerText: t, secondaryHeaderText: n, descriptionText: i, infoRows: d, onDismissAndStay: f, onDismissAndLeave: A, leaveButtonText: E, stayButtonText: I, transitionState: g, impression: m } = e;
    return (0, r.jsxs)(o.Y0X, {
        transitionState: g,
        impression: m,
        parentComponent: 'BlockedUserWarningModal',
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: u.headerImage,
                src: _
            }),
            (0, r.jsxs)(o.xBx, {
                separator: !1,
                className: u.header,
                children: [
                    (0, r.jsxs)(o.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: u.title,
                        children: [
                            t,
                            null != n &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)('br', {}), n]
                                })
                        ]
                    }),
                    null != i &&
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: i
                        })
                ]
            }),
            (0, r.jsxs)(o.hzk, {
                className: u.content,
                children: [
                    (0, r.jsx)('div', {
                        className: u.infoGroup,
                        children: d.map((e, t) =>
                            (0, r.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: a()(u.infoRow, e.className),
                                            children: [
                                                e.icon,
                                                (0, r.jsx)(o.Text, {
                                                    variant: 'text-md/medium',
                                                    children: e.text
                                                })
                                            ]
                                        }),
                                        t < d.length - 1 && (0, r.jsx)(c.Z, {})
                                    ]
                                },
                                t
                            )
                        )
                    }),
                    (0, r.jsxs)('div', {
                        className: u.buttonGroup,
                        children: [
                            (0, r.jsx)(o.zxk, {
                                variant: 'secondary',
                                text: I,
                                onClick: f
                            }),
                            (0, r.jsx)(l.zx, {
                                color: l.zx.Colors.BRAND,
                                size: l.zx.Sizes.MEDIUM,
                                onClick: A,
                                className: u.leave,
                                children: E
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
