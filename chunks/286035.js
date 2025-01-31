n.d(t, {
    Pg: () => s,
    Te: () => r,
    kb: () => a
});
var i = n(570140);
function r() {
    i.Z.wait(() => i.Z.dispatch({ type: 'DOMAIN_MIGRATION_START' }));
}
function a() {
    i.Z.dispatch({ type: 'DOMAIN_MIGRATION_FAILURE' });
}
function s() {
    window.location.reload();
}
