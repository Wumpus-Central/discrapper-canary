i.d(t, { UV: () => u, rZ: () => x, uC: () => m });
var n = i(627968),
    l = i(64700),
    a = i(505779),
    s = i(397927),
    r = i(880405),
    o = i(305080),
    c = i(985018),
    d = i(937418);
function u() {
    return l.useMemo(
        () => ({
            [a.V.STEAM]: { icon: s.NXQ, text: c.intl.string(c.t.FsANs4), "aria-label": c.intl.string(c.t["P+ePTG"]) },
            [a.V.ROBLOX]: { icon: s.H0M, text: c.intl.string(c.t["pJ+P+h"]), "aria-label": c.intl.string(c.t.tYxpdf) },
            [a.V.BATTLENET]: {
                icon: s.aG0,
                text: c.intl.string(c.t["A7grp+"]),
                "aria-label": c.intl.string(c.t.x9at20),
            },
            [a.V.RIOT]: { icon: s.ALT, text: c.intl.string(c.t.h6MapL), "aria-label": c.intl.string(c.t["528nvc"]) },
            [a.V.MINECRAFT]: { text: c.intl.string(c.t["HZbmO+"]), "aria-label": c.intl.string(c.t.WWTqYn) },
            [a.V.EPICGAMES]: { icon: s.r_I, text: c.intl.string(c.t.ZbBMHa), "aria-label": c.intl.string(c.t.BwX0UW) },
        }),
        [],
    );
}
function m(e) {
    let { website: t } = e,
        i = u()[t.category];
    return null == i
        ? null
        : (0, n.jsx)(x, { ...i, onClick: () => window.open((0, r.L)(t.url), "_blank", "noreferrer noopener") });
}
function x(e) {
    let { ...t } = e,
        { isTwoColumn: i } = (0, o.c)();
    return (0, n.jsx)("div", {
        className: d.U,
        children: (0, n.jsx)(s.Button, {
            ...t,
            variant: i ? "overlay-secondary" : "secondary",
            fullWidth: !0,
            role: "link",
        }),
    });
}
