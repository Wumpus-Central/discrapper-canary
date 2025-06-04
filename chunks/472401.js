n.d(t, { $: () => l }), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(134432),
    i = n(768581),
    a = n(981631);
let { API_ENDPOINT: o, CDN_HOST: s } = window.GLOBAL_ENV;
function l(e) {
    let { itemId: t, hash: n, containerWidth: l = 1024 } = e,
        c = new URLSearchParams({ size: (0, r.oO)(l * (0, r.x_)()).toString() }).toString(),
        u = i.$k ? 'webp' : 'png';
    return null != s
        ? ''.concat(location.protocol, '//').concat(s, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(u, '?').concat(c)
        : ''
              .concat(location.protocol)
              .concat(o)
              .concat(a.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, u), '?')
              .concat(c);
}
