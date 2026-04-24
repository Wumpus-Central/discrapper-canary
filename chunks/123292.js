a.d(t, { Q: () => c });
var n = a(627968);
a(64700);
var r = a(503698),
    l = a.n(r),
    i = a(187322),
    s = a(834730),
    o = a(197943);
function c(e) {
    let {
        focusProps: t,
        lineClamp: a = 1,
        role: r = "button",
        text: c,
        textVariant: d = "text-md/medium",
        type: u = "button",
        variant: h = "primary",
        buttonRef: p,
        className: m,
        style: f,
        ...b
    } = e;
    return (0, n.jsx)(i.vN, {
        ...t,
        children: (0, n.jsx)("button", {
            className: l()(o.textButton, o[h]),
            "data-mana-component": "text-button",
            role: r,
            type: u,
            ref: p,
            ...b,
            children: (0, n.jsx)(s.E, {
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
