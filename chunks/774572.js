n.d(t, { D: () => a });
var i = n(200651);
n(192379);
var s = n(734530),
    r = n(622999),
    l = n(246652);
let a = (e) => {
    let { errorLabel: t, children: n, elementOptions: a } = e,
        o = Date.now();
    return (0, i.jsx)(
        l.k,
        {
            label: t,
            children: (0, i.jsx)(s.Elements, {
                stripe: (0, r.d2)(),
                options: {
                    mode: 'setup',
                    currency: 'usd',
                    setup_future_usage: 'off_session',
                    ...a
                },
                children: n
            })
        },
        o
    );
};
