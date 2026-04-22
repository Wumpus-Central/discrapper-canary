a.d(t, { A: () => p });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(187322),
    o = a(862301),
    d = a(95635),
    c = a(834730),
    u = a(821609),
    m = a(817363),
    h = a(55881);
function p(e) {
    let { filename: t, className: a, filters: i, buttonText: p, placeholder: x, onFileSelect: g } = e,
        v = l.useRef(null),
        b = l.useRef(null);
    return (0, n.jsx)(r.vN, {
        ringTarget: v,
        within: !0,
        children: (0, n.jsxs)(o.F, {
            ref: v,
            className: s()(a, h.U),
            children: [
                (0, n.jsx)(d.J, { size: "sm" }),
                (0, n.jsx)(c.E, {
                    variant: "text-md/normal",
                    color: "" !== t ? "text-default" : "text-muted",
                    lineClamp: 1,
                    children: "" !== t ? t : x,
                }),
                (0, n.jsx)(u.$, { "aria-hidden": !0, variant: "secondary", size: "sm", text: p, tabIndex: -1 }),
                (0, n.jsx)(m.A, {
                    ref: b,
                    onChange: (e) => {
                        g(e.currentTarget.files?.[0]);
                    },
                    multiple: !1,
                    filters: i,
                }),
            ],
        }),
    });
}
