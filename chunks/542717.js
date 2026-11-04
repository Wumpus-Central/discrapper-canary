var r = e(477900),
    i = e(582128),
    l = e(95477),
    a = e(627784),
    s = e(513461),
    o = e(242273);
e(260197);
var u = e(792996);
function c(t) {
    let { type: n, title: e, description: s, field: c, onSave: d, onClose: p } = t,
        [g, h] = i.useState(c?.label ?? ""),
        [f, y] = i.useState(null);
    async function w() {
        null != f && y(null);
        let t = g.trim();
        if ("" === t) return void y(u.intl.string(u.t["G+TI44"]));
        try {
            (await d({ field_type: n, label: t, required: !0 }), p());
        } catch (t) {
            y(new a.LG(t).getAnyErrorMessage());
        }
    }
    return (0, r.jsx)(o.A, {
        ...t,
        errorText: f,
        title: e,
        description: s,
        onConfirm: w,
        onCancel: p,
        children: (0, r.jsx)(l.k, {
            onChange: function (t) {
                null != f && y(null);
                let n = t.replace(/(\r\n|\n|\r)/g, " ");
                (n.length > 300 && (n = n.slice(0, 300)), h(n));
            },
            placeholder: u.intl.string(u.t.fqVmbL),
            value: g,
            onKeyDown: (t) => "Enter" === t.key && w(),
        }),
    });
}
e.d(
    n,
    {},
    {
        ParagraphFormFieldModal: function (t) {
            return (0, r.jsx)(c, {
                title: u.intl.string(u.t.gG0JBN),
                description: u.intl.string(u.t.SMX0ia),
                type: s.rX.PARAGRAPH,
                ...t,
            });
        },
        TextInputFormFieldModal: function (t) {
            return (0, r.jsx)(c, {
                title: u.intl.string(u.t.w6Q9wz),
                description: u.intl.string(u.t["A6M+qv"]),
                type: s.rX.TEXT_INPUT,
                ...t,
            });
        },
    },
);
