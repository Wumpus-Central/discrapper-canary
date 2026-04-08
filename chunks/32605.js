i.d(t, { default: () => d, z: () => u });
var n = i(627968);
i(64700);
var a = i(397927),
    l = i(780964),
    o = i(858897),
    r = i(244975),
    s = i(985018),
    c = i(271110);
function d(e) {
    let { onClose: t, ...i } = e,
        a = s.intl.format(s.t["JmbS+T"], {
            onClick: () => {
                (0, o.openUserSettings)(l.X.NITRO_PANEL), t();
            },
        });
    return (0, n.jsx)(r.F, {
        title: s.intl.string(s.t.N4SCJ0),
        subtitle: a,
        graphic: { src: c, type: "image" },
        onSecondaryClick: t,
        secondaryCTA: s.intl.string(s.t.f3Pet9),
        onClose: t,
        ...i,
    });
}
function u(e) {
    let { analytics: t } = e;
    (0, a.mMO)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 32605));
        return (i) => (0, n.jsx)(e, { analyticsSource: t, ...i });
    });
}
