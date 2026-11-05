var i = t(477900);
t(582128);
var a = t(192308),
    d = t(138054);
function r(e, n) {
    (0, a.mM)(
        async () => {
            let { default: a } = await Promise.all([
                t.e(684986),
                t.e(202669),
                t.e(774542),
                t.e(762975),
                t.e(531997),
                t.e(689913),
                t.e(809014),
                t.e(187388),
            ]).then(t.bind(t, 41527));
            return (t) => (0, i.jsx)(a, { ...t, userId: e, linkCode: n });
        },
        { modalKey: "family-center-request-modal" },
    );
}
t.d(
    n,
    {},
    {
        Ew: r,
        nk: function () {
            let e = d.A.getPendingConnection();
            return null != e && (r(e.teenId, e.linkCode), !0);
        },
    },
);
