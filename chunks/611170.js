n.d(t, {
    aB: () => f,
    rJ: () => p,
    yF: () => d,
}),
    n(953529);
var r = n(54381);
n(473749);
var i = n(295435),
    a = n(591759),
    o = n(524444);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e) {
    let t = e.item.originalItem.media;
    return (0, r.jsx)(i.S, {
        media: t,
        placeholderWidth: 350,
        placeholderHeight: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        useFullWidth: e.useFullWidth,
        mediaLayoutType: e.mediaLayoutType,
    });
}
function f(e) {
    let t = e.item.originalItem.media;
    return (0, o.Yi)(
        u(l({}, e), {
            alt: e.item.originalItem.description,
            src: t.proxyUrl,
            original: t.url,
            placeholder: t.placeholder,
            placeholderVersion: t.placeholderVersion,
            contentType: t.contentType,
            originalContentType: t.originalContentType,
            sourceMetadata: { message: e.message },
            analyticsSource: "renderImageComponentForGalleryItem",
            srcIsAnimated: e.item.srcIsAnimated,
        }),
    );
}
function p(e) {
    let t = e.item.originalItem.media,
        n = a.Z.toURLSafe(t.proxyUrl);
    return null == n
        ? null
        : (n.searchParams.append("format", "webp"),
          (0, o.lV)(
              u(l({}, e), {
                  poster: n.toString(),
                  alt: e.item.originalItem.description,
                  src: t.proxyUrl,
                  placeholder: t.placeholder,
                  placeholderVersion: t.placeholderVersion,
                  sourceMetadata: { message: e.message },
              }),
          ));
}
