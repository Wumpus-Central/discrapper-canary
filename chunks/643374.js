n.d(t, { A: () => o });
var s = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(187322),
    d = n(862301),
    u = n(95635),
    c = n(834730),
    h = n(821609),
    x = n(780777),
    f = n(55881);
function o(e) {
    let { filename: t, className: n, filters: r, buttonText: o, placeholder: p, onFileSelect: m } = e,
        j = i.useRef(null),
        g = i.useRef(null);
    return (0, s.jsx)(l.vN, {
        ringTarget: j,
        within: !0,
        children: (0, s.jsxs)(d.F, {
            ref: j,
            className: a()(n, f.U),
            children: [
                (0, s.jsx)(u.J, { size: "sm" }),
                (0, s.jsx)(c.E, {
                    variant: "text-md/normal",
                    color: "" !== t ? "text-default" : "text-muted",
                    lineClamp: 1,
                    children: "" !== t ? t : p,
                }),
                (0, s.jsx)(h.$, { "aria-hidden": !0, variant: "secondary", size: "sm", text: o, tabIndex: -1 }),
                (0, s.jsx)(x.A, {
                    ref: g,
                    onChange: function (e) {
                        m(e.currentTarget.files?.[0]);
                    },
                    multiple: !1,
                    filters: r,
                }),
            ],
        }),
    });
}
