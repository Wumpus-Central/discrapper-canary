t.d(n, { Z: () => d });
var a = t(951288),
    l = t(647438),
    i = t(120356),
    r = t.n(i),
    o = t(74655),
    s = t(481060),
    u = t(53281),
    c = t(557441);
function d(e) {
    let { filename: n, className: t, filters: i, buttonText: d, placeholder: f, onFileSelect: m } = e,
        g = l.useRef(null),
        h = l.useRef(null);
    return (0, a.jsx)(s.tEY, {
        ringTarget: g,
        within: !0,
        children: (0, a.jsxs)(o.U, {
            ref: g,
            className: r()(t, c.fileUpload),
            children: [
                (0, a.jsx)(s.rG2, { size: "sm" }),
                (0, a.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "" !== n ? "text-default" : "text-muted",
                    lineClamp: 1,
                    children: "" !== n ? n : f,
                }),
                (0, a.jsx)(s.zxk, {
                    "aria-hidden": !0,
                    variant: "secondary",
                    size: "sm",
                    text: d,
                    tabIndex: -1,
                }),
                (0, a.jsx)(u.Z, {
                    ref: h,
                    onChange: (e) => {
                        var n;
                        m(null == (n = e.currentTarget.files) ? void 0 : n[0]);
                    },
                    multiple: !1,
                    filters: i,
                }),
            ],
        }),
    });
}
