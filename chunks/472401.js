n.d(t, { $: () => l }), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(134432),
    i = n(768581),
    o = n(981631);
let { API_ENDPOINT: a, CDN_HOST: s } = window.GLOBAL_ENV;
function l(e) {
    let { itemId: t, hash: n, containerWidth: l = 1024 } = e,
        c = new URLSearchParams({ size: (0, r.oO)(l * (0, r.x_)()).toString() }).toString(),
        u = i.$k ? 'webp' : 'png';
    return null != s
        ? ''.concat(location.protocol, '//').concat(s, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(u, '?').concat(c)
        : ''
              .concat(location.protocol)
              .concat(a)
              .concat(o.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, u), '?')
              .concat(c);
}
