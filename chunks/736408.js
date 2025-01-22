n.d(e, {
    $: function () {
        return c;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(134432),
    l = n(768581),
    o = n(981631);
let { API_ENDPOINT: a, CDN_HOST: i } = window.GLOBAL_ENV;
function c(t) {
    let { itemId: e, hash: n, containerWidth: c = 1024 } = t,
        u = new URLSearchParams({ size: (0, r.oO)(c * (0, r.x_)()).toString() }).toString(),
        s = l.$k ? 'webp' : 'png';
    return null != i
        ? ''.concat(location.protocol, '//').concat(i, '/app-assets/application-directory/collection-items/').concat(e, '/').concat(n, '.').concat(s, '?').concat(u)
        : ''
              .concat(location.protocol)
              .concat(a)
              .concat(o.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, s), '?')
              .concat(u);
}
