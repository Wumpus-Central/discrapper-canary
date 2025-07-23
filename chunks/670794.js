(i.d(n, { default: () => d }), i(388685));
var e = i(255367),
    a = i(73800),
    l = i(82659),
    s = i(755721),
    u = i(481060),
    r = i(194359),
    o = i(51144),
    c = i(388032),
    p = i(992089);
function d(t) {
    let { user: n, nickname: i, transitionState: d, onClose: x } = t,
        [h, m] = a.useState(!1),
        [f, g] = a.useState(i),
        b = a.useRef(null),
        v = async (t) => {
            (t.preventDefault(), m(!0));
            try {
                (await r.Z.updateRelationship(n.id, f), x());
            } catch (t) {
            } finally {
                m(!1);
            }
        },
        k = null == i ? c.intl.string(c.t.BGYkaG) : c.intl.string(c.t['8pOYUF']);
    return (0, e.jsx)('form', {
        onSubmit: v,
        children: (0, e.jsxs)(l.Modal, {
            title: k,
            transitionState: d,
            subtitle: c.intl.string(c.t['NdQ+lJ']),
            onClose: x,
            actions: [
                {
                    text: c.intl.string(c.t['ETE/oK']),
                    onClick: x,
                    variant: 'secondary'
                },
                {
                    text: c.intl.string(c.t.R3BPHx),
                    onSubmit: v,
                    variant: 'primary',
                    disabled: h,
                    type: 'submit'
                }
            ],
            children: [
                (0, e.jsx)(u.xJW, {
                    title: c.intl.string(c.t.pqG6GR),
                    children: (0, e.jsx)(s.Is, {
                        inputRef: b,
                        value: null != f ? f : '',
                        placeholder: o.ZP.getName(n),
                        onChange: g,
                        maxLength: 32,
                        className: p.input,
                        autoFocus: !0
                    })
                }),
                (0, e.jsx)(u.Avr, {
                    onClick: () => {
                        var t;
                        (g(null), null == (t = b.current) || t.focus());
                    },
                    text: c.intl.string(c.t['9qSBvL']),
                    textVariant: 'text-sm/medium',
                    type: 'button'
                })
            ]
        })
    });
}
