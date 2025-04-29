l.d(a, { default: () => c }), l(388685);
var i = l(255367),
    e = l(73800),
    n = l(481060),
    o = l(313201),
    s = l(388032),
    r = l(249045);
function c(t) {
    let { transitionState: a, onConfirm: l, onClose: c, onDismiss: d } = t,
        [h, m] = e.useState(!1),
        u = (0, o.Dt)(),
        x = async () => {
            if (!h) {
                m(!0);
                try {
                    await l();
                } catch (t) {
                } finally {
                    m(!1);
                }
                c();
            }
        };
    return (0, i.jsxs)(n.Y0X, {
        transitionState: a,
        'aria-labelledby': u,
        size: n.CgR.SMALL,
        children: [
            (0, i.jsxs)(n.hzk, {
                children: [
                    (0, i.jsx)(n.olH, {
                        onClick: () => {
                            d(), c();
                        },
                        className: r.closeButton
                    }),
                    (0, i.jsx)(n.X6q, {
                        id: u,
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        className: r.modalTitle,
                        children: s.intl.string(s.t['66tnnp'])
                    }),
                    (0, i.jsx)(n.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: r.modalBody,
                        children: s.intl.string(s.t['c/k4SU'])
                    })
                ]
            }),
            (0, i.jsx)(n.mzw, {
                children: (0, i.jsx)(n.zxk, {
                    type: 'submit',
                    color: n.zxk.Colors.BRAND,
                    onClick: x,
                    submitting: h,
                    children: s.intl.string(s.t['cY+Ooa'])
                })
            })
        ]
    });
}
