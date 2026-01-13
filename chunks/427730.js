n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(199849),
    s = n(481060),
    l = n(527685),
    c = n(261538);
let u = () => {
    let [e, t] = i.useState(0),
        [n, u] = i.useState(4),
        [d, f] = i.useState(2),
        [p, _] = i.useState(l.y.BLUE),
        [m, h] = i.useState("darkslategray"),
        [g, E] = i.useState("blanchedalmond"),
        [b, y] = i.useState("pink"),
        O = i.useMemo(
            () =>
                Object.entries(l.y).map((e) => {
                    let [t, n] = e;
                    return {
                        label: t,
                        value: n,
                    };
                }),
            [],
        );
    return (0, r.jsxs)(c.pg, {
        children: [
            (0, r.jsx)(l.Z, {
                progress: d,
                minimum: e,
                maximum: n,
                variant: p,
                override: {
                    default: {
                        background: m,
                        gradientStart: g,
                        gradientEnd: b,
                    },
                },
            }),
            (0, r.jsx)(c.dv, {}),
            (0, r.jsx)(c.BZ, {
                children: (0, r.jsx)(s.oil, {
                    type: "number",
                    value: d.toString(),
                    onChange: (t) => {
                        f((0, a.clamp)(+t, e, n));
                    },
                    label: "Progress ( ".concat(e, " - ").concat(n, " ) "),
                }),
            }),
            (0, r.jsx)(c.BZ, {
                children: (0, r.jsx)(s.oil, {
                    type: "number",
                    value: e.toString(),
                    onChange: (e) => {
                        !(0 > +e) && (+e >= n || (d < +e && f(+e), t(+e)));
                    },
                    label: "Minimum Value",
                }),
            }),
            (0, r.jsx)(c.BZ, {
                children: (0, r.jsx)(s.oil, {
                    type: "number",
                    value: n.toString(),
                    onChange: (t) => {
                        !(+t <= e) && (1 > +t || (d > +t && f(+t), u(+t)));
                    },
                    label: "Maximum Value",
                }),
            }),
            (0, r.jsx)(c.BZ, {
                children: (0, r.jsx)(o.B6, {
                    placeholder: "Variant",
                    select: (e) => {
                        _(e);
                    },
                    isSelected: (e) => p === e,
                    serialize: (e) => e,
                    options: O,
                    label: "Variant",
                }),
            }),
            (0, r.jsx)(c.dv, {}),
            (0, r.jsx)(s.Text, {
                variant: "text-lg/semibold",
                color: "text-feedback-critical",
                children: "To use overrides, the variant must be set to UNSET",
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                children:
                    'Note: this component allows setting overrides per theme. For simplicity in this story, we only set the "default" override which applies to all themes',
            }),
            (0, r.jsx)(c.BZ, {
                children: (0, r.jsx)(s.oil, {
                    value: m,
                    onChange: (e) => {
                        h(e);
                    },
                    label: "Background",
                }),
            }),
            (0, r.jsx)(c.BZ, {
                children: (0, r.jsx)(s.oil, {
                    value: g,
                    onChange: (e) => {
                        E(e);
                    },
                    label: "Gradient Start",
                }),
            }),
            (0, r.jsx)(c.BZ, {
                children: (0, r.jsx)(s.oil, {
                    value: b,
                    onChange: (e) => {
                        y(e);
                    },
                    label: "Gradient End",
                }),
            }),
        ],
    });
};
