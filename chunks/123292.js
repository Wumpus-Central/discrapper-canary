var n = e(477900);
e(582128);
var s = e(503698),
    r = e.n(s),
    o = e(559106),
    c = e(834730),
    i = e(778956);
e.d(
    a,
    {},
    {
        Q: function (t) {
            let {
                focusProps: a,
                lineClamp: e = 1,
                role: s = "button",
                text: d,
                textVariant: l = "body-md/medium",
                type: p = "button",
                variant: u = "primary",
                buttonRef: m,
                className: h,
                style: b,
                ...x
            } = t;
            return (0, n.jsx)(o.vN, {
                ...a,
                children: (0, n.jsx)("button", {
                    className: r()(i.textButton, i[u]),
                    "data-mana-component": "text-button",
                    role: s,
                    type: p,
                    ref: m,
                    ...x,
                    children: (0, n.jsx)(c.E, {
                        tag: "span",
                        variant: l,
                        color: "none",
                        lineClamp: e,
                        className: i.text,
                        children: d,
                    }),
                }),
            });
        },
    },
);
