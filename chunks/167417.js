i.d(a, { $: () => r });
var n = i(627968),
    l = i(47948),
    c = i(568385),
    d = i(452027),
    s = i(472276);
function r(e) {
    let { onChange: a, options: i, selectedValues: r, disabled: o = !1, ...p } = e;
    return (0, n.jsx)(d.D, {
        ...p,
        role: "group",
        children: (0, n.jsx)(l.$Q, {
            className: s.O,
            value: r.map(String),
            onChange: (e) => {
                a?.(e);
            },
            "data-mana-component": "checkbox-group",
            isDisabled: o,
            children: i.map((e) =>
                (0, n.jsx)(
                    c.J,
                    {
                        disabled: o || e.disabled,
                        checked: r.includes(e.value),
                        label: e.label,
                        value: e.value,
                        description: e.description,
                        leadingIcon: e.leadingIcon,
                    },
                    String(e.value),
                ),
            ),
        }),
    });
}
