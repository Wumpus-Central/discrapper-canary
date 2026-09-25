i.d(n, { default: () => d });
var e = i(477900),
    a = i(582128),
    l = i(189213),
    s = i(331322),
    r = i(95477),
    u = i(123292),
    o = i(717398),
    c = i(427262),
    p = i(375708);
function d(t) {
    let { user: n, nickname: i, transitionState: d, onClose: h } = t,
        [g, x] = a.useState(!1),
        [f, m] = a.useState(i),
        b = a.useRef(null);
    async function k(t) {
        (t.preventDefault(), x(!0));
        try {
            (await o.A.updateRelationship(n.id, f), h());
        } catch (t) {
        } finally {
            x(!1);
        }
    }
    let y = null == i ? p.intl.string(p.t.BGYkaH) : p.intl.string(p.t["8pOYUE"]);
    return (0, e.jsx)("form", {
        onSubmit: k,
        children: (0, e.jsx)(l.a, {
            title: y,
            transitionState: d,
            subtitle: p.intl.string(p.t["NdQ+lP"]),
            onClose: h,
            actions: [
                { text: p.intl.string(p.t["ETE/oC"]), onClick: h, variant: "secondary" },
                { text: p.intl.string(p.t["R3BPH+"]), onSubmit: k, variant: "primary", disabled: g, type: "submit" },
            ],
            children: (0, e.jsxs)(s.B, {
                gap: 8,
                children: [
                    (0, e.jsx)(r.k, {
                        label: p.intl.string(p.t.pqG6GS),
                        inputRef: b,
                        value: f ?? "",
                        placeholder: c.Ay.getName(n),
                        onChange: m,
                        maxLength: 32,
                        autoFocus: !0,
                    }),
                    (0, e.jsx)(u.Q, {
                        onClick: function () {
                            (m(null), b.current?.focus());
                        },
                        text: p.intl.string(p.t["9qSBvB"]),
                        textVariant: "text-sm/medium",
                        type: "button",
                    }),
                ],
            }),
        }),
    });
}
