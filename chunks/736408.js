n.d(t, { $: () => r }), n(610138), n(216116), n(78328), n(815648), n(47120);
var l = n(134432),
    a = n(768581),
    c = n(981631);
let { API_ENDPOINT: o, CDN_HOST: i } = window.GLOBAL_ENV;
function r(e) {
    let { itemId: t, hash: n, containerWidth: r = 1024 } = e,
        s = new URLSearchParams({ size: (0, l.oO)(r * (0, l.x_)()).toString() }).toString(),
        u = a.$k ? 'webp' : 'png';
    return null != i
        ? ''.concat(location.protocol, '//').concat(i, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(u, '?').concat(s)
        : ''
              .concat(location.protocol)
              .concat(o)
              .concat(c.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, u), '?')
              .concat(s);
}
