n.d(t, { $: () => c }), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(134432),
    a = n(768581),
    o = n(981631);
let { API_ENDPOINT: r, CDN_HOST: l } = window.GLOBAL_ENV;
function c(e) {
    let { itemId: t, hash: n, containerWidth: c = 1024 } = e,
        s = new URLSearchParams({ size: (0, i.oO)(c * (0, i.x_)()).toString() }).toString(),
        _ = a.$k ? 'webp' : 'png';
    return null != l
        ? ''.concat(location.protocol, '//').concat(l, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(_, '?').concat(s)
        : ''
              .concat(location.protocol)
              .concat(r)
              .concat(o.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, _), '?')
              .concat(s);
}
