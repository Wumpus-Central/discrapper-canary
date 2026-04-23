a.d(t, { a: () => i });
var l = a(627968);
a(64700);
var r = a(342393),
    n = a(71532),
    s = a(714126);
let i = (e) => {
    let { errorLabel: t, children: a, elementOptions: i } = e,
        d = Date.now();
    return (0, l.jsx)(
        s.W,
        {
            label: t,
            children: (0, l.jsx)(r.Elements, {
                stripe: (0, n.Cv)(),
                options: { mode: "setup", currency: "usd", setup_future_usage: "off_session", ...i },
                children: a,
            }),
        },
        d,
    );
};
