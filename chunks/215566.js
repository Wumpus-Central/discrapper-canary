"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(508770),
    a = n(777666),
    s = n(933297);
function l(e) {
    let { badge: t } = e;
    return t.useCustomBadge();
}
function o(e) {
    let { badge: t } = e,
        n = t.useCount();
    return n <= 0 ? null : (0, r.jsx)(a.hV, { count: n });
}
let c = function (e) {
    let { badge: t } = e;
    switch (t.badgeType) {
        case s.Xi.BETA:
            return (0, r.jsx)(i.E, { type: "beta", variant: "brand" });
        case s.Xi.COUNT:
            return (0, r.jsx)(o, { badge: t });
        case s.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(l, { badge: t });
    }
};
