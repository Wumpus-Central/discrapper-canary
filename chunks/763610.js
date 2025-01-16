t.d(l, {
    Z: function () {
        return d;
    }
});
var n = t(200651),
    i = t(192379),
    s = t(120356),
    a = t.n(s),
    o = t(481060),
    r = t(53281),
    u = t(14943);
function d(e) {
    let { filename: l, className: t, filters: s, buttonText: d, placeholder: c, onFileSelect: m } = e,
        f = i.useRef(null);
    return (0, n.jsxs)('div', {
        className: a()(t, u.fileUpload),
        children: [
            (0, n.jsx)('input', {
                className: u.fileUploadInput,
                tabIndex: -1,
                readOnly: !0,
                placeholder: c,
                type: 'text',
                value: l
            }),
            (0, n.jsxs)(o.Button, {
                size: o.Button.Sizes.MIN,
                className: u.fileUploadButton,
                children: [
                    d,
                    (0, n.jsx)(r.Z, {
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
