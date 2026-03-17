n.d(t, { UV: () => u, rZ: () => x, uC: () => m });
var a = n(627968),
    l = n(64700),
    i = n(505779),
    r = n(397927),
    s = n(59544),
    o = n(305080),
    c = n(985018),
    d = n(937418);
function u() {
    return l.useMemo(
        () => ({
            [i.V.STEAM]: { icon: r.NXQ, text: c.intl.string(c.t.FsANs4), "aria-label": c.intl.string(c.t["P+ePTG"]) },
            [i.V.ROBLOX]: { icon: r.H0M, text: c.intl.string(c.t["pJ+P+h"]), "aria-label": c.intl.string(c.t.tYxpdf) },
            [i.V.BATTLENET]: {
                icon: r.aG0,
                text: c.intl.string(c.t["A7grp+"]),
                "aria-label": c.intl.string(c.t.x9at20),
            },
            [i.V.RIOT]: { icon: r.ALT, text: c.intl.string(c.t.h6MapL), "aria-label": c.intl.string(c.t["528nvc"]) },
            [i.V.MINECRAFT]: { text: c.intl.string(c.t["HZbmO+"]), "aria-label": c.intl.string(c.t.WWTqYn) },
            [i.V.EPICGAMES]: { icon: r.r_I, text: c.intl.string(c.t.ZbBMHa), "aria-label": c.intl.string(c.t.BwX0UW) },
        }),
        [],
    );
}
function m(e) {
    let { website: t } = e,
        n = (0, s.A)(t.url),
        l = u()[t.category];
    return null == l || null == n
        ? null
        : (0, a.jsx)(x, { ...l, onClick: () => window.open(n, "_blank", "noreferrer noopener") });
}
function x(e) {
    let { ...t } = e,
        { isTwoColumn: n } = (0, o.c)();
    return (0, a.jsx)("div", {
        className: d.U,
        children: (0, a.jsx)(r.Button, {
            ...t,
            variant: n ? "overlay-secondary" : "secondary",
            fullWidth: !0,
            role: "link",
        }),
    });
}
