n.d(t, { Z: () => d });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(74655),
    l = n(481060),
    c = n(53281),
    u = n(557441);
function d(e) {
    let { filename: t, className: n, filters: a, buttonText: d, placeholder: f, onFileSelect: _ } = e,
        p = i.useRef(null),
        h = i.useRef(null),
        m = (e) => {
            var t;
            _(null == (t = e.currentTarget.files) ? void 0 : t[0]);
        },
        g = "" !== t ? "text-default" : "text-muted";
    return (0, r.jsx)(l.tEY, {
        ringTarget: p,
        within: !0,
        children: (0, r.jsxs)(s.U, {
            ref: p,
            className: o()(n, u.fileUpload),
            children: [
                (0, r.jsx)(l.rG2, { size: "sm" }),
                (0, r.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: g,
                    lineClamp: 1,
                    children: "" !== t ? t : f,
                }),
                (0, r.jsx)(l.zxk, {
                    "aria-hidden": !0,
                    variant: "secondary",
                    size: "sm",
                    text: d,
                    tabIndex: -1,
                }),
                (0, r.jsx)(c.Z, {
                    ref: h,
                    onChange: m,
                    multiple: !1,
                    filters: a,
                }),
            ],
        }),
    });
}
