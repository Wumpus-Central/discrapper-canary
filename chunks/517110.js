n.d(t, { a: () => a });
var r = n(570140),
    i = n(594190);
function a(e, t) {
    i.ZP.getSystemServiceStatus(e).state !== t.state &&
        r.Z.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            status: t,
            modules: [e],
        });
}
