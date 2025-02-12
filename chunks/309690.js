e.d(s, { default: () => a });
var i = e(200651);
e(192379);
var n = e(481060),
    l = e(600164),
    d = e(388032),
    r = e(26553);
function a(t) {
    let { onClose: s, transitionState: e } = t;
    return (0, i.jsxs)(n.Y0X, {
        size: n.CgR.SMALL,
        transitionState: e,
        children: [
            (0, i.jsxs)(n.xBx, {
                justify: l.Z.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(n.vwX, {
                        tag: 'h2',
                        className: r.header,
                        children: d.intl.string(d.t.GzjdOz)
                    }),
                    (0, i.jsx)(n.olH, {
                        onClick: s,
                        className: r.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)(n.hzk, {
                children: [
                    (0, i.jsx)(n.Text, {
                        variant: 'text-md/medium',
                        children: d.intl.string(d.t.VVZDBA)
                    }),
                    (0, i.jsx)('div', { className: r.fullArt })
                ]
            }),
            (0, i.jsx)(n.mzw, {
                children: (0, i.jsx)(n.zxk, {
                    onClick: s,
                    children: d.intl.string(d.t.BddRzc)
                })
            })
        ]
    });
}
