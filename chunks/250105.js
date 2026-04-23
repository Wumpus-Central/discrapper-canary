n.d(t, { Ay: () => o, cT: () => E });
var i = n(720757),
    r = n(80703),
    a = n(17928),
    s = n(495544),
    _ = n(403362),
    l = n(710195);
function o(e) {
    return (0, i.A)(e, l.A, E, d);
}
function E(e, t) {
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return s.default.getId();
        case "installation":
            return (0, r.v)(s.default.getInstallationForTracking()) ?? "";
        default:
            (0, _.xb)(e);
    }
}
function d(e, t) {
    let [n, i] = (0, a.yK)([s.default], () => [s.default.getId(), s.default.getInstallationForTracking()]);
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return n;
        case "installation":
            return (0, r.v)(i) ?? "";
        default:
            (0, _.xb)(e);
    }
}
