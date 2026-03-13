"use strict";
n.d(t, { UV: () => u, rZ: () => x, uC: () => m });
var a = n(627968),
    l = n(64700),
    i = n(505779),
    r = n(397927),
    s = n(59544),
    c = n(305080),
    o = n(985018),
    d = n(435740);
function u() {
    return l.useMemo(
        () => ({
            [i.V.STEAM]: { icon: r.NXQ, text: o.intl.string(o.t.FsANs4), "aria-label": o.intl.string(o.t["P+ePTG"]) },
            [i.V.ROBLOX]: { icon: r.H0M, text: o.intl.string(o.t["pJ+P+h"]), "aria-label": o.intl.string(o.t.tYxpdf) },
            [i.V.BATTLENET]: {
                icon: r.aG0,
                text: o.intl.string(o.t["A7grp+"]),
                "aria-label": o.intl.string(o.t.x9at20),
            },
            [i.V.RIOT]: { icon: r.ALT, text: o.intl.string(o.t.h6MapL), "aria-label": o.intl.string(o.t["528nvc"]) },
            [i.V.MINECRAFT]: { text: o.intl.string(o.t["HZbmO+"]), "aria-label": o.intl.string(o.t.WWTqYn) },
            [i.V.EPICGAMES]: { icon: r.r_I, text: o.intl.string(o.t.ZbBMHa), "aria-label": o.intl.string(o.t.BwX0UW) },
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
        { isTwoColumn: n } = (0, c.c)();
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
