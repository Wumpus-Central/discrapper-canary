var i = n(80703),
    r = n(46653),
    a = n(403362);
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
                    return (0, i.v)(r.default.getInstallationForTracking()) ?? "";
                default:
                    (0, a.xb)(e);
            }
        },
    },
);
