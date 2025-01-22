n.d(t, {
    $: function () {
        return a;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(134432),
    o = n(768581),
    i = n(981631);
let { API_ENDPOINT: l, CDN_HOST: c } = window.GLOBAL_ENV;
function a(e) {
    let { itemId: t, hash: n, containerWidth: a = 1024 } = e,
        u = new URLSearchParams({ size: (0, r.oO)(a * (0, r.x_)()).toString() }).toString(),
        s = o.$k ? 'webp' : 'png';
    return null != c
        ? ''.concat(location.protocol, '//').concat(c, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(s, '?').concat(u)
        : ''
              .concat(location.protocol)
              .concat(l)
              .concat(i.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, s), '?')
              .concat(u);
}
