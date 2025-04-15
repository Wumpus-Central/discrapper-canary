n.d(t, { Z: () => i });
var r = n(981631);
function i(e, t) {
    let n,
        i = window.GLOBAL_ENV.CDN_HOST,
        l = window.GLOBAL_ENV.API_ENDPOINT;
    return null != i
        ? ''.concat(location.protocol, '//').concat(i, '/app-assets/').concat(e, '/store/').concat(t, '.mp4')
        : ''
              .concat(location.protocol)
              .concat(l)
              .concat(r.ANM.STORE_ASSET(e, t, 'mp4'));
}
