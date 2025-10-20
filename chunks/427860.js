n.d(t, {
    C7: () => r,
    l6: () => i,
    lp: () => a,
});
var r = (function (e) {
        return (
            (e.NativeOOP = "native_oop"),
            (e.NativeLegacy = "native_legacy"),
            (e.OOPModule = "oop_module"),
            (e.LegacyModule = "legacy_module"),
            (e.Flux = "flux"),
            (e.Renderer = "renderer"),
            e
        );
    })({}),
    i = (function (e) {
        return (e.Info = "info"), (e.Error = "error"), (e.Warning = "warn"), e;
    })({});
function a(e) {
    let t = "nativeId" in e,
        n = "pid" in e;
    return !t && !n;
}
