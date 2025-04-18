t.d(a, { default: () => i });
var c = t(200651);
t(192379);
var o = t(481060),
    s = t(388032),
    n = t(625273),
    r = t(829863);
function i(e) {
    let { transitionState: a, onClose: t } = e;
    return (0, c.jsxs)(o.Y0X, {
        transitionState: a,
        size: o.CgR.SMALL,
        className: n.container,
        children: [
            (0, c.jsx)('div', {
                className: n.modalImageWrapper,
                children: (0, c.jsx)('img', {
                    alt: '',
                    src: r.Z,
                    className: n.modalImage
                })
            }),
            (0, c.jsxs)(o.hzk, {
                className: n.content,
                children: [
                    (0, c.jsx)(o.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: n.title,
                        children: s.NW.string(s.t['R/FLOD'])
                    }),
                    (0, c.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'text-normal',
                        children: s.NW.string(s.t.WF95xs)
                    })
                ]
            }),
            (0, c.jsx)(o.mzw, {
                children: (0, c.jsxs)('div', {
                    className: n.footer,
                    children: [
                        (0, c.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: () => {
                                (0, o.pTH)();
                            },
                            children: s.NW.string(s.t.cpT0Cg)
                        }),
                        (0, c.jsx)(o.zxk, {
                            look: o.zxk.Looks.FILLED,
                            color: o.zxk.Colors.BRAND,
                            onClick: () => {
                                t();
                            },
                            children: s.NW.string(s.t['7NqTJi'])
                        })
                    ]
                })
            })
        ]
    });
}
