n.d(t, {
    $: function () {
        return c;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(134432),
    r = n(768581),
    a = n(981631);
let { API_ENDPOINT: o, CDN_HOST: s } = window.GLOBAL_ENV;
function c(e) {
    let { itemId: t, hash: n, containerWidth: c = 1024 } = e,
        l = new URLSearchParams({ size: (0, i.oO)(c * (0, i.x_)()).toString() }).toString(),
        u = r.$k ? 'webp' : 'png';
    return null != s
        ? ''.concat(location.protocol, '//').concat(s, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(u, '?').concat(l)
        : ''
              .concat(location.protocol)
              .concat(o)
              .concat(a.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, u), '?')
              .concat(l);
}
