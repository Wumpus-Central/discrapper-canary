n.d(t, {
    Pg: () => o,
    Te: () => i,
    kb: () => a
});
var r = n(570140);
function i() {
    r.Z.wait(() => r.Z.dispatch({ type: 'DOMAIN_MIGRATION_START' }));
}
function a() {
    r.Z.dispatch({ type: 'DOMAIN_MIGRATION_FAILURE' });
}
function o() {
    window.location.reload();
}
