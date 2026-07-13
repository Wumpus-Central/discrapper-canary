n.d(t, { default: () => c, z: () => d });
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(780964),
    r = n(766075),
    o = n(831318),
    s = n(375708),
    u = n(271110);
function c(e) {
    let { onClose: t, ...n } = e,
        l = s.intl.format(s.t["JmbS+T"], {
            onClick: () => {
                (0, r.openUserSettings)(a.X.NITRO_PANEL), t();
            },
        });
    return (0, i.jsx)(o.A, {
        title: s.intl.string(s.t.N4SCJ0),
        subtitle: l,
        graphic: { src: u, type: "image" },
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
