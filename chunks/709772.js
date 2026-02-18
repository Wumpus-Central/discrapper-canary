n.d(t, { a: () => s });
var i = n(627968);
n(64700);
var r = n(342393),
    l = n(71532),
    a = n(714126);
let s = (e) => {
    let { errorLabel: t, children: n, elementOptions: s } = e,
        o = Date.now();
    return (0, i.jsx)(
        a.W,
        {
            label: t,
            children: (0, i.jsx)(r.Elements, {
                stripe: (0, l.Cv)(),
                options: { mode: "setup", currency: "usd", setup_future_usage: "off_session", ...s },
                children: n,
            }),
        },
        o,
    );
};
