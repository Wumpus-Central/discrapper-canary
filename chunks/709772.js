"use strict";
n.d(t, { a: () => s });
var r = n(627968);
n(64700);
var a = n(342393),
    i = n(71532),
    l = n(714126);
let s = (e) => {
    let { errorLabel: t, children: n, elementOptions: s } = e,
        o = Date.now();
    return (0, r.jsx)(
        l.W,
        {
            label: t,
            children: (0, r.jsx)(a.Elements, {
                stripe: (0, i.Cv)(),
                options: { mode: "setup", currency: "usd", setup_future_usage: "off_session", ...s },
                children: n,
            }),
        },
        o,
    );
};
