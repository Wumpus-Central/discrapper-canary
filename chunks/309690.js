r.d(e, { default: () => c });
var s = r(255367);
r(73800);
var n = r(481060),
    l = r(600164),
    i = r(458725),
    a = r(386146),
    o = r(388032),
    d = r(463672);
function c(t) {
    var e;
    let { onClose: r, transitionState: c } = t,
        { avErrorUIEnabled: u } = (0, a.JN)({ location: 'StreamWarning' }),
        x = null == (e = (0, i.hp)(i.u.STREAM_FULL)) ? void 0 : e.errorCode,
        h = o.intl.formatToPlainString(o.t['ejOT9/'], { errorCode: x });
    return (0, s.jsxs)(n.Y0X, {
        size: n.CgR.SMALL,
        transitionState: c,
        parentComponent: 'StreamFullModal',
        children: [
            (0, s.jsxs)(n.xBx, {
                justify: l.Z.Justify.BETWEEN,
                children: [
                    (0, s.jsx)(n.vwX, {
                        tag: 'h2',
                        className: d.header,
                        children: o.intl.string(o.t.GzjdOz)
                    }),
                    (0, s.jsx)(n.olH, {
                        onClick: r,
                        className: d.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(n.hzk, {
                children: [
                    (0, s.jsx)(n.Text, {
                        variant: 'text-md/medium',
                        children: o.intl.string(o.t.VVZDBA)
                    }),
                    u &&
                        (0, s.jsx)(n.Text, {
                            variant: 'text-md/medium',
                            selectable: !0,
                            color: 'text-muted',
                            className: d.errorCode,
                            children: h
                        }),
                    (0, s.jsx)('div', { className: d.fullArt })
                ]
            }),
            (0, s.jsx)(n.mzw, {
                children: (0, s.jsx)(n.zxk, {
                    onClick: r,
                    children: o.intl.string(o.t.BddRzc)
                })
            })
        ]
    });
}
