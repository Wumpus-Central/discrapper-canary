r.d(s, { a: () => l });
var a = r(477900);
r(582128);
var t = r(643909),
    n = r(71532),
    i = r(714126);
let l = (e) => {
    let { errorLabel: s, children: r, elementOptions: l } = e,
        d = Date.now();
    return (0, a.jsx)(
        i.W,
        {
            label: s,
            children: (0, a.jsx)(t.Elements, {
                stripe: (0, n.Cv)(),
                options: { mode: "setup", currency: "usd", setup_future_usage: "off_session", ...l },
                children: r,
            }),
        },
        d,
    );
};
