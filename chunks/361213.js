n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(981631);
function l(e, t) {
    let n;
    let l = window.GLOBAL_ENV.CDN_HOST,
        r = window.GLOBAL_ENV.API_ENDPOINT;
    return (n =
        null != l
            ? ''.concat(location.protocol, '//').concat(l, '/app-assets/').concat(e, '/store/').concat(t, '.mp4')
            : ''
                  .concat(location.protocol)
                  .concat(r)
                  .concat(i.ANM.STORE_ASSET(e, t, 'mp4')));
}
