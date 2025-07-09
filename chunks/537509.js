(n.d(e, { default: () => l }), n(388685));
var i = n(255367),
    a = n(73800),
    r = n(481060),
    o = n(313201),
    s = n(388032),
    c = n(567351);
function l(t) {
    let { transitionState: e, onConfirm: n, onClose: l } = t,
        [d, x] = a.useState(!1),
        h = (0, o.Dt)();
    return (0, i.jsxs)(r.Y0X, {
        transitionState: e,
        'aria-labelledby': h,
        size: r.CgR.DYNAMIC,
        className: c.root,
        parentComponent: 'AcceptRequestConfirmationModal',
        children: [
            (0, i.jsx)(r.xBx, {
                children: (0, i.jsx)(r.X6q, {
                    id: h,
                    variant: 'heading-xl/bold',
                    color: 'header-primary',
                    children: s.intl.string(s.t.eJzSDQ)
                })
            }),
            (0, i.jsx)(r.hzk, {
                className: c.content,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/medium',
                    color: 'header-secondary',
                    children: s.intl.string(s.t.GB4jU1)
                })
            }),
            (0, i.jsxs)(r.mzw, {
                className: c.footer,
                children: [
                    (0, i.jsx)(r.zxk, {
                        variant: 'primary',
                        text: s.intl.string(s.t.MMlhsr),
                        type: 'submit',
                        onClick: () => {
                            if (!d) {
                                x(!0);
                                try {
                                    n();
                                } catch (t) {
                                } finally {
                                    x(!1);
                                }
                                l();
                            }
                        },
                        loading: d
                    }),
                    (0, i.jsx)(r.zxk, {
                        variant: 'secondary',
                        text: s.intl.string(s.t['ETE/oK']),
                        onClick: l,
                        disabled: d
                    })
                ]
            })
        ]
    });
}
