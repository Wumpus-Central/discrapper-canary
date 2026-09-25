t.d(n, { A: () => d });
var l = t(477900),
    r = t(661531),
    i = t(812993),
    s = t(508770),
    a = t(738188),
    o = t(107384);
function c(e) {
    let { badge: n } = e;
    return n.customBadge;
}
function u(e) {
    let { badge: n } = e;
    return n.count <= 0 ? null : (0, l.jsx)(i.hV, { count: n.count });
}
let d = function (e) {
    let { badge: n } = e;
    switch (n.badgeType) {
        case o.Xi.BETA:
            return (0, l.jsx)(s.E, { type: "beta", variant: "brand" });
        case o.Xi.COUNT:
            return (0, l.jsx)(u, { badge: n });
        case o.Xi.WARNING:
            return (0, l.jsx)(a.WarningIcon, { size: "xs", color: r.A.colors.ICON_FEEDBACK_WARNING });
        case o.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, l.jsx)(c, { badge: n });
    }
};
