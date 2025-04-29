a.d(t, { default: () => i });
var c = a(255367);
a(73800);
var o = a(481060),
    n = a(388032),
    s = a(625273),
    r = a(829863);
function i(e) {
    let { transitionState: t, onClose: a } = e;
    return (0, c.jsxs)(o.Y0X, {
        transitionState: t,
        size: o.CgR.SMALL,
        className: s.container,
        children: [
            (0, c.jsx)('div', {
                className: s.modalImageWrapper,
                children: (0, c.jsx)('img', {
                    alt: '',
                    src: r.Z,
                    className: s.modalImage
                })
            }),
            (0, c.jsxs)(o.hzk, {
                className: s.content,
                children: [
                    (0, c.jsx)(o.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: s.title,
                        children: n.intl.string(n.t['R/FLOD'])
                    }),
                    (0, c.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'text-normal',
                        children: n.intl.string(n.t.WF95xs)
                    })
                ]
            }),
            (0, c.jsx)(o.mzw, {
                children: (0, c.jsxs)('div', {
                    className: s.footer,
                    children: [
                        (0, c.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: () => {
                                (0, o.pTH)();
                            },
                            children: n.intl.string(n.t.cpT0Cg)
                        }),
                        (0, c.jsx)(o.zxk, {
                            look: o.zxk.Looks.FILLED,
                            color: o.zxk.Colors.BRAND,
                            onClick: () => {
                                a();
                            },
                            children: n.intl.string(n.t['7NqTJi'])
                        })
                    ]
                })
            })
        ]
    });
}
