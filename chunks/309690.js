r.d(e, { default: () => c });
var s = r(200651);
r(192379);
var i = r(481060),
    n = r(600164),
    l = r(458725),
    a = r(386146),
    d = r(388032),
    o = r(463672);
function c(t) {
    var e;
    let { onClose: r, transitionState: c } = t,
        { avErrorUIEnabled: u } = (0, a.JN)({ location: 'StreamWarning' }),
        x = null == (e = (0, l.hp)(l.u.STREAM_FULL)) ? void 0 : e.errorCode,
        h = d.intl.formatToPlainString(d.t['ejOT9/'], { errorCode: x });
    return (0, s.jsxs)(i.Y0X, {
        size: i.CgR.SMALL,
        transitionState: c,
        children: [
            (0, s.jsxs)(i.xBx, {
                justify: n.Z.Justify.BETWEEN,
                children: [
                    (0, s.jsx)(i.vwX, {
                        tag: 'h2',
                        className: o.header,
                        children: d.intl.string(d.t.GzjdOz)
                    }),
                    (0, s.jsx)(i.olH, {
                        onClick: r,
                        className: o.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(i.hzk, {
                children: [
                    (0, s.jsx)(i.Text, {
                        variant: 'text-md/medium',
                        children: d.intl.string(d.t.VVZDBA)
                    }),
                    u &&
                        (0, s.jsx)(i.Text, {
                            variant: 'text-md/medium',
                            selectable: !0,
                            color: 'text-muted',
                            className: o.errorCode,
                            children: h
                        }),
                    (0, s.jsx)('div', { className: o.fullArt })
                ]
            }),
            (0, s.jsx)(i.mzw, {
                children: (0, s.jsx)(i.zxk, {
                    onClick: r,
                    children: d.intl.string(d.t.BddRzc)
                })
            })
        ]
    });
}
