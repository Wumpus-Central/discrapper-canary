r.d(t, { Z: () => _ });
var n = r(255367),
    s = r(73800),
    i = r(120356),
    a = r.n(i),
    l = r(755721),
    o = r(481060),
    c = r(511010),
    u = r(824469),
    d = r(444812);
function _(e) {
    let { headerText: t, secondaryHeaderText: r, descriptionText: i, infoRows: _, onDismissAndStay: f, onDismissAndLeave: A, leaveButtonText: E, stayButtonText: m, transitionState: I, impression: g } = e;
    return (0, n.jsxs)(o.Y0X, {
        transitionState: I,
        impression: g,
        parentComponent: 'BlockedUserWarningModal',
        children: [
            (0, n.jsx)('img', {
                alt: '',
                className: u.headerImage,
                src: d
            }),
            (0, n.jsxs)(o.xBx, {
                separator: !1,
                className: u.header,
                children: [
                    (0, n.jsxs)(o.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: u.title,
                        children: [
                            t,
                            null != r &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)('br', {}), r]
                                })
                        ]
                    }),
                    null != i &&
                        (0, n.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: i
                        })
                ]
            }),
            (0, n.jsxs)(o.hzk, {
                className: u.content,
                children: [
                    (0, n.jsx)('div', {
                        className: u.infoGroup,
                        children: _.map((e, t) =>
                            (0, n.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, n.jsxs)('div', {
                                            className: a()(u.infoRow, e.className),
                                            children: [
                                                e.icon,
                                                (0, n.jsx)(o.Text, {
                                                    variant: 'text-md/medium',
                                                    children: e.text
                                                })
                                            ]
                                        }),
                                        t < _.length - 1 && (0, n.jsx)(c.Z, {})
                                    ]
                                },
                                t
                            )
                        )
                    }),
                    (0, n.jsxs)('div', {
                        className: u.buttonGroup,
                        children: [
                            (0, n.jsx)(o.zxk, {
                                variant: 'secondary',
                                text: m,
                                onClick: f
                            }),
                            (0, n.jsx)(l.zx, {
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
