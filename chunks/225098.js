n.d(t, {
    D: () => l,
}),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(776231),
    i = n(486020),
    a = n(652215);
let { API_ENDPOINT: s, CDN_HOST: o } = window.GLOBAL_ENV;

function l(e) {
    let { itemId: t, hash: n, containerWidth: l = 1024 } = e,
        c = new URLSearchParams({
            size: (0, r.kr)(l * (0, r.mZ)()).toString(),
        }).toString(),
        u = i.QB ? "webp" : "png";
    return null != o
        ? "https://"
              .concat(o, "/app-assets/application-directory/collection-items/")
              .concat(t, "/")
              .concat(n, ".")
              .concat(u, "?")
              .concat(c)
        : ""
              .concat(location.protocol)
              .concat(s)
              .concat(a.Rsh.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, u), "?")
              .concat(c);
}
