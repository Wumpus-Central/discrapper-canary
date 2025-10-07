n.d(t, { z: () => a });
var r = n(570140),
    i = n(594190);
function a(e) {
    i.ZP.getInputServiceStatus().state !== e.state &&
        r.Z.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            inputServiceStatus: e,
            modules: ["input-service"],
        });
}
