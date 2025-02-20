t.d(s, { default: () => o });
var r = t(200651);
t(192379);
var a = t(481060),
    l = t(313201),
    n = t(426642),
    d = t(388032),
    i = t(919844);
let o = (e) => {
    let { transitionState: s, errors: t, onClose: o } = e,
        c = (0, l.Dt)();
    return (0, r.jsxs)(a.Y0X, {
        transitionState: s,
        'aria-labelledby': c,
        children: [
            (0, r.jsx)(a.xBx, {
                separator: !1,
                className: i.modalHeader,
                children: (0, r.jsx)(a.olH, {
                    onClick: o,
                    className: i.closeButton
                })
            }),
            (0, r.jsxs)(a.hzk, {
                className: i.modalContent,
                children: [
                    (0, r.jsxs)(a.hjN, {
                        className: i.header,
                        children: [
                            (0, r.jsx)(a.vwX, {
                                id: c,
                                className: i.title,
                                children: d.NW.string(d.t.PanA4O)
                            }),
                            (0, r.jsx)(a.R94, {
                                type: a.geA.DESCRIPTION,
                                children: d.NW.string(d.t['8Ql1Aw'])
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: i.errors,
                        children: (0, r.jsx)(a.Ttm, { children: t.map((e) => (0, r.jsx)(n.Z, { error: e }, e.filename)) })
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: o,
                        children: d.NW.string(d.t['NX+WJC'])
                    })
                ]
            })
        ]
    });
};
