a.d(t, { default: () => d });
var r = a(255367);
a(73800);
var s = a(481060),
    l = a(313201),
    n = a(426642),
    i = a(388032),
    o = a(458063);
let d = (e) => {
    let { transitionState: t, errors: a, onClose: d } = e,
        c = (0, l.Dt)();
    return (0, r.jsxs)(s.Y0X, {
        transitionState: t,
        'aria-labelledby': c,
        parentComponent: 'ImageInputUploadErrorModal',
        children: [
            (0, r.jsx)(s.xBx, {
                separator: !1,
                className: o.modalHeader,
                children: (0, r.jsx)(s.olH, {
                    onClick: d,
                    className: o.closeButton
                })
            }),
            (0, r.jsxs)(s.hzk, {
                className: o.modalContent,
                children: [
                    (0, r.jsxs)(s.hjN, {
                        className: o.header,
                        children: [
                            (0, r.jsx)(s.vwX, {
                                id: c,
                                className: o.title,
                                children: i.intl.string(i.t.PanA4O)
                            }),
                            (0, r.jsx)(s.R94, {
                                type: s.geA.DESCRIPTION,
                                children: i.intl.string(i.t['8Ql1Aw'])
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: o.errors,
                        children: (0, r.jsx)(s.Ttm, { children: a.map((e) => (0, r.jsx)(n.Z, { error: e }, e.filename)) })
                    }),
                    (0, r.jsx)(s.zxk, {
                        variant: 'primary',
                        text: i.intl.string(i.t['NX+WJC']),
                        onClick: d
                    })
                ]
            })
        ]
    });
};
