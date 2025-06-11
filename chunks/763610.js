n.d(t, { Z: () => d });
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(481060),
    l = n(53281),
    c = n(121746);
function d(e) {
    let { filename: t, className: n, filters: s, buttonText: d, placeholder: u, onFileSelect: p } = e,
        m = o.useRef(null);
    return (0, r.jsxs)('div', {
        className: a()(n, c.fileUpload),
        children: [
            (0, r.jsx)('input', {
                className: c.fileUploadInput,
                tabIndex: -1,
                readOnly: !0,
                placeholder: u,
                type: 'text',
                value: t
            }),
            (0, r.jsxs)(i.zxk, {
                size: i.zxk.Sizes.MIN,
                className: c.fileUploadButton,
                children: [
                    d,
                    (0, r.jsx)(l.Z, {
                        ref: m,
                        tabIndex: -1,
                        onChange: (e) => {
                            var t;
                            p(null == (t = e.currentTarget.files) ? void 0 : t[0]);
                        },
                        multiple: !1,
                        filters: s
                    })
                ]
            })
        ]
    });
}
