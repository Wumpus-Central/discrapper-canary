n.d(t, { $: () => c }), n(610138), n(216116), n(78328), n(815648), n(47120);
var a = n(134432),
    r = n(768581),
    l = n(981631);
let { API_ENDPOINT: o, CDN_HOST: i } = window.GLOBAL_ENV;
function c(e) {
    let { itemId: t, hash: n, containerWidth: c = 1024 } = e,
        u = new URLSearchParams({ size: (0, a.oO)(c * (0, a.x_)()).toString() }).toString(),
        s = r.$k ? 'webp' : 'png';
    return null != i
        ? ''.concat(location.protocol, '//').concat(i, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(s, '?').concat(u)
        : ''
              .concat(location.protocol)
              .concat(o)
              .concat(l.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, s), '?')
              .concat(u);
}
