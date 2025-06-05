n.d(e, { default: () => c }), n(388685);
var i = n(255367),
    o = n(73800),
    r = n(481060),
    s = n(313201),
    a = n(388032),
    l = n(567351);
function c(t) {
    let { transitionState: e, onConfirm: n, onClose: c } = t,
        [d, h] = o.useState(!1),
        x = (0, s.Dt)();
    return (0, i.jsxs)(r.Y0X, {
        transitionState: e,
        'aria-labelledby': x,
        size: r.CgR.DYNAMIC,
        className: l.root,
        parentComponent: 'AcceptRequestConfirmationModal',
        children: [
            (0, i.jsx)(r.xBx, {
                children: (0, i.jsx)(r.X6q, {
                    id: x,
                    variant: 'heading-xl/bold',
                    color: 'header-primary',
                    children: a.intl.string(a.t.eJzSDQ)
                })
            }),
            (0, i.jsx)(r.hzk, {
                className: l.content,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/medium',
                    color: 'header-secondary',
                    children: a.intl.string(a.t.GB4jU1)
                })
            }),
            (0, i.jsxs)(r.mzw, {
                className: l.footer,
                children: [
                    (0, i.jsx)(r.zxk, {
                        type: 'submit',
                        color: r.zxk.Colors.BRAND,
                        onClick: () => {
                            if (!d) {
                                h(!0);
                                try {
                                    n();
                                } catch (t) {
                                } finally {
                                    h(!1);
                                }
                                c();
                            }
                        },
                        submitting: d,
                        children: a.intl.string(a.t.MMlhsr)
                    }),
                    (0, i.jsx)(r.zxk, {
                        color: r.zxk.Colors.PRIMARY,
                        onClick: c,
                        disabled: d,
                        children: a.intl.string(a.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
