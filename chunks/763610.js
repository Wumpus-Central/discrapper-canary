i.d(l, { Z: () => u });
var t = i(200651),
    n = i(192379),
    s = i(120356),
    a = i.n(s),
    o = i(481060),
    r = i(53281),
    d = i(677153);
function u(e) {
    let { filename: l, className: i, filters: s, buttonText: u, placeholder: c, onFileSelect: m } = e,
        f = n.useRef(null);
    return (0, t.jsxs)('div', {
        className: a()(i, d.fileUpload),
        children: [
            (0, t.jsx)('input', {
                className: d.fileUploadInput,
                tabIndex: -1,
                readOnly: !0,
                placeholder: c,
                type: 'text',
                value: l
            }),
            (0, t.jsxs)(o.zxk, {
                size: o.zxk.Sizes.MIN,
                className: d.fileUploadButton,
                children: [
                    u,
                    (0, t.jsx)(r.Z, {
                        ref: f,
                        tabIndex: -1,
                        onChange: (e) => {
                            var l;
                            m(null === (l = e.currentTarget.files) || void 0 === l ? void 0 : l[0]);
                        },
                        multiple: !1,
                        filters: s
                    })
                ]
            })
        ]
    });
}
