n.d(t, { Z: () => r });
var i = n(981631);
function r(e, t) {
    let n,
        r = window.GLOBAL_ENV.CDN_HOST,
        o = window.GLOBAL_ENV.API_ENDPOINT;
    return null != r
        ? ''.concat(location.protocol, '//').concat(r, '/app-assets/').concat(e, '/store/').concat(t, '.mp4')
        : ''
              .concat(location.protocol)
              .concat(o)
              .concat(i.ANM.STORE_ASSET(e, t, 'mp4'));
}
