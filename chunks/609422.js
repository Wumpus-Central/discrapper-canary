e.d(n, {
    default: () => o,
}),
    e(896048);
var i = e(627968),
    a = e(64700),
    l = e(158954),
    s = e(397927),
    r = e(49229),
    u = e(427262),
    c = e(985018);

function o(t) {
    let { user: n, nickname: e, transitionState: o, onClose: d } = t,
        [p, h] = a.useState(!1),
        [g, x] = a.useState(e),
        m = a.useRef(null),
        b = async (t) => {
            t.preventDefault(), h(!0);
            try {
                await r.A.updateRelationship(n.id, g), d();
            } catch (t) {
            } finally {
                h(!1);
            }
        },
        f = null == e ? c.intl.string(c.t.BGYkaH) : c.intl.string(c.t["8pOYUE"]);
    return (0, i.jsx)("form", {
        onSubmit: b,
        children: (0, i.jsx)(l.Modal, {
            title: f,
            transitionState: o,
            subtitle: c.intl.string(c.t["NdQ+lP"]),
            onClose: d,
            actions: [
                {
                    text: c.intl.string(c.t["ETE/oC"]),
                    onClick: d,
                    variant: "secondary",
                },
                {
                    text: c.intl.string(c.t["R3BPH+"]),
                    onSubmit: b,
                    variant: "primary",
                    disabled: p,
                    type: "submit",
                },
            ],
            children: (0, i.jsxs)(s.BJc, {
                gap: 8,
                children: [
                    (0, i.jsx)(s.ksK, {
                        label: c.intl.string(c.t.pqG6GS),
                        inputRef: m,
                        value: null != g ? g : "",
                        placeholder: u.Ay.getName(n),
                        onChange: x,
                        maxLength: 32,
                        autoFocus: !0,
                    }),
                    (0, i.jsx)(s.QWc, {
                        onClick: () => {
                            var t;
                            x(null), null == (t = m.current) || t.focus();
                        },
                        text: c.intl.string(c.t["9qSBvB"]),
                        textVariant: "text-sm/medium",
                        type: "button",
                    }),
                ],
            }),
        }),
    });
}
