var i = n(507868),
    r = n(253400),
    a = n(898335),
    s = n(696016),
    l = n(826685);
let o = "" === r.Ay.releaseChannel ? "stable" : r.Ay.releaseChannel,
    d = (0, a.b)({
        name: "dota",
        channel: o,
        isEnabled: () => i.A.hasCapability(l.b, s.pZ.GAME_EVENTS),
        readToken: () => r.Ay.readDotaGsiToken(o),
        writeConfig: (e, t) => r.Ay.writeDotaGsiConfig(e, t, o),
        deleteConfig: () => r.Ay.deleteDotaGsiConfig(o),
        debugLogPayload: (e) => r.Ay.debugLogDotaGsiPayload(e),
    }),
    c = d.ensureGsiConfigInstalled,
    u = d.registerGsiHandler,
    _ = d.unregisterGsiHandler,
    E = d.handleGsiRequest;
n.d(
    t,
    {},
    {
        $D: u,
        J9: function (e) {
            return e === d.getGsiPath();
        },
        US: _,
        Xw: E,
        eZ: c,
    },
);
