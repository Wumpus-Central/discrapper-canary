a.d(t, { L: () => o, Te: () => s });
var r = a(627968);
a(64700);
var n = a(778712),
    l = a(192308);
a(515718);
var i = a(190460);
function s(e) {
    return "number" != typeof e ? (0, n.FT)(e) * i.Xq : e * i.Xq;
}
let o = (e) => {
    let { analyticsLocations: t, initialSelectedDecoration: n, guild: i, onClose: s, stackingBehavior: o } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([a.e("80527"), a.e("31825"), a.e("35059")]).then(a.bind(a, 40344));
            return (a) =>
                (0, r.jsx)(e, {
                    ...a,
                    onCloseModal: a.onClose,
                    onClose: s,
                    analyticsLocations: t,
                    initialSelectedDecoration: n,
                    guild: i,
                });
        },
        { stackingBehavior: o },
    );
};
