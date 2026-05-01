n.d(t, { Ay: () => d, cT: () => c });
var i = n(720757),
    a = n(80703),
    r = n(17928),
    s = n(495544),
    l = n(403362),
    o = n(710195);
function d(e) {
    return (0, i.A)(e, o.A, c, _);
}
function c(e, t) {
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return s.default.getId();
        case "installation":
            return (0, a.v)(s.default.getInstallationForTracking()) ?? "";
        default:
            (0, l.xb)(e);
    }
}
function _(e, t) {
    let [n, i] = (0, r.yK)([s.default], () => [s.default.getId(), s.default.getInstallationForTracking()]);
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return n;
        case "installation":
            return (0, a.v)(i) ?? "";
        default:
            (0, l.xb)(e);
    }
}
