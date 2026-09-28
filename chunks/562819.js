n.d(t, { L: () => o, Te: () => a });
var i = n(477900);
n(582128);
var l = n(778712),
    s = n(192308);
n(515718);
var r = n(190460);
function a(e) {
    return "number" != typeof e ? (0, l.FT)(e) * r.Xq : e * r.Xq;
}
function o(e) {
    let {
        analyticsLocations: t,
        initialSelectedDecoration: l,
        guild: r,
        onClose: a,
        stackingBehavior: o,
        returnRef: c,
    } = e;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("27682"),
                n.e("669130"),
                n.e("629972"),
                n.e("582012"),
                n.e("162775"),
                n.e("959311"),
                n.e("454048"),
                n.e("77473"),
                n.e("300699"),
                n.e("349619"),
                n.e("599666"),
                n.e("740428"),
                n.e("398125"),
                n.e("221825"),
                n.e("930758"),
                n.e("431011"),
                n.e("707826"),
                n.e("183776"),
                n.e("27773"),
                n.e("718573"),
                n.e("631825"),
                n.e("252574"),
                n.e("87306"),
                n.e("894747"),
                n.e("636126"),
                n.e("820683"),
                n.e("527462"),
                n.e("228545"),
                n.e("6721"),
            ]).then(n.bind(n, 40344));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    onCloseModal: n.onClose,
                    onClose: a,
                    analyticsLocations: t,
                    initialSelectedDecoration: l,
                    guild: r,
                    returnRef: c,
                });
        },
        { stackingBehavior: o },
    );
}
