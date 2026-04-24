n.d(t, { Q: () => c });
var a = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    r = n(187322),
    o = n(834730),
    s = n(197943);
function c(e) {
    let {
        focusProps: t,
        lineClamp: n = 1,
        role: i = "button",
        text: c,
        textVariant: d = "text-md/medium",
        type: u = "button",
        variant: _ = "primary",
        buttonRef: p,
        className: f,
        style: h,
        ...m
    } = e;
    return (0, a.jsx)(r.vN, {
        ...t,
        children: (0, a.jsx)("button", {
            className: l()(s.textButton, s[_]),
            "data-mana-component": "text-button",
            role: i,
            type: u,
            ref: p,
            ...m,
            children: (0, a.jsx)(o.E, {
                tag: "span",
                variant: d,
                color: "none",
                lineClamp: n,
                className: s.text,
                children: c,
            }),
        }),
    });
}
