t.d(a, { L: () => c });
var r = t(951288);
t(647438);
var n = t(481060),
    s = t(600164),
    l = t(424071),
    i = t(388032),
    o = t(771831);
function c(e) {
    let { onClose: a, img: t, title: c, body: d, content: x } = e;
    return (0, r.jsxs)(l.Z, {
        children: [
            (0, r.jsxs)(n.xBx, {
                direction: s.Z.Direction.VERTICAL,
                className: o.header,
                separator: !1,
                children: [
                    (0, r.jsx)("div", {
                        className: o.illustration,
                        children: t,
                    }),
                    (0, r.jsx)(n.Heading, {
                        className: o.title,
                        variant: "heading-xl/extrabold",
                        children: c,
                    }),
                    (0, r.jsx)(n.olH, {
                        className: o.closeButton,
                        onClick: a,
                    }),
                ],
            }),
            (0, r.jsxs)(n.hzk, {
                className: o.body,
                paddingFix: !1,
                children: [
                    (0, r.jsx)(n.Text, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: d,
                    }),
                    x,
                ],
            }),
            (0, r.jsx)(n.mzw, {
                className: o.footer,
                children: (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: o.footerButton,
                    children: (0, r.jsx)(n.Button, {
                        variant: "primary",
                        text: i.intl.string(i.t.i4jeWV),
                        onClick: a,
                    }),
                }),
            }),
        ],
    });
}
