"use strict";
a.d(t, { L: () => o, Te: () => s });
var r = a(627968);
a(64700);
var l = a(778712),
    n = a(192308);
a(515718);
var i = a(190460);
function s(e) {
    return "number" != typeof e ? (0, l.FT)(e) * i.Xq : e * i.Xq;
}
let o = (e) => {
    let { analyticsLocations: t, initialSelectedDecoration: l, guild: i, onClose: s, stackingBehavior: o } = e;
    (0, n.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([a.e("76640"), a.e("73667"), a.e("31291")]).then(a.bind(a, 302691));
            return (a) =>
                (0, r.jsx)(e, {
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
