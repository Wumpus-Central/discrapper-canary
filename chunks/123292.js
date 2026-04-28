a.d(t, { Q: () => c });
var n = a(627968);
a(64700);
var l = a(503698),
    r = a.n(l),
    i = a(187322),
    s = a(834730),
    o = a(197943);
function c(e) {
    let {
        focusProps: t,
        lineClamp: a = 1,
        role: l = "button",
        text: c,
        textVariant: d = "text-md/medium",
        type: u = "button",
        variant: h = "primary",
        buttonRef: p,
        className: m,
        style: f,
        ..._
    } = e;
    return (0, n.jsx)(i.vN, {
        ...t,
        children: (0, n.jsx)("button", {
            className: r()(o.textButton, o[h]),
            "data-mana-component": "text-button",
            role: l,
            type: u,
            ref: p,
            ..._,
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
