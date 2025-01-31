n.d(t, { $: () => c }), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(134432),
    o = n(768581),
    a = n(981631);
let { API_ENDPOINT: l, CDN_HOST: r } = window.GLOBAL_ENV;
function c(e) {
    let { itemId: t, hash: n, containerWidth: c = 1024 } = e,
        _ = new URLSearchParams({ size: (0, i.oO)(c * (0, i.x_)()).toString() }).toString(),
        d = o.$k ? 'webp' : 'png';
    return null != r
        ? ''.concat(location.protocol, '//').concat(r, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(d, '?').concat(_)
        : ''
              .concat(location.protocol)
              .concat(l)
              .concat(a.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, d), '?')
              .concat(_);
}
