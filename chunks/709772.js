a.d(t, { a: () => s });
var r = a(627968);
a(64700);
var n = a(342393),
    l = a(71532),
    i = a(714126);
let s = (e) => {
    let { errorLabel: t, children: a, elementOptions: s } = e,
        o = Date.now();
    return (0, r.jsx)(
        i.W,
        {
            label: t,
            children: (0, r.jsx)(n.Elements, {
                stripe: (0, l.Cv)(),
                options: { mode: "setup", currency: "usd", setup_future_usage: "off_session", ...s },
                children: a,
            }),
        },
        o,
    );
};
