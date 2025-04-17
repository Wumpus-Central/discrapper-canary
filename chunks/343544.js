r.d(t, { Z: () => _ });
var n = r(200651),
    s = r(192379),
    i = r(120356),
    a = r.n(i),
    o = r(481060),
    l = r(511010),
    c = r(824469),
    u = r(444812);
function _(e) {
    let { headerText: t, secondaryHeaderText: r, descriptionText: i, infoRows: _, onDismissAndStay: d, onDismissAndLeave: A, leaveButtonText: f, stayButtonText: E, transitionState: I, impression: N } = e;
    return (0, n.jsxs)(o.Y0X, {
        transitionState: I,
        impression: N,
        children: [
            (0, n.jsx)('img', {
                alt: '',
                className: c.headerImage,
                src: u
            }),
            (0, n.jsxs)(o.xBx, {
                separator: !1,
                className: c.header,
                children: [
                    (0, n.jsxs)(o.X6q, {
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
                        (0, n.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: i
                        })
                ]
            }),
            (0, n.jsxs)(o.hzk, {
                className: c.content,
                children: [
                    (0, n.jsx)('div', {
                        className: c.infoGroup,
                        children: _.map((e, t) =>
                            (0, n.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, n.jsxs)('div', {
                                            className: a()(c.infoRow, e.className),
                                            children: [
                                                e.icon,
                                                (0, n.jsx)(o.Text, {
                                                    variant: 'text-md/medium',
                                                    children: e.text
                                                })
                                            ]
                                        }),
                                        t < _.length - 1 && (0, n.jsx)(l.Z, {})
                                    ]
                                },
                                t
                            )
                        )
                    }),
                    (0, n.jsxs)('div', {
                        className: c.buttonGroup,
                        children: [
                            (0, n.jsx)(o.zxk, {
                                color: o.zxk.Colors.PRIMARY,
                                onClick: d,
                                children: E
                            }),
                            (0, n.jsx)(o.zxk, {
                                color: o.zxk.Colors.BRAND,
                                size: o.zxk.Sizes.MEDIUM,
                                onClick: A,
                                className: c.leave,
                                children: f
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
