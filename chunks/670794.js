i.d(n, { default: () => c }), i(388685);
var e = i(54381),
    l = i(473749),
    a = i(793030),
    s = i(481060),
    r = i(194359),
    u = i(51144),
    o = i(388032);
function c(t) {
    let { user: n, nickname: i, transitionState: c, onClose: d } = t,
        [p, h] = l.useState(!1),
        [g, x] = l.useState(i),
        m = l.useRef(null),
        b = async (t) => {
            t.preventDefault(), h(!0);
            try {
                await r.Z.updateRelationship(n.id, g), d();
            } catch (t) {
            } finally {
                h(!1);
            }
        },
        f = null == i ? o.intl.string(o.t.BGYkaH) : o.intl.string(o.t["8pOYUE"]);
    return (0, e.jsx)("form", {
        onSubmit: b,
        children: (0, e.jsx)(a.Modal, {
            title: f,
            transitionState: c,
            subtitle: o.intl.string(o.t["NdQ+lP"]),
            onClose: d,
            actions: [
                {
                    text: o.intl.string(o.t["ETE/oC"]),
                    onClick: d,
                    variant: "secondary",
                },
                {
                    text: o.intl.string(o.t["R3BPH+"]),
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
                        label: o.intl.string(o.t.pqG6GS),
                        inputRef: m,
                        value: null != g ? g : "",
                        placeholder: u.ZP.getName(n),
                        onChange: x,
                        maxLength: 32,
                        autoFocus: !0,
                    }),
                    (0, e.jsx)(s.Avr, {
                        onClick: () => {
                            var t;
                            x(null), null == (t = m.current) || t.focus();
                        },
                        text: o.intl.string(o.t["9qSBvB"]),
                        textVariant: "text-sm/medium",
                        type: "button",
                    }),
                ],
            }),
        }),
    });
}
