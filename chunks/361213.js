t.d(e, { Z: () => a });
var o = t(981631);
function a(n, e) {
    let t;
    let a = window.GLOBAL_ENV.CDN_HOST,
        r = window.GLOBAL_ENV.API_ENDPOINT;
    return null != a
        ? ''.concat(location.protocol, '//').concat(a, '/app-assets/').concat(n, '/store/').concat(e, '.mp4')
        : ''
              .concat(location.protocol)
              .concat(r)
              .concat(o.ANM.STORE_ASSET(n, e, 'mp4'));
}
