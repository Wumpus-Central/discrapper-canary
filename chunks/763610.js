n.d(t, { Z: () => u });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(53281),
    c = n(557441);
function u(e) {
    let { filename: t, className: n, filters: a, buttonText: u, placeholder: d, onFileSelect: f } = e,
        _ = i.useRef(null),
        p = (e) => {
            var t;
            f(null == (t = e.currentTarget.files) ? void 0 : t[0]);
        };
    return (0, r.jsxs)("div", {
        className: o()(n, c.fileUpload),
        children: [
            (0, r.jsx)("input", {
                className: c.fileUploadInput,
                tabIndex: -1,
                readOnly: !0,
                placeholder: d,
                type: "text",
                value: t,
            }),
            (0, r.jsxs)(s.zx, {
                size: s.zx.Sizes.MIN,
                className: c.fileUploadButton,
                children: [
                    u,
                    (0, r.jsx)(l.Z, {
                        ref: _,
                        tabIndex: -1,
                        onChange: p,
                        multiple: !1,
                        filters: a,
                    }),
                ],
            }),
        ],
    });
}
