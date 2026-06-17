t.d(n, { A: () => d });
var s = t(627968);
t(64700);
var i = t(503698),
    a = t.n(i),
    r = t(695366),
    l = t(696986),
    c = t(834730),
    u = t(821609),
    o = t(12497);
function d(e) {
    let { message: n, error: t, onClick: i, submitting: d, className: m, ctaMessage: h } = e;
    return (0, s.jsxs)("div", {
        className: a()(o.kL, m),
        children: [
            (0, s.jsxs)("div", {
                className: o.FS,
                children: [
                    (0, s.jsx)(r.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: o.QW }),
                    (0, s.jsx)(l.h, { size: 10, horizontal: !0 }),
                    (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(l.h, { size: 1 }),
                            (0, s.jsx)(c.E, { className: o.pq, variant: "text-sm/normal", children: n }),
                            null != t &&
                                (0, s.jsx)(c.E, { className: a()(o.pq, o.z3), variant: "text-sm/normal", children: t }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(l.h, { size: 16, horizontal: !0 }),
            (0, s.jsx)(u.$, { variant: "critical-secondary", size: "sm", onClick: i, text: h, loading: d }),
        ],
    });
}
