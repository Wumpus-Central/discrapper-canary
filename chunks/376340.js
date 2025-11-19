t.d(a, { L: () => c });
var n = t(54381);
t(473749);
var r = t(481060),
    s = t(600164),
    l = t(424071),
    i = t(388032),
    o = t(200025);
function c(e) {
    let { onClose: a, img: t, title: c, body: d, content: x } = e;
    return (0, n.jsxs)(l.Z, {
        children: [
            (0, n.jsxs)(r.xBx, {
                direction: s.Z.Direction.VERTICAL,
                className: o.header,
                separator: !1,
                children: [
                    (0, n.jsx)("div", {
                        className: o.illustration,
                        children: t,
                    }),
                    (0, n.jsx)(r.Heading, {
                        className: o.title,
                        variant: "heading-xl/extrabold",
                        children: c,
                    }),
                    (0, n.jsx)(r.olH, {
                        className: o.closeButton,
                        onClick: a,
                    }),
                ],
            }),
            (0, n.jsxs)(r.hzk, {
                className: o.body,
                paddingFix: !1,
                children: [
                    (0, n.jsx)(r.Text, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: d,
                    }),
                    x,
                ],
            }),
            (0, n.jsx)(r.mzw, {
                className: o.footer,
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: o.footerButton,
                    children: (0, n.jsx)(r.Button, {
                        variant: "primary",
                        text: i.intl.string(i.t.i4jeWR),
                        onClick: a,
                    }),
                }),
            }),
        ],
    });
}
