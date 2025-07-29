n.d(t, { Z: () => c });
var l = n(255367),
    a = n(73800),
    i = n(120356),
    r = n.n(i),
    s = n(755721),
    o = n(53281),
    u = n(121746);
function c(e) {
    let { filename: t, className: n, filters: i, buttonText: c, placeholder: d, onFileSelect: f } = e,
        m = a.useRef(null);
    return (0, l.jsxs)('div', {
        className: r()(n, u.fileUpload),
        children: [
            (0, l.jsx)('input', {
                className: u.fileUploadInput,
                tabIndex: -1,
                readOnly: !0,
                placeholder: d,
                type: 'text',
                value: t
            }),
            (0, l.jsxs)(s.zx, {
                size: s.zx.Sizes.MIN,
                className: u.fileUploadButton,
                children: [
                    c,
                    (0, l.jsx)(o.Z, {
                        ref: m,
                        tabIndex: -1,
                        onChange: (e) => {
                            var t;
                            f(null == (t = e.currentTarget.files) ? void 0 : t[0]);
                        },
                        multiple: !1,
                        filters: i
                    })
                ]
            })
        ]
    });
}
