e.d(a, { default: () => c }), e(47120);
var l = e(200651),
    i = e(192379),
    o = e(481060),
    s = e(313201),
    n = e(388032),
    r = e(249045);
function c(t) {
    let { transitionState: a, onConfirm: e, onClose: c, onDismiss: d } = t,
        [h, m] = i.useState(!1),
        u = (0, s.Dt)(),
        x = async () => {
            if (!h) {
                m(!0);
                try {
                    await e();
                } catch (t) {
                } finally {
                    m(!1);
                }
                c();
            }
        };
    return (0, l.jsxs)(o.Y0X, {
        transitionState: a,
        'aria-labelledby': u,
        size: o.CgR.SMALL,
        children: [
            (0, l.jsxs)(o.hzk, {
                children: [
                    (0, l.jsx)(o.olH, {
                        onClick: () => {
                            d(), c();
                        },
                        className: r.closeButton
                    }),
                    (0, l.jsx)(o.X6q, {
                        id: u,
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        className: r.modalTitle,
                        children: n.NW.string(n.t['66tnnp'])
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: r.modalBody,
                        children: n.NW.string(n.t['c/k4SU'])
                    })
                ]
            }),
            (0, l.jsx)(o.mzw, {
                children: (0, l.jsx)(o.zxk, {
                    type: 'submit',
                    color: o.zxk.Colors.BRAND,
                    onClick: x,
                    submitting: h,
                    children: n.NW.string(n.t['cY+Ooa'])
                })
            })
        ]
    });
}
