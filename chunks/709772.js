"use strict";
r.d(t, { a: () => l });
var n = r(627968);
r(64700);
var i = r(342393),
    a = r(71532),
    s = r(714126);
let l = (e) => {
    let { errorLabel: t, children: r, elementOptions: l } = e,
        o = Date.now();
    return (0, n.jsx)(
        s.W,
        {
            label: t,
            children: (0, n.jsx)(i.Elements, {
                stripe: (0, a.Cv)(),
                options: { mode: "setup", currency: "usd", setup_future_usage: "off_session", ...l },
                children: r,
            }),
        },
        o,
    );
};
