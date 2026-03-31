t.d(e, { b: () => o });
var n = t(627968);
t(64700);
var r = t(397927),
    s = t(235986),
    i = t(141241),
    l = t(985018),
    c = t(398280);
function o(a) {
    let { onClose: e, img: t, title: o, body: d, content: x } = a;
    return (0, n.jsxs)(i.A, {
        children: [
            (0, n.jsxs)(r.rQ0, {
                "data-migration-pending": !0,
                direction: s.A.Direction.VERTICAL,
                className: c.wx,
                separator: !1,
                children: [
                    (0, n.jsx)("div", { className: c.bm, children: t }),
                    (0, n.jsx)(r.Heading, { className: c.DD, variant: "heading-xl/extrabold", children: o }),
                    (0, n.jsx)(r.s_y, { "data-migration-pending": !0, className: c.b, onClick: e }),
                ],
            }),
            (0, n.jsxs)(r.$mQ, {
                "data-migration-pending": !0,
                className: c.rf,
                paddingFix: !1,
                children: [
                    (0, n.jsx)(r.Text, { tag: "p", variant: "text-md/normal", color: "text-default", children: d }),
                    x,
                ],
            }),
            (0, n.jsx)(r.jlY, {
                "data-migration-pending": !0,
                className: c.qr,
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: c.wC,
                    children: (0, n.jsx)(r.Button, { variant: "primary", text: l.intl.string(l.t.i4jeWR), onClick: e }),
                }),
            }),
        ],
    });
}
