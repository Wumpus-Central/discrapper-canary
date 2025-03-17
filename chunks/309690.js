r.d(t, { default: () => c });
var s = r(200651);
r(192379);
var i = r(481060),
    a = r(600164),
    d = r(785141),
    n = r(272395),
    o = r(388032),
    l = r(382196);
function c(e) {
    var t;
    let { onClose: r, transitionState: c } = e,
        { avErrorUIEnabled: u } = (0, n.JN)({ location: 'StreamWarning' }),
        x = null === (t = (0, d.hp)(d.u.STREAM_FULL)) || void 0 === t ? void 0 : t.errorCode,
        h = o.NW.formatToPlainString(o.t['ejOT9/'], { errorCode: x });
    return (0, s.jsxs)(i.Y0X, {
        size: i.CgR.SMALL,
        transitionState: c,
        children: [
            (0, s.jsxs)(i.xBx, {
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, s.jsx)(i.vwX, {
                        tag: 'h2',
                        className: l.header,
                        children: o.NW.string(o.t.GzjdOz)
                    }),
                    (0, s.jsx)(i.olH, {
                        onClick: r,
                        className: l.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(i.hzk, {
                children: [
                    (0, s.jsx)(i.Text, {
                        variant: 'text-md/medium',
                        children: o.NW.string(o.t.VVZDBA)
                    }),
                    u &&
                        (0, s.jsx)(i.Text, {
                            variant: 'text-md/medium',
                            selectable: !0,
                            color: 'text-muted',
                            className: l.errorCode,
                            children: h
                        }),
                    (0, s.jsx)('div', { className: l.fullArt })
                ]
            }),
            (0, s.jsx)(i.mzw, {
                children: (0, s.jsx)(i.zxk, {
                    onClick: r,
                    children: o.NW.string(o.t.BddRzc)
                })
            })
        ]
    });
}
