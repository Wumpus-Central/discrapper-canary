"use strict";
a.d(t, { Q: () => d });
var r = a(627968);
a(64700);
var l = a(503698),
    n = a.n(l),
    i = a(187322),
    s = a(834730),
    o = a(492727);
function d(e) {
    let {
        focusProps: t,
        lineClamp: a = 1,
        role: l = "button",
        text: d,
        textVariant: c = "text-md/medium",
        type: u = "button",
        variant: h = "primary",
        buttonRef: p,
        className: _,
        style: m,
        ...b
    } = e;
    return (0, r.jsx)(i.vN, {
        ...t,
        children: (0, r.jsx)("button", {
            className: n()(o.textButton, o[h]),
            "data-mana-component": "text-button",
            role: l,
            type: u,
            ref: p,
            ...b,
            children: (0, r.jsx)(s.E, {
                tag: "span",
                variant: c,
                color: "none",
                lineClamp: a,
                className: o.text,
                children: d,
            }),
        }),
    });
}
