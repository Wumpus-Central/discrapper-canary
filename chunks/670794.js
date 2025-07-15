(i.d(n, { default: () => p }), i(388685));
var e = i(255367),
    l = i(73800),
    a = i(82659),
    s = i(481060),
    u = i(194359),
    r = i(51144),
    c = i(388032),
    o = i(992089);
function p(t) {
    let { user: n, nickname: i, transitionState: p, onClose: d } = t,
        [x, h] = l.useState(!1),
        [f, g] = l.useState(i),
        m = l.useRef(null),
        k = async (t) => {
            (null == t || t.preventDefault(), h(!0));
            try {
                (await u.Z.updateRelationship(n.id, f), d());
            } catch (t) {
            } finally {
                h(!1);
            }
        },
        v = null == i ? c.intl.string(c.t.BGYkaG) : c.intl.string(c.t['8pOYUF']);
    return (0, e.jsxs)(a.u, {
        title: v,
        transitionState: p,
        subtitle: c.intl.string(c.t['NdQ+lJ']),
        onClose: d,
        actions: [
            {
                text: c.intl.string(c.t['ETE/oK']),
                onClick: d,
                variant: 'secondary'
            },
            {
                text: c.intl.string(c.t.R3BPHx),
                onClick: () => k(),
                variant: 'primary',
                disabled: x
            }
        ],
        children: [
            (0, e.jsx)('form', {
                onSubmit: k,
                children: (0, e.jsx)(s.xJW, {
                    title: c.intl.string(c.t.pqG6GR),
                    children: (0, e.jsx)(s.oil, {
                        inputRef: m,
                        value: null != f ? f : '',
                        placeholder: r.ZP.getName(n),
                        onChange: g,
                        maxLength: 32,
                        className: o.input,
                        autoFocus: !0
                    })
                })
            }),
            (0, e.jsx)(s.Avr, {
                onClick: () => {
                    var t;
                    (g(null), null == (t = m.current) || t.focus());
                },
                text: c.intl.string(c.t['9qSBvL']),
                textVariant: 'text-sm/medium'
            })
        ]
    });
}
