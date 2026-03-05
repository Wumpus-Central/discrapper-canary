"use strict";
n.d(t, { UV: () => u, rZ: () => x, uC: () => m });
var i = n(627968),
    l = n(64700),
    a = n(505779),
    r = n(397927),
    s = n(880405),
    c = n(305080),
    o = n(985018),
    d = n(937418);
function u() {
    return l.useMemo(
        () => ({
            [a.V.STEAM]: { icon: r.NXQ, text: o.intl.string(o.t.FsANs4), "aria-label": o.intl.string(o.t["P+ePTG"]) },
            [a.V.ROBLOX]: { icon: r.H0M, text: o.intl.string(o.t["pJ+P+h"]), "aria-label": o.intl.string(o.t.tYxpdf) },
            [a.V.BATTLENET]: {
                icon: r.aG0,
                text: o.intl.string(o.t["A7grp+"]),
                "aria-label": o.intl.string(o.t.x9at20),
            },
            [a.V.RIOT]: { icon: r.ALT, text: o.intl.string(o.t.h6MapL), "aria-label": o.intl.string(o.t["528nvc"]) },
            [a.V.MINECRAFT]: { text: o.intl.string(o.t["HZbmO+"]), "aria-label": o.intl.string(o.t.WWTqYn) },
            [a.V.EPICGAMES]: { icon: r.r_I, text: o.intl.string(o.t.ZbBMHa), "aria-label": o.intl.string(o.t.BwX0UW) },
        }),
        [],
    );
}
function m(e) {
    let { website: t } = e,
        n = u()[t.category];
    return null == n
        ? null
        : (0, i.jsx)(x, { ...n, onClick: () => window.open((0, s.L)(t.url), "_blank", "noreferrer noopener") });
}
function x(e) {
    let { ...t } = e,
        { isTwoColumn: n } = (0, c.c)();
    return (0, i.jsx)("div", {
        className: d.U,
        children: (0, i.jsx)(r.Button, {
            ...t,
            variant: n ? "overlay-secondary" : "secondary",
            fullWidth: !0,
            role: "link",
        }),
    });
}
