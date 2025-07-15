(i.d(n, { default: () => p }), i(388685));
var e = i(255367),
    l = i(73800),
    a = i(82659),
    s = i(481060),
    u = i(194359),
    r = i(51144),
    o = i(388032),
    c = i(992089);
function p(t) {
    let { user: n, nickname: i, transitionState: p, onClose: d } = t,
        [x, h] = l.useState(!1),
        [m, f] = l.useState(i),
        g = l.useRef(null),
        b = async (t) => {
            (t.preventDefault(), h(!0));
            try {
                (await u.Z.updateRelationship(n.id, m), d());
            } catch (t) {
            } finally {
                h(!1);
            }
        },
        v = null == i ? o.intl.string(o.t.BGYkaG) : o.intl.string(o.t['8pOYUF']);
    return (0, e.jsx)('form', {
        onSubmit: b,
        children: (0, e.jsxs)(a.u, {
            title: v,
            transitionState: p,
            subtitle: o.intl.string(o.t['NdQ+lJ']),
            onClose: d,
            actions: [
                {
                    text: o.intl.string(o.t['ETE/oK']),
                    onClick: d,
                    variant: 'secondary'
                },
                {
                    text: o.intl.string(o.t.R3BPHx),
                    onSubmit: b,
                    variant: 'primary',
                    disabled: x,
                    type: 'submit'
                }
            ],
            children: [
                (0, e.jsx)(s.xJW, {
                    title: o.intl.string(o.t.pqG6GR),
                    children: (0, e.jsx)(s.oil, {
                        inputRef: g,
                        value: null != m ? m : '',
                        placeholder: r.ZP.getName(n),
                        onChange: f,
                        maxLength: 32,
                        className: c.input,
                        autoFocus: !0
                    })
                }),
                (0, e.jsx)(s.Avr, {
                    onClick: () => {
                        var t;
                        (f(null), null == (t = g.current) || t.focus());
                    },
                    text: o.intl.string(o.t['9qSBvL']),
                    textVariant: 'text-sm/medium',
                    type: 'button'
                })
            ]
        })
    });
}
