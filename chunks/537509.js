i.d(e, { default: () => c }), i(47120);
var r = i(200651),
    n = i(192379),
    o = i(481060),
    s = i(313201),
    l = i(388032),
    a = i(291239);
function c(t) {
    let { transitionState: e, onConfirm: i, onClose: c } = t,
        [d, h] = n.useState(!1),
        x = (0, s.Dt)();
    return (0, r.jsxs)(o.Y0X, {
        transitionState: e,
        'aria-labelledby': x,
        size: o.CgR.DYNAMIC,
        className: a.root,
        children: [
            (0, r.jsx)(o.xBx, {
                children: (0, r.jsx)(o.X6q, {
                    id: x,
                    variant: 'heading-xl/bold',
                    color: 'header-primary',
                    children: l.intl.string(l.t.eJzSDQ)
                })
            }),
            (0, r.jsx)(o.hzk, {
                className: a.content,
                children: (0, r.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    color: 'header-secondary',
                    children: l.intl.string(l.t.GB4jU1)
                })
            }),
            (0, r.jsxs)(o.mzw, {
                className: a.footer,
                children: [
                    (0, r.jsx)(o.zxk, {
                        type: 'submit',
                        color: o.zxk.Colors.BRAND,
                        onClick: () => {
                            if (!d) {
                                h(!0);
                                try {
                                    i();
                                } catch (t) {
                                } finally {
                                    h(!1);
                                }
                                c();
                            }
                        },
                        submitting: d,
                        children: l.intl.string(l.t.MMlhsr)
                    }),
                    (0, r.jsx)(o.zxk, {
                        color: o.zxk.Colors.PRIMARY,
                        onClick: c,
                        disabled: d,
                        children: l.intl.string(l.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
