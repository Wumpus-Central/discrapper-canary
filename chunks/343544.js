n.d(t, { Z: () => d });
var r = n(200651),
    s = n(192379),
    i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(511010),
    c = n(824469),
    u = n(444812);
function d(e) {
    let { headerText: t, secondaryHeaderText: n, descriptionText: i, infoRows: d, onDismissAndStay: _, onDismissAndLeave: A, leaveButtonText: f, stayButtonText: E, transitionState: I, impression: h } = e;
    return (0, r.jsxs)(l.Y0X, {
        transitionState: I,
        impression: h,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: c.headerImage,
                src: u
            }),
            (0, r.jsxs)(l.xBx, {
                separator: !1,
                className: c.header,
                children: [
                    (0, r.jsxs)(l.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: c.title,
                        children: [
                            t,
                            null != n &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)('br', {}), n]
                                })
                        ]
                    }),
                    null != i &&
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: i
                        })
                ]
            }),
            (0, r.jsxs)(l.hzk, {
                className: c.content,
                children: [
                    (0, r.jsx)('div', {
                        className: c.infoGroup,
                        children: d.map((e, t) =>
                            (0, r.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: a()(c.infoRow, e.className),
                                            children: [
                                                e.icon,
                                                (0, r.jsx)(l.Text, {
                                                    variant: 'text-md/medium',
                                                    children: e.text
                                                })
                                            ]
                                        }),
                                        t < d.length - 1 && (0, r.jsx)(o.Z, {})
                                    ]
                                },
                                t
                            )
                        )
                    }),
                    (0, r.jsxs)('div', {
                        className: c.buttonGroup,
                        children: [
                            (0, r.jsx)(l.zxk, {
                                color: l.zxk.Colors.PRIMARY,
                                onClick: _,
                                children: E
                            }),
                            (0, r.jsx)(l.zxk, {
                                color: l.zxk.Colors.BRAND,
                                size: l.zxk.Sizes.MEDIUM,
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
