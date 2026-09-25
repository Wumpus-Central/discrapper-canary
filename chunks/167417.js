l.d(e, { $: () => c });
var i = l(477900);
l(582128);
var d = l(767958),
    r = l(568385),
    s = l(452027),
    n = l(390019);
function c(a) {
    let {
        onChange: e,
        options: l,
        selectedValues: c,
        disabled: b = !1,
        "aria-labelledby": o,
        "aria-label": t,
        ...u
    } = a;
    function p(a) {
        e?.(a);
    }
    return (0, i.jsx)(s.D, {
        ...u,
        children: (a) =>
            (0, i.jsx)(d.$Q, {
                id: a.controlId,
                className: n.O,
                value: c.map(String),
                onChange: p,
                "aria-labelledby": o ?? a.labelId,
                "aria-label": t,
                "aria-describedby": a.describedById,
                "aria-errormessage": a.errorMessageId,
                "data-mana-component": "checkbox-group",
                isDisabled: b,
                children: l.map((a) =>
                    (0, i.jsx)(
                        r.J,
                        {
                            disabled: b || a.disabled,
                            checked: c.includes(a.value),
                            label: a.label,
                            value: a.value,
                            description: a.description,
                            leadingIcon: a.leadingIcon,
                        },
                        String(a.value),
                    ),
                ),
            }),
    });
}
