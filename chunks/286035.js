r.d(n, {
    Pg: function () {
        return s;
    },
    Te: function () {
        return a;
    },
    kb: function () {
        return o;
    }
});
var i = r(570140);
function a() {
    i.Z.wait(() => i.Z.dispatch({ type: 'DOMAIN_MIGRATION_START' }));
}
function o() {
    i.Z.dispatch({ type: 'DOMAIN_MIGRATION_FAILURE' });
}
function s() {
    window.location.reload();
}
