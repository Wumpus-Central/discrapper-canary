n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var E = n(503698),
    l = n.n(E),
    a = n(695366),
    s = n(696986),
    r = n(834730),
    o = n(821609),
    c = n(785361);
function u(e) {
    let { message: t, error: n, onClick: E, submitting: u, className: _, ctaMessage: I } = e;
    return (0, i.jsxs)("div", {
        className: l()(c.kL, _),
        children: [
            (0, i.jsxs)("div", {
                className: c.FS,
                children: [
                    (0, i.jsx)(a.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: c.QW }),
                    (0, i.jsx)(s.h, { size: 10, horizontal: !0 }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(s.h, { size: 1 }),
                            (0, i.jsx)(r.E, { className: c.pq, variant: "text-sm/normal", children: t }),
                            null != n &&
                                (0, i.jsx)(r.E, { className: l()(c.pq, c.z3), variant: "text-sm/normal", children: n }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(s.h, { size: 16, horizontal: !0 }),
            (0, i.jsx)(o.$, { variant: "critical-secondary", size: "sm", onClick: E, text: I, loading: u }),
        ],
    });
}
