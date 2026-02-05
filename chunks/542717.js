e.d(n, { ParagraphFormFieldModal: () => p, TextInputFormFieldModal: () => _ });
var r = e(627968),
    i = e(64700),
    a = e(397927),
    l = e(198982),
    o = e(513461),
    s = e(242273),
    c = e(260197),
    d = e(985018);
function u(t) {
    let { type: n, title: e, description: o, field: u, onSave: _, onClose: p } = t,
        [b, g] = i.useState(u?.label ?? ""),
        [y, x] = i.useState(null),
        h = async () => {
            null != y && x(null);
            let t = b.trim();
            if ("" === t) return void x(d.intl.string(d.t["G+TI44"]));
            try {
                await _({ field_type: n, label: t, required: !0 }), p();
            } catch (t) {
                x(new l.LG(t).getAnyErrorMessage());
            }
        };
    return (0, r.jsx)(s.A, {
        ...t,
        errorText: y,
        title: e,
        description: o,
        onConfirm: h,
        onCancel: p,
        children: (0, r.jsx)(a.ksK, {
            onChange: (t) => {
                null != y && x(null);
                let n = t.replace(/(\r\n|\n|\r)/g, " ");
                n.length > c.Ty && (n = n.slice(0, c.Ty)), g(n);
            },
            placeholder: d.intl.string(d.t.fqVmbL),
            value: b,
            onKeyDown: (t) => "Enter" === t.key && h(),
        }),
    });
}
function _(t) {
    return (0, r.jsx)(u, {
        title: d.intl.string(d.t.w6Q9wz),
        description: d.intl.string(d.t["A6M+qv"]),
        type: o.rX.TEXT_INPUT,
        ...t,
    });
}
function p(t) {
    return (0, r.jsx)(u, {
        title: d.intl.string(d.t.gG0JBN),
        description: d.intl.string(d.t.SMX0ia),
        type: o.rX.PARAGRAPH,
        ...t,
    });
}
