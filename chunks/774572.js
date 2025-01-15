n.d(t, {
    D: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var s = n(734530),
    r = n(622999),
    a = n(246652);
let l = (e) => {
    let { errorLabel: t, children: n, elementOptions: l } = e,
        o = Date.now();
    return (0, i.jsx)(
        a.k,
        {
            label: t,
            children: (0, i.jsx)(s.Elements, {
                stripe: (0, r.d2)(),
                options: {
                    mode: 'setup',
                    currency: 'usd',
                    setup_future_usage: 'off_session',
                    ...l
                },
                children: n
            })
        },
        o
    );
};
