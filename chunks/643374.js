n.d(t, { A: () => p });
var s = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    l = n(259678),
    d = n(862301),
    c = n(95635),
    u = n(834730),
    h = n(821609),
    o = n(780777),
    x = n(558689);
function p(e) {
    let { filename: t, className: n, filters: r, buttonText: p, placeholder: f, onFileSelect: m } = e,
        j = i.useRef(null),
        g = i.useRef(null);
    return (0, s.jsx)(l.vN, {
        ringTarget: j,
        within: !0,
        children: (0, s.jsxs)(d.F, {
            ref: j,
            className: a()(n, x.U),
            children: [
                (0, s.jsx)(c.UploadIcon, { size: "sm" }),
                (0, s.jsx)(u.E, {
                    variant: "text-md/normal",
                    color: "" !== t ? "text-default" : "text-muted",
                    lineClamp: 1,
                    children: "" !== t ? t : f,
                }),
                (0, s.jsx)(h.$, { "aria-hidden": !0, variant: "secondary", size: "sm", text: p, tabIndex: -1 }),
                (0, s.jsx)(o.A, {
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
