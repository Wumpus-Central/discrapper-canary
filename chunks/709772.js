"use strict";
n.d(t, { a: () => o });
var r = n(627968);
n(64700);
var i = n(342393),
    a = n(71532),
    s = n(714126);
let o = (e) => {
    let { errorLabel: t, children: n, elementOptions: o } = e,
        l = Date.now();
    return (0, r.jsx)(
        s.W,
        {
            label: t,
            children: (0, r.jsx)(i.Elements, {
                stripe: (0, a.Cv)(),
                options: { mode: "setup", currency: "usd", setup_future_usage: "off_session", ...o },
                children: n,
            }),
        },
        l,
    );
};
