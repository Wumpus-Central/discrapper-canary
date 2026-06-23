e.d(n, { ParagraphFormFieldModal: () => g, TextInputFormFieldModal: () => p });
var r = e(627968),
    i = e(64700),
    l = e(292666),
    s = e(913122),
    a = e(513461),
    o = e(242273),
    u = e(260197),
    c = e(375708);
function d(t) {
    let { type: n, title: e, description: a, field: d, onSave: p, onClose: g } = t,
        [h, y] = i.useState(d?.label ?? ""),
        [f, T] = i.useState(null);
    async function w() {
        null != f && T(null);
        let t = h.trim();
        if ("" === t) return void T(c.intl.string(c.t["G+TI44"]));
        try {
            await p({ field_type: n, label: t, required: !0 }), g();
        } catch (t) {
            T(new s.LG(t).getAnyErrorMessage());
        }
    }
    return (0, r.jsx)(o.A, {
        ...t,
        errorText: f,
        title: e,
        description: a,
        onConfirm: w,
        onCancel: g,
        children: (0, r.jsx)(l.k, {
            onChange: function (t) {
                null != f && T(null);
                let n = t.replace(/(\r\n|\n|\r)/g, " ");
                n.length > u.Ty && (n = n.slice(0, u.Ty)), y(n);
            },
            placeholder: c.intl.string(c.t.fqVmbL),
            value: h,
            onKeyDown: (t) => "Enter" === t.key && w(),
        }),
    });
}
function p(t) {
    return (0, r.jsx)(d, {
        title: c.intl.string(c.t.w6Q9wz),
        description: c.intl.string(c.t["A6M+qv"]),
        type: a.rX.TEXT_INPUT,
        ...t,
    });
}
function g(t) {
    return (0, r.jsx)(d, {
        title: c.intl.string(c.t.gG0JBN),
        description: c.intl.string(c.t.SMX0ia),
        type: a.rX.PARAGRAPH,
        ...t,
    });
}
