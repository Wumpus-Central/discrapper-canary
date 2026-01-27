n.d(t, {
    Bu: () => u,
    PI: () => d,
    oo: () => c,
}),
    n(228524);
var r = n(627968);
n(64700);
var l = n(632656),
    a = n(998218),
    i = n(652176);

function s(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function c(e) {
    let t = e.item.originalItem.media;
    return (0, r.jsx)(l.m, {
        media: t,
        placeholderWidth: 350,
        placeholderHeight: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        useFullWidth: e.useFullWidth,
        mediaLayoutType: e.mediaLayoutType,
    });
}

function u(e) {
    let t = e.item.originalItem.media;
    return (0, i.LL)(
        o(s({}, e), {
            alt: e.item.originalItem.description,
            src: t.proxyUrl,
            original: t.url,
            placeholder: t.placeholder,
            placeholderVersion: t.placeholderVersion,
            contentType: t.contentType,
            originalContentType: t.originalContentType,
            sourceMetadata: {
                message: e.message,
            },
            analyticsSource: "renderImageComponentForGalleryItem",
            srcIsAnimated: e.item.srcIsAnimated,
        }),
    );
}

function d(e) {
    let t = e.item.originalItem.media,
        n = a.A.toURLSafe(t.proxyUrl);
    return null == n
        ? null
        : (n.searchParams.append("format", "webp"),
          (0, i.$o)(
              o(s({}, e), {
                  poster: n.toString(),
                  alt: e.item.originalItem.description,
                  src: t.proxyUrl,
                  placeholder: t.placeholder,
                  placeholderVersion: t.placeholderVersion,
                  sourceMetadata: {
                      message: e.message,
                  },
              }),
          ));
}
