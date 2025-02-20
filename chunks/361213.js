t.d(n, { Z: () => r });
var o = t(981631);
function r(e, n) {
    let t;
    let r = window.GLOBAL_ENV.CDN_HOST,
        c = window.GLOBAL_ENV.API_ENDPOINT;
    return null != r
        ? ''.concat(location.protocol, '//').concat(r, '/app-assets/').concat(e, '/store/').concat(n, '.mp4')
        : ''
              .concat(location.protocol)
              .concat(c)
              .concat(o.ANM.STORE_ASSET(e, n, 'mp4'));
}
