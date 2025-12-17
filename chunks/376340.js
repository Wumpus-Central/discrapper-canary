a.d(t, { L: () => c });
var l = a(54381);
a(473749);
var n = a(481060),
    s = a(600164),
    r = a(424071),
    i = a(388032),
    o = a(926375);
function c(e) {
    let { onClose: t, img: a, title: c, body: d, content: u } = e;
    return (0, l.jsxs)(r.Z, {
        children: [
            (0, l.jsxs)(n.xBx, {
                direction: s.Z.Direction.VERTICAL,
                className: o.header,
                separator: !1,
                children: [
                    (0, l.jsx)("div", {
                        className: o.illustration,
                        children: a,
                    }),
                    (0, l.jsx)(n.Heading, {
                        className: o.title,
                        variant: "heading-xl/extrabold",
                        children: c,
                    }),
                    (0, l.jsx)(n.olH, {
                        className: o.closeButton,
                        onClick: t,
                    }),
                ],
            }),
            (0, l.jsxs)(n.hzk, {
                className: o.body,
                paddingFix: !1,
                children: [
                    (0, l.jsx)(n.Text, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "text-default",
                        children: d,
                    }),
                    u,
                ],
            }),
            (0, l.jsx)(n.mzw, {
                className: o.footer,
                children: (0, l.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: o.footerButton,
                    children: (0, l.jsx)(n.Button, {
                        variant: "primary",
                        text: i.intl.string(i.t.i4jeWR),
                        onClick: t,
                    }),
                }),
            }),
        ],
    });
}
