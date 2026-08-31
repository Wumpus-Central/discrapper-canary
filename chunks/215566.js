t.d(n, { A: () => d });
var r = t(477900),
    l = t(508770),
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
    return n.count <= 0 ? null : (0, r.jsx)(a.hV, { count: n.count });
}
let d = function (e) {
    let { badge: n } = e;
    switch (n.badgeType) {
        case o.Xi.BETA:
            return (0, r.jsx)(l.E, { type: "beta", variant: "brand" });
        case o.Xi.COUNT:
            return (0, r.jsx)(u, { badge: n });
        case o.Xi.WARNING:
            return (0, r.jsx)(i.WarningIcon, { size: "xs", color: s.A.colors.ICON_FEEDBACK_WARNING });
        case o.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(c, { badge: n });
    }
};
