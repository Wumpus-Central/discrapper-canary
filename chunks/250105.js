"use strict";
n.d(t, { Ay: () => u, cT: () => c });
var r = n(720757),
    i = n(80703),
    s = n(311907),
    a = n(961350),
    o = n(403362),
    l = n(217222);
function u(e) {
    return (0, r.A)(e, l.A, c, d);
}
function c(e, t) {
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return a.default.getId();
        case "installation":
            return (0, i.v)(a.default.getInstallationForTracking()) ?? "";
        default:
            (0, o.xb)(e);
    }
}
function d(e, t) {
    let [n, r] = (0, s.yK)([a.default], () => [a.default.getId(), a.default.getInstallationForTracking()]);
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return n;
        case "installation":
            return (0, i.v)(r) ?? "";
        default:
            (0, o.xb)(e);
    }
}
