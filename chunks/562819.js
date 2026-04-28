"use strict";
n.d(t, { L: () => o, Te: () => s });
var r = n(627968);
n(64700);
var a = n(778712),
    i = n(192308);
n(515718);
var l = n(190460);
function s(e) {
    return "number" != typeof e ? (0, a.FT)(e) * l.Xq : e * l.Xq;
}
let o = (e) => {
    let { analyticsLocations: t, initialSelectedDecoration: a, guild: l, onClose: s, stackingBehavior: o } = e;
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("80527"), n.e("31825"), n.e("51966")]).then(n.bind(n, 40344));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    onCloseModal: n.onClose,
                    onClose: s,
                    analyticsLocations: t,
                    initialSelectedDecoration: a,
                    guild: l,
                });
        },
        { stackingBehavior: o },
    );
};
