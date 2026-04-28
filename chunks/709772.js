n.d(t, { a: () => r });
var i = n(627968);
n(64700);
var l = n(342393),
    s = n(71532),
    a = n(714126);
let r = (e) => {
    let { errorLabel: t, children: n, elementOptions: r } = e,
        c = Date.now();
    return (0, i.jsx)(
        a.W,
        {
            label: t,
            children: (0, i.jsx)(l.Elements, {
                stripe: (0, s.Cv)(),
                options: { mode: "setup", currency: "usd", setup_future_usage: "off_session", ...r },
                children: n,
            }),
        },
        c,
    );
};
