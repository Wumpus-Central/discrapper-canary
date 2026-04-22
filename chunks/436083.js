i.d(t, { A: () => m });
var s = i(627968),
    l = i(64700),
    a = i(192308),
    n = i(939249),
    r = i(65154),
    c = i(985018),
    o = i(853513),
    d = i(387772),
    u = i(519636);
function m(e) {
    let { guild: t, analyticsLocation: m, videoPlacement: g, sourceAnalyticsLocations: T } = e,
        x = l.useCallback(() => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await i.e("64251").then(i.bind(i, 430326));
                return (i) =>
                    (0, s.jsx)(e, {
                        ...i,
                        guildId: t.id,
                        analyticsLocation: m,
                        videoPlacement: g,
                        sourceAnalyticsLocations: T,
                    });
            });
        }, [m, t.id, T, g]);
    return (0, s.jsxs)(n.D, {
        className: d.kL,
        onClick: x,
        "aria-label": c.intl.string(o.default["103aY+"]),
        children: [
            (0, s.jsx)("img", { alt: "", className: d.xn, src: u.A }),
            (0, s.jsx)("div", { className: d.Lw }),
            (0, s.jsx)("div", {
                className: d.Rr,
                children: (0, s.jsx)(r.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
