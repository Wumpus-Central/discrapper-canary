t.d(n, { A: () => d });
var r = t(627968),
    l = t(508770),
    s = t(738188),
    i = t(661531),
    a = t(812993),
    o = t(933297);
function c(e) {
    let { badge: n } = e;
    return n.useCustomBadge();
}
function u(e) {
    let { badge: n } = e,
        t = n.useCount();
    return t <= 0 ? null : (0, r.jsx)(a.hV, { count: t });
}
let d = function (e) {
    let { badge: n } = e;
    switch (n.badgeType) {
        case o.Xi.BETA:
            return (0, r.jsx)(l.E, { type: "beta", variant: "brand" });
        case o.Xi.COUNT:
            return (0, r.jsx)(u, { badge: n });
        case o.Xi.WARNING:
            return (0, r.jsx)(s.i, { size: "xs", color: i.A.colors.ICON_FEEDBACK_WARNING });
        case o.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(c, { badge: n });
    }
};
