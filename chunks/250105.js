"use strict";
n.d(t, { Ay: () => l, cT: () => u });
var r = n(720757),
    i = n(311907),
    s = n(961350),
    a = n(403362),
    o = n(217222);
function l(e) {
    return (0, r.A)(e, o.A, u, c);
}
function u(e, t) {
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return s.default.getId();
        case "installation":
            return s.default.getInstallationForTracking()?.split(".")[0] ?? "";
        default:
            (0, a.xb)(e);
    }
}
function c(e, t) {
    let [n, r] = (0, i.yK)([s.default], () => [s.default.getId(), s.default.getInstallationForTracking()]);
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return n;
        case "installation":
            return r?.split(".")[0] ?? "";
        default:
            (0, a.xb)(e);
    }
}
