l.d(n, {
    aB: () => o,
    rJ: () => u,
    yF: () => s
});
var t = l(200651);
l(192379);
var i = l(295435),
    r = l(591759),
    a = l(524444);
function s(e) {
    let n = e.item.originalItem.media;
    return (0, t.jsx)(i.S, {
        media: n,
        placeholderWidth: 350,
        placeholderHeight: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        useFullWidth: e.useFullWidth,
        mediaLayoutType: e.mediaLayoutType
    });
}
function o(e) {
    let n = e.item.originalItem.media;
    return (0, a.Yi)({
        ...e,
        alt: e.item.originalItem.description,
        src: n.proxyUrl,
        original: n.url,
        placeholder: n.placeholder,
        placeholderVersion: n.placeholderVersion,
        sourceMetadata: { message: e.message },
        analyticsSource: 'renderImageComponentForGalleryItem'
    });
}
function u(e) {
    let n = e.item.originalItem.media,
        l = r.Z.toURLSafe(n.proxyUrl);
    return null == l
        ? null
        : (l.searchParams.append('format', 'webp'),
          (0, a.lV)({
              ...e,
              poster: l.toString(),
              alt: e.item.originalItem.description,
              src: n.proxyUrl,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholderVersion,
              sourceMetadata: { message: e.message }
          }));
}
