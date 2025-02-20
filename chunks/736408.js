n.d(t, { $: () => i }), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(134432),
    c = n(768581),
    l = n(981631);
let { API_ENDPOINT: a, CDN_HOST: o } = window.GLOBAL_ENV;
function i(e) {
    let { itemId: t, hash: n, containerWidth: i = 1024 } = e,
        s = new URLSearchParams({ size: (0, r.oO)(i * (0, r.x_)()).toString() }).toString(),
        u = c.$k ? 'webp' : 'png';
    return null != o
        ? ''.concat(location.protocol, '//').concat(o, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(u, '?').concat(s)
        : ''
              .concat(location.protocol)
              .concat(a)
              .concat(l.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, u), '?')
              .concat(s);
}
