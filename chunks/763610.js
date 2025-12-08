n.d(t, { Z: () => u });
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(481060),
    l = n(53281),
    c = n(557441);
function u(e) {
    let { filename: t, className: n, filters: o, buttonText: u, placeholder: d, onFileSelect: p } = e,
        m = s.useRef(null),
        f = s.useRef(null);
    return (0, r.jsx)(i.tEY, {
        ringTarget: m,
        within: !0,
        children: (0, r.jsxs)(i.UPk, {
            ref: m,
            className: a()(n, c.fileUpload),
            children: [
                (0, r.jsx)(i.rG2, { size: "sm" }),
                (0, r.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "" !== t ? "text-default" : "text-muted",
                    lineClamp: 1,
                    children: "" !== t ? t : d,
                }),
                (0, r.jsx)(i.Button, {
                    "aria-hidden": !0,
                    variant: "secondary",
                    size: "sm",
                    text: u,
                    tabIndex: -1,
                }),
                (0, r.jsx)(l.Z, {
                    ref: f,
                    onChange: (e) => {
                        var t;
                        p(null == (t = e.currentTarget.files) ? void 0 : t[0]);
                    },
                    multiple: !1,
                    filters: o,
                }),
            ],
        }),
    });
}
