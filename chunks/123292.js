"use strict";
n.d(t, { Q: () => c });
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    l = n(187322),
    s = n(834730),
    o = n(197943);
function c(e) {
    let {
        focusProps: t,
        lineClamp: n = 1,
        role: a = "button",
        text: c,
        textVariant: d = "text-md/medium",
        type: u = "button",
        variant: _ = "primary",
        buttonRef: p,
        className: f,
        style: m,
        ...h
    } = e;
    return (0, r.jsx)(l.vN, {
        ...t,
        children: (0, r.jsx)("button", {
            className: i()(o.textButton, o[_]),
            "data-mana-component": "text-button",
            role: a,
            type: u,
            ref: p,
            ...h,
            children: (0, r.jsx)(s.E, {
                tag: "span",
                variant: d,
                color: "none",
                lineClamp: n,
                className: o.text,
                children: c,
            }),
        }),
    });
}
