var i = n(80703),
    r = n(46653),
    a = n(403362);
function s() {
    return (0, i.v)(r.default.getInstallationForTracking());
}
n.d(
    t,
    {},
    {
        c: function (e, t) {
            switch (e) {
                case "guild":
                    return t.guildId;
                case "user":
                    return r.default.getId();
                case "installation":
                    return s() ?? "";
                default:
                    (0, a.xb)(e);
            }
        },
        o: s,
    },
);
