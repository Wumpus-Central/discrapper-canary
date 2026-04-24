n.d(t, { L: () => s, Te: () => o });
var a = n(627968);
n(64700);
var i = n(778712),
    l = n(192308);
n(515718);
var r = n(190460);
function o(e) {
    return "number" != typeof e ? (0, i.FT)(e) * r.Xq : e * r.Xq;
}
let s = (e) => {
    let { analyticsLocations: t, initialSelectedDecoration: i, guild: r, onClose: o, stackingBehavior: s } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("80527"), n.e("31825"), n.e("35059")]).then(n.bind(n, 40344));
            return (n) =>
                (0, a.jsx)(e, {
                    ...n,
                    onCloseModal: n.onClose,
                    onClose: o,
                    analyticsLocations: t,
                    initialSelectedDecoration: i,
                    guild: r,
                });
        },
        { stackingBehavior: s },
    );
};
