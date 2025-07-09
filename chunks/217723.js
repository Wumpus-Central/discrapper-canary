(e.d(a, { default: () => c }), e(388685));
var n = e(255367),
    i = e(73800),
    l = e(481060),
    o = e(313201),
    s = e(388032),
    r = e(249045);
function c(t) {
    let { transitionState: a, onConfirm: e, onClose: c, onDismiss: d } = t,
        [m, h] = i.useState(!1),
        p = (0, o.Dt)(),
        u = async () => {
            if (!m) {
                h(!0);
                try {
                    await e();
                } catch (t) {
                } finally {
                    h(!1);
                }
                c();
            }
        };
    return (0, n.jsxs)(l.Y0X, {
        transitionState: a,
        'aria-labelledby': p,
        size: l.CgR.SMALL,
        parentComponent: 'AcceptRequestConfirmationModal',
        children: [
            (0, n.jsxs)(l.hzk, {
                children: [
                    (0, n.jsx)(l.olH, {
                        onClick: () => {
                            (d(), c());
                        },
                        className: r.closeButton
                    }),
                    (0, n.jsx)(l.X6q, {
                        id: p,
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        className: r.modalTitle,
                        children: s.intl.string(s.t['66tnnp'])
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: r.modalBody,
                        children: s.intl.string(s.t['c/k4SU'])
                    })
                ]
            }),
            (0, n.jsx)(l.mzw, {
                children: (0, n.jsx)(l.zxk, {
                    variant: 'primary',
                    text: s.intl.string(s.t['cY+Ooa']),
                    type: 'submit',
                    onClick: u,
                    loading: m
                })
            })
        ]
    });
}
