"use strict";
n.d(t, { Q: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(426333),
    o = n(834730),
    l = n(726770);
function u(e) {
    let {
        focusProps: t,
        lineClamp: n = 1,
        role: i = "button",
        text: u,
        textVariant: c = "text-md/medium",
        type: d = "button",
        variant: _ = "primary",
        buttonRef: f,
        className: p,
        style: h,
        ...m
    } = e;
    return (0, r.jsx)(s.vN, {
        ...t,
        children: (0, r.jsx)("button", {
            className: a()(l.textButton, l[_]),
            "data-mana-component": "text-button",
            role: i,
            type: d,
            ref: f,
            ...m,
            children: (0, r.jsx)(o.E, {
                tag: "span",
                variant: c,
                color: "none",
                lineClamp: n,
                className: l.text,
                children: u,
            }),
        }),
    });
}
