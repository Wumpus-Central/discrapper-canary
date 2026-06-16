n.d(e, { ParagraphFormFieldModal: () => g, TextInputFormFieldModal: () => p });
var r = n(627968),
    i = n(64700),
    l = n(292666),
    s = n(913122),
    a = n(513461),
    o = n(242273),
    u = n(260197),
    c = n(375708);
function d(t) {
    let { type: e, title: n, description: a, field: d, onSave: p, onClose: g } = t,
        [h, y] = i.useState(d?.label ?? ""),
        [T, f] = i.useState(null),
        w = async () => {
            null != T && f(null);
            let t = h.trim();
            if ("" === t) return void f(c.intl.string(c.t["G+TI44"]));
            try {
                await p({ field_type: e, label: t, required: !0 }), g();
            } catch (t) {
                f(new s.LG(t).getAnyErrorMessage());
            }
        };
    return (0, r.jsx)(o.A, {
        ...t,
        errorText: T,
        title: n,
        description: a,
        onConfirm: w,
        onCancel: g,
        children: (0, r.jsx)(l.k, {
            onChange: (t) => {
                null != T && f(null);
                let e = t.replace(/(\r\n|\n|\r)/g, " ");
                e.length > u.Ty && (e = e.slice(0, u.Ty)), y(e);
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
