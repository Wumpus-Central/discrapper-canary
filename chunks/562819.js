a.d(n, { L: () => l, Te: () => s });
var t = a(477900);
a(582128);
var o = a(778712),
    i = a(192308);
a(515718);
var r = a(190460);
function s(e) {
    return "number" != typeof e ? (0, o.FT)(e) * r.Xq : e * r.Xq;
}
function l(e) {
    let {
        analyticsLocations: n,
        initialSelectedDecoration: o,
        guild: r,
        onClose: s,
        stackingBehavior: l,
        returnRef: c,
    } = e;
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                a.e("27682"),
                a.e("669130"),
                a.e("629972"),
                a.e("582012"),
                a.e("162775"),
                a.e("959311"),
                a.e("454048"),
                a.e("77473"),
                a.e("300699"),
                a.e("349619"),
                a.e("599666"),
                a.e("740428"),
                a.e("398125"),
                a.e("221825"),
                a.e("276640"),
                a.e("431011"),
                a.e("183776"),
                a.e("27773"),
                a.e("87306"),
                a.e("894747"),
                a.e("718573"),
                a.e("631825"),
                a.e("252574"),
                a.e("636126"),
                a.e("820683"),
                a.e("527462"),
                a.e("228545"),
                a.e("6721"),
            ]).then(a.bind(a, 40344));
            return (a) =>
                (0, t.jsx)(e, {
                    ...a,
                    onCloseModal: a.onClose,
                    onClose: s,
                    analyticsLocations: n,
                    initialSelectedDecoration: o,
                    guild: r,
                    returnRef: c,
                });
        },
        { stackingBehavior: l },
    );
}
