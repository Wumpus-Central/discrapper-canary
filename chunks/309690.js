r.d(e, { default: () => o });
var i = r(951288);
r(647438);
var l = r(481060),
    n = r(600164),
    s = r(458725),
    a = r(388032),
    d = r(959862);
function o(t) {
    var e;
    let { onClose: r, transitionState: o } = t,
        c = null == (e = (0, s.hp)(s.u.STREAM_FULL)) ? void 0 : e.errorCode,
        u = a.intl.formatToPlainString(a.t["ejOT9/"], { errorCode: c });
    return (0, i.jsxs)(l.Y0X, {
        size: l.CgR.SMALL,
        transitionState: o,
        parentComponent: "StreamFullModal",
        children: [
            (0, i.jsxs)(l.xBx, {
                justify: n.Z.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: "heading-md/semibold",
                        className: d.header,
                        children: a.intl.string(a.t.GzjdOz),
                    }),
                    (0, i.jsx)(l.olH, {
                        onClick: r,
                        className: d.modalCloseButton,
                    }),
                ],
            }),
            (0, i.jsxs)(l.hzk, {
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: "text-md/medium",
                        children: a.intl.string(a.t.VVZDBA),
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: "text-md/medium",
                        selectable: !0,
                        color: "text-muted",
                        className: d.errorCode,
                        children: u,
                    }),
                    (0, i.jsx)("div", { className: d.fullArt }),
                ],
            }),
            (0, i.jsx)(l.mzw, {
                children: (0, i.jsx)(l.zxk, {
                    variant: "primary",
                    text: a.intl.string(a.t.BddRzc),
                    onClick: r,
                }),
            }),
        ],
    });
}
