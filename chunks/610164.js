t.d(s, { default: () => o });
var n = t(627968),
    i = t(192480),
    l = t(178090),
    a = t(602425),
    r = t(429311),
    c = t(985018),
    d = t(756179);
function o(e) {
    let { onConfirm: s, ...t } = e;
    return (0, n.jsxs)(i.A, {
        ...t,
        children: [
            (0, n.jsx)(l.A, { variant: "heading-xl/normal", children: c.intl.string(r.default.pMePCC) }),
            (0, n.jsxs)("div", {
                className: d.q,
                children: [
                    (0, n.jsx)(a.A, { textClassName: d.x, text: c.intl.string(c.t["ETE/oC"]), onClick: t.onClose }),
                    (0, n.jsx)(a.A, {
                        textClassName: d.x,
                        text: c.intl.string(r.default.UV91ck),
                        onClick: () => {
                            t.onClose(), s();
                        },
                    }),
                ],
            }),
        ],
    });
}
