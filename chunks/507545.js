i.d(t, { default: () => u, z: () => d });
var n = i(627968);
i(64700);
var l = i(192308),
    a = i(780964),
    s = i(858897),
    o = i(831318),
    r = i(985018);
function u(e) {
    let { onClose: t, ...i } = e,
        l = r.intl.format(r.t["JmbS+T"], {
            onClick: () => {
                (0, s.openUserSettings)(a.X.NITRO_PANEL), t();
            },
        });
    return (0, n.jsx)(o.A, {
        title: r.intl.string(r.t.N4SCJ0),
        subtitle: l,
        graphic: { src: "/assets/ac8ab79ce1412299.gif", type: "image" },
        onSecondaryClick: t,
        secondaryCTA: r.intl.string(r.t.f3Pet9),
        onClose: t,
        ...i,
    });
}
function d(e) {
    let { analytics: t } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 507545));
        return (i) => (0, n.jsx)(e, { analyticsSource: t, ...i });
    });
}
