n.d(e, {
    B: function () {
        return l;
    },
    D: function () {
        return i;
    }
});
var s = n(570140);
function l() {
    s.Z.dispatch({ type: 'APPLICATION_STORE_ACCEPT_STORE_TERMS' });
}
function i(t) {
    s.Z.dispatch({
        type: 'APPLICATION_STORE_ACCEPT_EULA',
        eulaId: t
    });
}
