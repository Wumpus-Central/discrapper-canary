n.d(t, { a: () => i });
var o = n(477900);
n(582128);
var s = n(643909),
    r = n(71532),
    a = n(714126);
let i = (e) => {
    let { errorLabel: t, children: n, elementOptions: i } = e,
        l = Date.now();
    return (0, o.jsx)(
        a.W,
        {
            label: t,
            children: (0, o.jsx)(s.Elements, {
                stripe: (0, r.Cv)(),
                options: { mode: "setup", currency: "usd", setup_future_usage: "off_session", ...i },
                children: n,
            }),
        },
        l,
    );
};
