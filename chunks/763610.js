n.d(t, { Z: () => d });
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(481060),
    o = n(53281),
    c = n(557441);
function d(e) {
    let { filename: t, className: n, filters: i, buttonText: d, placeholder: u, onFileSelect: m } = e,
        p = r.useRef(null),
        h = r.useRef(null);
    return (0, a.jsx)(s.tEY, {
        ringTarget: p,
        within: !0,
        children: (0, a.jsxs)(s.UPk, {
            ref: p,
            className: l()(n, c.fileUpload),
            children: [
                (0, a.jsx)(s.rG2, { size: "sm" }),
                (0, a.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "" !== t ? "text-default" : "text-muted",
                    lineClamp: 1,
                    children: "" !== t ? t : u,
                }),
                (0, a.jsx)(s.Button, {
                    "aria-hidden": !0,
                    variant: "secondary",
                    size: "sm",
                    text: d,
                    tabIndex: -1,
                }),
                (0, a.jsx)(o.Z, {
                    ref: h,
                    onChange: (e) => {
                        var t;
                        m(null == (t = e.currentTarget.files) ? void 0 : t[0]);
                    },
                    multiple: !1,
                    filters: i,
                }),
            ],
        }),
    });
}
