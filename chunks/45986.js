r.d(n, {
    o: function () {
        return a;
    },
    u: function () {
        return o;
    }
});
var i = r(570140);
function a(e) {
    i.Z.dispatch({
        type: 'MASKED_LINK_ADD_TRUSTED_DOMAIN',
        url: e
    });
}
function o(e) {
    i.Z.dispatch({
        type: 'MASKED_LINK_ADD_TRUSTED_PROTOCOL',
        url: e
    });
}
