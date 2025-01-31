n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(607070),
    c = n(254238),
    d = n(388032),
    u = n(957970);
function h(e) {
    let { height: t } = e,
        l = (0, r.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, i.jsxs)('div', {
        className: u.root,
        children: [
            (0, i.jsx)(s.Fmz, {
                importData: () =>
                    n
                        .e('78698')
                        .then(n.t.bind(n, 141923, 19))
                        .then((e) => {
                            let { default: t } = e;
                            return t;
                        }),
                shouldAnimate: !l,
                className: a()(u.art, { [u.hidden]: t <= 280 })
            }),
            (0, i.jsx)(s.X6q, {
                className: u.header,
                variant: 'heading-md/bold',
                children: d.intl.string(d.t['C+tj1d'])
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: d.intl.format(d.t['nNHd//'], { onCancel: c.s6 })
            })
        ]
    });
}
