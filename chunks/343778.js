n.d(t, { A: () => s });
var a = n(627968),
    l = n(64700),
    r = n(167417),
    i = n(207963);
function s(e) {
    let { type: t, options: n, required: s, maxValues: o } = e,
        d = l.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        { state: c, executeStateUpdate: u } = (0, i.At)(e, d.length > 0 ? { type: t, values: d } : void 0),
        m = l.useMemo(() => (c?.type === t ? c.values : []), [c, t]);
    return (0, a.jsx)(r.$, {
        options: n.map((e) => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: m.length >= o && !m.includes(e.value),
        })),
        selectedValues: m,
        onChange: (e) => {
            u({ type: t, values: e });
        },
        required: s,
    });
}
