n.d(t, {
    A: () => l,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(164974);

function l(e) {
    let { message: t, error: n, onClick: i, submitting: l, className: c, ctaMessage: u } = e;
    return (0, r.jsxs)("div", {
        className: a()(o.kL, c),
        children: [
            (0, r.jsxs)("div", {
                className: o.FS,
                children: [
                    (0, r.jsx)(s.EpV, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "currentColor",
                        className: o.QW,
                    }),
                    (0, r.jsx)(s.hKd, {
                        size: 10,
                        horizontal: !0,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(s.hKd, {
                                size: 1,
                            }),
                            (0, r.jsx)(s.Text, {
                                className: o.pq,
                                variant: "text-sm/normal",
                                children: t,
                            }),
                            null != n &&
                                (0, r.jsx)(s.Text, {
                                    className: a()(o.pq, o.z3),
                                    variant: "text-sm/normal",
                                    children: n,
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(s.hKd, {
                size: 16,
                horizontal: !0,
            }),
            (0, r.jsx)(s.Button, {
                variant: "critical-secondary",
                size: "sm",
                onClick: i,
                text: u,
                loading: l,
            }),
        ],
    });
}
