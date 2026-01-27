n.d(t, {
    A: () => s,
}),
    n(896048),
    n(228524);
var r = n(627968),
    l = n(64700),
    a = n(397927),
    i = n(207963);

function s(e) {
    let { type: t, options: n, required: s, maxValues: o } = e,
        c = l.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        { state: u, executeStateUpdate: d } = (0, i.At)(
            e,
            c.length > 0
                ? {
                      type: t,
                      values: c,
                  }
                : void 0,
        ),
        m = l.useMemo(() => ((null == u ? void 0 : u.type) === t ? u.values : []), [u, t]);
    return (0, r.jsx)(a.$QX, {
        options: n.map((e) => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: m.length >= o && !m.includes(e.value),
        })),
        selectedValues: m,
        onChange: (e) => {
            d({
                type: t,
                values: e,
            });
        },
        required: s,
    });
}
