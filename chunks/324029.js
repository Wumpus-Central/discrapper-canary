n.d(t, { JX: () => _, se: () => d, v_: () => c, xp: () => o, yR: () => u });
var i = n(240899),
    r = n(19575),
    a = n(898335);
let s = "" === r.Ay.releaseChannel ? "stable" : r.Ay.releaseChannel,
    l = (0, a.b)({
        name: "cs2",
        channel: s,
        isEnabled: () => i.A.getConfig({ location: "gsi config install" }).enableCs2Gsi,
        readToken: () => r.Ay.readCs2GsiToken(s),
        writeConfig: (e, t) => r.Ay.writeCs2GsiConfig(e, t, s),
        deleteConfig: () => r.Ay.deleteCs2GsiConfig(s),
        debugLogPayload: (e) => r.Ay.debugLogCs2GsiPayload(e),
    });
function o(e) {
    return e === l.getGsiPath();
}
let d = l.ensureGsiConfigInstalled,
    c = l.registerGsiHandler,
    u = l.unregisterGsiHandler,
    _ = l.handleGsiRequest;
