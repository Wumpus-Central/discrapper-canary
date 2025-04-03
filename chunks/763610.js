l.d(t, { Z: () => c });
var n = l(200651),
    i = l(192379),
    r = l(120356),
    s = l.n(r),
    a = l(481060),
    o = l(53281),
    u = l(121746);
function c(e) {
    let { filename: t, className: l, filters: r, buttonText: c, placeholder: d, onFileSelect: m } = e,
        f = i.useRef(null);
    return (0, n.jsxs)('div', {
        className: s()(l, u.fileUpload),
        children: [
            (0, n.jsx)('input', {
                className: u.fileUploadInput,
                tabIndex: -1,
                readOnly: !0,
                placeholder: d,
                type: 'text',
                value: t
            }),
            (0, n.jsxs)(a.zxk, {
                size: a.zxk.Sizes.MIN,
                className: u.fileUploadButton,
                children: [
                    c,
                    (0, n.jsx)(o.Z, {
                        ref: f,
                        tabIndex: -1,
                        onChange: (e) => {
                            var t;
                            m(null == (t = e.currentTarget.files) ? void 0 : t[0]);
                        },
                        multiple: !1,
                        filters: r
                    })
                ]
            })
        ]
    });
}
