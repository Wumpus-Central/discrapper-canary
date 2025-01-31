e.d(n, {
    ParagraphFormFieldModal: () => b,
    TextInputFormFieldModal: () => _
}),
    e(47120),
    e(757143);
var r = e(200651),
    a = e(192379),
    i = e(481060),
    l = e(881052),
    o = e(246364),
    s = e(915509),
    d = e(592286),
    c = e(388032);
function u(t) {
    var n;
    let { type: e, title: o, description: u, field: _, onSave: b, onClose: m } = t,
        [p, g] = a.useState(null !== (n = null == _ ? void 0 : _.label) && void 0 !== n ? n : ''),
        [x, h] = a.useState(null),
        C = async () => {
            null != x && h(null);
            let t = p.trim();
            if ('' === t) {
                h(c.intl.string(c.t['G+TI4+']));
                return;
            }
            try {
                await b({
                    field_type: e,
                    label: t,
                    required: !0
                }),
                    m();
            } catch (t) {
                h(new l.Hx(t).getAnyErrorMessage());
            }
        };
    return (0, r.jsx)(s.Z, {
        ...t,
        errorText: x,
        title: o,
        description: u,
        onConfirm: C,
        onCancel: m,
        children: (0, r.jsx)(i.oil, {
            onChange: (t) => {
                null != x && h(null);
                let n = t.replace(/(\r\n|\n|\r)/g, ' ');
                n.length > d.XN && (n = n.slice(0, d.XN)), g(n);
            },
            placeholder: c.intl.string(c.t.fqVmbG),
            value: p,
            onKeyDown: (t) => 'Enter' === t.key && C()
        })
    });
}
function _(t) {
    return (0, r.jsx)(u, {
        title: c.intl.string(c.t.w6Q9w8),
        description: c.intl.string(c.t['A6M+qq']),
        type: o.QJ.TEXT_INPUT,
        ...t
    });
}
function b(t) {
    return (0, r.jsx)(u, {
        title: c.intl.string(c.t.gG0JBA),
        description: c.intl.string(c.t.SMX0iY),
        type: o.QJ.PARAGRAPH,
        ...t
    });
}
