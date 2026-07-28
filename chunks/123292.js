"use strict";
n.d(t, { Q: () => d });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(259678),
    l = n(834730),
    o = n(952463);
function d(e) {
    let {
        focusProps: t,
        lineClamp: n = 1,
        role: r = "button",
        text: d,
        textVariant: c = "text-md/medium",
        type: u = "button",
        variant: _ = "primary",
        buttonRef: E,
        className: A,
        style: h,
        ...I
    } = e;
    return (0, i.jsx)(s.vN, {
        ...t,
        children: (0, i.jsx)("button", {
            className: a()(o.textButton, o[_]),
            "data-mana-component": "text-button",
            role: r,
            type: u,
            ref: E,
            ...I,
            children: (0, i.jsx)(l.E, {
                tag: "span",
                variant: c,
                color: "none",
                lineClamp: n,
                className: o.text,
                children: d,
            }),
        }),
    });
}
