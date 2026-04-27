"use strict";
r.d(t, { Q: () => c });
var n = r(627968);
r(64700);
var i = r(503698),
    a = r.n(i),
    s = r(187322),
    l = r(834730),
    o = r(197943);
function c(e) {
    let {
        focusProps: t,
        lineClamp: r = 1,
        role: i = "button",
        text: c,
        textVariant: d = "text-md/medium",
        type: u = "button",
        variant: _ = "primary",
        buttonRef: p,
        className: f,
        style: m,
        ...h
    } = e;
    return (0, n.jsx)(s.vN, {
        ...t,
        children: (0, n.jsx)("button", {
            className: a()(o.textButton, o[_]),
            "data-mana-component": "text-button",
            role: i,
            type: u,
            ref: p,
            ...h,
            children: (0, n.jsx)(l.E, {
                tag: "span",
                variant: d,
                color: "none",
                lineClamp: r,
                className: o.text,
                children: c,
            }),
        }),
    });
}
