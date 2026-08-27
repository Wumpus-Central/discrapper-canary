n.d(a, { $: () => o });
var i = n(477900),
    c = n(767958),
    l = n(568385),
    d = n(452027),
    s = n(390019);
function o(e) {
    let { onChange: a, options: n, selectedValues: o, disabled: r = !1, ...u } = e;
    return (0, i.jsx)(d.D, {
        ...u,
        role: "group",
        children: (0, i.jsx)(c.$Q, {
            className: s.O,
            value: o.map(String),
            onChange: function (e) {
                a?.(e);
            },
            "data-mana-component": "checkbox-group",
            isDisabled: r,
            children: n.map((e) =>
                (0, i.jsx)(
                    l.J,
                    {
                        disabled: r || e.disabled,
                        checked: o.includes(e.value),
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
