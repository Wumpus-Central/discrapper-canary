"use strict";
n.d(t, { Ay: () => l, cT: () => u });
var r = n(720757),
    i = n(311907),
    a = n(961350),
    s = n(403362),
    o = n(217222);
function l(e) {
    return (0, r.A)(e, o.A, u, c);
}
function u(e, t) {
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return a.default.getId();
        case "installation":
            return a.default.getInstallationForTracking() ?? "";
        default:
            (0, s.xb)(e);
    }
}
function c(e, t) {
    let [n, r] = (0, i.yK)([a.default], () => [a.default.getId(), a.default.getInstallationForTracking()]);
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return n;
        case "installation":
            return r ?? "";
        default:
            (0, s.xb)(e);
    }
}
