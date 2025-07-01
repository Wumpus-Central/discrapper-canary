n.d(e, { default: () => c });
var s = n(255367);
n(73800);
var l = n(481060),
    i = n(313201),
    a = n(388032),
    o = n(370067);
function c(t) {
    let { onClose: e, transitionState: n } = t,
        c = (0, i.Dt)();
    return (0, s.jsxs)(l.Y0X, {
        transitionState: n,
        'aria-labelledby': c,
        className: o.modal,
        size: l.CgR.DYNAMIC,
        parentComponent: 'UnknownGameModal',
        children: [
            (0, s.jsxs)(l.hzk, {
                className: o.content,
                children: [
                    (0, s.jsx)(l.olH, {
                        className: o.closeButton,
                        onClick: e
                    }),
                    (0, s.jsx)(l.X6q, {
                        className: o.title,
                        id: c,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: a.intl.string(a.t.C5biFx)
                    }),
                    (0, s.jsx)(l.Text, {
                        className: o.subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: a.intl.string(a.t['3Dy1Rk'])
                    })
                ]
            }),
            (0, s.jsx)(l.mzw, {
                children: (0, s.jsx)(l.zxk, {
                    color: l.zxk.Colors.BRAND,
                    onClick: e,
                    size: l.zxk.Sizes.MEDIUM,
                    children: a.intl.string(a.t.BddRzc)
                })
            })
        ]
    });
}
