var i = n(507868),
    r = n(253400),
    a = n(898335),
    s = n(696016),
    l = n(171251);
let o = "" === r.Ay.releaseChannel ? "stable" : r.Ay.releaseChannel,
    d = (0, a.b)({
        name: "cs2",
        channel: o,
        isEnabled: () => i.A.hasCapability(l.w, s.pZ.GAME_EVENTS),
        readToken: () => r.Ay.readCs2GsiToken(o),
        writeConfig: (e, t) => r.Ay.writeCs2GsiConfig(e, t, o),
        deleteConfig: () => r.Ay.deleteCs2GsiConfig(o),
        debugLogPayload: (e) => r.Ay.debugLogCs2GsiPayload(e),
    }),
    c = d.ensureGsiConfigInstalled,
    u = d.registerGsiHandler,
    _ = d.unregisterGsiHandler,
    E = d.handleGsiRequest;
n.d(
    t,
    {},
    {
        JX: E,
        se: c,
        v_: u,
        xp: function (e) {
            return e === d.getGsiPath();
        },
        yR: _,
    },
);
