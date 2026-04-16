t.d(e, { s: () => d });
var n = t(627968);
t(64700);
var r = t(397927),
    s = t(235986),
    i = t(141241),
    l = t(985018),
    c = t(974651),
    o = t(332633);
function d(a) {
    let { onContinue: e, onClose: t, title: d, body: x } = a;
    return (0, n.jsxs)(i.A, {
        children: [
            (0, n.jsxs)(r.rQ0, {
                "data-migration-pending": !0,
                direction: s.A.Direction.VERTICAL,
                className: c.wx,
                separator: !1,
                children: [
                    (0, n.jsx)("img", { src: o, className: c.bm, width: "254", height: "127", alt: "" }),
                    (0, n.jsx)(r.Heading, { className: c.DD, variant: "heading-xl/extrabold", children: d }),
                    null != t && (0, n.jsx)(r.s_y, { className: c.b, onClick: t }),
                ],
            }),
            (0, n.jsx)(r.$mQ, {
                "data-migration-pending": !0,
                className: c.rf,
                paddingFix: !1,
                children: (0, n.jsx)(r.Text, {
                    tag: "p",
                    variant: "text-md/normal",
                    color: "text-default",
                    children: x,
                }),
            }),
            (0, n.jsx)(r.jlY, {
                "data-migration-pending": !0,
                className: c.qr,
                children: (0, n.jsx)(r.Button, {
                    text: l.intl.format(l.t["4X7vPo"], {
                        popoutWindowIcon: {},
                        popoutWindowIconHook: () =>
                            (0, n.jsx)(r.tfB, { color: "currentColor", className: c.LE, size: "xs" }),
                    }),
                    onClick: e,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
