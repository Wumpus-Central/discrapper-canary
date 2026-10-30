n.d(t, { $D: () => _, J9: () => c, US: () => E, Xw: () => A, eZ: () => u });
var i = n(507868),
    r = n(19575),
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
    });
function c(e) {
    return e === d.getGsiPath();
}
let u = d.ensureGsiConfigInstalled,
    _ = d.registerGsiHandler,
    E = d.unregisterGsiHandler,
    A = d.handleGsiRequest;
