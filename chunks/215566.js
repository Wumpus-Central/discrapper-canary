var r = t(477900),
    l = t(646514),
    i = t(812993),
    s = t(805251),
    a = t(403581),
    o = t(738188),
    c = t(374193);
function u(e) {
    let { badge: n } = e;
    return n.customBadge;
}
function d(e) {
    let { badge: n } = e;
    return n.count <= 0 ? null : (0, r.jsx)(i.hV, { count: n.count });
}
t.d(
    n,
    {},
    {
        A: function (e) {
            let { badge: n } = e;
            switch (n.badgeType) {
                case c.Xi.BETA:
                    return (0, r.jsx)(s.E, { type: "beta", variant: "primary" });
                case c.Xi.EARLY_ACCESS:
                    return (0, r.jsx)(s.E, { type: "early_access", variant: "expressive", icon: a.NitroWheelIcon });
                case c.Xi.COUNT:
                    return (0, r.jsx)(d, { badge: n });
                case c.Xi.WARNING:
                    return (0, r.jsx)(o.WarningIcon, { size: "xs", color: l.A.colors.ICON_FEEDBACK_WARNING });
                case c.Xi.STRONGLY_DISCOURAGED_CUSTOM:
                    return (0, r.jsx)(u, { badge: n });
            }
        },
    },
);
