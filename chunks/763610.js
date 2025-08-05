n.d(t, { Z: () => u });
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(755721),
    l = n(53281),
    c = n(121746);
function u(e) {
    let { filename: t, className: n, filters: o, buttonText: u, placeholder: d, onFileSelect: p } = e,
        m = s.useRef(null);
    return (0, r.jsxs)('div', {
        className: a()(n, c.fileUpload),
        children: [
            (0, r.jsx)('input', {
                className: c.fileUploadInput,
                tabIndex: -1,
                readOnly: !0,
                placeholder: d,
                type: 'text',
                value: t
            }),
            (0, r.jsxs)(i.zx, {
                size: i.zx.Sizes.MIN,
                className: c.fileUploadButton,
                children: [
                    u,
                    (0, r.jsx)(l.Z, {
                        ref: m,
                        tabIndex: -1,
                        onChange: (e) => {
                            var t;
                            p(null == (t = e.currentTarget.files) ? void 0 : t[0]);
                        },
                        multiple: !1,
                        filters: o
                    })
                ]
            })
        ]
    });
}
