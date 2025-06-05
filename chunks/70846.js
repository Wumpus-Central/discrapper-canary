r.d(t, { default: () => d });
var a = r(255367);
r(73800);
var s = r(481060),
    l = r(313201),
    n = r(426642),
    o = r(388032),
    i = r(458063);
let d = (e) => {
    let { transitionState: t, errors: r, onClose: d } = e,
        c = (0, l.Dt)();
    return (0, a.jsxs)(s.Y0X, {
        transitionState: t,
        'aria-labelledby': c,
        parentComponent: 'ImageInputUploadErrorModal',
        children: [
            (0, a.jsx)(s.xBx, {
                separator: !1,
                className: i.modalHeader,
                children: (0, a.jsx)(s.olH, {
                    onClick: d,
                    className: i.closeButton
                })
            }),
            (0, a.jsxs)(s.hzk, {
                className: i.modalContent,
                children: [
                    (0, a.jsxs)(s.hjN, {
                        className: i.header,
                        children: [
                            (0, a.jsx)(s.vwX, {
                                id: c,
                                className: i.title,
                                children: o.intl.string(o.t.PanA4O)
                            }),
                            (0, a.jsx)(s.R94, {
                                type: s.geA.DESCRIPTION,
                                children: o.intl.string(o.t['8Ql1Aw'])
                            })
                        ]
                    }),
                    (0, a.jsx)('div', {
                        className: i.errors,
                        children: (0, a.jsx)(s.Ttm, { children: r.map((e) => (0, a.jsx)(n.Z, { error: e }, e.filename)) })
                    }),
                    (0, a.jsx)(s.zxk, {
                        onClick: d,
                        children: o.intl.string(o.t['NX+WJC'])
                    })
                ]
            })
        ]
    });
};
