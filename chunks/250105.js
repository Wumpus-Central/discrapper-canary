n.d(t, {
    Ay: () => o,
    cT: () => l,
});
var r = n(720757),
    i = n(961350),
    a = n(403362),
    s = n(217222);
function o(e) {
    return (0, r.A)(e, s.A, l);
}
function l(e, t) {
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return i.default.getId();
        case "installation":
            var n;
            return null != (n = i.default.getInstallationForTracking()) ? n : "";
        default:
            (0, a.xb)(e);
    }
}
