var o = n(477900);
n(582128);
var s = n(643909),
    a = n(558740),
    r = n(714126);
n.d(
    t,
    {},
    {
        a: (e) => {
            let { errorLabel: t, children: n, elementOptions: i } = e,
                l = Date.now();
            return (0, o.jsx)(
                r.W,
                {
                    label: t,
                    children: (0, o.jsx)(s.Elements, {
                        stripe: (0, a.Cv)(),
                        options: { mode: "setup", currency: "usd", setup_future_usage: "off_session", ...i },
                        children: n,
                    }),
                },
                l,
            );
        },
    },
);
