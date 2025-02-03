n.d(t, { $: () => E }), n(610138), n(216116), n(78328), n(815648), n(47120);
var l = n(134432),
    i = n(768581),
    a = n(981631);
let { API_ENDPOINT: r, CDN_HOST: o } = window.GLOBAL_ENV;
function E(e) {
    let { itemId: t, hash: n, containerWidth: E = 1024 } = e,
        u = new URLSearchParams({ size: (0, l.oO)(E * (0, l.x_)()).toString() }).toString(),
        _ = i.$k ? 'webp' : 'png';
    return null != o
        ? ''.concat(location.protocol, '//').concat(o, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(_, '?').concat(u)
        : ''
              .concat(location.protocol)
              .concat(r)
              .concat(a.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, _), '?')
              .concat(u);
}
