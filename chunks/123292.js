"use strict";
n.d(t, { Q: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(187322),
    s = n(834730),
    o = n(197943);
function c(e) {
    let {
        focusProps: t,
        lineClamp: n = 1,
        role: i = "button",
        text: c,
        textVariant: u = "text-md/medium",
        type: d = "button",
        variant: _ = "primary",
        buttonRef: p,
        className: f,
        style: h,
        ...m
    } = e;
    return (0, r.jsx)(l.vN, {
        ...t,
        children: (0, r.jsx)("button", {
            className: a()(o.textButton, o[_]),
            "data-mana-component": "text-button",
            role: i,
            type: d,
            ref: p,
            ...m,
            children: (0, r.jsx)(s.E, {
                tag: "span",
                variant: u,
                color: "none",
                lineClamp: n,
                className: o.text,
                children: c,
            }),
        }),
    });
}
