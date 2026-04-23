n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(926466),
    l = n(652215),
    s = n(49999),
    o = n(985018),
    d = n(360567);
function u(e) {
    let { guild: t, markAsDismissed: u } = e;
    return (0, i.jsx)(a.A, {
        guild: t,
        onDismissed: () => u(s.i.UNKNOWN),
        onClick: function () {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("98363").then(n.bind(n, 780086));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        message: o.intl.string(o.t["1+hiP6"]),
        cta: o.intl.string(o.t.hvVgAZ),
        trackingSource: l.kZU.HUB_LINK_NOTICE,
        type: l.n5X.HUB_LINK,
        image: d,
    });
}
