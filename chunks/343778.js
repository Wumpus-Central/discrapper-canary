n.d(t, {
    A: () => o,
}),
    n(896048),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(207963);

function o(e) {
    let { type: t, options: n, required: o, maxValues: l } = e,
        c = i.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        { state: u, executeStateUpdate: d } = (0, s.At)(
            e,
            c.length > 0
                ? {
                      type: t,
                      values: c,
                  }
                : void 0,
        ),
        f = i.useMemo(() => ((null == u ? void 0 : u.type) === t ? u.values : []), [u, t]),
        p = (e) => {
            d({
                type: t,
                values: e,
            });
        };
    return (0, r.jsx)(a.$QX, {
        options: n.map((e) => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: f.length >= l && !f.includes(e.value),
        })),
        selectedValues: f,
        onChange: p,
        required: o,
    });
}
