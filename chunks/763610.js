n.d(t, { Z: () => u });
var r = n(951288),
    s = n(647438),
    o = n(120356),
    a = n.n(o),
    i = n(74655),
    l = n(481060),
    c = n(53281),
    d = n(557441);
function u(e) {
    let { filename: t, className: n, filters: o, buttonText: u, placeholder: p, onFileSelect: m } = e,
        g = s.useRef(null),
        f = s.useRef(null);
    return (0, r.jsx)(l.tEY, {
        ringTarget: g,
        within: !0,
        children: (0, r.jsxs)(i.U, {
            ref: g,
            className: a()(n, d.fileUpload),
            children: [
                (0, r.jsx)(l.rG2, { size: "sm" }),
                (0, r.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "" !== t ? "text-default" : "text-muted",
                    lineClamp: 1,
                    children: "" !== t ? t : p,
                }),
                (0, r.jsx)(l.zxk, {
                    "aria-hidden": !0,
                    variant: "secondary",
                    size: "sm",
                    text: u,
                    tabIndex: -1,
                }),
                (0, r.jsx)(c.Z, {
                    ref: f,
                    onChange: (e) => {
                        var t;
                        m(null == (t = e.currentTarget.files) ? void 0 : t[0]);
                    },
                    multiple: !1,
                    filters: o,
                }),
            ],
        }),
    });
}
