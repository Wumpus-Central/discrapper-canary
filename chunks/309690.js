r.d(e, { default: () => c });
var l = r(951288);
r(647438);
var n = r(481060),
    a = r(600164),
    i = r(458725),
    s = r(386146),
    o = r(388032),
    d = r(959862);
function c(t) {
    var e;
    let { onClose: r, transitionState: c } = t,
        { avErrorUIEnabled: u } = (0, s.JN)({ location: "StreamWarning" }),
        m = null == (e = (0, i.hp)(i.u.STREAM_FULL)) ? void 0 : e.errorCode,
        x = o.intl.formatToPlainString(o.t["ejOT9/"], { errorCode: m });
    return (0, l.jsxs)(n.Y0X, {
        size: n.CgR.SMALL,
        transitionState: c,
        parentComponent: "StreamFullModal",
        children: [
            (0, l.jsxs)(n.xBx, {
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, l.jsx)(n.vwX, {
                        tag: "h2",
                        className: d.header,
                        children: o.intl.string(o.t.GzjdOz),
                    }),
                    (0, l.jsx)(n.olH, {
                        onClick: r,
                        className: d.modalCloseButton,
                    }),
                ],
            }),
            (0, l.jsxs)(n.hzk, {
                children: [
                    (0, l.jsx)(n.Text, {
                        variant: "text-md/medium",
                        children: o.intl.string(o.t.VVZDBA),
                    }),
                    u &&
                        (0, l.jsx)(n.Text, {
                            variant: "text-md/medium",
                            selectable: !0,
                            color: "text-muted",
                            className: d.errorCode,
                            children: x,
                        }),
                    (0, l.jsx)("div", { className: d.fullArt }),
                ],
            }),
            (0, l.jsx)(n.mzw, {
                children: (0, l.jsx)(n.zxk, {
                    variant: "primary",
                    text: o.intl.string(o.t.BddRzc),
                    onClick: r,
                }),
            }),
        ],
    });
}
