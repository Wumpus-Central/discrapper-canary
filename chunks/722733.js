n.d(t, {
    ZP: () => s,
    yy: () => l,
});
var r = n(403428),
    i = n(314897),
    a = n(823379),
    o = n(633289);
function s(e) {
    return (0, r.Z)(e, o.Z, l);
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
            (0, a.vE)(e);
    }
}
