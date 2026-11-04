var e = i(477900),
    a = i(582128),
    l = i(189213),
    s = i(331322),
    r = i(95477),
    u = i(123292),
    o = i(49229),
    c = i(427262),
    d = i(792996);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { user: n, nickname: i, transitionState: p, onClose: h } = t,
                [g, b] = a.useState(!1),
                [f, m] = a.useState(i),
                x = a.useRef(null);
            async function y(t) {
                (t.preventDefault(), b(!0));
                try {
                    (await o.A.updateRelationship(n.id, f), h());
                } catch (t) {
                } finally {
                    b(!1);
                }
            }
            let k = null == i ? d.intl.string(d.t.BGYkaH) : d.intl.string(d.t["8pOYUE"]);
            return (0, e.jsx)("form", {
                onSubmit: y,
                children: (0, e.jsx)(l.a, {
                    title: k,
                    transitionState: p,
                    subtitle: d.intl.string(d.t["NdQ+lP"]),
                    onClose: h,
                    actions: [
                        { text: d.intl.string(d.t["ETE/oC"]), onClick: h, variant: "secondary" },
                        {
                            text: d.intl.string(d.t["R3BPH+"]),
                            onSubmit: y,
                            variant: "primary",
                            disabled: g,
                            type: "submit",
                        },
                    ],
                    children: (0, e.jsxs)(s.B, {
                        gap: 8,
                        children: [
                            (0, e.jsx)(r.k, {
                                label: d.intl.string(d.t.pqG6GS),
                                inputRef: x,
                                value: f ?? "",
                                placeholder: c.Ay.getName(n),
                                onChange: m,
                                maxLength: 32,
                                autoFocus: !0,
                            }),
                            (0, e.jsx)(u.Q, {
                                onClick: function () {
                                    (m(null), x.current?.focus());
                                },
                                text: d.intl.string(d.t["9qSBvB"]),
                                textVariant: "body-sm/medium",
                                type: "button",
                            }),
                        ],
                    }),
                }),
            });
        },
    },
);
