r.d(e, { default: () => d });
var l = r(951288);
r(647438);
var s = r(481060),
    i = r(600164),
    n = r(458725),
    a = r(388032),
    o = r(959862);
function d(t) {
    var e;
    let { onClose: r, transitionState: d } = t,
        c = null == (e = (0, n.hp)(n.u.STREAM_FULL)) ? void 0 : e.errorCode,
        u = a.intl.formatToPlainString(a.t["ejOT9/"], { errorCode: c });
    return (0, l.jsxs)(s.Y0X, {
        size: s.CgR.SMALL,
        transitionState: d,
        parentComponent: "StreamFullModal",
        children: [
            (0, l.jsxs)(s.xBx, {
                justify: i.Z.Justify.BETWEEN,
                children: [
                    (0, l.jsx)(s.vwX, {
                        tag: "h2",
                        className: o.header,
                        children: a.intl.string(a.t.GzjdOz),
                    }),
                    (0, l.jsx)(s.olH, {
                        onClick: r,
                        className: o.modalCloseButton,
                    }),
                ],
            }),
            (0, l.jsxs)(s.hzk, {
                children: [
                    (0, l.jsx)(s.Text, {
                        variant: "text-md/medium",
                        children: a.intl.string(a.t.VVZDBA),
                    }),
                    (0, l.jsx)(s.Text, {
                        variant: "text-md/medium",
                        selectable: !0,
                        color: "text-muted",
                        className: o.errorCode,
                        children: u,
                    }),
                    (0, l.jsx)("div", { className: o.fullArt }),
                ],
            }),
            (0, l.jsx)(s.mzw, {
                children: (0, l.jsx)(s.zxk, {
                    variant: "primary",
                    text: a.intl.string(a.t.BddRzc),
                    onClick: r,
                }),
            }),
        ],
    });
}
