a.d(t, { Q: () => c });
var r = a(627968);
a(64700);
var n = a(503698),
    l = a.n(n),
    i = a(187322),
    s = a(834730),
    o = a(197943);
function c(e) {
    let {
        focusProps: t,
        lineClamp: a = 1,
        role: n = "button",
        text: c,
        textVariant: d = "text-md/medium",
        type: u = "button",
        variant: h = "primary",
        buttonRef: p,
        className: m,
        style: f,
        ...b
    } = e;
    return (0, r.jsx)(i.vN, {
        ...t,
        children: (0, r.jsx)("button", {
            className: l()(o.textButton, o[h]),
            "data-mana-component": "text-button",
            role: n,
            type: u,
            ref: p,
            ...b,
            children: (0, r.jsx)(s.E, {
                tag: "span",
                variant: d,
                color: "none",
                lineClamp: a,
                className: o.text,
                children: c,
            }),
        }),
    });
}
