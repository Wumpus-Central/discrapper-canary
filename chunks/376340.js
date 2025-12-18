a.d(t, { L: () => c });
var n = a(54381);
a(473749);
var r = a(481060),
    i = a(600164),
    l = a(424071),
    s = a(388032),
    o = a(926375);
function c(e) {
    let { onClose: t, img: a, title: c, body: d, content: u } = e;
    return (0, n.jsxs)(l.Z, {
        children: [
            (0, n.jsxs)(r.xBx, {
                "data-migration-pending": !0,
                direction: i.Z.Direction.VERTICAL,
                className: o.header,
                separator: !1,
                children: [
                    (0, n.jsx)("div", {
                        className: o.illustration,
                        children: a,
                    }),
                    (0, n.jsx)(r.Heading, {
                        className: o.title,
                        variant: "heading-xl/extrabold",
                        children: c,
                    }),
                    (0, n.jsx)(r.olH, {
                        "data-migration-pending": !0,
                        className: o.closeButton,
                        onClick: t,
                    }),
                ],
            }),
            (0, n.jsxs)(r.hzk, {
                "data-migration-pending": !0,
                className: o.body,
                paddingFix: !1,
                children: [
                    (0, n.jsx)(r.Text, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "text-default",
                        children: d,
                    }),
                    u,
                ],
            }),
            (0, n.jsx)(r.mzw, {
                "data-migration-pending": !0,
                className: o.footer,
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: o.footerButton,
                    children: (0, n.jsx)(r.Button, {
                        variant: "primary",
                        text: s.intl.string(s.t.i4jeWR),
                        onClick: t,
                    }),
                }),
            }),
        ],
    });
}
