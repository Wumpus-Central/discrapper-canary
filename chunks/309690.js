r.d(e, { default: () => o });
var i = r(951288);
r(647438);
var n = r(481060),
    l = r(600164),
    a = r(458725),
    s = r(388032),
    d = r(959862);
function o(t) {
    var e;
    let { onClose: r, transitionState: o } = t,
        u = null == (e = (0, a.hp)(a.u.STREAM_FULL)) ? void 0 : e.errorCode,
        c = s.intl.formatToPlainString(s.t.ejOT95, { errorCode: u });
    return (0, i.jsxs)(n.Y0X, {
        size: n.CgR.SMALL,
        transitionState: o,
        parentComponent: "StreamFullModal",
        children: [
            (0, i.jsxs)(n.xBx, {
                justify: l.Z.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(n.Heading, {
                        variant: "heading-md/semibold",
                        className: d.header,
                        children: s.intl.string(s.t.GzjdO5),
                    }),
                    (0, i.jsx)(n.olH, {
                        onClick: r,
                        className: d.modalCloseButton,
                    }),
                ],
            }),
            (0, i.jsxs)(n.hzk, {
                children: [
                    (0, i.jsx)(n.Text, {
                        variant: "text-md/medium",
                        children: s.intl.string(s.t.VVZDBL),
                    }),
                    (0, i.jsx)(n.Text, {
                        variant: "text-md/medium",
                        selectable: !0,
                        color: "text-muted",
                        className: d.errorCode,
                        children: c,
                    }),
                    (0, i.jsx)("div", { className: d.fullArt }),
                ],
            }),
            (0, i.jsx)(n.mzw, {
                children: (0, i.jsx)(n.Button, {
                    variant: "primary",
                    text: s.intl.string(s.t.BddRzS),
                    onClick: r,
                }),
            }),
        ],
    });
}
