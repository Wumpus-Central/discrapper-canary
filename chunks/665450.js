n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(311907),
    r = n(397927),
    o = n(775602),
    d = n(108713),
    c = n(985018),
    u = n(177432);
function h(e) {
    let { height: t } = e,
        l = (0, a.bG)([o.A], () => o.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: u.zr,
        children: [
            (0, i.jsx)(r.akl, {
                importData: () =>
                    n
                        .e("35066")
                        .then(n.t.bind(n, 844512, 19))
                        .then((e) => {
                            let { default: t } = e;
                            return t;
                        }),
                shouldAnimate: !l,
                className: s()(u.Qw, { [u.R]: t <= 280 }),
            }),
            (0, i.jsx)(r.Heading, {
                className: u.wx,
                variant: "heading-md/bold",
                children: c.intl.string(c.t["C+tj1c"]),
            }),
            (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: c.intl.format(c.t["nNHd/y"], { onCancel: d.ZG }),
            }),
        ],
    });
}
