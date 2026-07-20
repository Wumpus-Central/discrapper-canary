e.d(t, { A: () => d });
var i = e(627968);
e(64700);
var s = e(503698),
    a = e.n(s),
    r = e(695366),
    l = e(696986),
    c = e(834730),
    u = e(821609),
    o = e(12497);
function d(n) {
    let { message: t, error: e, onClick: s, submitting: d, className: m, ctaMessage: h } = n;
    return (0, i.jsxs)("div", {
        className: a()(o.kL, m),
        children: [
            (0, i.jsxs)("div", {
                className: o.FS,
                children: [
                    (0, i.jsx)(r.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: o.QW }),
                    (0, i.jsx)(l.h, { size: 10, horizontal: !0 }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(l.h, { size: 1 }),
                            (0, i.jsx)(c.E, { className: o.pq, variant: "text-sm/normal", children: t }),
                            null != e &&
                                (0, i.jsx)(c.E, { className: a()(o.pq, o.z3), variant: "text-sm/normal", children: e }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(l.h, { size: 16, horizontal: !0 }),
            (0, i.jsx)(u.$, { variant: "critical-secondary", size: "sm", onClick: s, text: h, loading: d }),
        ],
    });
}
