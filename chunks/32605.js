i.d(t, { default: () => d, z: () => c });
var n = i(627968);
i(64700);
var l = i(192308),
    a = i(780964),
    r = i(858897),
    s = i(831318),
    o = i(985018),
    u = i(271110);
function d(e) {
    let { onClose: t, ...i } = e,
        l = o.intl.format(o.t["JmbS+T"], {
            onClick: () => {
                (0, r.openUserSettings)(a.X.NITRO_PANEL), t();
            },
        });
    return (0, n.jsx)(s.A, {
        title: o.intl.string(o.t.N4SCJ0),
        subtitle: l,
        graphic: { src: u, type: "image" },
        onSecondaryClick: t,
        secondaryCTA: o.intl.string(o.t.f3Pet9),
        onClose: t,
        ...i,
    });
}
function c(e) {
    let { analytics: t } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 32605));
        return (i) => (0, n.jsx)(e, { analyticsSource: t, ...i });
    });
}
