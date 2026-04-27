"use strict";
r.d(t, { L: () => o, Te: () => l });
var n = r(627968);
r(64700);
var i = r(778712),
    a = r(192308);
r(515718);
var s = r(190460);
function l(e) {
    return "number" != typeof e ? (0, i.FT)(e) * s.Xq : e * s.Xq;
}
let o = (e) => {
    let { analyticsLocations: t, initialSelectedDecoration: i, guild: s, onClose: l, stackingBehavior: o } = e;
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([r.e("80527"), r.e("31825"), r.e("35059")]).then(r.bind(r, 40344));
            return (r) =>
                (0, n.jsx)(e, {
                    ...r,
                    onCloseModal: r.onClose,
                    onClose: l,
                    analyticsLocations: t,
                    initialSelectedDecoration: i,
                    guild: s,
                });
        },
        { stackingBehavior: o },
    );
};
