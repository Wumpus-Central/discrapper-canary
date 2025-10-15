i.d(n, { default: () => c }), i(388685);
var e = i(951288),
    l = i(647438),
    a = i(793030),
    s = i(481060),
    r = i(194359),
    u = i(51144),
    o = i(388032);
function c(t) {
    let { user: n, nickname: i, transitionState: c, onClose: d } = t,
        [p, h] = l.useState(!1),
        [x, g] = l.useState(i),
        m = l.useRef(null),
        b = async (t) => {
            t.preventDefault(), h(!0);
            try {
                await r.Z.updateRelationship(n.id, x), d();
            } catch (t) {
            } finally {
                h(!1);
            }
        },
        f = null == i ? o.intl.string(o.t.BGYkaG) : o.intl.string(o.t["8pOYUF"]);
    return (0, e.jsx)("form", {
        onSubmit: b,
        children: (0, e.jsx)(a.Modal, {
            title: f,
            transitionState: c,
            subtitle: o.intl.string(o.t["NdQ+lJ"]),
            onClose: d,
            actions: [
                {
                    text: o.intl.string(o.t["ETE/oK"]),
                    onClick: d,
                    variant: "secondary",
                },
                {
                    text: o.intl.string(o.t.R3BPHx),
                    onSubmit: b,
                    variant: "primary",
                    disabled: p,
                    type: "submit",
                },
            ],
            children: (0, e.jsxs)(s.Kqy, {
                gap: 8,
                children: [
                    (0, e.jsx)(s.oil, {
                        label: o.intl.string(o.t.pqG6GR),
                        inputRef: m,
                        value: null != x ? x : "",
                        placeholder: u.ZP.getName(n),
                        onChange: g,
                        maxLength: 32,
                        autoFocus: !0,
                    }),
                    (0, e.jsx)(s.Avr, {
                        onClick: () => {
                            var t;
                            g(null), null == (t = m.current) || t.focus();
                        },
                        text: o.intl.string(o.t["9qSBvL"]),
                        textVariant: "text-sm/medium",
                        type: "button",
                    }),
                ],
            }),
        }),
    });
}
