n.d(t, { y: () => a });
var r = n(570140),
    i = n(594190);
function a(e) {
    i.ZP.isInputServiceInitialized() !== e &&
        r.Z.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            initialized: e,
            modules: ["input-service"],
        });
}
