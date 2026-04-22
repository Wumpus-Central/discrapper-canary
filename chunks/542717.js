e.d(n, { ParagraphFormFieldModal: () => p, TextInputFormFieldModal: () => _ });
var r = e(627968),
    i = e(64700),
    a = e(292666),
    l = e(198982),
    o = e(513461),
    c = e(242273),
    s = e(260197),
    d = e(985018);
function u(t) {
    let { type: n, title: e, description: o, field: u, onSave: _, onClose: p } = t,
        [b, g] = i.useState(u?.label ?? ""),
        [y, h] = i.useState(null),
        x = async () => {
            null != y && h(null);
            let t = b.trim();
            if ("" === t) return void h(d.intl.string(d.t["G+TI44"]));
            try {
                await _({ field_type: n, label: t, required: !0 }), p();
            } catch (t) {
                h(new l.LG(t).getAnyErrorMessage());
            }
        };
    return (0, r.jsx)(c.A, {
        ...t,
        errorText: y,
        title: e,
        description: o,
        onConfirm: x,
        onCancel: p,
        children: (0, r.jsx)(a.k, {
            onChange: (t) => {
                null != y && h(null);
                let n = t.replace(/(\r\n|\n|\r)/g, " ");
                n.length > s.Ty && (n = n.slice(0, s.Ty)), g(n);
            },
            placeholder: d.intl.string(d.t.fqVmbL),
            value: b,
            onKeyDown: (t) => "Enter" === t.key && x(),
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
