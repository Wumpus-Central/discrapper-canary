n.d(t, {
    ps: () => u,
    y9: () => l
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(703656);
n(956664);
var s = n(419061),
    o = n(981631);
function l(e) {
    return 'number' != typeof e ? (0, r.pxk)(e) * s.hs : e * s.hs;
}
let u = (e) => {
    let { analyticsLocations: t, initialSelectedDecoration: s, initialSelectedDecorationId: l, isTryItOutFlow: u, guild: c, onClose: d } = e;
    (0, r.ZDy)(async () => {
        (0, a.s1)().location.pathname === o.Z5c.COLLECTIBLES_SHOP_FULLSCREEN && (0, a.uL)(o.Z5c.APP);
        let { default: e } = await Promise.resolve().then(n.bind(n, 235400));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                onCloseModal: n.onClose,
                onClose: d,
                analyticsLocations: t,
                initialSelectedDecoration: s,
                initialSelectedDecorationId: l,
                isTryItOutFlow: u,
                guild: c
            });
    }, {});
};
