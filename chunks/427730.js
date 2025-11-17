n.d(t, { Z: () => c }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(481060),
    s = n(527685),
    l = n(29594);
let c = () => {
    let [e, t] = i.useState(0),
        [n, c] = i.useState(4),
        [u, d] = i.useState(2),
        [f, _] = i.useState(s.y.BLUE),
        [p, h] = i.useState("darkslategray"),
        [m, g] = i.useState("blanchedalmond"),
        [E, b] = i.useState("pink"),
        y = i.useMemo(
            () =>
                Object.entries(s.y).map((e) => {
                    let [t, n] = e;
                    return {
                        label: t,
                        value: n,
                    };
                }),
            [],
        );
    return (0, r.jsxs)(l.pg, {
        children: [
            (0, r.jsx)(s.Z, {
                progress: u,
                minimum: e,
                maximum: n,
                variant: f,
                override: {
                    background: p,
                    gradientStart: m,
                    gradientEnd: E,
                },
            }),
            (0, r.jsx)(l.dv, {}),
            (0, r.jsx)(l.BZ, {
                children: (0, r.jsx)(o.oil, {
                    type: "number",
                    value: u.toString(),
                    onChange: (t) => {
                        d((0, a.clamp)(+t, e, n));
                    },
                    label: "Progress ( ".concat(e, " - ").concat(n, " ) "),
                }),
            }),
            (0, r.jsx)(l.BZ, {
                children: (0, r.jsx)(o.oil, {
                    type: "number",
                    value: e.toString(),
                    onChange: (e) => {
                        !(0 > +e) && (+e >= n || (u < +e && d(+e), t(+e)));
                    },
                    label: "Minimum Value",
                }),
            }),
            (0, r.jsx)(l.BZ, {
                children: (0, r.jsx)(o.oil, {
                    type: "number",
                    value: n.toString(),
                    onChange: (t) => {
                        !(+t <= e) && (1 > +t || (u > +t && d(+t), c(+t)));
                    },
                    label: "Maximum Value",
                }),
            }),
            (0, r.jsx)(l.BZ, {
                children: (0, r.jsx)(o.PhF, {
                    placeholder: "Variant",
                    select: (e) => {
                        _(e);
                    },
                    isSelected: (e) => f === e,
                    serialize: (e) => e,
                    options: y,
                    label: "Variant",
                }),
            }),
            (0, r.jsx)(l.dv, {}),
            (0, r.jsx)(o.Text, {
                variant: "text-md/semibold",
                children: "To use overrides, the variant must be set to UNSET",
            }),
            (0, r.jsx)(l.BZ, {
                children: (0, r.jsx)(o.oil, {
                    value: p,
                    onChange: (e) => {
                        h(e);
                    },
                    label: "Background",
                }),
            }),
            (0, r.jsx)(l.BZ, {
                children: (0, r.jsx)(o.oil, {
                    value: m,
                    onChange: (e) => {
                        g(e);
                    },
                    label: "Gradient Start",
                }),
            }),
            (0, r.jsx)(l.BZ, {
                children: (0, r.jsx)(o.oil, {
                    value: E,
                    onChange: (e) => {
                        b(e);
                    },
                    label: "Gradient End",
                }),
            }),
        ],
    });
};
