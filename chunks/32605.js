n.d(t, { default: () => u, z: () => d });
var i = n(477900);
n(582128);
var l = n(192308),
    o = n(780964),
    a = n(766075),
    r = n(831318),
    s = n(375708),
    c = n(271110);
function u(e) {
    let { onClose: t, ...n } = e,
        l = s.intl.format(s.t["JmbS+T"], {
            onClick: () => {
                ((0, a.openUserSettings)(o.X.NITRO_PANEL), t());
            },
        });
    return (0, i.jsx)(r.A, {
        title: s.intl.string(s.t.N4SCJ0),
        subtitle: l,
        graphic: { src: c, type: "image" },
        onSecondaryClick: t,
        secondaryCTA: s.intl.string(s.t.f3Pet9),
        onClose: t,
        ...n,
    });
}
function d(e) {
    let { analytics: t } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 32605));
        return (n) => (0, i.jsx)(e, { analyticsSource: t, ...n });
    });
}
