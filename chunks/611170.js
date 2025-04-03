r.d(t, {
    aB: () => u,
    rJ: () => p,
    yF: () => s
}),
    r(266796);
var n = r(200651);
r(192379);
var l = r(295435),
    i = r(591759),
    o = r(524444);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function s(e) {
    let t = e.item.originalItem.media;
    return (0, n.jsx)(l.S, {
        media: t,
        placeholderWidth: 350,
        placeholderHeight: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        useFullWidth: e.useFullWidth,
        mediaLayoutType: e.mediaLayoutType
    });
}
function u(e) {
    let t = e.item.originalItem.media;
    return (0, o.Yi)(
        c(a({}, e), {
            alt: e.item.originalItem.description,
            src: t.proxyUrl,
            original: t.url,
            placeholder: t.placeholder,
            placeholderVersion: t.placeholderVersion,
            sourceMetadata: { message: e.message },
            analyticsSource: 'renderImageComponentForGalleryItem'
        })
    );
}
function p(e) {
    let t = e.item.originalItem.media,
        r = i.Z.toURLSafe(t.proxyUrl);
    return null == r
        ? null
        : (r.searchParams.append('format', 'webp'),
          (0, o.lV)(
              c(a({}, e), {
                  poster: r.toString(),
                  alt: e.item.originalItem.description,
                  src: t.proxyUrl,
                  placeholder: t.placeholder,
                  placeholderVersion: t.placeholderVersion,
                  sourceMetadata: { message: e.message }
              })
          ));
}
