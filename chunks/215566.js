t.d(n, { A: () => d });
var l = t(477900),
    r = t(508770),
    i = t(738188),
    s = t(661531),
    a = t(812993),
    o = t(107384);
function c(e) {
    let { badge: n } = e;
    return n.customBadge;
}
function u(e) {
    let { badge: n } = e;
    return n.count <= 0 ? null : (0, l.jsx)(a.hV, { count: n.count });
}
let d = function (e) {
    let { badge: n } = e;
    switch (n.badgeType) {
        case o.Xi.BETA:
            return (0, l.jsx)(r.E, { type: "beta", variant: "brand" });
        case o.Xi.COUNT:
            return (0, l.jsx)(u, { badge: n });
        case o.Xi.WARNING:
            return (0, l.jsx)(i.WarningIcon, { size: "xs", color: s.A.colors.ICON_FEEDBACK_WARNING });
        case o.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, l.jsx)(c, { badge: n });
    }
};
