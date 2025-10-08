n.d(t, { c: () => s }), n(953529);
var r = n(951288);
n(647438);
var i = n(42650),
    a = n(793030),
    o = n(675042);
function s(e) {
    let { onChange: t, options: n, label: s, disabled: l, selectedValues: c } = e,
        u = (e) => {
            null == t || t(e);
        };
    return (0, r.jsx)(a.gNt, {
        label: s,
        role: "group",
        children: (0, r.jsx)(i.cO, {
            className: o.group,
            value: c.map(String),
            onChange: u,
            "data-mana-component": "checkbox-group",
            isDisabled: l,
            children: n.map((e) =>
                (0, r.jsx)(
                    a.Cnq,
                    {
                        disabled: l || e.disabled,
                        checked: c.includes(e.value),
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
