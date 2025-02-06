n.d(t, {
    T: () => a,
    v: () => s
});
var r = n(200651);
n(192379);
var l = n(481060);
let i = 'collectibles shop product details modal',
    a = (e) => {
        let { product: t, category: a, analyticsSource: s, analyticsLocations: o, returnRef: d } = e;
        (0, l.ZDy)(
            async () => {
                let { default: e } = await n.e('2026').then(n.bind(n, 702370));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        product: t,
                        category: a,
                        analyticsSource: s,
                        analyticsLocations: o,
                        returnRef: d
                    });
            },
            { modalKey: i }
        );
    },
    s = () => {
        (0, l.Mr3)(i);
    };
