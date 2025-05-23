s.d(t, { default: () => o });
var r = s(255367);
s(73800);
var a = s(481060),
    l = s(313201),
    n = s(426642),
    i = s(388032),
    d = s(458063);
let o = (e) => {
    let { transitionState: t, errors: s, onClose: o } = e,
        c = (0, l.Dt)();
    return (0, r.jsxs)(a.Y0X, {
        transitionState: t,
        'aria-labelledby': c,
        children: [
            (0, r.jsx)(a.xBx, {
                separator: !1,
                className: d.modalHeader,
                children: (0, r.jsx)(a.olH, {
                    onClick: o,
                    className: d.closeButton
                })
            }),
            (0, r.jsxs)(a.hzk, {
                className: d.modalContent,
                children: [
                    (0, r.jsxs)(a.hjN, {
                        className: d.header,
                        children: [
                            (0, r.jsx)(a.vwX, {
                                id: c,
                                className: d.title,
                                children: i.intl.string(i.t.PanA4O)
                            }),
                            (0, r.jsx)(a.R94, {
                                type: a.geA.DESCRIPTION,
                                children: i.intl.string(i.t['8Ql1Aw'])
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: d.errors,
                        children: (0, r.jsx)(a.Ttm, { children: s.map((e) => (0, r.jsx)(n.Z, { error: e }, e.filename)) })
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: o,
                        children: i.intl.string(i.t['NX+WJC'])
                    })
                ]
            })
        ]
    });
};
