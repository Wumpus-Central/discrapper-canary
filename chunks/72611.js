n.d(t, { $D: () => c, J9: () => o, US: () => u, Xw: () => _, eZ: () => d });
var i = n(399091),
    r = n(19575),
    a = n(898335);
let s = "" === r.Ay.releaseChannel ? "stable" : r.Ay.releaseChannel,
    l = (0, a.b)({
        name: "dota",
        channel: s,
        isEnabled: () => i.A.getConfig({ location: "gsi config install" }).enableDotaGsi,
        readToken: () => r.Ay.readDotaGsiToken(s),
        writeConfig: (e, t) => r.Ay.writeDotaGsiConfig(e, t, s),
        deleteConfig: () => r.Ay.deleteDotaGsiConfig(s),
        debugLogPayload: (e) => r.Ay.debugLogDotaGsiPayload(e),
    });
function o(e) {
    return e === l.getGsiPath();
}
let d = l.ensureGsiConfigInstalled,
    c = l.registerGsiHandler,
    u = l.unregisterGsiHandler,
    _ = l.handleGsiRequest;
