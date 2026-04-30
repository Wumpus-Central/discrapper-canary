"use strict";
n.d(t, { Q: () => u });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(187322),
    o = n(834730),
    l = n(197943);
function u(e) {
    let {
        focusProps: t,
        lineClamp: n = 1,
        role: r = "button",
        text: u,
        textVariant: c = "text-md/medium",
        type: d = "button",
        variant: _ = "primary",
        buttonRef: f,
        className: h,
        style: p,
        ...E
    } = e;
    return (0, i.jsx)(a.vN, {
        ...t,
        children: (0, i.jsx)("button", {
            className: s()(l.textButton, l[_]),
            "data-mana-component": "text-button",
            role: r,
            type: d,
            ref: f,
            ...E,
            children: (0, i.jsx)(o.E, {
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
