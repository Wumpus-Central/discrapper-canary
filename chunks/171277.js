n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(607070),
    c = n(254238),
    u = n(388032),
    d = n(382771);
let f = 280;
function _(e) {
    let { height: t } = e,
        i = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        _ = () =>
            n
                .e('78698')
                .then(n.t.bind(n, 141923, 19))
                .then((e) => {
                    let { default: t } = e;
                    return t;
                });
    return (0, r.jsxs)('div', {
        className: d.root,
        children: [
            (0, r.jsx)(s.Fmz, {
                importData: _,
                shouldAnimate: !i,
                className: o()(d.art, { [d.hidden]: t <= f })
            }),
            (0, r.jsx)(s.X6q, {
                className: d.header,
                variant: 'heading-md/bold',
                children: u.intl.string(u.t['C+tj1d'])
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: u.intl.format(u.t['nNHd//'], { onCancel: c.s6 })
            })
        ]
    });
}
