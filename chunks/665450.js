n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(311907),
    s = n(397927),
    o = n(775602),
    c = n(108713),
    u = n(985018),
    d = n(177432);

function f(e) {
    let { height: t } = e,
        l = (0, a.bG)([o.A], () => o.A.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: d.zr,
        children: [
            (0, r.jsx)(s.akl, {
                importData: () =>
                    n
                        .e("35066")
                        .then(n.t.bind(n, 844512, 19))
                        .then((e) => {
                            let { default: t } = e;
                            return t;
                        }),
                shouldAnimate: !l,
                className: i()(d.Qw, {
                    [d.R]: t <= 280,
                }),
            }),
            (0, r.jsx)(s.Heading, {
                className: d.wx,
                variant: "heading-md/bold",
                children: u.intl.string(u.t["C+tj1c"]),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: u.intl.format(u.t["nNHd/y"], {
                    onCancel: c.ZG,
                }),
            }),
        ],
    });
}
