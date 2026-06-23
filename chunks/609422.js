i.d(n, { default: () => p });
var e = i(627968),
    a = i(64700),
    l = i(189213),
    s = i(331322),
    r = i(292666),
    u = i(123292),
    o = i(717398),
    c = i(427262),
    d = i(375708);
function p(t) {
    let { user: n, nickname: i, transitionState: p, onClose: h } = t,
        [g, x] = a.useState(!1),
        [f, m] = a.useState(i),
        b = a.useRef(null);
    async function k(t) {
        t.preventDefault(), x(!0);
        try {
            await o.A.updateRelationship(n.id, f), h();
        } catch (t) {
        } finally {
            x(!1);
        }
    }
    let y = null == i ? d.intl.string(d.t.BGYkaH) : d.intl.string(d.t["8pOYUE"]);
    return (0, e.jsx)("form", {
        onSubmit: k,
        children: (0, e.jsx)(l.Modal, {
            title: y,
            transitionState: p,
            subtitle: d.intl.string(d.t["NdQ+lP"]),
            onClose: h,
            actions: [
                { text: d.intl.string(d.t["ETE/oC"]), onClick: h, variant: "secondary" },
                { text: d.intl.string(d.t["R3BPH+"]), onSubmit: k, variant: "primary", disabled: g, type: "submit" },
            ],
            children: (0, e.jsxs)(s.B, {
                gap: 8,
                children: [
                    (0, e.jsx)(r.k, {
                        label: d.intl.string(d.t.pqG6GS),
                        inputRef: b,
                        value: f ?? "",
                        placeholder: c.Ay.getName(n),
                        onChange: m,
                        maxLength: 32,
                        autoFocus: !0,
                    }),
                    (0, e.jsx)(u.Q, {
                        onClick: function () {
                            m(null), b.current?.focus();
                        },
                        text: d.intl.string(d.t["9qSBvB"]),
                        textVariant: "text-sm/medium",
                        type: "button",
                    }),
                ],
            }),
        }),
    });
}
