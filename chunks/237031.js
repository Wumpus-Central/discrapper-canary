n.d(t, {
    T: function () {
        return a;
    },
    v: function () {
        return s;
    }
});
var r = n(200651);
n(192379);
var i = n(481060);
let l = 'collectibles shop product details modal',
    a = (e) => {
        let { product: t, category: a, analyticsSource: s, analyticsLocations: o, returnRef: c } = e;
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await n.e('2026').then(n.bind(n, 702370));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        product: t,
                        category: a,
                        analyticsSource: s,
                        analyticsLocations: o,
                        returnRef: c
                    });
            },
            { modalKey: l }
        );
    },
    s = () => {
        (0, i.closeModal)(l);
    };
