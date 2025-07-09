n.d(e, { default: () => r });
var a = n(255367);
n(73800);
var i = n(481060),
    s = n(313201),
    l = n(388032),
    o = n(370067);
function r(t) {
    let { onClose: e, transitionState: n } = t,
        r = (0, s.Dt)();
    return (0, a.jsxs)(i.Y0X, {
        transitionState: n,
        'aria-labelledby': r,
        className: o.modal,
        size: i.CgR.DYNAMIC,
        parentComponent: 'UnknownGameModal',
        children: [
            (0, a.jsxs)(i.hzk, {
                className: o.content,
                children: [
                    (0, a.jsx)(i.olH, {
                        className: o.closeButton,
                        onClick: e
                    }),
                    (0, a.jsx)(i.X6q, {
                        className: o.title,
                        id: r,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: l.intl.string(l.t.C5biFx)
                    }),
                    (0, a.jsx)(i.Text, {
                        className: o.subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: l.intl.string(l.t['3Dy1Rk'])
                    })
                ]
            }),
            (0, a.jsx)(i.mzw, {
                children: (0, a.jsx)(i.zxk, {
                    variant: 'primary',
                    text: l.intl.string(l.t.BddRzc),
                    onClick: e
                })
            })
        ]
    });
}
