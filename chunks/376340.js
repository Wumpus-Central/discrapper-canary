a.d(t, { L: () => c });
var n = a(54381);
a(473749);
var i = a(481060),
    r = a(600164),
    l = a(424071),
    s = a(388032),
    o = a(926375);
function c(e) {
    let { onClose: t, img: a, title: c, body: d, content: u } = e;
    return (0, n.jsxs)(l.Z, {
        children: [
            (0, n.jsxs)(i.xBx, {
                "data-migration-pending": !0,
                direction: r.Z.Direction.VERTICAL,
                className: o.header,
                separator: !1,
                children: [
                    (0, n.jsx)("div", {
                        className: o.illustration,
                        children: a,
                    }),
                    (0, n.jsx)(i.Heading, {
                        className: o.title,
                        variant: "heading-xl/extrabold",
                        children: c,
                    }),
                    (0, n.jsx)(i.olH, {
                        "data-migration-pending": !0,
                        className: o.closeButton,
                        onClick: t,
                    }),
                ],
            }),
            (0, n.jsxs)(i.hzk, {
                "data-migration-pending": !0,
                className: o.body,
                paddingFix: !1,
                children: [
                    (0, n.jsx)(i.Text, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "text-default",
                        children: d,
                    }),
                    u,
                ],
            }),
            (0, n.jsx)(i.mzw, {
                "data-migration-pending": !0,
                className: o.footer,
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: o.footerButton,
                    children: (0, n.jsx)(i.Button, {
                        variant: "primary",
                        text: s.intl.string(s.t.i4jeWR),
                        onClick: t,
                    }),
                }),
            }),
        ],
    });
}
