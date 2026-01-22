n.d(t, {
    Py: () => a,
    Yw: () => s,
    _r: () => i,
});
var r = n(73153);
function i() {
    r.h.wait(() => r.h.dispatch({ type: "DOMAIN_MIGRATION_START" }));
}
function a() {
    r.h.dispatch({ type: "DOMAIN_MIGRATION_FAILURE" });
}
function s() {
    window.location.reload();
}
