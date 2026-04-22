a.d(e, { default: () => p });
var n = a(627968),
    i = a(64700),
    r = a(189213),
    l = a(331322),
    s = a(292666),
    o = a(123292),
    u = a(49229),
    c = a(427262),
    d = a(985018);
function p(t) {
    let { user: e, nickname: a, transitionState: p, onClose: x } = t,
        [b, m] = i.useState(!1),
        [h, y] = i.useState(a),
        _ = i.useRef(null),
        g = async (t) => {
            t.preventDefault(), m(!0);
            try {
                await u.A.updateRelationship(e.id, h), x();
            } catch (t) {
            } finally {
                m(!1);
            }
        },
        f = null == a ? d.intl.string(d.t.BGYkaH) : d.intl.string(d.t["8pOYUE"]);
    return (0, n.jsx)("form", {
        onSubmit: g,
        children: (0, n.jsx)(r.Modal, {
            title: f,
            transitionState: p,
            subtitle: d.intl.string(d.t["NdQ+lP"]),
            onClose: x,
            actions: [
                { text: d.intl.string(d.t["ETE/oC"]), onClick: x, variant: "secondary" },
                { text: d.intl.string(d.t["R3BPH+"]), onSubmit: g, variant: "primary", disabled: b, type: "submit" },
            ],
            children: (0, n.jsxs)(l.B, {
                gap: 8,
                children: [
                    (0, n.jsx)(s.k, {
                        label: d.intl.string(d.t.pqG6GS),
                        inputRef: _,
                        value: h ?? "",
                        placeholder: c.Ay.getName(e),
                        onChange: y,
                        maxLength: 32,
                        autoFocus: !0,
                    }),
                    (0, n.jsx)(o.Q, {
                        onClick: () => {
                            y(null), _.current?.focus();
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
