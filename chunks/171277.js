n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(607070),
    c = n(254238),
    u = n(388032),
    d = n(21719);
function p(e) {
    let { height: t } = e,
        i = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: d.root,
        children: [
            (0, r.jsx)(o.Fmz, {
                importData: () =>
                    n
                        .e("78698")
                        .then(n.t.bind(n, 141923, 19))
                        .then((e) => {
                            let { default: t } = e;
                            return t;
                        }),
                shouldAnimate: !i,
                className: l()(d.art, { [d.hidden]: t <= 280 }),
            }),
            (0, r.jsx)(o.Heading, {
                className: d.header,
                variant: "heading-md/bold",
                children: u.intl.string(u.t["C+tj1c"]),
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                children: u.intl.format(u.t["nNHd/y"], { onCancel: c.s6 }),
            }),
        ],
    });
}
