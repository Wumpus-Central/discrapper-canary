r.d(e, { default: () => l }), r(47120);
var o = r(200651),
    i = r(192379),
    s = r(481060),
    n = r(313201),
    a = r(388032),
    c = r(567351);
function l(t) {
    let { transitionState: e, onConfirm: r, onClose: l } = t,
        [d, h] = i.useState(!1),
        x = (0, n.Dt)();
    return (0, o.jsxs)(s.Y0X, {
        transitionState: e,
        'aria-labelledby': x,
        size: s.CgR.DYNAMIC,
        className: c.root,
        children: [
            (0, o.jsx)(s.xBx, {
                children: (0, o.jsx)(s.X6q, {
                    id: x,
                    variant: 'heading-xl/bold',
                    color: 'header-primary',
                    children: a.NW.string(a.t.eJzSDQ)
                })
            }),
            (0, o.jsx)(s.hzk, {
                className: c.content,
                children: (0, o.jsx)(s.Text, {
                    variant: 'text-md/medium',
                    color: 'header-secondary',
                    children: a.NW.string(a.t.GB4jU1)
                })
            }),
            (0, o.jsxs)(s.mzw, {
                className: c.footer,
                children: [
                    (0, o.jsx)(s.zxk, {
                        type: 'submit',
                        color: s.zxk.Colors.BRAND,
                        onClick: () => {
                            if (!d) {
                                h(!0);
                                try {
                                    r();
                                } catch (t) {
                                } finally {
                                    h(!1);
                                }
                                l();
                            }
                        },
                        submitting: d,
                        children: a.NW.string(a.t.MMlhsr)
                    }),
                    (0, o.jsx)(s.zxk, {
                        color: s.zxk.Colors.PRIMARY,
                        onClick: l,
                        disabled: d,
                        children: a.NW.string(a.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
