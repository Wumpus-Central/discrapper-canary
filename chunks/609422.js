e.d(n, { default: () => p });
var i = e(627968),
    a = e(64700),
    l = e(189213),
    s = e(331322),
    r = e(292666),
    u = e(123292),
    o = e(717398),
    c = e(427262),
    d = e(375708);
function p(t) {
    let { user: n, nickname: e, transitionState: p, onClose: h } = t,
        [g, x] = a.useState(!1),
        [m, b] = a.useState(e),
        f = a.useRef(null),
        k = async (t) => {
            t.preventDefault(), x(!0);
            try {
                await o.A.updateRelationship(n.id, m), h();
            } catch (t) {
            } finally {
                x(!1);
            }
        },
        y = null == e ? d.intl.string(d.t.BGYkaH) : d.intl.string(d.t["8pOYUE"]);
    return (0, i.jsx)("form", {
        onSubmit: k,
        children: (0, i.jsx)(l.Modal, {
            title: y,
            transitionState: p,
            subtitle: d.intl.string(d.t["NdQ+lP"]),
            onClose: h,
            actions: [
                { text: d.intl.string(d.t["ETE/oC"]), onClick: h, variant: "secondary" },
                { text: d.intl.string(d.t["R3BPH+"]), onSubmit: k, variant: "primary", disabled: g, type: "submit" },
            ],
            children: (0, i.jsxs)(s.B, {
                gap: 8,
                children: [
                    (0, i.jsx)(r.k, {
                        label: d.intl.string(d.t.pqG6GS),
                        inputRef: f,
                        value: m ?? "",
                        placeholder: c.Ay.getName(n),
                        onChange: b,
                        maxLength: 32,
                        autoFocus: !0,
                    }),
                    (0, i.jsx)(u.Q, {
                        onClick: () => {
                            b(null), f.current?.focus();
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
