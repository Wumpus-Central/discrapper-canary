r.d(t, { default: () => c });
var s = r(200651);
r(192379);
var a = r(481060),
    i = r(600164),
    n = r(785141),
    d = r(272395),
    l = r(388032),
    o = r(463672);
function c(e) {
    var t;
    let { onClose: r, transitionState: c } = e,
        { avErrorUIEnabled: u } = (0, d.JN)({ location: 'StreamWarning' }),
        x = null == (t = (0, n.hp)(n.u.STREAM_FULL)) ? void 0 : t.errorCode,
        h = l.NW.formatToPlainString(l.t['ejOT9/'], { errorCode: x });
    return (0, s.jsxs)(a.Y0X, {
        size: a.CgR.SMALL,
        transitionState: c,
        children: [
            (0, s.jsxs)(a.xBx, {
                justify: i.Z.Justify.BETWEEN,
                children: [
                    (0, s.jsx)(a.vwX, {
                        tag: 'h2',
                        className: o.header,
                        children: l.NW.string(l.t.GzjdOz)
                    }),
                    (0, s.jsx)(a.olH, {
                        onClick: r,
                        className: o.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(a.hzk, {
                children: [
                    (0, s.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        children: l.NW.string(l.t.VVZDBA)
                    }),
                    u &&
                        (0, s.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            selectable: !0,
                            color: 'text-muted',
                            className: o.errorCode,
                            children: h
                        }),
                    (0, s.jsx)('div', { className: o.fullArt })
                ]
            }),
            (0, s.jsx)(a.mzw, {
                children: (0, s.jsx)(a.zxk, {
                    onClick: r,
                    children: l.NW.string(l.t.BddRzc)
                })
            })
        ]
    });
}
