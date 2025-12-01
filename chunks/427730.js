n.d(t, { Z: () => c }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(481060),
    s = n(527685),
    l = n(261538);
let c = () => {
    let [e, t] = i.useState(0),
        [n, c] = i.useState(4),
        [u, d] = i.useState(2),
        [f, p] = i.useState(s.y.BLUE),
        [_, m] = i.useState("darkslategray"),
        [h, g] = i.useState("blanchedalmond"),
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
                    default: {
                        background: _,
                        gradientStart: h,
                        gradientEnd: E,
                    },
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
                        p(e);
                    },
                    isSelected: (e) => f === e,
                    serialize: (e) => e,
                    options: y,
                    label: "Variant",
                }),
            }),
            (0, r.jsx)(l.dv, {}),
            (0, r.jsx)(o.Text, {
                variant: "text-lg/semibold",
                color: "status-danger",
                children: "To use overrides, the variant must be set to UNSET",
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                children:
                    'Note: this component allows setting overrides per theme. For simplicity in this story, we only set the "default" override which applies to all themes',
            }),
            (0, r.jsx)(l.BZ, {
                children: (0, r.jsx)(o.oil, {
                    value: _,
                    onChange: (e) => {
                        m(e);
                    },
                    label: "Background",
                }),
            }),
            (0, r.jsx)(l.BZ, {
                children: (0, r.jsx)(o.oil, {
                    value: h,
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
