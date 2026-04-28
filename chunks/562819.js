a.d(t, { L: () => o, Te: () => s });
var n = a(627968);
a(64700);
var l = a(778712),
    r = a(192308);
a(515718);
var i = a(190460);
function s(e) {
    return "number" != typeof e ? (0, l.FT)(e) * i.Xq : e * i.Xq;
}
let o = (e) => {
    let { analyticsLocations: t, initialSelectedDecoration: l, guild: i, onClose: s, stackingBehavior: o } = e;
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([a.e("80527"), a.e("31825"), a.e("51966")]).then(a.bind(a, 40344));
            return (a) =>
                (0, n.jsx)(e, {
                    ...a,
                    onCloseModal: a.onClose,
                    onClose: s,
                    analyticsLocations: t,
                    initialSelectedDecoration: l,
                    guild: i,
                });
        },
        { stackingBehavior: o },
    );
};
