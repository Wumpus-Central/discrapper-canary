a.d(l, { Q: () => d });
var t = a(627968);
a(64700);
var n = a(503698),
    o = a.n(n),
    i = a(187322),
    r = a(834730),
    s = a(492727);
function d(e) {
    let {
        focusProps: l,
        lineClamp: a = 1,
        role: n = "button",
        text: d,
        textVariant: u = "text-md/medium",
        type: c = "button",
        variant: b = "primary",
        buttonRef: p,
        className: m,
        style: h,
        ...x
    } = e;
    return (0, t.jsx)(i.vN, {
        ...l,
        children: (0, t.jsx)("button", {
            className: o()(s.textButton, s[b]),
            "data-mana-component": "text-button",
            role: n,
            type: c,
            ref: p,
            ...x,
            children: (0, t.jsx)(r.E, {
                tag: "span",
                variant: u,
                color: "none",
                lineClamp: a,
                className: s.text,
                children: d,
            }),
        }),
    });
}
