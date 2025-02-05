n.d(t, { Z: () => l });
var i = n(981631);
function l(e, t) {
    let n;
    let l = window.GLOBAL_ENV.CDN_HOST,
        a = window.GLOBAL_ENV.API_ENDPOINT;
    return null != l
        ? ''.concat(location.protocol, '//').concat(l, '/app-assets/').concat(e, '/store/').concat(t, '.mp4')
        : ''
              .concat(location.protocol)
              .concat(a)
              .concat(i.ANM.STORE_ASSET(e, t, 'mp4'));
}
