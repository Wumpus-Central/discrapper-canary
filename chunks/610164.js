s.d(e, { default: () => x });
var n = s(627968),
    i = s(192480),
    l = s(178090),
    a = s(602425),
    c = s(75772),
    r = s(985018),
    o = s(756179);
function x(t) {
    let { onConfirm: e, ...s } = t;
    return (0, n.jsxs)(i.A, {
        ...s,
        children: [
            (0, n.jsx)(l.A, { variant: "heading-xl/normal", children: r.intl.string(c.default.pMePCC) }),
            (0, n.jsxs)("div", {
                className: o.q,
                children: [
                    (0, n.jsx)(a.A, { textClassName: o.x, text: r.intl.string(r.t["ETE/oC"]), onClick: s.onClose }),
                    (0, n.jsx)(a.A, {
                        textClassName: o.x,
                        text: r.intl.string(c.default.UV91ck),
                        onClick: () => {
                            s.onClose(), e();
                        },
                    }),
                ],
            }),
        ],
    });
}
