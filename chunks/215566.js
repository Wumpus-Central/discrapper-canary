t.d(n, { A: () => d });
var r = t(477900),
    l = t(508770),
    i = t(738188),
    s = t(661531),
    a = t(812993),
    c = t(107384);
function o(e) {
    let { badge: n } = e;
    return n.customBadge;
}
function u(e) {
    let { badge: n } = e;
    return n.count <= 0 ? null : (0, r.jsx)(a.hV, { count: n.count });
}
let d = function (e) {
    let { badge: n } = e;
    switch (n.badgeType) {
        case c.Xi.BETA:
            return (0, r.jsx)(l.E, { type: "beta", variant: "brand" });
        case c.Xi.COUNT:
            return (0, r.jsx)(u, { badge: n });
        case c.Xi.WARNING:
            return (0, r.jsx)(i.WarningIcon, { size: "xs", color: s.A.colors.ICON_FEEDBACK_WARNING });
        case c.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(o, { badge: n });
    }
};
