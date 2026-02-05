n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(397927),
    l = n(164974);
function o(e) {
    let { message: t, error: n, onClick: s, submitting: o, className: c, ctaMessage: d } = e;
    return (0, i.jsxs)("div", {
        className: r()(l.kL, c),
        children: [
            (0, i.jsxs)("div", {
                className: l.FS,
                children: [
                    (0, i.jsx)(a.EpV, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "currentColor",
                        className: l.QW,
                    }),
                    (0, i.jsx)(a.hKd, { size: 10, horizontal: !0 }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(a.hKd, { size: 1 }),
                            (0, i.jsx)(a.Text, { className: l.pq, variant: "text-sm/normal", children: t }),
                            null != n &&
                                (0, i.jsx)(a.Text, {
                                    className: r()(l.pq, l.z3),
                                    variant: "text-sm/normal",
                                    children: n,
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(a.hKd, { size: 16, horizontal: !0 }),
            (0, i.jsx)(a.Button, { variant: "critical-secondary", size: "sm", onClick: s, text: d, loading: o }),
        ],
    });
}
