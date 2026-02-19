"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(311907),
    a = n(397927),
    o = n(775602),
    c = n(108713),
    d = n(985018),
    u = n(177432);
function h(e) {
    let { height: t } = e,
        s = (0, r.bG)([o.A], () => o.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: u.zr,
        children: [
            (0, i.jsx)(a.akl, {
                importData: () =>
                    n
                        .e("35066")
                        .then(n.t.bind(n, 844512, 19))
                        .then((e) => {
                            let { default: t } = e;
                            return t;
                        }),
                shouldAnimate: !s,
                className: l()(u.Qw, { [u.R]: t <= 280 }),
            }),
            (0, i.jsx)(a.Heading, {
                className: u.wx,
                variant: "heading-md/bold",
                children: d.intl.string(d.t["C+tj1c"]),
            }),
            (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: d.intl.format(d.t["nNHd/y"], { onCancel: c.ZG }),
            }),
        ],
    });
}
