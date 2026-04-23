"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(192308),
    a = n(939249),
    o = n(65154),
    l = n(985018),
    u = n(853513),
    c = n(387772),
    d = n(519636);
function _(e) {
    let { guild: t, analyticsLocation: _, videoPlacement: f, sourceAnalyticsLocations: p } = e,
        h = i.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e("64251").then(n.bind(n, 430326));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        guildId: t.id,
                        analyticsLocation: _,
                        videoPlacement: f,
                        sourceAnalyticsLocations: p,
                    });
            });
        }, [_, t.id, p, f]);
    return (0, r.jsxs)(a.D, {
        className: c.kL,
        onClick: h,
        "aria-label": l.intl.string(u.default["103aY+"]),
        children: [
            (0, r.jsx)("img", { alt: "", className: c.xn, src: d.A }),
            (0, r.jsx)("div", { className: c.Lw }),
            (0, r.jsx)("div", {
                className: c.Rr,
                children: (0, r.jsx)(o.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
